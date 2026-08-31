'use client';

import { Button } from "@mui/material";
import { sendGTMEvent } from "@next/third-parties/google";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { waLink } from "@/utils/whatsapp";

// Botón de WhatsApp con el evento de conversión ya cableado, para poder usarlo
// desde páginas que son server components.
export default function WhatsAppCta({ message, ctaLocation, detail, children, ...props }) {
    return (
        <Button
            variant="contained"
            color="secondary"
            href={waLink(message)}
            target="_blank"
            rel="noopener"
            startIcon={<WhatsAppIcon />}
            onClick={() => sendGTMEvent({
                event: 'whatsapp_click',
                cta_location: ctaLocation,
                ...(detail ? { detalle: detail } : {}),
            })}
            {...props}
        >
            {children}
        </Button>
    );
}
