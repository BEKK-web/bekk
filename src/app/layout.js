import { Inter } from "next/font/google";
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
  keywords: [
    "Ventilación central", "Climatización central", "Climatización corporativa", "Rooftop",
    "Separado para conductos", "Precio aire acondicionado central", "Aire acondicionado central presupuesto",
    "Equipos de aire acondicionado central", "Comprar aire acondicionado central", "Multiposición",
    "Baja silueta", "Piso techo", "aire acondicionado baja silueta", "Calefactor central",
    "Servicios de climatización", "Sistemas de climatización", "Aire acondicionado central"
  ],
  authors: [{ name: "BEKK" }],
  openGraph: {
    title: "BEKK | Lideres en el mercado",
    description: "Soluciones en climatización y refrigeración",
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
      </body>
    </html>
  );
}