import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function SolutionCard({ icon, title, description, href }) {
    return (
        <Box
            sx={{
                position: 'relative',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                p: { xs: 3.5, md: 4.5 },
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                cursor: 'pointer',
                transition: 'box-shadow .2s ease, transform .2s ease',
                // El foco vive en el <a> de adentro, pero el recuadro se dibuja
                // sobre la tarjeta, que es lo que el usuario percibe como botón.
                '&:has(:focus-visible)': {
                    outline: '2px solid',
                    outlineColor: 'primary.main',
                    outlineOffset: 3,
                },
                '&:hover': {
                    boxShadow: '0 20px 40px -24px rgba(32, 30, 27, 0.22)',
                    transform: 'translateY(-2px)',
                },
                '&:hover .solution-link-arrow': {
                    transform: 'translateX(3px)',
                },
            }}
        >
            <Box
                sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 2,
                    bgcolor: 'rgba(31, 58, 92, 0.08)',
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {icon}
            </Box>
            <Typography variant="h3" component="h3">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                {description}
            </Typography>
            <Box
                component={Link}
                href={href}
                aria-label={`Ver más sobre ${title}`}
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    fontWeight: 600,
                    fontSize: 14.5,
                    color: 'primary.main',
                    textDecoration: 'none',
                    outline: 'none',
                    '&:hover': { color: 'primary.dark' },
                    // Se estira sobre la tarjeta (que es position: relative) para
                    // que el click funcione en cualquier parte, sin anidar todo
                    // el contenido dentro del <a>.
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 'inherit',
                    },
                }}
            >
                Ver más
                <Box
                    component="svg"
                    className="solution-link-arrow"
                    viewBox="0 0 24 24"
                    width={15}
                    height={15}
                    aria-hidden="true"
                    sx={{ transition: 'transform .15s ease' }}
                >
                    <path
                        d="M5 12h14M13 6l6 6-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </Box>
            </Box>
        </Box>
    );
}
