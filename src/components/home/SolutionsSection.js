import { Box, Button, Typography } from "@mui/material";
import SolutionCard from "./SolutionCard";
import { veinedSurface } from "@/utils/surfaces";
import { servicios } from "@/data/servicios";

const iconProps = {
    width: 26,
    height: 26,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
};

// Los íconos viven acá (son presentación) y el texto en src/data/servicios.js,
// que es la única fuente para las tarjetas y para las páginas de servicio.
const icons = {
    'climatizacion-residencial': (
        <svg {...iconProps}>
            <path d="M4 11.5 12 5l8 6.5" />
            <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" />
            <path d="M10 20v-5h4v5" />
        </svg>
    ),
    'climatizacion-corporativa': (
        <svg {...iconProps}>
            <rect x="5" y="3" width="10" height="18" rx="1" />
            <path d="M9 7h2M9 11h2M9 15h2" />
            <path d="M15 10h4v11h-4" />
        </svg>
    ),
    'sistemas-vrv': (
        <svg {...iconProps}>
            <path d="M4 8h9a3 3 0 1 0-3-3" />
            <path d="M4 16h11a3 3 0 1 1-3 3" />
            <path d="M4 12h15a3 3 0 1 0-3-3" />
        </svg>
    ),
};

const solutions = servicios.map((servicio) => ({
    title: servicio.shortTitle,
    description: servicio.cardDescription,
    whatsappMessage: servicio.whatsappMessage,
    href: `/soluciones/${servicio.slug}`,
    icon: icons[servicio.slug],
}));

export default function SolutionsSection() {
    return (
        <Box
            component="section"
            id="soluciones"
            sx={{
                ...veinedSurface,
                py: { xs: 8, md: 12 },
                scrollMarginTop: { xs: 64, md: 72 },
            }}
        >
            <Box sx={{ maxWidth: 1180, mx: 'auto', px: { xs: 3, md: 5 } }}>
                <Box>
                    <Typography variant="h2" component="h2">
                        Soluciones
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 480 }}>
                        Te ayudamos a elegir el sistema que corresponde a tu espacio.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        mt: 6.5,
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
                        gap: 3.5,
                    }}
                >
                    {solutions.map((solution) => (
                        <SolutionCard key={solution.title} {...solution} />
                    ))}
                </Box>

                <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        href="/productos"
                        sx={{
                            width: { xs: '100%', sm: 340 },
                            py: 1.9,
                            fontSize: 16,
                        }}
                    >
                        Ver productos
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
