export default function sitemap() {
    return [
        {
            url: 'https://www.bekk.com.ar/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://www.bekk.com.ar/productos',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];
}
