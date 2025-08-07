import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function ProductCard({ product }) {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'primary.main',
            width: '335px',
            height: '400px',
            justifyContent: 'space-between',
            paddingY: '2%',
            paddingX: '4%',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0 0, 0, 0.1)',
        }}>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', overflow: 'hidden', borderRadius: '10px', }}>
                <Image width={315} height={200} src={`${process.env.NEXT_PUBLIC_API_URL + product.image}`} alt={product.name} />
            </Box>

            <Typography variant="h2">
                {product.name}
            </Typography>

            <Typography variant="body">
                {product.description}
            </Typography>

            <Button id={product.name} variant='contained' sx={{ bgcolor: 'primary.button' }} onClick={() => window.open(`https://wa.me/5491122296226?text=Hola%21%20Quiero%20consultar%20por%20un%20${product.name}`, '_blank')}>
                <Typography variant="primaryButton" sx={{ color: 'secondary.contrastText' }}>
                    Consultar por el producto
                </Typography>
            </Button>
        </Box >
    );
}