"use client";

import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "@/utils/theme";

export default function ThemeRegistry({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.default',
                minHeight: '100vh',
            }}>
                <CssBaseline />
                {children}
            </Box>
        </ThemeProvider>
    );
}
