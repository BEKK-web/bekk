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
// Textura propia de 2800x3000, generada con la misma receta que la de la landing
// (plasma + Sinusoid, que es lo que produce las vetas) pero a mayor escala, así
// el patrón resulta más gradual sin dejar de leerse.
//
// El error de los intentos previos fue medir dispersión y amplitud: dieron
// iguales a las de la landing en versiones que a simple vista eran un fondo
// liso. Lo que decide si se ve no es cuánto varía sino el tamaño de las manchas
// — con manchas de 300px o más, una franja de pantalla muestra una sola
// transición suave y el ojo la lee como color sólido.
//
// El nombre lleva hash del contenido a propósito. Durante el ajuste se
// reemplazó el archivo varias veces con el mismo nombre y los navegadores
// quedaron sirviendo versiones viejas, lo que hacía parecer que los cambios no
// tenían efecto. Si se regenera la textura, renombrar con el hash nuevo.
export const veinedSurfaceTall = {
    ...veinedSurface,
    backgroundImage: 'url(/textures/veta-productos-549d0a6e.webp)',
};
