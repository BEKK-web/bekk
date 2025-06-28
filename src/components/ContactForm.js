'use client'
import { FormControl, TextField, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import { useRef } from "react";

export default function ContactForm() {
    const formRef = useRef();

    const handleSendMessage = (e) => {
        // TODO: Implement the logic to send email
        // TODO: Implement snackbar to show success or error message
        // TODO: Reset form after sending message
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const message = {
            name: formData.get('name') || '',
            email: formData.get('email') || '',
            phone: formData.get('phone') || '',
            message: formData.get('message') || ''
        };
        console.log(message);
    };

    return (
        <FormControl fullWidth component="form" onSubmit={handleSendMessage} ref={formRef}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                    <TextField
                        required
                        name="name"
                        label="Nombre y apellido"
                        variant="outlined"
                        fullWidth
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
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <TextField
                        name="message"
                        required
                        label="Mensaje"
                        multiline
                        minRows={4}
                        variant="outlined"
                        fullWidth
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
        </FormControl>
    );
}