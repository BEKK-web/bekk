import { Box, Typography } from "@mui/material";
import Image from "next/image";

const brands = [
    { file: 'daikin', name: 'Daikin', w: 700, h: 146 },
    { file: 'samsung', name: 'Samsung', w: 700, h: 108 },
    { file: 'bgh', name: 'BGH', w: 700, h: 251 },
    { file: 'gree', name: 'Gree', w: 700, h: 227 },
    { file: 'midea', name: 'Midea', w: 700, h: 298 },
    { file: 'york', name: 'York', w: 700, h: 172 },
    { file: 'surrey', name: 'Surrey', w: 700, h: 207 },
    { file: 'westric', name: 'Westric', w: 700, h: 83 },
    { file: 'ciroc', name: 'Ciroc', w: 700, h: 310 },
    { file: 'goodman', name: 'Goodman', w: 700, h: 317 },
];

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
                                height: { xs: 34, md: 42 },
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
                                src={`/brands/trimmed/${brand.file}.png`}
                                alt={brand.name}
                                width={brand.w}
                                height={brand.h}
                                style={{ height: '100%', width: 'auto' }}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
