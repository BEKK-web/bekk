import { Box, Typography, Button, Skeleton } from "@mui/material";

export default function ProductSkeleton() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'primary.main', width: '335px', height: '400px', justifyContent: 'space-between', padding: 2, borderRadius: '10px' }}>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', overflow: 'hidden', borderRadius: '10px', }}>
                <Skeleton variant="image" width={315} height={200} />
            </Box>

            <Typography variant="h2">
                <Skeleton variant="text" width="80%" />
            </Typography>

            <Typography variant="body">
                <Skeleton variant="text" width="80%" />
            </Typography>

            <Button variant='contained' sx={{ bgcolor: 'primary.button' }} disabled>
                <Typography variant="primaryButton" sx={{ color: 'secondary.contrastText' }}>
                    Consultar por el producto
                </Typography>
            </Button>
        </Box >
    );
}