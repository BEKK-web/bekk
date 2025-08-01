'use client';

import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Typography,
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
    const pages = ['Productos', 'Nosotros', 'Contacto'];
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleButtonClick = (pageIndex) => {
        handleCloseNavMenu();
        switch (pageIndex) {
            case 0:
                window.location.href = '/';
                break;
            case 1:
                window.location.href = '/nosotros';
                break;
            case 2:
                window.location.href = '/contacto';
                break;
            default:
                break;
        }
    };

    return (
        <AppBar
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'primary.main',
                height: '70px',
                px: 2,
                boxShadow: '-10px 10px 50px -10px black'
            }}
            position='fixed'
        >
            <Typography
                variant="bekk"
                sx={{ userSelect: 'none', cursor: 'pointer' }}
                onClick={() => window.location.href = '/'}
            >
                BEKK
            </Typography>

            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                gap: { md: 2, lg: 6 },
            }}
            >
                {pages.map((page, index) => (
                    <MenuItem key={page} onClick={() => handleButtonClick(index)}>
                        {page}
                    </MenuItem>
                ))}

            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="menú de navegación"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorElNav}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                >
                    {pages.map((page, index) => (
                        <MenuItem key={page} onClick={() => handleButtonClick(index)}>
                            <Typography variant='body'>{page}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </AppBar >
    );
}
