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

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "BEKK | Aire acondicionado central en Buenos Aires",
  description:
    "Aire acondicionado y climatización central para hogares y empresas en Buenos Aires. Más de 25 años de trayectoria y las marcas líderes del mercado. Asesoramiento sin cargo.",
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
    languages: {
      es: "/",
    },
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
  // Sin `sameAs`: los perfiles de redes existentes están desactualizados y enlazarlos
  // propagaría datos viejos. Sumarlos cuando vuelvan a estar al día.
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Buenos Aires, Argentina",
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
          "Sistemas centrales y multisplit pensados para el confort del hogar durante todo el año.",
      },
      {
        name: "Climatización corporativa",
        description:
          "Soluciones de gran escala para oficinas, locales e industrias, con equipos de alto rendimiento.",
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
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PQJ6TZZ8"
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
        <GoogleTagManager gtmId="GTM-PQJ6TZZ8" />
        <GoogleAnalytics gaId="G-WM19X1LPMY" />
      </body>
    </html>
  );
}
