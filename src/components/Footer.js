import { Box, Button, Typography } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';

export default function Footer() {
    return (
        <Box sx={{ bgcolor: 'background.footer', color: 'secondary.contrastText', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', minHeight: '100px', width: '100%', padding: '40px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'start', paddingRight: '20px' }}>
                <Typography variant="h1" sx={{ marginBottom: '10%' }}>
                    Contanctanos
                </Typography>
                <Button variant='contained' href='/contacto' sx={{ backgroundColor: 'primary.button', color: 'primary.main' }}>
                    <Typography variant="primaryButton">Ir a contacto</Typography>
                </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', borderLeft: '1px solid white', paddingLeft: '20px', alignItems: 'space-evenly', height: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', padding: 1, gap: 1 }}>
                    <LocationOnOutlinedIcon />
                    <Typography variant="body">Buenos Aires, Argentina</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', padding: 1, gap: 1 }}>
                    <LocalPhoneOutlinedIcon />
                    <Typography variant="body">+54 9 11 2229-6226</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', padding: 1, gap: 1 }}>
                    <AlternateEmailOutlinedIcon />
                    <Typography variant="body">ventas@bekk.com.ar</Typography>
                </Box>
            </Box>
        </Box >
    );
}