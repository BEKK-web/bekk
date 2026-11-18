import { Box, Typography } from "@mui/material";
import { veinedSurface } from "@/utils/surfaces";

const stats = [
    { num: '+15', label: 'años de trayectoria en climatización' },
    { num: '+300', label: 'equipos vendidos' },
    { num: 'Argentina', label: 'Residencial & Corporativo' },
];

export default function TrajectoryStats() {
    return (
        <Box
            sx={{
                ...veinedSurface,
                borderTop: '1px solid',
                borderBottom: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Box
                sx={{
                    maxWidth: 1180,
                    mx: 'auto',
                    px: { xs: 3, md: 5 },
                    // Tres columnas del mismo ancho: con flex el ancho dependía del texto
                    // y los separadores quedaban descentrados entre bloques.
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                }}
            >
                {stats.map((stat, i) => (
                    <Box
                        key={stat.label}
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            py: { xs: 3.5, md: 5.5 },
                            // Separador corto, centrado en el borde entre columnas.
                            '&::before': i > 0 ? {
                                content: '""',
                                position: 'absolute',
                                bgcolor: 'rgba(32, 30, 27, 0.15)',
                                top: { xs: 0, md: '50%' },
                                left: { xs: '50%', md: 0 },
                                width: { xs: 36, md: '1px' },
                                height: { xs: '1px', md: 36 },
                                transform: { xs: 'translateX(-50%)', md: 'translateY(-50%)' },
                            } : undefined,
                        }}
                    >
                        <Box sx={{ textAlign: 'center', px: 3 }}>
                            <Typography variant="statNumber" component="p" color="primary.main">
                                {stat.num}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                {stat.label}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
