import ContactForm from "@/components/ContactForm";
import { Box, Typography } from "@mui/material";

export default function Contacto() {
    return (
        <Box sx={{
            height: "80vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: `radial-gradient(circle at left, #c7e4ea 0%, #E4E4E4 80%)`,
            padding: '20%',
        }}>
            <Typography variant='title' sx={{ mb: 2 }}>
                ¿Como podemos ayudarte hoy?
            </Typography>
            <ContactForm />
        </Box>
    );
}