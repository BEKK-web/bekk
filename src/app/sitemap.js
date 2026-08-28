import { servicios } from "@/data/servicios";

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
    ];
}
