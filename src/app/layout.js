import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import ThemeRegistry from "@/components/ThemeRegistry";
import { SnackbarProvider } from '@/components/SnackbarContext';
import Snackbar from '@/components/SnackBar';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://www.bekk.com.ar";

// Contenedor de Google Tag Manager. El <script> del <head> lo inyecta
// <GoogleTagManager>; acá solo queda el <noscript>, que la librería no cubre.
const GTM_ID = "GTM-MTVR7FLQ";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "BEKK | Aire acondicionado central en Buenos Aires",
  description:
    "Climatización central para hogares y empresas en Buenos Aires. Más de 25 años de trayectoria y las marcas líderes del mercado. Asesoramiento sin cargo.",
  authors: [{ name: "BEKK" }],
  icons: {
    icon: "/bekk.ico",
  },
  openGraph: {
    title: "BEKK | Aire acondicionado central en Buenos Aires",
    description:
      "Climatización central para hogares y empresas, con más de 25 años de trayectoria y las marcas líderes del mercado.",
    type: "website",
    locale: "es_AR",
    siteName: "BEKK",
    url: SITE_URL,
    images: [
      {
        url: "/bekk.png",
        width: 358,
        height: 100,
        alt: "BEKK | Soluciones en climatización"
      }
    ]
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "gBvLK0LNW85WmzGP_PvHsJdx6-ULXV8TcB-QXE5QGS0",
  },
};

// Datos estructurados del negocio, alineados con el perfil de Google Business
// ("Bekk Climatización", categoría "Tienda aire acondicionado"). La consistencia
// nombre/teléfono/horarios entre el sitio y el perfil es lo que permite a Google
// tratarlos como la misma entidad. El perfil no publica dirección de calle: está
// configurado por área de servicio, así que acá tampoco se declara `address`.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${SITE_URL}/#business`,
  "name": "Bekk Climatización",
  "alternateName": "BEKK",
  "description":
    "Empresa de climatización central para hogares y empresas en Buenos Aires, con más de 25 años de trayectoria.",
  "url": SITE_URL,
  "image": `${SITE_URL}/bekk.png`,
  "logo": `${SITE_URL}/bekk.png`,
  "telephone": "+5491122296226",
  "email": "ventas@bekk.com.ar",
  // Cuenta de Instagram vigente. Existe otra vieja (@bekk.climatizacion) con datos
  // desactualizados que no se enlaza a propósito: `sameAs` le dice a Google cuál es
  // la cuenta oficial de la entidad. Facebook se suma cuando esté actualizado.
  "sameAs": ["https://www.instagram.com/bekk_climatizacion/"],
  // Venden y envían a todo el país, pero la instalación solo cubre CABA y GBA.
  "areaServed": { "@type": "Country", "name": "Argentina" },
  "serviceArea": {
    "@type": "AdministrativeArea",
    "name": "Ciudad Autónoma de Buenos Aires y Gran Buenos Aires",
  },
  // Lunes a sábado de 9 a 21; domingos cerrado.
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  "knowsAbout": [
    "Aire acondicionado central",
    "Climatización central",
    "Sistemas VRV/VRF",
    "Climatización corporativa",
  ],
  "brand": [
    "Daikin", "Samsung", "BGH", "Gree", "Midea",
    "York", "Surrey", "Westric", "Ciroc", "Goodman", "Carrier",
  ].map((name) => ({ "@type": "Brand", name })),
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "ventas",
    "telephone": "+5491122296226",
    "email": "ventas@bekk.com.ar",
    "availableLanguage": "Spanish",
    "areaServed": "AR",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Soluciones de climatización",
    "itemListElement": [
      {
        name: "Climatización residencial",
        description:
          "Equipos para el hogar que pueden quedar a la vista (cassettes, piso techo) u ocultos (baja silueta, calefactores, separados para conductos), para lograr una climatización homogénea en toda la casa.",
      },
      {
        name: "Climatización corporativa",
        description:
          "Equipos de mayor capacidad para locales comerciales, oficinas, líneas de trabajo, salas de reuniones y servers: rooftop, separados para conductos, chillers, calefactores y conjuntos de frío.",
      },
      {
        name: "Sistemas VRV",
        description:
          "Aire acondicionado central avanzado (VRF) que climatiza múltiples espacios de forma independiente desde una única unidad exterior.",
      },
    ].map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        serviceType: "Climatización central",
      },
    })),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={interSans.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <ThemeRegistry>
          <SnackbarProvider>
            <Snackbar />
            <NavBar />
            <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              {children}
            </main>
            <Footer />
            <WhatsAppFab />
          </SnackbarProvider>
        </ThemeRegistry>
        <Analytics />
        <SpeedInsights />
        <GoogleTagManager gtmId={GTM_ID} />
        <GoogleAnalytics gaId="G-WM19X1LPMY" />
      </body>
    </html>
  );
}
