'use client';

import { Box, Typography } from "@mui/material";
import { sendGTMEvent } from "@next/third-parties/google";
import { waLink } from "@/utils/whatsapp";

export default function SolutionCard({ icon, title, description, whatsappMessage }) {
    return (
        <Box
            sx={{
                position: 'relative',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                p: { xs: 3.5, md: 4.5 },
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                transition: 'box-shadow .2s ease, transform .2s ease',
                '&:hover': {
                    boxShadow: '0 20px 40px -24px rgba(32, 30, 27, 0.22)',
                    transform: 'translateY(-2px)',
                },
                '&:hover .solution-link-arrow': {
                    transform: 'translateX(3px)',
                },
            }}
        >
            <Box
                sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 2,
                    bgcolor: 'rgba(31, 58, 92, 0.08)',
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {icon}
            </Box>
            <Typography variant="h3" component="h3">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                {description}
            </Typography>
            <Box
                component="a"
                href={waLink(whatsappMessage)}
                target="_blank"
                rel="noopener"
                onClick={() => sendGTMEvent({ event: 'whatsapp_click', cta_location: 'solucion', solucion: title })}
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    fontWeight: 600,
                    fontSize: 14.5,
                    color: 'primary.main',
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.dark' },
                }}
            >
                Consultar por WhatsApp
                <Box
                    component="svg"
                    className="solution-link-arrow"
                    viewBox="0 0 24 24"
                    width={15}
                    height={15}
                    sx={{ transition: 'transform .15s ease' }}
                >
                    <path
                        d="M5 12h14M13 6l6 6-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </Box>
            </Box>
        </Box>
    );
}
