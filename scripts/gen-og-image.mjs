// Generador de la imagen OG del sitio. No corre en build ni en request: se
// ejecuta una vez a mano y el PNG resultante se commitea a public/. Usa
// next/og (el mismo motor que Vercel OG) para maquetar con flexbox y tipografía
// real en vez de texto rasterizado a mano con ImageMagick.
//
// Para regenerarla:
//   1. Bajar los pesos de Inter que se usan acá (no se versionan las fuentes,
//      se bajan de nuevo cada vez):
//        curl -o /tmp/og-fonts/Inter-400.ttf "$(curl -s 'https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap' -A Mozilla/5.0 | grep -oP '(?<=url\()[^)]+(?=\).*format)')"
//      (repetir para 600, 700 y 800, cambiando wght@ y el nombre de archivo)
//   2. Correr desde la raíz del repo: node scripts/gen-og-image.mjs
//      Escribe directo en public/og-image.png.
import { readFileSync, writeFileSync } from 'node:fs';
import { ImageResponse } from 'next/og.js';

const REPO = new URL('..', import.meta.url).pathname;
const INTER_DIR = '/tmp/og-fonts';

const logoB64 = readFileSync(`${REPO}public/bekk.png`).toString('base64');
const logoSrc = `data:image/png;base64,${logoB64}`;

// Frío y calor, partidos en diagonal por el mismo eje que separa el fondo
// navy del claro: copo de nieve arriba-izquierda, sol abajo-derecha, ambos
// centrados en el mismo punto — un solo ícono híbrido, no dos íconos sueltos.
// A esta escala (se ve tan chico como 300px en una vista previa de link) el
// detalle fino no sobrevive: una primera versión con puntas de copo y rayos
// finos se leía como un asterisco borroso. Formas gruesas y sin adorno.
const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round">
  <line x1="8.99" y1="91.01" x2="91.01" y2="8.99" stroke-width="2.2" opacity="0.35" />
  <g stroke-width="7.5">
    <line x1="41" y1="50" x2="8" y2="50" />
    <line x1="45.5" y1="42.21" x2="29" y2="13.63" />
    <line x1="54.5" y1="42.21" x2="71" y2="13.63" />
  </g>
  <g stroke-width="7.5">
    <circle cx="50" cy="50" r="9" fill="#FFFFFF" stroke="none" />
    <line x1="70" y1="50" x2="92" y2="50" />
    <line x1="64.14" y1="64.14" x2="79.7" y2="79.7" />
    <line x1="50" y1="70" x2="50" y2="92" />
  </g>
</svg>`.trim();
const iconSrc = `data:image/svg+xml;base64,${Buffer.from(iconSvg).toString('base64')}`;

const h = (type, props = {}, ...children) => ({
    type,
    props: { ...props, children: children.length === 1 ? children[0] : children },
});

const NAVY = '#1F3A5C';
const GREEN = '#15753A';
const WARM = '#FAF8F5';
const TEXT_SECONDARY = '#6B6560';
const TEXT_MUTED = '#948C82';

const tree = h('div', {
    style: {
        width: '1200px',
        height: '630px',
        display: 'flex',
        position: 'relative',
        fontFamily: 'Inter',
        // El corte diagonal repite el de HeroSection.js (la casa/oficina partida
        // al medio): es la firma visual del sitio, así la OG se reconoce como
        // parte del mismo diseño en vez de ser una placa de texto genérica.
        background: `linear-gradient(101deg, ${WARM} 0%, ${WARM} 61.6%, ${NAVY} 62.2%, ${NAVY} 100%)`,
    },
},
    // Panel izquierdo — logo, headline, tagline, ubicación.
    h('div', {
        style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '700px',
            height: '100%',
            padding: '64px 0 56px 64px',
        },
    },
        h('img', { src: logoSrc, width: 214, height: 60 }),
        h('div', { style: { display: 'flex', flexDirection: 'column' } },
            h('div', {
                style: {
                    fontSize: 66,
                    fontWeight: 800,
                    color: NAVY,
                    lineHeight: 1.08,
                    letterSpacing: '-1.5px',
                    maxWidth: 600,
                },
            }, 'Climatización de confianza'),
            h('div', {
                style: {
                    marginTop: 22,
                    fontSize: 29,
                    fontWeight: 500,
                    color: TEXT_SECONDARY,
                    lineHeight: 1.35,
                    maxWidth: 560,
                },
            }, 'Climatización central para hogares y empresas, con las marcas líderes del mercado.'),
            h('div', {
                style: { display: 'flex', marginTop: 30, width: 60, height: 5, background: GREEN, borderRadius: 3 },
            }),
        ),
        h('div', {
            style: { display: 'flex', fontSize: 22, fontWeight: 600, color: TEXT_MUTED },
        }, 'Buenos Aires, Argentina  ·  bekk.com.ar'),
    ),
    // Panel derecho — placa navy con el ícono de marca a gran escala.
    h('div', {
        style: {
            position: 'absolute',
            right: 0,
            top: 0,
            width: '460px',
            height: '630px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
        h('div', {
            style: {
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 300, height: 300, borderRadius: 300,
                background: 'rgba(255,255,255,0.07)',
            },
        },
            h('img', { src: iconSrc, width: 168, height: 168 }),
        ),
    ),
);

const fonts = [
    ['Inter-400.ttf', 400],
    ['Inter-600.ttf', 600],
    ['Inter-700.ttf', 700],
    ['Inter-800.ttf', 800],
].map(([file, weight]) => ({
    name: 'Inter',
    data: readFileSync(`${INTER_DIR}/${file}`),
    weight,
    style: 'normal',
}));

const res = new ImageResponse(tree, { width: 1200, height: 630, fonts });
const buf = Buffer.from(await res.arrayBuffer());
writeFileSync(`${REPO}public/og-image.png`, buf);
console.log('OK', buf.length, 'bytes');
