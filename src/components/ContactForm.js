'use client'
import { FormControl, TextField, Button, Typography, CircularProgress, Box, Grid } from "@mui/material";
import { sendGTMEvent } from "@next/third-parties/google";
import { useSnackbar } from "@/components/SnackbarContext";
import { useState } from "react";

export default function ContactForm() {
    const { showSnackbar } = useSnackbar();

    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState('idle'); // 'idle', 'enviando'

    const handleSendMessage = async (e) => {
        e.preventDefault();

        setStatus('enviando');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            if (res.ok) {
                showSnackbar('Ya recibimos tu email!', "success");
                setForm({ name: '', email: '', phone: '', message: '' });
                sendGTMEvent({ event: 'contact_form_submit' });
            } else {
                showSnackbar('Hubo un error al enviar el mail, si persiste, contactarnos por WhatsApp', "error");
            }
        } catch (error) {
            // Sin este catch, un fallo de red dejaba el formulario trabado en el spinner.
            console.error('Error al enviar el formulario de contacto:', error);
            showSnackbar('Hubo un error al enviar el mail, si persiste, contactarnos por WhatsApp', "error");
        } finally {
            setStatus('idle');
        }
    };

    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                p: { xs: 3, md: 5 },
            }}
        >
            {status === 'idle' ? (
                <>
                    <Typography variant="body2" sx={{ mb: 2.5, fontSize: 13, color: 'text.secondary' }}>
                        * Todos los campos son obligatorios
                    </Typography>
                    <FormControl fullWidth component="form" onSubmit={handleSendMessage}>
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
                                    placeholder="ejemplo@email.com"
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
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Enviar
                                </Button>
                            </Grid>
                        </Grid>
                    </FormControl>
                </>
            ) : (
                <Box display="flex" justifyContent="center" alignItems="center" height="45vh">
                    <CircularProgress color="primary" />
                </Box>
            )}
        </Box>
    );
}
