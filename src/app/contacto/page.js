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
            flex: 1,
            paddingX: '20%',
            paddingTop: '40px',
            paddingBottom: "40px",
        }}>
            <Typography variant='title'>
                ¿Como podemos ayudarte hoy?
            </Typography>

            <ContactForm />

            {/* ---- */}
        </Box>
    );
}