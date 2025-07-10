'use client'
import { FormControl, TextField, Button, Typography, CircularProgress, Box, Grid, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSnackbar } from "@/components/SnackbarContext";
import { useState } from "react";

export default function ContactForm() {
    const { showSnackbar } = useSnackbar();

    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState('idle'); // 'idle', 'enviando'

    const handleSendMessage = async (e) => {
        e.preventDefault();

        setStatus('enviando');

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });

        if (res.status === 200) {
            showSnackbar('Ya recibimos tu email!', "success");
            setForm({ name: '', email: '', phone: '', message: '' });
        } else {
            showSnackbar('Hubo un error al enviar el mail, si persiste, contactarnos por WhatsApp', "error");
        }
        setStatus('idle');

    };

    return (
        status === 'idle' ?
            <><Typography variant="labelHint" sx={{ mb: 2, color: 'primary.disclamerText', alignSelf: 'start' }}>
                * Todos los campos son obligatorios
            </Typography>
                <FormControl fullWidth component="form" onSubmit={handleSendMessage} height="40vh">
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                required
                                name="name"
                                label="Nombre y apellido"
                                type="text"
                                placeholder="Hugo Ordoñez"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                value={form.name || ''}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                required
                                name="email"
                                label="Email"
                                type="email"
                                placeholder="example@email.com"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                value={form.email || ''}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                required
                                name="phone"
                                label="Teléfono"
                                type="tel"
                                placeholder="+54 xx xxxx-xxxx"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                inputMode="tel"
                                value={form.phone || ''}
                            />
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                            <TextField
                                required
                                name="message"
                                label="Mensaje"
                                multiline
                                minRows={4}
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                value={form.message || ''}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <Button
                                type="submit"
                                variant='contained'
                                sx={{
                                    backgroundColor: 'primary.button',
                                    color: 'primary.main'
                                }}
                                fullWidth
                            >
                                <Typography variant="primaryButton">Enviar</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </FormControl >

                <Accordion sx={{ width: '100%', background: 'transparent', boxShadow: 'none', alignSelf: 'start' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="contact-products-content"
                        id="contact-products-header"
                    >
                        <Typography variant="labelHint" sx={{ color: 'primary.disclamerText' }}>
                            No dudes en contactarnos si tenes una consulta por nuestros servicios o por los siguientes productos:
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="labelHint" sx={{ color: 'primary.disclamerText' }}>
                            Ventilación central, Climatización central, Climatización corporativa, Rooftop,
                            Separado para conductos, Precio aire acondicionado central, Aire acondicionado central presupuesto,
                            Equipos de aire acondicionado central, Comprar aire acondicionado central, Multiposición,
                            Baja silueta, Piso techo, aire acondicionado baja silueta, Calefactor central,
                            Servicios de climatización, Sistemas de climatización, Aire acondicionado central
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </>
            :
            <Box display="flex" justifyContent="center" alignItems="center" height="45vh">
                <CircularProgress color="primary.button" />
            </Box>
    );
}