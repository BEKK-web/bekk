import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import ThemeRegistry from "@/components/ThemeRegistry";
import { SnackbarProvider } from '@/components/SnackbarContext';
import Snackbar from '@/components/SnackBar';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Script from "next/script";
import Head from "next/head";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "BEKK | Soluciones en climatización",
  description: "Calidad y eficiencia en sistemas de climatización y refrigeración.",
  keywords: [
    "Ventilación central", "Climatización central", "Climatización corporativa", "Rooftop",
    "Separado para conductos", "Precio aire acondicionado central", "Aire acondicionado central presupuesto",
    "Equipos de aire acondicionado central", "Comprar aire acondicionado central", "Multiposición",
    "Baja silueta", "Piso techo", "aire acondicionado baja silueta", "Calefactor central",
    "Servicios de climatización", "Sistemas de climatización", "Aire acondicionado central"
  ],
  authors: [{ name: "BEKK" }],
  openGraph: {
    title: "BEKK | Soluciones en climatización",
    description: "Compra el equipo que estuviste buscando.",
    type: "website",
    url: "https://www.bekk.com.ar/",
    images: [
      {
        url: "https://www.bekk.com.ar/bekk.png",
        width: 455,
        height: 455,
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/bekk.ico" type="image/x-icon" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WM19X1LPMY"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WM19X1LPMY');
        `}
      </Script>

      <body>
        <ThemeRegistry>
          <SnackbarProvider>
            <Snackbar />
            <NavBar />
            <main style={{ flex: 1, display: "flex", flexDirection: "column", paddingTop: "70px" }}>
              {children}
            </main>
            <Footer />
          </SnackbarProvider>
        </ThemeRegistry>
        <Analytics />
        <SpeedInsights />
      </body>
    </html >
  );
}