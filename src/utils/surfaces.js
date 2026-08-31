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
// Es una textura propia de 2800x3000, no la de la landing ampliada: el veteado
// fino de aquella, visto sobre un área tan grande, se lee como ruido. Esta usa
// manchas amplias y transiciones graduales, con casi la mitad de amplitud.
export const veinedSurfaceTall = {
    ...veinedSurface,
    backgroundImage: 'url(/textures/veta-gris-alta.webp)',
};
