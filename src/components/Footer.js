'use client';
import { Box, Button, Typography, Grid } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useSnackbar } from "@/components/SnackbarContext";

import { useState } from 'react';

export default function Footer() {
    const { showSnackbar } = useSnackbar();


    const handleCopy = (information) => {
        if (navigator && navigator.clipboard) {
            navigator.clipboard.writeText(information);
        }
        showSnackbar('Información copiada al portapapeles', "success");
    }

    const [animateCopyEmail, setAnimateCopyEmail] = useState(false);
    const [animateTel, setAnimateTel] = useState(false);

    return (
        <Box sx={{ bgcolor: 'background.footer', color: 'secondary.contrastText', padding: 4 }}>
            <Grid container>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ padding: 2 }} alignContent='center'>
                    <Button variant='contained' href='/contacto' sx={{ backgroundColor: 'primary.button', color: 'primary.main', display: 'flex', justifySelf: { xs: 'center', sm: 'end' } }}>
                        <Typography variant="primaryButton">Ir a contacto</Typography>
                    </Button>
                </Grid>

                {/*  */}

                <Grid size={{ xs: 12, sm: 6 }} alignContent='center'>
                    <Grid size={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, justifySelf: { xs: 'center', sm: 'start' } }}>
                            <LocationOnOutlinedIcon />
                            <Typography variant="body">Buenos Aires, Argentina</Typography>
                        </Box>
                    </Grid>
                    <Grid
                        size={12}
                        onClick={() => window.open('https://wa.me/5491122296226', '_blank')}
                        onMouseEnter={() => setAnimateTel(true)}
                        onMouseLeave={() => setAnimateTel(false)}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: 1, mb: 2, justifySelf: { xs: 'center', sm: 'start' } }}>
                            <LocalPhoneOutlinedIcon />
                            <Typography variant="body">+54 9 11 2229-6226</Typography>
                            <ChatBubbleOutlineIcon sx={{ visibility: { lg: 'visible', xl: animateTel ? 'visible' : 'hidden' } }} />
                        </Box>
                    </Grid>
                    <Grid
                        size={12}
                        onClick={() => handleCopy('ventas@bekk.com.ar')}
                        onMouseEnter={() => setAnimateCopyEmail(true)}
                        onMouseLeave={() => setAnimateCopyEmail(false)}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: 1, justifySelf: { xs: 'center', sm: 'start' } }}>
                            <AlternateEmailOutlinedIcon />
                            <Typography variant="body">ventas@bekk.com.ar</Typography>
                            <ContentCopyIcon sx={{ visibility: { lg: 'visible', xl: animateCopyEmail ? 'visible' : 'hidden' } }} />
                        </Box>
                    </Grid>
                </Grid>
            </Grid >
        </Box >
    );
}