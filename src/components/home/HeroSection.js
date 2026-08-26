import { Box, Typography, Button } from "@mui/material";
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
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(#20293414 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    WebkitMaskImage: 'radial-gradient(ellipse 900px 500px at 50% 0%, #000 0%, transparent 75%)',
                    maskImage: 'radial-gradient(ellipse 900px 500px at 50% 0%, #000 0%, transparent 75%)',
                    pointerEvents: 'none',
                },
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    maxWidth: 760,
                    mx: 'auto',
                    px: { xs: 3, md: 5 },
                    textAlign: 'center',
                }}
            >
                <Typography variant="eyebrow" component="p" color="primary.main">
                    Climatización central · Buenos Aires
                </Typography>
                <Typography variant="h1" component="h1" sx={{ mt: 1.5 }}>
                    Climatización de confianza
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mt: 2, maxWidth: 520, mx: 'auto' }}
                >
                    Diseñamos e instalamos soluciones de climatización y ventilación central para hogares y empresas, trabajando con las marcas líderes del mercado.
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mt: 4.5, flexWrap: 'wrap' }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        href={waLink()}
                        target="_blank"
                        rel="noopener"
                        startIcon={<WhatsAppIcon />}
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
                            <Typography variant="body2" sx={{ fontSize: 13.5, color: '#9A9187' }}>
                                {item}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
