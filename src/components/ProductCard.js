import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function ProductCard({ product }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'primary.main', width: '335px', height: '400px', justifyContent: 'space-between', padding: '2%', borderRadius: '10px' }}>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', overflow: 'hidden', borderRadius: '10px', }}>
                <Image width={315} height={200} src='/placeholder.png' alt={product.name} />
            </Box>

            <Typography variant="h2">
                {product.name}
            </Typography>

            <Typography variant="body">
                {product.description}
            </Typography>

            <Button variant='contained' sx={{ bgcolor: 'primary.button' }} onClick={() => window.open(`https://wa.me/5491122296226?text=Hola%21%20Quiero%20consultar%20por%20un%20${product.name}`, '_blank')}>
                <Typography variant="primaryButton" sx={{ color: 'secondary.contrastText' }}>
                    Consultar por este producto
                </Typography>
            </Button>
        </Box >
    );
}