import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
            contrastText: '#000000',
            button: '#2A649A',
            labelHint: '#A4A4A4',
        },
        secondary: {
            main: '#000000',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#E4E4E4',
            mint: '#A7FA67',
            glass: '#5090B0',
            footer: '#2D3841',
        },
    },
    typography: {
        // light: 400, regular: 500, semibold: 600, bold: 700
        h1: {
            fontWeight: 400,
            fontSize: '24px',
            textTransform: 'uppercase',
        },
        h2: {
            fontWeight: 500,
            fontSize: '20px',
        },
        bekk: {
            fontWeight: 700,
            fontSize: '40px',
        },
        a: {
            fontWeight: 500,
            fontSize: '27px',
            textTransform: 'uppercase',
        },
        labelHint: {
            fontSize: '15px',
            fontWeight: 500,
        },
        primaryButton: {
            fontSize: '15px',
            fontWeight: 700,
            textTransform: 'uppercase',
        },
        body: {
            fontSize: '15x',
            fontWeight: 400,
        },
        title: {
            fontSize: '30px',
            fontWeight: 600,
        },
    },
    components: {
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
        MuiOutlinedInput: {
            styleOverrides: {
                root: {

                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#000000',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#000000',
                    },
                    '&.Mui-focused': {
                        // backgroundColor: '#edebeb',
                    },
                },
                notchedOutline: {
                    borderColor: '#ccc',
                },
                input: {
                    color: '#000',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#00000', // color del label inactivo
                    fontSize: '15px',
                    fontWeight: 500,
                    textTransform: 'none',

                    '&.Mui-focused': {
                        color: '#000000', // color del label cuando el campo está enfocado
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