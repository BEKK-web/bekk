#!/usr/bin/env node
// Chequeo determinístico de lo que un crawler recibe: HTML crudo, sin ejecutar JS.
// No predice si Google va a indexar (eso solo se observa en Search Console);
// verifica que el sitio cumpla el contrato que la indexación necesita.
//
//   node scripts/seo-check.mjs [baseUrl]      (default http://localhost:3000)

const BASE = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '');
const CANON_HOST = 'https://www.bekk.com.ar';

let failed = 0;
const check = (ok, label, detail = '') => {
    if (!ok) failed++;
    console.log(`  ${ok ? '\x1b[32m✓\x1b[0m' : '\x1b[31m✗\x1b[0m'} ${label}${detail ? `  \x1b[2m${detail}\x1b[0m` : ''}`);
};

const get = async (path) => {
    const res = await fetch(BASE + path, { redirect: 'manual' });
    return { status: res.status, location: res.headers.get('location'), body: await res.text() };
};

const tag = (html, re) => (html.match(re) || [])[1]?.trim();
// El texto que un crawler cuenta: sin script/style/svg ni marcado.
const words = (html) => html
    .replace(/<(script|style|svg|noscript)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/gi, ' ')
    .split(/\s+/).filter(w => w.length > 1).length;

async function page(path, { minWords, schemas = [] }) {
    console.log(`\n\x1b[1m${path || '/'}\x1b[0m`);
    const { status, body } = await get(path || '/');
    check(status === 200, `responde 200`, `HTTP ${status}`);
    if (status !== 200) return;

    const title = tag(body, /<title>([^<]*)<\/title>/i);
    const desc  = tag(body, /<meta name="description" content="([^"]*)"/i);
    const canon = tag(body, /<link rel="canonical" href="([^"]*)"/i);
    const h1s   = body.match(/<h1[\s>]/gi) || [];

    check(!!title && title.length <= 60, 'title presente y <= 60 chars', `${title?.length}: ${title}`);
    check(!!desc && desc.length >= 70 && desc.length <= 165, 'description entre 70 y 165', `${desc?.length} chars`);
    check(canon?.startsWith(CANON_HOST), 'canonical absoluta al host correcto', canon);
    check(h1s.length === 1, 'exactamente un <h1>', `encontrados: ${h1s.length}`);
    check(!/<meta name="robots"[^>]*noindex/i.test(body), 'sin noindex');

    const w = words(body);
    check(w >= minWords, `contenido indexable >= ${minWords} palabras`, `${w} palabras`);

    // JSON-LD: que parsee y que estén los tipos esperados.
    const blocks = [...body.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
    const types = new Set();
    let parseOk = blocks.length > 0;
    for (const [, raw] of blocks) {
        try {
            const walk = (n) => {
                if (Array.isArray(n)) return n.forEach(walk);
                if (n && typeof n === 'object') {
                    if (n['@type']) [].concat(n['@type']).forEach(t => types.add(t));
                    Object.values(n).forEach(walk);
                }
            };
            walk(JSON.parse(raw));
        } catch { parseOk = false; }
    }
    check(parseOk, 'JSON-LD parsea', `${blocks.length} bloque(s)`);
    for (const s of schemas) check(types.has(s), `schema ${s}`);
}

console.log(`\x1b[1mChequeo de indexabilidad\x1b[0m  ${BASE}`);

await page('/', { minWords: 300, schemas: ['HVACBusiness', 'FAQPage'] });
await page('/productos', { minWords: 150, schemas: ['ItemList', 'Product'] });
for (const s of ['climatizacion-residencial', 'climatizacion-corporativa', 'sistemas-vrv'])
    await page(`/soluciones/${s}`, { minWords: 300, schemas: ['Service', 'BreadcrumbList'] });

console.log('\n\x1b[1mrobots / sitemap\x1b[0m');
const robots = await get('/robots.txt');
check(robots.status === 200, 'robots.txt responde 200');
check(/Sitemap:\s*https?:\/\//i.test(robots.body), 'robots.txt declara el sitemap');
check(!/^Disallow:\s*\/\s*$/im.test(robots.body), 'robots.txt no bloquea el sitio entero');

const sm = await get('/sitemap.xml');
check(sm.status === 200, 'sitemap.xml responde 200');
const urls = [...sm.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
check(urls.length > 0, 'sitemap tiene URLs', `${urls.length}`);
check(urls.every(u => u.startsWith(CANON_HOST)), 'todas absolutas al host canónico');

// Toda URL del sitemap tiene que responder 200 y apuntarse a sí misma.
for (const u of urls) {
    const p = new URL(u).pathname;
    const r = await get(p);
    const c = tag(r.body, /<link rel="canonical" href="([^"]*)"/i);
    check(r.status === 200 && c?.replace(/\/$/, '') === u.replace(/\/$/, ''),
        `sitemap: ${p}`, `HTTP ${r.status}, canonical ${c}`);
}

console.log('\n\x1b[1mredirecciones de URLs viejas\x1b[0m');
for (const p of ['/nosotros', '/contacto', '/catalogo']) {
    const r = await get(p);
    check(r.status === 308, `${p} -> 308 permanente`, `HTTP ${r.status} -> ${r.location}`);
}

const llms = await get('/llms.txt');
check(llms.status === 200 && llms.body.includes('# Bekk'), 'llms.txt responde y tiene encabezado');

console.log(failed === 0
    ? '\n\x1b[32m✓ Todo en orden\x1b[0m\n'
    : `\n\x1b[31m✗ ${failed} chequeo(s) fallando\x1b[0m\n`);
process.exit(failed === 0 ? 0 : 1);
