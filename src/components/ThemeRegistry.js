"use client";

import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "@/utils/theme";

export default function ThemeRegistry({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    height: 'calc(100vh - 70px)',
                    overflow: 'auto',
                    marginTop: '70px',
                }}
            >
                <CssBaseline />
                {children}
            </Box>
        </ThemeProvider>
    );
}
