import ContactForm from "@/components/ContactForm";
import { Box, Typography } from "@mui/material";

export default function Contacto() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: `radial-gradient(circle at center, #c7e4ea 0%, #E4E4E4 80%)`,
            height: "100vh",
            paddingX: "20%",
        }}>
            <Typography variant='title' sx={{ mb: 2 }}>
                ¿Como podemos ayudarte hoy?
            </Typography>
            <ContactForm />
        </Box>
    );
}