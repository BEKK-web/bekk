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
import Image from 'next/image';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { waLink } from '@/utils/whatsapp';

const links = [
    { label: 'Soluciones', href: '/#soluciones' },
    { label: 'Marcas', href: '/#marcas' },
    { label: 'Nosotros', href: '/#nosotros' },
    { label: 'Contacto', href: '/#contacto' },
];

export default function NavBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
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
                    sx={{ display: 'flex', alignItems: 'center', height: { xs: 46, md: 62 } }}
                >
                    <Image
                        src="/bekk.png"
                        alt="BEKK"
                        width={445}
                        height={445}
                        priority
                        style={{ height: '100%', width: 'auto' }}
                    />
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4.5 }}>
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

                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Button
                        variant="contained"
                        color="primary"
                        href={waLink()}
                        target="_blank"
                        rel="noopener"
                        startIcon={<WhatsAppIcon size={16} />}
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
                            onClick={handleCloseNavMenu}
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
