'use client';

import { Box } from "@mui/material";
import { sendGTMEvent } from "@next/third-parties/google";

// Enlace tel:/mailto: con el evento de conversión cableado, para usarlo desde
// la plantilla de producto (server component).
export default function TrackedLink({ event, ctaLocation, children, ...props }) {
    return (
        <Box
            component="a"
            onClick={() => sendGTMEvent({ event, cta_location: ctaLocation })}
            {...props}
        >
            {children}
        </Box>
    );
}
