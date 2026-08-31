'use client';

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { sendGTMEvent } from "@next/third-parties/google";
import { waLink } from "@/utils/whatsapp";

export default function ProductCard({ product }) {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow .2s ease, transform .2s ease',
                '&:hover': {
                    boxShadow: '0 20px 40px -24px rgba(32, 30, 27, 0.22)',
                    transform: 'translateY(-2px)',
                },
                '&:hover .product-link-arrow': {
                    transform: 'translateX(3px)',
                },
            }}
        >
            <Box
                sx={{
                    height: 220,
                    bgcolor: 'background.alt',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 1.5,
                    py: 1.5,
                }}
            >
                <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 900px) 45vw, 320px"
                        style={{ objectFit: 'contain' }}
                    />
                </Box>
            </Box>

            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 1.5, flexGrow: 1 }}>
                {/* h2: el h1 de la página es el título, así no se saltea un nivel. */}
                <Typography variant="h3" component="h2" sx={{ fontSize: 17 }}>
                    {product.name}
                </Typography>
                {product.description && (
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ whiteSpace: 'pre-line', flexGrow: 1 }}
                    >
                        {product.description}
                    </Typography>
                )}
                <Box
                    component="a"
                    href={waLink(`Hola! Quiero consultar por ${product.name}`)}
                    target="_blank"
                    rel="noopener"
                    onClick={() => sendGTMEvent({ event: 'whatsapp_click', cta_location: 'producto', producto: product.name })}
                    sx={{
                        mt: 1,
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
                        className="product-link-arrow"
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
        </Box>
    );
}
