'use client';

import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { sendGTMEvent } from "@next/third-parties/google";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { waLink } from "@/utils/whatsapp";

export default function HeroSection() {
    return (
        <Box
            component="section"
            id="inicio"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                scrollMarginTop: { xs: 64, md: 72 },
                py: { xs: 9, md: 14 },
            }}
        >
            {/* Ambiente hogar: en desktop ocupa la mitad izquierda con corte diagonal;
                en mobile pasa a la mitad superior. Cada caja mide poco más de la mitad
                del hero para que la foto entre casi completa y se reconozca el ambiente. */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: { xs: '100%', md: '58%' },
                    height: { xs: '58%', md: '100%' },
                    clipPath: {
                        xs: 'polygon(0 0, 100% 0, 100% 72.4%, 0 100%)',
                        md: 'polygon(0 0, 100% 0, 72.4% 100%, 0 100%)',
                    },
                }}
            >
                <Image
                    src="/ambiente.jpg"
                    alt=""
                    fill
                    priority
                    // Es el elemento LCP: la prioridad alta explícita adelanta su descarga.
                    fetchPriority="high"
                    sizes="(max-width: 900px) 100vw, 58vw"
                    style={{ objectFit: 'cover', objectPosition: 'center center' }}
                />
            </Box>

            {/* Ambiente oficina: mitad derecha en desktop, mitad inferior en mobile. */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: { xs: '100%', md: '58%' },
                    height: { xs: '58%', md: '100%' },
                    clipPath: {
                        xs: 'polygon(0 27.6%, 100% 0, 100% 100%, 0 100%)',
                        md: 'polygon(27.6% 0, 100% 0, 100% 100%, 0 100%)',
                    },
                }}
            >
                <Image
                    src="/oficina.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 58vw"
                    style={{ objectFit: 'cover', objectPosition: 'center center' }}
                />
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse 820px 560px at 50% 42%, rgba(250,248,245,0.92) 0%, rgba(250,248,245,0.8) 40%, rgba(250,248,245,0.4) 70%, rgba(250,248,245,0.12) 100%)',
                }}
            />

            {/* Línea divisoria entre ambos ambientes; va por encima del velo para
                que el corte entre hogar y oficina se lea con nitidez. */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'background.default',
                    clipPath: {
                        xs: 'polygon(0 calc(58% - 10px), 100% calc(42% - 10px), 100% calc(42% + 10px), 0 calc(58% + 10px))',
                        md: 'polygon(calc(58% - 10px) 0, calc(58% + 10px) 0, calc(42% + 10px) 100%, calc(42% - 10px) 100%)',
                    },
                }}
            />
            <Box
                sx={{
                    position: 'relative',
                    maxWidth: 760,
                    mx: 'auto',
                    px: { xs: 3, md: 5 },
                    textAlign: 'center',
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Image
                        src="/bekk.png"
                        alt="BEKK"
                        width={358}
                        height={100}
                        sizes="240px"
                        style={{ height: 'auto', width: '100%', maxWidth: 240 }}
                    />
                </Box>
                <Typography variant="eyebrow" component="p" color="primary.main">
                    Aire acondicionado central
                </Typography>
                <Typography variant="h1" component="h1" sx={{ mt: 1.5 }}>
                    Climatización de confianza
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mt: 2, maxWidth: 520, mx: 'auto' }}
                >
                    Climatización central para hogares y empresas, trabajando con las marcas líderes del mercado.
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mt: 4.5, flexWrap: 'wrap' }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        href={waLink()}
                        target="_blank"
                        rel="noopener"
                        startIcon={<WhatsAppIcon />}
                        onClick={() => sendGTMEvent({ event: 'whatsapp_click', cta_location: 'hero' })}
                    >
                        Hablar por WhatsApp
                    </Button>
                    <Button variant="outlined" href="#soluciones">
                        Ver soluciones
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1.25,
                        flexWrap: 'wrap',
                        mt: 3.75,
                    }}
                >
                    {['Hogares y empresas', 'Marcas líderes internacionales'].map((item, i) => (
                        <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                            {i > 0 && (
                                <Box sx={{ width: 3, height: 3, borderRadius: '50%', bgcolor: 'divider' }} />
                            )}
                            <Typography variant="body2" sx={{ fontSize: 13.5, color: 'text.secondary' }}>
                                {item}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
