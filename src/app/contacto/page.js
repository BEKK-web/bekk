import ContactForm from "@/components/ContactForm";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
            <Typography variant="labelHint" sx={{ mb: 2, color: 'primary.disclamerText', alignSelf: 'start' }}>
                * Todos los campos son obligatorios
            </Typography>
            <ContactForm />

            {/* ---- */}

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
        </Box>
    );
}