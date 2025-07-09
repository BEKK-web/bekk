import { Box, Grid, Typography } from "@mui/material";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AdsClickIcon from '@mui/icons-material/AdsClick';

import Carousel from '@/components/Carousel';
import Image from "next/image";

export default function Nosotros() {

    const quienesSomos = 'Somos una empresa que brinda soluciones en climatización central, tanto para hogares como para el sector corporativo. Comercializamos productos de calidad para el bienestar de nuestros clientes.';

    const carrouselImages = 12;

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            background: `radial-gradient(circle at center, #c7e4ea 0%, #E4E4E4 80%)`,
            flex: 1,
            paddingX: '10%',
            paddingTop: '40px',
            paddingBottom: "40px"
        }}>
            <Grid container spacing={4}>
                <Grid size={12}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant='title' sx={{ mb: 2 }}>
                            ¿Quienes somos?
                        </Typography>
                        <Typography variant='body'>
                            {quienesSomos}
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={12} >
                </Grid>


                <Grid size={{ sm: 12, md: 6 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <AdsClickIcon fontSize="large" />
                        <Typography variant='h1' sx={{ marginLeft: 1 }}>
                            Variedad de productos
                        </Typography>
                    </Box>
                </Grid>

                <Grid size={{ sm: 12, md: 6 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <ShowChartIcon fontSize="large" />
                        <Typography variant='h1' sx={{ marginLeft: 1 }}>
                            +25 años de trayectoria
                        </Typography>
                    </Box>
                </Grid>



                {/*  */}

                <Grid size={12}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant='title' sx={{ mb: 2 }}>
                            Confian en nosotros
                        </Typography>
                        <Typography variant="title" color="primary.labelHint">
                            <Carousel visibleItemsCount={2} withIndicator isInfinite>
                                {
                                    Array.from({ length: carrouselImages }, (_, i) => (
                                        <Image
                                            key={i}
                                            src={`/trust/${i + 1}.png`}
                                            alt={`Imagen ${i + 1}`}
                                            width={200}
                                            height={100}
                                        />
                                    ))
                                }
                            </Carousel>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
}