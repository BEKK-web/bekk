'use client'

import { useEffect, useState } from "react";
import { useSnackbar } from '@/components/SnackbarContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SnackBar() {
    const { message, severity, closeSnackbar } = useSnackbar();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (message) {
            setIsOpen(true);
        }
    }, [message]);

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsOpen(false);
        closeSnackbar();
    };

    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}

