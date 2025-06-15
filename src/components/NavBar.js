import { Button, Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';

export default function NavBar() {
    return (
        <AppBar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 2, backgroundColor: 'primary.main' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', minWidth: '50%' }}>
                <Button variant="body">
                    Inicio
                </Button>
                <Button variant='body'>
                    Quiénes somos
                </Button>
                <Button variant='body'>
                    Catálogo
                </Button>
                <Button variant='body'>
                    Contacto
                </Button>
            </Box>
        </AppBar>
    );
}
