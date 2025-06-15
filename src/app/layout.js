import { Inter } from "next/font/google";
import Head from "next/head";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeRegistry from "@/components/ThemeRegistry";
import NavBar from "@/components/NavBar";

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
        <meta name="keywords" content="" />
        <meta name="author" content={metadata.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="" />
        <meta property="og:url" content="https://www.bekk.com.ar/" />
      </Head>
      <body className={`${interSans.variable}`}>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <NavBar></NavBar>
            {children}
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
