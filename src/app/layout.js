import { Inter } from "next/font/google";
import Head from "next/head";
import ThemeRegistry from "@/components/ThemeRegistry";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "BEKK | Lideres en el mercado",
  description: "Soluciones en climatización y refrigeración",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Ventilación central, Climatización central, Climatización corporativa, Rooftop, Separado para conductos, Precio aire acondicionado central, Aire acondicionado central presupuesto, Equipos de aire acondicionado central, Comprar aire acondicionado central, Multiposición, Baja silueta, Piso techo, aire acondicionado baja silueta, Calefactor central, Servicios de climatización, Sistemas de climatización, Aire acondicionado central" />
        <meta name="author" content={metadata.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bekk.com.ar/" />
      </Head>
      <body className={`${interSans.variable}`}>
        <ThemeRegistry>
          <NavBar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
