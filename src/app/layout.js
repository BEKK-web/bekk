import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import ThemeRegistry from "@/components/ThemeRegistry";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={interSans.variable}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <ThemeRegistry>
          <NavBar />
          <main style={{ flex: 1, display: "flex", flexDirection: "column", paddingTop: "70px" }}>
            {children}
          </main>
          <Footer />
        </ThemeRegistry>
        <Analytics />
      </body>
    </html>
  );
}