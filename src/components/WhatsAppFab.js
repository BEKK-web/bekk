'use client';

import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { sendGTMEvent } from "@next/third-parties/google";

export default function WhatsAppFab() {
    return (
        <Fab
            component="a"
            href="https://wa.me/5491122296226"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            onClick={() => sendGTMEvent({ event: 'whatsapp_click', cta_location: 'fab' })}
            sx={{
                position: "fixed",
                bottom: 24,
                right: 24,
                zIndex: 1300,
                bgcolor: "#25D366",
                color: "#fff",
                "&:hover": { bgcolor: "#1EBE5D" },
            }}
        >
            <WhatsAppIcon />
        </Fab>
    );
}
