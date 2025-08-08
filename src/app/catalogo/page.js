'use client';

import { useEffect } from "react";

export default function CatalogoRedirect() {
    useEffect(() => {
        window.location.href = '/';
    }, []);

    return <div style={{ height: '100vh' }}></div>;
}