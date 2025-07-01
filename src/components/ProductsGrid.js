import { Grid, Box, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

export default function ProductsGrid({ products }) {
    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (!value) {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(
                products.filter(product =>
                    product.name && product.name.toLowerCase().includes(value.toLowerCase())
                )
            );
        }
    };

    useEffect(() => {
        if (!search) {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(
                products.filter(product =>
                    product.name && product.name.toLowerCase().includes(search.toLowerCase())
                )
            );
        }
    }, [products]);

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', width: '100%', height: '100%', paddingTop: '40px', alignItems: 'center', marginTop: 2, paddingX: 2,
        }}>
            <TextField
                variant="outlined"
                placeholder="Buscar producto..."
                value={search}
                onChange={handleSearch}
                sx={{ mb: 3, width: '50%' }}
                slotProps={{
                    input: {
                        startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
                    },
                }}
            />

            <Grid container spacing={4} sx={{ width: '100%', padding: '2%' }}>
                {filteredProducts.map((product, index) => (
                    <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}