// Catálogo de equipos. Fuente única: antes salía en vivo de la API Django en
// bekk.pythonanywhere.com, que el cliente no usaba para gestionar productos.
// Se migró acá para que el sitio no dependa de ese backend — si se caía, la
// grilla quedaba vacía y las fotos daban 404.
//
// Las imágenes viven en public/productos/. Se les quitó el fondo blanco con
// floodfill desde los bordes (fuzz 2%), así se apoyan sobre cualquier fondo
// sin recuadro. Para sumar un producto: agregar la foto ahí y una entrada acá.

export const productos = [
    {
        slug: 'cassette',
        name: 'Cassette',
        description: 'Bajo nivel sonoro.\nCuatro vías de difusión de aire.\nInverter u on off',
        image: '/productos/cassette.webp',
    },
    {
        slug: 'cassette-360',
        name: 'Cassette 360',
        description: 'Flujo de aire 360\nCompresor digital inverter',
        image: '/productos/cassette-360.webp',
    },
    {
        slug: 'piso-techo',
        name: 'Piso techo',
        description: 'Opción de instalación vertical u horizontal\nInverter u on off.',
        image: '/productos/piso-techo.webp',
    },
    {
        slug: 'baja-silueta',
        name: 'Baja silueta',
        description: 'Climatiza amplios espacios.\nPara conductos.\nLa unidad interior no permanece a la vista.\nInverter u on off',
        image: '/productos/baja-silueta.webp',
    },
    {
        slug: 'separado-para-conductos-multiposicion',
        name: 'Separado para conductos - multiposición',
        description: 'Para conductos\nMontaje vertical u horizontal',
        image: '/productos/separado-para-conductos-multiposicion.webp',
    },
    {
        slug: 'rooftop',
        name: 'Rooftop',
        description: 'Central para conductos.\nUna sola unidad de instalación exterior',
        image: '/productos/rooftop.webp',
    },
    {
        slug: 'unidades-enfriadoras-chillers',
        name: 'Unidades enfriadoras - Chillers',
        description: 'Por agua',
        image: '/productos/unidades-enfriadoras-chillers.webp',
    },
    {
        slug: 'calefactor',
        name: 'Calefactor',
        description: 'Alta capacidad de calefacción\nAmplitud de utilizaciones.\nPara ser alimentados por gas natural, gas oil, gas envasado.\nPosibilidad de combianr con conjuntos de frío.',
        image: '/productos/calefactor.webp',
    },
    {
        slug: 'conjunto-de-frio',
        name: 'Conjunto de frío',
        description: 'Por conductos.\nPara anexar a calefactor.',
        image: '/productos/conjunto-de-frio.webp',
    },
    {
        slug: 'calefactor-de-conducto',
        name: 'Calefactor de conducto',
        description: 'Para ser instalados en forma horizontal o vertical, en conductos de aire acondicionado o ventilación que\nrequiera ser calentado',
        image: '/productos/calefactor-de-conducto.webp',
    },
    {
        slug: 'sistema-vrv',
        name: 'Sistema VRV',
        description: 'Una unidad exterior alimenta varias interiores.\nClimatización independiente por ambiente.\nCaudal de refrigerante variable.',
        image: '/productos/sistema-vrv.webp',
    },
];
