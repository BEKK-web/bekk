'use client';
import { Box, Typography } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { sendGTMEvent } from "@next/third-parties/google";
import { useSnackbar } from "@/components/SnackbarContext";

const navLinks = [
    { label: 'Soluciones', href: '/#soluciones' },
    { label: 'Marcas', href: '/#marcas' },
    { label: 'Nosotros', href: '/#nosotros' },
    { label: 'Contacto', href: '/#contacto' },
];

export default function Footer() {
    const { showSnackbar } = useSnackbar();

    const handleCopyEmail = () => {
        if (navigator && navigator.clipboard) {
            navigator.clipboard.writeText('ventas@bekk.com.ar');
        }
        showSnackbar('Email copiado al portapapeles', "success");
        sendGTMEvent({ event: 'email_click', cta_location: 'footer' });
    };

    return (
        <Box component="footer" sx={{ bgcolor: 'background.footer', color: '#C9C3BA', py: { xs: 6, md: 8 } }}>
            <Box sx={{ maxWidth: 1180, mx: 'auto', px: { xs: 3, md: 5 } }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 6,
                        flexWrap: 'wrap',
                    }}
                >
                    <Box sx={{ maxWidth: 320 }}>
                        <Typography
                            variant="h3"
                            component="p"
                            sx={{ color: '#FFFFFF', fontWeight: 800, letterSpacing: '0.02em', mb: 1.75 }}
                        >
                            BEKK
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#8B857C' }}>
                            Soluciones en climatización central para hogares y empresas, con más de 25 años de trayectoria en Buenos Aires.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        <Box>
                            <Typography variant="body2" sx={{ fontSize: 13, fontWeight: 600, color: '#FFFFFF', mb: 1.75, letterSpacing: '0.02em' }}>
                                Navegación
                            </Typography>
                            {navLinks.map((link) => (
                                <Box
                                    key={link.href}
                                    component="a"
                                    href={link.href}
                                    sx={{
                                        display: 'block',
                                        fontSize: 14,
                                        color: '#8B857C',
                                        textDecoration: 'none',
                                        mb: 1.25,
                                        '&:hover': { color: '#FFFFFF' },
                                    }}
                                >
                                    {link.label}
                                </Box>
                            ))}
                        </Box>

                        <Box>
                            <Typography variant="body2" sx={{ fontSize: 13, fontWeight: 600, color: '#FFFFFF', mb: 1.75, letterSpacing: '0.02em' }}>
                                Contacto
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: 14, color: '#8B857C', mb: 1.25 }}>
                                Buenos Aires, Argentina
                            </Typography>
                            <Box
                                component="a"
                                href="tel:+5491122296226"
                                onClick={() => sendGTMEvent({ event: 'phone_click', cta_location: 'footer' })}
                                sx={{
                                    display: 'block',
                                    fontSize: 14,
                                    color: '#8B857C',
                                    textDecoration: 'none',
                                    mb: 1.25,
                                    '&:hover': { color: '#FFFFFF' },
                                }}
                            >
                                +54 9 11 2229-6226
                            </Box>
                            <Box
                                onClick={handleCopyEmail}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 0.75,
                                    fontSize: 14,
                                    color: '#8B857C',
                                    cursor: 'pointer',
                                    width: 'fit-content',
                                    '&:hover': { color: '#FFFFFF' },
                                }}
                            >
                                ventas@bekk.com.ar
                                <ContentCopyIcon sx={{ fontSize: 14 }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ mt: 6, pt: 3, borderTop: '1px solid #34312C' }}>
                    <Typography variant="body2" sx={{ fontSize: 13, color: '#948C82' }}>
                        © {new Date().getFullYear()} BEKK. Climatización central en Buenos Aires.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
