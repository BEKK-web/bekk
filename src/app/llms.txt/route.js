import { servicios } from "@/data/servicios";
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

// Respuestas provistas por el cliente; mismo texto que la sección de la home.
const FAQS = [
    ["¿Ustedes instalan los equipos?", "Sí. La instalación la realizamos a través de instaladores tercerizados de amplia experiencia."],
    ["¿Hacen instalaciones en el interior del país?", "No. El servicio de instalación está disponible únicamente en CABA y Gran Buenos Aires."],
    ["¿Envían equipos a todo el país?", "Sí, se realizan envíos a todo el país. La instalación solo se cubre en CABA y Gran Buenos Aires."],
    ["¿En cuánto tiempo entregan el equipo?", "Dentro de las 48 horas hábiles de recibido el pago."],
    ["¿Quién otorga la garantía?", "La garantía la otorga el fabricante del equipo."],
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
sobre qué sistema corresponde a cada espacio. La instalación se realiza a
través de instaladores tercerizados de amplia experiencia.

## Datos de contacto

- Teléfono / WhatsApp: +54 9 11 2229-6226
- Email: ventas@bekk.com.ar
- Envíos: a todo el país
- Instalación: únicamente en CABA y Gran Buenos Aires
- Entrega: dentro de las 48 horas hábiles de recibido el pago
- Garantía: la otorga el fabricante del equipo
- Horario de atención: lunes a sábado de 9:00 a 21:00; domingos cerrado
- Asesoramiento sin cargo

## Soluciones

${servicios.map((s) => `- ${s.title}: ${s.cardDescription}`).join("\n")}

## Marcas que comercializa

${BRANDS.join(", ")}.
${equipmentLine}
## Preguntas frecuentes

${FAQS.map(([q, a]) => `**${q}**\n${a}`).join("\n\n")}

## Páginas

- [Inicio](${SITE_URL}/): soluciones, marcas, preguntas frecuentes y contacto.
- [Productos](${SITE_URL}/productos): catálogo de equipos.
${servicios.map((s) => `- [${s.title}](${SITE_URL}/soluciones/${s.slug}): ${s.metaDescription}`).join("\n")}
`;

    return new Response(body, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    });
}
