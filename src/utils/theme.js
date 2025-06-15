import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#424242', // Azul corporativo profundo
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#FF6F00', // Naranja cálido para climatización
            light: '#FFB74D',
            dark: '#E65100',
            contrastText: '#ffffff',
        },
        background: {
            default: '#FAFAFA', // Gris muy claro, casi blanco
            paper: '#FFFFFF',
        },
        text: {
            primary: '#212121', // Negro suave
            secondary: '#616161', // Gris medio
        },
        error: {
            main: '#D32F2F',
            light: '#EF5350',
            dark: '#C62828',
        },
        warning: {
            main: '#F57C00',
            light: '#FFB74D',
            dark: '#E65100',
        },
        info: {
            main: '#1976D2',
            light: '#42A5F5',
            dark: '#1565C0',
        },
        success: {
            main: '#388E3C',
            light: '#66BB6A',
            dark: '#2E7D32',
        },
        divider: '#E0E0E0',
        // Colores personalizados para BEKK
        grey: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#EEEEEE',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontWeight: 600,
            fontSize: '2.5rem',
            color: '#212121',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem',
            color: '#212121',
        },
        h3: {
            fontWeight: 500,
            fontSize: '1.5rem',
            color: '#212121',
        },
        h4: {
            fontWeight: 500,
            fontSize: '1.25rem',
            color: '#212121',
        },
        h5: {
            fontWeight: 500,
            fontSize: '1.125rem',
            color: '#212121',
        },
        h6: {
            fontWeight: 500,
            fontSize: '1rem',
            color: '#212121',
        },
        body1: {
            fontSize: '1rem',
            color: '#212121',
            lineHeight: 1.6,
        },
        body2: {
            fontSize: '0.875rem',
            color: '#616161',
            lineHeight: 1.5,
        },
        button: {
            fontWeight: 600,
            textTransform: 'none', // Mantener capitalización original
        },
    },
    shape: {
        borderRadius: 8, // Bordes ligeramente redondeados
    },
    components: {
        // Personalización de componentes específicos
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '10px 24px',
                    fontWeight: 600,
                },
                contained: {
                    boxShadow: '0 2px 8px rgba(21, 101, 192, 0.2)',
                    '&:hover': {
                        boxShadow: '0 4px 12px rgba(21, 101, 192, 0.3)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1565C0',
                    boxShadow: '0 2px 8px rgba(21, 101, 192, 0.2)',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 8,
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                },
            },
        },
    },
    spacing: 8, // Espaciado base de 8px
});

export default theme;