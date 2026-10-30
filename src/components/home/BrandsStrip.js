import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { brands } from "@/data/brands";

export default function BrandsStrip() {
    return (
        <Box component="section" id="marcas" sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: { xs: 64, md: 72 } }}>
            <Box sx={{ maxWidth: 1180, mx: 'auto', px: { xs: 3, md: 5 } }}>
                <Box sx={{ textAlign: 'center', maxWidth: 620, mx: 'auto' }}>
                    <Typography variant="eyebrow" component="p" color="primary.main">
                        Marcas
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{ mt: 1.5 }}>
                        Trabajamos con las marcas líderes
                    </Typography>
                </Box>

                <Box
                    sx={{
                        mt: 7,
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        columnGap: { xs: 5, md: 7 },
                        rowGap: 5,
                    }}
                >
                    {brands.map((brand) => (
                        <Box
                            key={brand.file}
                            sx={{
                                height: { xs: 34 * (brand.scale ?? 1), md: 42 * (brand.scale ?? 1) },
                                display: 'flex',
                                alignItems: 'center',
                                filter: 'grayscale(1)',
                                opacity: 0.55,
                                transition: 'filter .2s ease, opacity .2s ease',
                                '&:hover': {
                                    filter: 'grayscale(0)',
                                    opacity: 1,
                                },
                            }}
                        >
                            <Image
                                src={`/brands/${brand.file}.png`}
                                alt={brand.name}
                                width={brand.w}
                                height={brand.h}
                                sizes={`${brand.sizes}px`}
                                style={{ height: '100%', width: 'auto' }}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
