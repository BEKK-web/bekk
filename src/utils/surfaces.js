// Fondos veteados, alternando con el fondo crema base.
//
// Hay dos archivos porque `cover` estira la textura hasta cubrir el alto del
// contenedor: la de la landing (1400x1000) se lava cuando la sección es mucho
// más alta que eso. Tilearla no es alternativa, porque en pantallas anchas se
// ve repetida de lado a lado.

// Secciones de la home (trayectoria, soluciones, contacto), de alto acotado.
export const veinedSurface = {
    backgroundColor: '#EEEEEC',
    backgroundImage: 'url(/textures/veta-gris.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

// Vistas largas, como la grilla de productos, que pasa de los 2000px de alto.
//
// Es la misma veta de la landing ampliada 3x y recortada a 2800x3000: el patrón
// queda más gradual, que es lo que pide un área tan grande, sin perder amplitud.
// Se probaron texturas generadas aparte con manchas amplias, pero en productos
// el fondo solo asoma por los márgenes, y una textura de baja frecuencia casi no
// varía dentro de una franja de 120px: quedaba invisible, y cuánto se notaba
// dependía de dónde cayera una mancha más que de los parámetros.
export const veinedSurfaceTall = {
    ...veinedSurface,
    backgroundImage: 'url(/textures/veta-gris-alta.webp)',
};
