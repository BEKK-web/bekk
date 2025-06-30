import { Box, Typography } from "@mui/material";

export default function ProductsList({ products }) {
    return (
        <Box sx={{ bgcolor: 'primary.main', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'top', alignItems: 'start', paddingTop: '10%', paddingLeft: '0%' }}>
            {products.map((product, index) => (
                <Typography key={index} variant="h2" sx={{ marginX: '20%', marginBottom: '5%' }}>{product.name}</Typography>
            ))}
        </Box>
    );
}