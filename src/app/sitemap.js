import { servicios } from "@/data/servicios";
import { productDetails, productPath } from "@/data/productDetails";

const SITE_URL = 'https://www.bekk.com.ar';

export default function sitemap() {
    const now = new Date();

    return [
        {
            url: `${SITE_URL}/`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${SITE_URL}/productos`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...servicios.map((servicio) => ({
            url: `${SITE_URL}/soluciones/${servicio.slug}`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        })),
        // sistemas-vrv ya sale arriba, con su URL en /soluciones.
        ...productDetails
            .filter((detail) => detail.slug !== 'sistemas-vrv')
            .map((detail) => ({
                url: `${SITE_URL}${productPath(detail.slug)}`,
                lastModified: now,
                changeFrequency: 'monthly',
                priority: 0.8,
            })),
    ];
}
