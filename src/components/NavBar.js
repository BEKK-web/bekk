'use client';

import { useState } from 'react';
import {
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import { sendGTMEvent } from '@next/third-parties/google';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { waLink } from '@/utils/whatsapp';
import { productDetails, productPath } from '@/data/productDetails';

const links = [
    { label: 'Soluciones', href: '/#soluciones' },
    { label: 'Marcas', href: '/#marcas' },
    { label: 'Nosotros', href: '/#nosotros' },
    { label: 'Contacto', href: '/#contacto' },
];

export default function NavBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElEquipos, setAnchorElEquipos] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseEquipos = () => {
        setAnchorElEquipos(null);
    };

    return (
        <Box
            component="header"
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                bgcolor: 'rgba(250, 248, 245, 0.92)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Box
                sx={{
                    maxWidth: 1180,
                    mx: 'auto',
                    px: { xs: 2.5, md: 5 },
                    py: 1.25,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 3,
                }}
            >
                <Box
                    component="a"
                    href="/#inicio"
                    aria-label="BEKK - inicio"
                    sx={{ display: 'flex', alignItems: 'center', height: { xs: 30, md: 40 } }}
                >
                    <Image
                        src="/bekk.png"
                        alt="BEKK"
                        width={358}
                        height={100}
                        priority
                        sizes="230px"
                        style={{ height: '100%', width: 'auto' }}
                    />
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 6 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4.5 }}>
                        <Box
                            component="button"
                            type="button"
                            aria-haspopup="true"
                            aria-expanded={Boolean(anchorElEquipos)}
                            onClick={(event) => setAnchorElEquipos(event.currentTarget)}
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 0.5,
                                p: 0,
                                border: 0,
                                bgcolor: 'transparent',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                                color: 'text.primary',
                                fontWeight: 500,
                                fontSize: 15,
                                '&:hover': { color: 'primary.main' },
                            }}
                        >
                            Equipos
                            <ExpandMoreIcon sx={{ fontSize: 18 }} />
                        </Box>
                        <Menu
                            anchorEl={anchorElEquipos}
                            open={Boolean(anchorElEquipos)}
                            onClose={handleCloseEquipos}
                        >
                            {productDetails.map((detail) => (
                                <MenuItem
                                    key={detail.slug}
                                    component="a"
                                    href={productPath(detail.slug)}
                                    onClick={handleCloseEquipos}
                                >
                                    {detail.h1}
                                </MenuItem>
                            ))}
                            <MenuItem
                                component="a"
                                href="/productos"
                                onClick={handleCloseEquipos}
                                sx={{ color: 'primary.main', fontWeight: 600 }}
                            >
                                Ver todos los equipos
                            </MenuItem>
                        </Menu>
                        {links.map((link) => (
                            <Box
                                key={link.href}
                                component="a"
                                href={link.href}
                                sx={{
                                    color: 'text.primary',
                                    fontWeight: 500,
                                    fontSize: 15,
                                    textDecoration: 'none',
                                    '&:hover': { color: 'primary.main' },
                                }}
                            >
                                {link.label}
                            </Box>
                        ))}
                    </Box>

                    <Button
                        variant="contained"
                        color="primary"
                        href={waLink()}
                        target="_blank"
                        rel="noopener"
                        startIcon={<WhatsAppIcon size={16} />}
                        onClick={() => sendGTMEvent({ event: 'whatsapp_click', cta_location: 'header' })}
                    >
                        Hablar con un asesor
                    </Button>
                </Box>

                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="menú de navegación"
                        onClick={handleOpenNavMenu}
                        sx={{ color: 'text.primary' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorElNav}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                    >
                        <MenuItem
                            component="a"
                            href="/productos"
                            onClick={handleCloseNavMenu}
                        >
                            Equipos
                        </MenuItem>
                        {productDetails.map((detail) => (
                            <MenuItem
                                key={detail.slug}
                                component="a"
                                href={productPath(detail.slug)}
                                onClick={handleCloseNavMenu}
                                sx={{ pl: 4, fontSize: 14, color: 'text.secondary' }}
                            >
                                {detail.h1}
                            </MenuItem>
                        ))}
                        {links.map((link) => (
                            <MenuItem
                                key={link.href}
                                component="a"
                                href={link.href}
                                onClick={handleCloseNavMenu}
                            >
                                {link.label}
                            </MenuItem>
                        ))}
                        <MenuItem
                            component="a"
                            href={waLink()}
                            target="_blank"
                            rel="noopener"
                            onClick={() => {
                                sendGTMEvent({ event: 'whatsapp_click', cta_location: 'header_mobile' });
                                handleCloseNavMenu();
                            }}
                            sx={{ color: 'primary.main', fontWeight: 600 }}
                        >
                            Hablar con un asesor
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>
        </Box>
    );
}
