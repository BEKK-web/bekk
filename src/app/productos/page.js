import { Box, Typography } from "@mui/material";
import Link from "next/link";
import ProductsBrowser from "@/components/products/ProductsBrowser";
import { productDetails, productPath } from "@/data/productDetails";
import { veinedSurfaceTall } from "@/utils/surfaces";

const SITE_URL = "https://www.bekk.com.ar";

export const metadata = {
    title: "Equipos de aire acondicionado central | BEKK",
    description:
        "Equipos de climatización central: cassette, piso techo, baja silueta, rooftop, chillers, calefactores y VRV. Venta a todo el país. Consultanos y te asesoramos sin cargo.",
    alternates: {
        canonical: "/productos",
    },
};

// Índice: una tarjeta por página de producto. El texto largo vive en cada
// página; acá solo va la primera frase de la bajada.
const products = productDetails.map((detail) => ({
    slug: detail.slug,
    name: detail.h1,
    description: detail.heroSubtitle.split('. ')[0].replace(/\.$/, '') + '.',
    image: detail.image,
    href: productPath(detail.slug),
}));

export default function ProductosPage() {

    // Lista de productos para buscadores y asistentes de IA: sin esto el catálogo
    // solo existe como texto suelto y no se puede extraer como conjunto de ítems.
    const catalogJsonLd = products.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Equipos de climatización central de BEKK",
        numberOfItems: products.length,
        itemListElement: products.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
                "@type": "Product",
                name: product.name,
                description: product.description || undefined,
                image: `${SITE_URL}${product.image}`,
                category: "Aire acondicionado central",
                brand: { "@type": "Brand", name: "BEKK" },
                url: `${SITE_URL}${product.href}`,
            },
        })),
    } : null;

    return (
        <Box
            component="section"
            sx={{
                ...veinedSurfaceTall,
                py: { xs: 8, md: 12 },
                minHeight: '60vh',
            }}
        >
            {catalogJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }}
                />
            )}
            <Box sx={{ maxWidth: 1180, mx: 'auto', px: { xs: 3, md: 5 } }}>
                {/* Vuelve a la sección de soluciones de la home, que es desde donde
                    se llega a esta vista. */}
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

                <Box sx={{ maxWidth: 620 }}>
                    <Typography variant="eyebrow" component="p" color="primary.main">
                        Productos
                    </Typography>
                    <Typography variant="h2" component="h1" sx={{ mt: 1.5 }}>
                        Equipos de aire acondicionado central
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.75 }}>
                        Elegí el equipo que buscás para ver sus características y pedir tu cotización. Venta a todo el país con asesoramiento profesional.
                    </Typography>
                </Box>

                <Box sx={{ mt: 6 }}>
                    <ProductsBrowser products={products} />
                </Box>
            </Box>
        </Box>
    );
}
