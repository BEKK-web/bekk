'use client';

import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { sendGTMEvent } from "@next/third-parties/google";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { waLink } from "@/utils/whatsapp";

const trustLogos = [1, 2, 3, 4, 5, 6];

export default function AboutSection() {
    return (
        <Box component="section" id="nosotros" sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: { xs: 64, md: 72 } }}>
            <Box sx={{ maxWidth: 1180, mx: 'auto', px: { xs: 3, md: 5 } }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: 5, md: 9 },
                        alignItems: 'flex-start',
                    }}
                >
                    <Box sx={{ flex: '1 1 420px' }}>
                        <Typography variant="eyebrow" component="p" color="primary.main">
                            Nosotros
                        </Typography>
                        <Typography variant="h2" component="h2" sx={{ mt: 1.5 }}>
                            ¿Quiénes somos?
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 1.75, maxWidth: 480 }}>
                            Somos una empresa que brinda soluciones en climatización central, tanto para hogares como para el sector corporativo. Comercializamos productos de calidad para el bienestar de nuestros clientes.
                        </Typography>

                        <Box
                            sx={{
                                mt: 4,
                                p: 3.25,
                                borderRadius: 3,
                                bgcolor: 'background.alt',
                                border: '1px solid',
                                borderColor: 'divider',
                                maxWidth: 480,
                            }}
                        >
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                ¿Tenés dudas sobre qué sistema necesitás?
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                href={waLink()}
                                target="_blank"
                                rel="noopener"
                                startIcon={<WhatsAppIcon />}
                                onClick={() => sendGTMEvent({ event: 'whatsapp_click', cta_location: 'nosotros' })}
                            >
                                Escribinos por WhatsApp
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{ flex: '1 1 480px', width: '100%' }}>
                        <Typography variant="eyebrow" component="p" color="primary.main">
                            Confían en nosotros
                        </Typography>
                        <Box
                            sx={{
                                mt: 2,
                                display: 'grid',
                                gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', sm: 'repeat(3, minmax(0, 1fr))' },
                                gap: 2.25,
                            }}
                        >
                            {trustLogos.map((n) => (
                                <Box
                                    key={n}
                                    sx={{
                                        bgcolor: 'background.paper',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        borderRadius: 2,
                                        p: 2.25,
                                        height: { xs: 92, md: 104 },
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Image
                                        src={`/trust/${n}.png`}
                                        alt="Cliente BEKK"
                                        width={300}
                                        height={200}
                                        sizes="160px"
                                        style={{ maxHeight: '100%', width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
