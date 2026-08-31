'use client';

import { Box, Typography, Button } from "@mui/material";
import { sendGTMEvent } from "@next/third-parties/google";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ContactForm from "@/components/ContactForm";
import { waLink } from "@/utils/whatsapp";

const infoItems = [
    {
        label: 'Ubicación',
        value: 'Buenos Aires, Argentina',
        icon: (
            <svg viewBox="0 0 24 24" width={19} height={19} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-6.5-7-11.5A7 7 0 0 1 19 9.5C19 14.5 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.4" />
            </svg>
        ),
    },
    {
        label: 'Teléfono',
        value: '+54 9 11 2229-6226',
        href: 'tel:+5491122296226',
        gtmEvent: 'phone_click',
        icon: (
            <svg viewBox="0 0 24 24" width={19} height={19} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19c0 .6-.4 1-1 1C10.6 20 4 13.4 4 5c0-.6.4-1 1-1h2.8c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1z" />
            </svg>
        ),
    },
    {
        label: 'Email',
        value: 'ventas@bekk.com.ar',
        href: 'mailto:ventas@bekk.com.ar',
        gtmEvent: 'email_click',
        icon: (
            <svg viewBox="0 0 24 24" width={19} height={19} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 6.5 8 6.5 8-6.5" />
            </svg>
        ),
    },
];

export default function ContactSection() {
    return (
        <Box component="section" id="contacto" sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: { xs: 64, md: 72 } }}>
            <Box sx={{ maxWidth: 1180, mx: 'auto', px: { xs: 3, md: 5 } }}>
                <Box sx={{ textAlign: 'center', maxWidth: 560, mx: 'auto' }}>
                    <Typography variant="eyebrow" component="p" color="primary.main">
                        Contacto
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{ mt: 1.5 }}>
                        ¿Cómo podemos ayudarte hoy?
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.75 }}>
                        Contanos qué necesitás y te asesoramos sin cargo.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        mt: 7,
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '0.85fr 1.15fr' },
                        gap: { xs: 5, md: 7 },
                        alignItems: 'start',
                    }}
                >
                    <Box>
                        {infoItems.map((item, i) => (
                            <Box
                                key={item.label}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.75,
                                    py: 2.25,
                                    pt: i === 0 ? 0 : 2.25,
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 1.5,
                                        bgcolor: 'background.paper',
                                        color: 'primary.main',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    {item.icon}
                                </Box>
                                <Box>
                                    <Typography variant="body2" sx={{ fontSize: 13, color: 'text.secondary' }}>
                                        {item.label}
                                    </Typography>
                                    {item.href ? (
                                        <Box
                                            component="a"
                                            href={item.href}
                                            onClick={() => sendGTMEvent({ event: item.gtmEvent, cta_location: 'contacto' })}
                                            sx={{
                                                display: 'block',
                                                fontSize: 16,
                                                fontWeight: 500,
                                                mt: 0.25,
                                                color: 'text.primary',
                                                textDecoration: 'none',
                                                '&:hover': { color: 'primary.main' },
                                            }}
                                        >
                                            {item.value}
                                        </Box>
                                    ) : (
                                        <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 500, mt: 0.25 }}>
                                            {item.value}
                                        </Typography>
                                    )}
                                </Box>
                            </Box>
                        ))}

                        <Box
                            sx={{
                                mt: 4,
                                p: 3.25,
                                borderRadius: 3,
                                bgcolor: 'background.paper',
                                border: '1px solid',
                                borderColor: 'divider',
                            }}
                        >
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                La vía más rápida para recibir asesoramiento es WhatsApp.
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                href={waLink()}
                                target="_blank"
                                rel="noopener"
                                startIcon={<WhatsAppIcon />}
                                onClick={() => sendGTMEvent({ event: 'whatsapp_click', cta_location: 'contacto' })}
                                fullWidth
                            >
                                Hablar por WhatsApp ahora
                            </Button>
                        </Box>
                    </Box>

                    <ContactForm />
                </Box>
            </Box>
        </Box>
    );
}
