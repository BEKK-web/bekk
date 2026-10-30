import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import WhatsAppCta from "@/components/WhatsAppCta";
import { veinedSurface } from "@/utils/surfaces";

// Página de destino del formulario de cotización: tener una URL propia permite
// medir cada envío como conversión en Google Ads. No se indexa.
export const metadata = {
    title: "Gracias por tu consulta | BEKK",
    robots: { index: false, follow: false },
};

export default function GraciasPage() {
    return (
        <Box
            component="section"
            sx={{ ...veinedSurface, py: { xs: 10, md: 16 }, minHeight: '60vh' }}
        >
            <Box sx={{ maxWidth: 620, mx: 'auto', px: { xs: 3, md: 5 }, textAlign: 'center' }}>
                <Typography variant="eyebrow" component="p" color="primary.main">
                    Consulta enviada
                </Typography>
                <Typography variant="h2" component="h1" sx={{ mt: 1.5 }}>
                    ¡Gracias! Ya recibimos tu consulta
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                    Un asesor de BEKK se va a comunicar con vos a la brevedad. Si preferís una respuesta más rápida, escribinos por WhatsApp.
                </Typography>
                <Box sx={{ mt: 4, display: 'flex', gap: 1.5, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <WhatsAppCta message="Hola! Acabo de enviar una consulta desde la web" ctaLocation="gracias">
                        Hablar por WhatsApp
                    </WhatsAppCta>
                    <Button variant="outlined" component={Link} href="/productos">
                        Ver todos los equipos
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
