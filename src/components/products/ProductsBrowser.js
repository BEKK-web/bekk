'use client';

import { useMemo, useState } from "react";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ProductCard from "./ProductCard";

export default function ProductsBrowser({ products }) {
    const [search, setSearch] = useState('');

    const filteredProducts = useMemo(() => {
        if (!search.trim()) return products;
        const query = search.trim().toLowerCase();
        return products.filter((product) => product.name.toLowerCase().includes(query));
    }, [products, search]);

    return (
        <Box>
            <TextField
                variant="outlined"
                placeholder="Buscar equipo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                fullWidth
                sx={{ maxWidth: 420, mb: 5 }}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                            </InputAdornment>
                        ),
                    },
                }}
            />

            {filteredProducts.length === 0 ? (
                <Typography variant="body1" color="text.secondary">
                    No encontramos equipos que coincidan con &quot;{search}&quot;.
                </Typography>
            ) : (
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, minmax(0, 1fr))',
                            lg: 'repeat(3, minmax(0, 1fr))',
                        },
                        gap: 3,
                    }}
                >
                    {filteredProducts.map((product, index) => (
                        // La primera fila entra en pantalla sin scrollear: si carga lazy,
                        // el navegador la pide tarde y se vuelve el LCP de la página.
                        <ProductCard key={product.slug} product={product} priority={index < 3} />
                    ))}
                </Box>
            )}
        </Box>
    );
}
