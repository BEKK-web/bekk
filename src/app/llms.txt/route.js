import { getProducts } from "@/utils/api";

// Convención llmstxt.org: resumen estructurado del sitio para asistentes de IA.
// Se genera como route handler (igual que robots.js y sitemap.js) para que la
// lista de equipos salga del backend y no quede desactualizada.
export const revalidate = 3600;

const SITE_URL = "https://www.bekk.com.ar";

const BRANDS = [
    "Daikin", "Samsung", "BGH", "Gree", "Midea", "York",
    "Surrey", "Westric", "Ciroc", "Goodman", "Carrier",
];

const SOLUTIONS = [
    ["Climatización residencial", "sistemas centrales y multisplit para el confort del hogar durante todo el año."],
    ["Climatización corporativa", "soluciones de gran escala para oficinas, locales e industrias, con equipos de alto rendimiento."],
    ["Sistemas VRV", "aire acondicionado central avanzado (VRF) que climatiza múltiples espacios de forma independiente desde una única unidad exterior."],
];

export async function GET() {
    let equipmentLine = "";
    try {
        const products = await getProducts();
        if (products.length > 0) {
            equipmentLine = `\n## Tipos de equipo\n\n${products.map((p) => p.name).join(", ")}.\n`;
        }
    } catch {
        // Si el catálogo no responde, el resto del archivo se sirve igual.
    }

    const body = `# Bekk Climatización

> Empresa que comercializa sistemas de climatización y aire acondicionado
> central para hogares y empresas en Buenos Aires, Argentina. Más de 25 años
> de trayectoria.

BEKK comercializa equipos de aire acondicionado central de las marcas líderes
del mercado, para el sector residencial y el corporativo, y asesora sin cargo
sobre qué sistema corresponde a cada espacio.

## Datos de contacto

- Teléfono / WhatsApp: +54 9 11 2229-6226
- Email: ventas@bekk.com.ar
- Zona de cobertura: Buenos Aires, Argentina
- Horario de atención: lunes a sábado de 9:00 a 21:00; domingos cerrado
- Asesoramiento sin cargo

## Soluciones

${SOLUTIONS.map(([name, desc]) => `- ${name}: ${desc}`).join("\n")}

## Marcas que comercializa

${BRANDS.join(", ")}.
${equipmentLine}
## Páginas

- [Inicio](${SITE_URL}/): soluciones, marcas y contacto.
- [Productos](${SITE_URL}/productos): catálogo de equipos.
`;

    return new Response(body, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    });
}
