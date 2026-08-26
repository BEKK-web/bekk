import { Box, Typography } from "@mui/material";
import SolutionCard from "./SolutionCard";

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

const solutions = [
    {
        title: 'Climatización residencial',
        description: 'Sistemas centrales y multisplit pensados para el confort de tu hogar durante todo el año.',
        whatsappMessage: 'Hola! Quiero consultar por climatización residencial',
        icon: (
            <svg {...iconProps}>
                <path d="M4 11.5 12 5l8 6.5" />
                <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" />
                <path d="M10 20v-5h4v5" />
            </svg>
        ),
    },
    {
        title: 'Corporativa & Rooftop',
        description: 'Soluciones de gran escala para oficinas, locales e industrias, con equipos de alto rendimiento.',
        whatsappMessage: 'Hola! Quiero consultar por climatización corporativa',
        icon: (
            <svg {...iconProps}>
                <rect x="5" y="3" width="10" height="18" rx="1" />
                <path d="M9 7h2M9 11h2M9 15h2" />
                <path d="M15 10h4v11h-4" />
            </svg>
        ),
    },
    {
        title: 'Ventilación central',
        description: 'Renovación de aire eficiente para espacios más saludables, integrada al diseño de tu edificio.',
        whatsappMessage: 'Hola! Quiero consultar por ventilación central',
        icon: (
            <svg {...iconProps}>
                <path d="M4 8h9a3 3 0 1 0-3-3" />
                <path d="M4 16h11a3 3 0 1 1-3 3" />
                <path d="M4 12h15a3 3 0 1 0-3-3" />
            </svg>
        ),
    },
];

export default function SolutionsSection() {
    return (
        <Box component="section" id="soluciones" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.alt', scrollMarginTop: { xs: 64, md: 72 } }}>
            <Box sx={{ maxWidth: 1180, mx: 'auto', px: { xs: 3, md: 5 } }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        gap: 3,
                        flexWrap: 'wrap',
                    }}
                >
                    <Box>
                        <Typography variant="eyebrow" component="p" color="primary.main">
                            Soluciones
                        </Typography>
                        <Typography variant="h2" component="h2" sx={{ mt: 1.5 }}>
                            Del living de tu casa a la torre de tu empresa
                        </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480 }}>
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
            </Box>
        </Box>
    );
}
