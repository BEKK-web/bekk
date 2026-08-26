import { Box, Typography } from "@mui/material";

const stats = [
    { num: '+25', label: 'años de trayectoria en climatización' },
    { num: '#1', label: 'marcas líderes internacionales' },
    { num: 'Buenos Aires', label: 'Residencial & Corporativo' },
];

export default function TrajectoryStats() {
    return (
        <Box
            sx={{
                bgcolor: 'background.alt',
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
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                {stats.map((stat, i) => (
                    <Box
                        key={stat.label}
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'center',
                            py: { xs: 3.5, md: 5.5 },
                        }}
                    >
                        {i > 0 && (
                            <Box
                                sx={{
                                    width: { xs: 36, md: '1px' },
                                    height: { xs: '1px', md: 36 },
                                    bgcolor: 'rgba(32, 30, 27, 0.15)',
                                    mb: { xs: 3.5, md: 0 },
                                    mr: { xs: 0, md: 3 },
                                }}
                            />
                        )}
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
