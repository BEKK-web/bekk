// Fondo gris veteado usado en las secciones intercaladas de la home
// (trayectoria, soluciones y contacto) y en la vista de productos,
// alternando con el fondo crema base.
//
// Se tilea a tamaño nativo en lugar de usar `cover`: con `cover` la textura se
// estira para cubrir el alto del contenedor, así que en una sección larga (la
// grilla de productos mide 2400px contra los 1000px del archivo) el veteado se
// lava hasta casi desaparecer. Tileada mantiene la misma definición sin
// importar cuánto crezca la sección, y la unión entre tiles no se percibe
// porque la textura es de contraste muy bajo.
export const veinedSurface = {
    backgroundColor: '#EEEEEC',
    backgroundImage: 'url(/textures/veta-gris.jpg)',
    backgroundSize: '1400px auto',
    backgroundPosition: 'center top',
    backgroundRepeat: 'repeat',
};
