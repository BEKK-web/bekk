import Link from "next/link";
import Image from "next/image";
import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from "@mui/material";
import WhatsAppCta from "@/components/WhatsAppCta";
import ContactForm from "@/components/ContactForm";
import TrackedLink from "@/components/products/TrackedLink";
import { brands } from "@/data/brands";
import { getProductDetail, productPath } from "@/data/productDetails";
import { veinedSurfaceTall } from "@/utils/surfaces";

const SITE_URL = "https://www.bekk.com.ar";

const sectionSx = { mt: { xs: 7, md: 9 } };

const iconProps = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
};

// Íconos de las ventajas (presentación): la clave la elige cada ventaja en
// src/data/productDetails.js. Mismo trazo que los de SolutionsSection.
const ventajaIcons = {
    hidden: (
        <svg {...iconProps}>
            <path d="M3 3l18 18" />
            <path d="M10.6 6.1A9.9 9.9 0 0 1 12 6c5 0 8.5 4.2 9.5 6a12.6 12.6 0 0 1-2.6 3.2M6.5 7.6A12.4 12.4 0 0 0 2.5 12c1 1.8 4.5 6 9.5 6 1.5 0 2.8-.4 4-1" />
            <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
        </svg>
    ),
    airflow: (
        <svg {...iconProps}>
            <path d="M3 8h10a3 3 0 1 0-3-3" />
            <path d="M3 12h15a3 3 0 1 1-3 3" />
            <path d="M3 16h7a2.5 2.5 0 1 1-2.5 2.5" />
        </svg>
    ),
    compact: (
        <svg {...iconProps}>
            <path d="M12 4v5M9.5 6.5 12 9l2.5-2.5" />
            <path d="M12 20v-5M9.5 17.5 12 15l2.5 2.5" />
            <path d="M4 12h16" />
        </svg>
    ),
    temp: (
        <svg {...iconProps}>
            <path d="M10 14.5V5a2 2 0 1 1 4 0v9.5a4 4 0 1 1-4 0z" />
            <path d="M12 9v7" />
        </svg>
    ),
    quiet: (
        <svg {...iconProps}>
            <path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4z" />
            <path d="M15.5 9.5a3.5 3.5 0 0 1 0 5" />
        </svg>
    ),
    bolt: (
        <svg {...iconProps}>
            <path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3z" />
        </svg>
    ),
    flex: (
        <svg {...iconProps}>
            <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.5" />
            <path d="M20 4v4.5h-4.5" />
            <path d="M20 12a8 8 0 0 1-13.7 5.6L4 15.5" />
            <path d="M4 20v-4.5h4.5" />
        </svg>
    ),
    check: (
        <svg {...iconProps}>
            <circle cx="12" cy="12" r="8.5" />
            <path d="m8.5 12.3 2.4 2.4 4.6-5" />
        </svg>
    ),
    expand: (
        <svg {...iconProps}>
            <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
        </svg>
    ),
    box: (
        <svg {...iconProps}>
            <path d="M12 3 4 7.2v9.6L12 21l8-4.2V7.2L12 3z" />
            <path d="M4 7.2 12 11.5l8-4.3M12 11.5V21" />
        </svg>
    ),
    water: (
        <svg {...iconProps}>
            <path d="M12 3.5c3 3.7 5.5 6.5 5.5 9.5a5.5 5.5 0 1 1-11 0c0-3 2.5-5.8 5.5-9.5z" />
        </svg>
    ),
    chart: (
        <svg {...iconProps}>
            <path d="M5 20V12M12 20V6M19 20V9" />
        </svg>
    ),
    flame: (
        <svg {...iconProps}>
            <path d="M12 3c.5 3-3.5 4.7-3.5 9a3.5 3.5 0 0 0 7 0c0-1.5-.6-2.5-1.3-3.5C14.5 9.5 13 7 12 3z" />
            <path d="M12 20a2 2 0 0 1-2-2c0-1.2 1.2-1.8 2-3 .8 1.2 2 1.8 2 3a2 2 0 0 1-2 2z" />
        </svg>
    ),
    zones: (
        <svg {...iconProps}>
            <rect x="4" y="4" width="7" height="7" rx="1" />
            <rect x="13" y="4" width="7" height="7" rx="1" />
            <rect x="4" y="13" width="7" height="7" rx="1" />
            <rect x="13" y="13" width="7" height="7" rx="1" />
        </svg>
    ),
};

function SectionTitle({ children }) {
    return (
        <Typography variant="h2" component="h2" sx={{ fontSize: { xs: 24, md: 28 } }}>
            {children}
        </Typography>
    );
}

export default function ProductDetailTemplate({ detail }) {
    const path = productPath(detail.slug);
    const url = `${SITE_URL}${path}`;
    const productBrands = detail.marcas
        .map((file) => brands.find((b) => b.file === file))
        .filter(Boolean);
    const related = detail.relacionados.map(getProductDetail).filter(Boolean);

    const specRows = [
        ['Capacidad', detail.specs.capacidad],
        ['Frío / frío y calor', detail.specs.frioCalor],
        ['Alimentación eléctrica', detail.specs.alimentacion],
        ['Refrigerante', detail.specs.refrigerante],
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Product",
                name: detail.h1,
                description: detail.metaDescription,
                image: `${SITE_URL}${detail.image}`,
                category: "Aire acondicionado central",
                url,
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
                    { "@type": "ListItem", position: 2, name: "Equipos", item: `${SITE_URL}/productos` },
                    { "@type": "ListItem", position: 3, name: detail.h1, item: url },
                ],
            },
            {
                "@type": "FAQPage",
                mainEntity: detail.faqs.map(({ question, answer }) => ({
                    "@type": "Question",
                    name: question,
                    acceptedAnswer: { "@type": "Answer", text: answer },
                })),
            },
        ],
    };

    return (
        <Box component="article" sx={{ ...veinedSurfaceTall, py: { xs: 6, md: 9 } }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Box sx={{ maxWidth: 1080, mx: 'auto', px: { xs: 3, md: 5 } }}>
                <Box
                    component={Link}
                    href="/productos"
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
                    Todos los equipos
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' },
                        gap: { xs: 4, md: 7 },
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <Typography variant="eyebrow" component="p" color="primary.main">
                            Equipos
                        </Typography>
                        <Typography variant="h2" component="h1" sx={{ mt: 1.5 }}>
                            {detail.h1}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2.5, fontSize: 17.5 }}>
                            {detail.heroSubtitle}
                        </Typography>
                        <Box sx={{ mt: 3.5, display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                            <Button variant="contained" color="primary" href="#cotizacion">
                                Pedir cotización
                            </Button>
                            <WhatsAppCta
                                message={detail.whatsappMessage}
                                ctaLocation={`producto_${detail.slug}`}
                                detail={detail.h1}
                            >
                                Consultar por WhatsApp
                            </WhatsAppCta>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            bgcolor: 'background.productImage',
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 3,
                            height: { xs: 260, md: 340 },
                            p: 2.5,
                            position: 'relative',
                        }}
                    >
                        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                            <Image
                                src={detail.image}
                                alt={`${detail.h1} BEKK`}
                                fill
                                priority
                                sizes="(max-width: 900px) 90vw, 440px"
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ ...sectionSx, maxWidth: 820 }}>
                    <SectionTitle>Qué es y cómo funciona</SectionTitle>
                    {detail.queEs.map((text) => (
                        <Typography key={text} variant="body1" color="text.secondary" sx={{ mt: 1.75 }}>
                            {text}
                        </Typography>
                    ))}
                </Box>

                <Box sx={sectionSx}>
                    <SectionTitle>Ventajas</SectionTitle>
                    <Box
                        component="ul"
                        sx={{
                            mt: 3,
                            p: 0,
                            listStyle: 'none',
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
                            gap: 2,
                        }}
                    >
                        {detail.ventajas.map(({ icon, text }) => (
                            <Box
                                component="li"
                                key={text}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    p: 2,
                                    bgcolor: 'background.paper',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 44,
                                        height: 44,
                                        flexShrink: 0,
                                        borderRadius: 2,
                                        bgcolor: 'rgba(31, 58, 92, 0.08)',
                                        color: 'primary.main',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {ventajaIcons[icon]}
                                </Box>
                                <Typography variant="body1" sx={{ fontSize: 16, lineHeight: 1.5 }}>
                                    {text}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ ...sectionSx, maxWidth: 820 }}>
                    <SectionTitle>Características técnicas</SectionTitle>
                    <TableContainer
                        sx={{
                            mt: 2.5,
                            bgcolor: 'background.paper',
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 3,
                        }}
                    >
                        <Table>
                            <TableBody>
                                {specRows.map(([label, value]) => (
                                    <TableRow key={label}>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            sx={{ fontWeight: 600, width: { xs: '38%', md: '30%' }, verticalAlign: 'top' }}
                                        >
                                            {label}
                                        </TableCell>
                                        <TableCell sx={{ color: 'text.secondary' }}>{value}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, fontSize: 13.5 }}>
                        Valores orientativos de la categoría. Consultanos por los modelos y capacidades disponibles.
                    </Typography>
                    {detail.specs.nota && (
                        <Typography variant="body2" sx={{ mt: 1, fontSize: 13.5, color: 'text.secondary' }}>
                            {detail.specs.nota}
                        </Typography>
                    )}
                </Box>

                {productBrands.length > 0 && (
                    <Box sx={sectionSx}>
                        <SectionTitle>Marcas</SectionTitle>
                        <Box
                            sx={{
                                mt: 3,
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                columnGap: { xs: 5, md: 7 },
                                rowGap: 4,
                            }}
                        >
                            {productBrands.map((brand) => (
                                <Box
                                    key={brand.file}
                                    sx={{ height: { xs: 30 * (brand.scale ?? 1), md: 38 * (brand.scale ?? 1) }, display: 'flex', alignItems: 'center' }}
                                >
                                    <Image
                                        src={`/brands/${brand.file}.png`}
                                        alt={brand.name}
                                        width={brand.w}
                                        height={brand.h}
                                        sizes={`${brand.sizes}px`}
                                        loading="lazy"
                                        style={{ height: '100%', width: 'auto' }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}

                <Box sx={sectionSx}>
                    <SectionTitle>Preguntas frecuentes</SectionTitle>
                    <Box
                        sx={{
                            mt: 3,
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
                            columnGap: 6,
                        }}
                    >
                        {detail.faqs.map((faq) => (
                            <Box key={faq.question} sx={{ py: 3, borderTop: '1px solid', borderColor: 'divider' }}>
                                <Typography variant="h3" component="h3" sx={{ fontSize: 17 }}>
                                    {faq.question}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                                    {faq.answer}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box id="cotizacion" sx={{ ...sectionSx, maxWidth: 820, scrollMarginTop: { xs: 72, md: 88 } }}>
                    <SectionTitle>Pedí tu cotización</SectionTitle>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, mb: 3 }}>
                        Contanos qué necesitás y te asesoramos sin cargo. Venta a todo el país.
                    </Typography>
                    <ContactForm product={detail.h1} redirectTo="/gracias" />
                </Box>

                {related.length > 0 && (
                    <Box sx={sectionSx}>
                        <SectionTitle>Otros equipos</SectionTitle>
                        <Box
                            sx={{
                                mt: 3,
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                                gap: 3,
                            }}
                        >
                            {related.map((item) => (
                                <Box
                                    key={item.slug}
                                    component={Link}
                                    href={productPath(item.slug)}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        p: 2,
                                        bgcolor: 'background.paper',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        borderRadius: 3,
                                        textDecoration: 'none',
                                        color: 'text.primary',
                                        transition: 'box-shadow .2s ease, transform .2s ease',
                                        '&:hover': {
                                            boxShadow: '0 20px 40px -24px rgba(32, 30, 27, 0.22)',
                                            transform: 'translateY(-2px)',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            width: 88,
                                            height: 72,
                                            flexShrink: 0,
                                            bgcolor: 'background.productImage',
                                            borderRadius: 2,
                                        }}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.h1}
                                            fill
                                            sizes="88px"
                                            loading="lazy"
                                            style={{ objectFit: 'contain', padding: 6 }}
                                        />
                                    </Box>
                                    <Typography variant="h3" component="p" sx={{ fontSize: 16 }}>
                                        {item.h1}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}

                <Box sx={{ mt: 7, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
                    <Typography variant="body2" color="text.secondary">
                        Teléfono{' '}
                        <TrackedLink
                            href="tel:+5491122296226"
                            event="phone_click"
                            ctaLocation={`producto_${detail.slug}`}
                            sx={{ color: 'text.primary', textDecoration: 'none', fontWeight: 500 }}
                        >
                            +54 9 11 2229-6226
                        </TrackedLink>
                        {' · '}
                        Email{' '}
                        <TrackedLink
                            href="mailto:ventas@bekk.com.ar"
                            event="email_click"
                            ctaLocation={`producto_${detail.slug}`}
                            sx={{ color: 'text.primary', textDecoration: 'none', fontWeight: 500 }}
                        >
                            ventas@bekk.com.ar
                        </TrackedLink>
                        {' · '}
                        <Box component={Link} href="/productos" sx={{ color: 'primary.main', fontWeight: 600, textDecoration: 'none' }}>
                            Ver todos los equipos
                        </Box>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
