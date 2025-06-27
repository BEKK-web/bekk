import { FormControl, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function ContactForm() {
    return (
        <FormControl fullWidth component="form">
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                    <TextField
                        label="Nombre y apellido"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                        label="Email"
                        type="email"
                        placeholder="example@email.com"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                        label="Teléfono"
                        type="tel"
                        placeholder="+54 xx xxxx-xxxx"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <TextField
                        label="Mensaje"
                        multiline
                        minRows={4}
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </FormControl>
    );
}