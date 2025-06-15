"use client";

import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "@/utils/theme";

export default function ThemeRegistry({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <Box style={{
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.default',
                minHeight: '100vh',
                marginBottom: "2%",
            }}>
                <CssBaseline />
                {children}
            </Box>
        </ThemeProvider>
    );
}
