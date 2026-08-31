import { Box, Typography } from "@mui/material";
import Link from "next/link";
import ProductsBrowser from "@/components/products/ProductsBrowser";
import { productos } from "@/data/productos";

const SITE_URL = "https://www.bekk.com.ar";

export const metadata = {
    title: "Equipos de aire acondicionado central | BEKK",
    description:
        "Catálogo de equipos de climatización central: cassette, piso techo, baja silueta, rooftop, chillers y calefactores. Consultanos y te asesoramos sin cargo.",
    alternates: {
        canonical: "/productos",
    },
};

export default function ProductosPage() {
    const products = productos;

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
                url: `${SITE_URL}/productos`,
            },
        })),
    } : null;

    return (
        <Box
            component="section"
            sx={{
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
                        Nuestros equipos
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.75 }}>
                        El catálogo completo de equipos que comercializamos. Si tenés dudas sobre cuál se ajusta a tu espacio, escribinos y te asesoramos. ¿No encontrás el producto que buscás? Consultanos, seguro podemos ayudarte.
                    </Typography>
                </Box>

                <Box sx={{ mt: 6 }}>
                    <ProductsBrowser products={products} />
                </Box>
            </Box>
        </Box>
    );
}
