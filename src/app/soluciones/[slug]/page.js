import { notFound } from "next/navigation";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import WhatsAppCta from "@/components/WhatsAppCta";
import { servicios, getServicio } from "@/data/servicios";

const SITE_URL = "https://www.bekk.com.ar";

export function generateStaticParams() {
    return servicios.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const servicio = getServicio(slug);
    if (!servicio) return {};

    return {
        title: servicio.metaTitle,
        description: servicio.metaDescription,
        alternates: { canonical: `/soluciones/${servicio.slug}` },
        openGraph: {
            title: servicio.metaTitle,
            description: servicio.metaDescription,
            url: `${SITE_URL}/soluciones/${servicio.slug}`,
        },
    };
}

export default async function ServicioPage({ params }) {
    const { slug } = await params;
    const servicio = getServicio(slug);
    if (!servicio) notFound();

    const url = `${SITE_URL}/soluciones/${servicio.slug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                name: servicio.title,
                description: servicio.metaDescription,
                serviceType: "Climatización central",
                url,
                provider: { "@id": `${SITE_URL}/#business` },
                areaServed: { "@type": "Country", name: "Argentina" },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
                    { "@type": "ListItem", position: 2, name: "Soluciones", item: `${SITE_URL}/#soluciones` },
                    { "@type": "ListItem", position: 3, name: servicio.title, item: url },
                ],
            },
        ],
    };

    return (
        <Box component="article" sx={{ py: { xs: 8, md: 12 } }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Box sx={{ maxWidth: 820, mx: 'auto', px: { xs: 3, md: 5 } }}>
                <Box
                    component={Link}
                    href="/#soluciones"
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 3,
                        fontSize: 14.5,
                        fontWeight: 600,
                        color: 'text.secondary',
                        textDecoration: 'none',
                        '&:hover': { color: 'primary.main' },
                        '&:hover .back-arrow': { transform: 'translateX(-3px)' },
                    }}
                >
                    <Box
                        component="svg"
                        className="back-arrow"
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        aria-hidden="true"
                        sx={{ transition: 'transform .15s ease' }}
                    >
                        <path
                            d="M19 12H5M11 18l-6-6 6-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </Box>
                    Volver a soluciones
                </Box>

                <Typography variant="eyebrow" component="p" color="primary.main">
                    Soluciones
                </Typography>
                <Typography variant="h2" component="h1" sx={{ mt: 1.5 }}>
                    {servicio.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2.5, fontSize: 17.5 }}>
                    {servicio.intro}
                </Typography>

                {servicio.sections.map((section) => (
                    <Box key={section.heading} sx={{ mt: 6 }}>
                        <Typography variant="h3" component="h2" sx={{ fontSize: 20 }}>
                            {section.heading}
                        </Typography>

                        {(section.paragraphs || []).map((text) => (
                            <Typography
                                key={text}
                                variant="body1"
                                color="text.secondary"
                                sx={{ mt: 1.75 }}
                            >
                                {text}
                            </Typography>
                        ))}

                        {section.bullets && (
                            <Box component="ul" sx={{ mt: 2.25, pl: 0, listStyle: 'none' }}>
                                {section.bullets.map(([term, detail]) => (
                                    <Box
                                        component="li"
                                        key={term}
                                        sx={{
                                            pl: 2.5,
                                            mb: 1.75,
                                            position: 'relative',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                left: 0,
                                                top: '0.62em',
                                                width: 5,
                                                height: 5,
                                                borderRadius: '50%',
                                                bgcolor: 'primary.main',
                                            },
                                        }}
                                    >
                                        <Typography variant="body1" color="text.secondary">
                                            <Box component="strong" sx={{ color: 'text.primary', fontWeight: 600 }}>
                                                {term}
                                            </Box>
                                            {`: ${detail}`}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        )}
                    </Box>
                ))}

                <Box
                    sx={{
                        mt: 7,
                        p: { xs: 3, md: 4 },
                        borderRadius: 3,
                        bgcolor: 'background.alt',
                        border: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <Typography variant="h3" component="p" sx={{ fontSize: 19 }}>
                        ¿Querés que lo veamos juntos?
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1, mb: 2.5 }}>
                        Contanos qué espacio necesitás climatizar y te asesoramos sin cargo.
                    </Typography>
                    <WhatsAppCta
                        message={servicio.whatsappMessage}
                        ctaLocation="pagina_servicio"
                        detail={servicio.title}
                    >
                        Consultar por WhatsApp
                    </WhatsAppCta>
                </Box>
            </Box>
        </Box>
    );
}
