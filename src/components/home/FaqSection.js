import { Box, Typography } from "@mui/material";

// Respuestas provistas por el cliente. Se exportan para poder generar el
// JSON-LD de FAQPage desde la home con exactamente el mismo texto que se
// muestra en pantalla: si difieren, Google descarta los datos estructurados.
export const faqs = [
    {
        question: '¿Ustedes instalan los equipos?',
        answer: 'Sí. La instalación la realizamos a través de instaladores tercerizados de amplia experiencia.',
    },
    {
        question: '¿Hacen instalaciones en el interior del país?',
        answer: 'No. El servicio de instalación está disponible únicamente en CABA y Gran Buenos Aires.',
    },
    {
        question: '¿Envían equipos a todo el país?',
        answer: 'Sí, realizamos envíos a todo el país. Tené en cuenta que la instalación solo la cubrimos en CABA y Gran Buenos Aires.',
    },
    {
        question: '¿En cuánto tiempo entregan el equipo?',
        answer: 'Entregamos dentro de las 48 horas hábiles de recibido el pago.',
    },
    {
        question: '¿Quién otorga la garantía?',
        answer: 'La garantía la otorga el fabricante del equipo.',
    },
];

export default function FaqSection() {
    return (
        <Box
            component="section"
            id="preguntas-frecuentes"
            sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: { xs: 64, md: 72 } }}
        >
            <Box sx={{ maxWidth: 1180, mx: 'auto', px: { xs: 3, md: 5 } }}>
                <Box sx={{ maxWidth: 620 }}>
                    <Typography variant="eyebrow" component="p" color="primary.main">
                        Preguntas frecuentes
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{ mt: 1.5 }}>
                        Lo que más nos consultan
                    </Typography>
                </Box>

                <Box
                    sx={{
                        mt: 5,
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
                        columnGap: 6,
                        rowGap: 0,
                    }}
                >
                    {faqs.map((faq) => (
                        <Box
                            key={faq.question}
                            sx={{
                                py: 3,
                                borderTop: '1px solid',
                                borderColor: 'divider',
                            }}
                        >
                            <Typography variant="h3" component="h3" sx={{ fontSize: 17 }}>
                                {faq.question}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                                {faq.answer}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
