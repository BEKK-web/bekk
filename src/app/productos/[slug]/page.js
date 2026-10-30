import { notFound } from "next/navigation";
import ProductDetailTemplate from "@/components/products/ProductDetailTemplate";
import { productDetails, getProductDetail, productPath } from "@/data/productDetails";

const SITE_URL = "https://www.bekk.com.ar";

// sistemas-vrv vive en /soluciones/sistemas-vrv (URL histórica), no acá.
const routed = productDetails.filter((p) => p.slug !== 'sistemas-vrv');

export function generateStaticParams() {
    return routed.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const detail = routed.find((p) => p.slug === slug);
    if (!detail) return {};

    const path = productPath(detail.slug);

    return {
        title: detail.title,
        description: detail.metaDescription,
        alternates: { canonical: path },
        // openGraph no se hereda del layout: definirlo acá lo reemplaza entero.
        openGraph: {
            title: detail.title,
            description: detail.metaDescription,
            url: `${SITE_URL}${path}`,
            type: "website",
            locale: "es_AR",
            siteName: "BEKK",
            images: [
                {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "BEKK — Climatización de confianza",
                },
            ],
        },
    };
}

export default async function ProductoPage({ params }) {
    const { slug } = await params;
    const detail = slug === 'sistemas-vrv' ? null : getProductDetail(slug);
    if (!detail) notFound();

    return <ProductDetailTemplate detail={detail} />;
}
