import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const baseTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1F3A5C',
            dark: '#16293F',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#15753A',
            dark: '#0F5A2C',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#FAF8F5',
            paper: '#FFFFFF',
            alt: '#F1ECE4',
            field: '#FEFDFB',
            footer: '#201E1B',
        },
        text: {
            primary: '#201E1B',
            secondary: '#6B6560',
        },
        divider: '#E5DFD6',
    },
    typography: {
        fontFamily: 'var(--font-inter-sans), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '3.25rem', // 52px desktop, scaled down by responsiveFontSizes
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontWeight: 700,
            fontSize: '2rem', // 32px
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
        },
        h3: {
            fontWeight: 600,
            fontSize: '1.25rem', // 20px
            lineHeight: 1.3,
        },
        body1: {
            fontSize: '1.0625rem', // 17px
            lineHeight: 1.65,
        },
        body2: {
            fontSize: '0.9375rem', // 15px
            lineHeight: 1.6,
        },
        eyebrow: {
            fontSize: '0.78rem', // 12.5px
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
        },
        statNumber: {
            fontWeight: 700,
            fontSize: '2.375rem', // 38px
            letterSpacing: '-0.01em',
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.9375rem', // 15px
        },
    },
    shape: {
        borderRadius: 8,
    },
    spacing: 8,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    scrollBehavior: 'smooth',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '13px 26px',
                    transition: 'transform .15s ease, box-shadow .15s ease, filter .15s ease, border-color .15s ease, color .15s ease',
                    '&:hover': {
                        transform: 'translateY(-1px)',
                    },
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 12px 24px -10px rgba(31, 58, 92, 0.45)',
                        filter: 'brightness(1.1)',
                    },
                },
                outlined: ({ theme }) => ({
                    borderColor: theme.palette.divider,
                    color: theme.palette.text.primary,
                    '&:hover': {
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        backgroundColor: 'transparent',
                    },
                }),
            },
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    boxShadow: '0 10px 24px -4px rgba(0, 0, 0, 0.3)',
                    transition: 'transform .15s ease',
                    '&:hover': {
                        transform: 'scale(1.06)',
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    borderRadius: 8,
                    backgroundColor: theme.palette.background.field,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.divider,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.text.secondary,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                    },
                }),
                input: ({ theme }) => ({
                    color: theme.palette.text.primary,
                }),
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.text.primary,
                    fontSize: '13.5px',
                    fontWeight: 500,

                    '&.Mui-focused': {
                        color: theme.palette.primary.main,
                    },
                }),
            },
        },
        MuiCard: {
            styleOverrides: {
                root: ({ theme }) => ({
                    borderRadius: 16,
                    border: `1px solid ${theme.palette.divider}`,
                    boxShadow: 'none',
                }),
            },
        },
    },
});

const theme = responsiveFontSizes(baseTheme);

export default theme;
