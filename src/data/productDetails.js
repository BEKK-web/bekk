// Contenido de las páginas de producto (una por equipo), pedidas por quien
// maneja la pauta de Google Ads: hoy todos los anuncios llevan a /productos
// (grilla genérica) y eso baja el Nivel de calidad. Cada entrada acá es una
// página propia con su URL fija, para que cada anuncio lleve al equipo que
// la persona buscó.
//
// ORIGEN DEL TEXTO Y DATOS TÉCNICOS:
//   · Los textos descriptivos siguen el mismo criterio que src/data/servicios.js:
//     redactados en base a conocimiento técnico general del rubro.
//   · La tabla de capacidades/alimentación por categoría sale de fichas
//     públicas de fabricantes/distribuidores (no de precios, no de modelos
//     puntuales del catálogo real de BEKK, que el cliente todavía no pasó).
//     Son rangos orientativos de categoría.
//   · PENDIENTE DE VALIDAR CON EL CLIENTE antes de publicar:
//       - Capacidad real de los calefactores centrales/de conducto que vende
//         BEKK (no se encontró ficha pública de esa línea, solo de
//         calefactores residenciales sueltos).
//       - Capacidad real del conjunto de frío (sin fuente confiable).
//       - Versión trifásica del separado para conductos / multiposición.
//       - Qué marca de las 11 que vende BEKK fabrica calefactores y conjunto
//         de frío: ninguna apareció asociada a esas categorías en la
//         investigación. Sospecha: Surrey, Westric o Ciroc (no verificado).
//   · Las FAQ de envío/instalación/garantía/plazos replican exactamente las
//     respuestas ya publicadas en src/components/home/FaqSection.js, para no
//     contradecir el FAQPage de la home.
//   · Fotos: se reusa la única foto existente de src/data/productos.js por
//     producto. No hay galería de 4-8 fotos todavía (fotos reales pendientes).

const FAQS_COMUNES = {
    envios: {
        question: '¿Envían equipos a todo el país?',
        answer: 'Sí, realizamos envíos a todo el país. La instalación solo la cubrimos en CABA y Gran Buenos Aires.',
    },
    entrega: {
        question: '¿En cuánto tiempo entregan el equipo?',
        answer: 'Entregamos dentro de las 48 horas hábiles de recibido el pago.',
    },
    garantia: {
        question: '¿Quién otorga la garantía?',
        answer: 'La garantía la otorga el fabricante del equipo.',
    },
};

export const productDetails = [
    {
        slug: 'baja-silueta',
        h1: 'Aire acondicionado baja silueta',
        title: 'Aire Acondicionado Baja Silueta | BEKK',
        metaDescription: 'Equipos baja silueta para climatizar por conductos sin equipos a la vista. Venta a todo el país. Pedí tu cotización.',
        heroSubtitle: 'Unidad interior de perfil bajo que se aloja sobre el cielorraso y distribuye el aire por conductos, sin quedar a la vista. Venta a todo el país con asesoramiento profesional.',
        image: '/productos/baja-silueta.webp',
        productosSlugs: ['baja-silueta'],
        queEs: [
            'El equipo baja silueta es una unidad interior que se instala oculta sobre el cielorraso y reparte el aire por una red de conductos, dejando a la vista únicamente las rejillas de difusión. Por su perfil compacto, se adapta a espacios con poca altura libre entre el techo y el cielorraso.',
            'Se conecta a una unidad exterior que puede ubicarse en balcón, patio o azotea, y admite distintas longitudes y trazados de conducto según el plano del espacio a climatizar. La mayoría de los modelos ofrece frío y calor en una sola unidad.',
        ],
        ventajas: [
            { icon: 'hidden', text: 'No queda ningún equipo a la vista: solo se ven las rejillas' },
            { icon: 'airflow', text: 'Distribución de aire pareja en todos los ambientes conectados' },
            { icon: 'compact', text: 'Perfil bajo, pensado para espacios con poca altura de cielorraso' },
            { icon: 'temp', text: 'Frío y calor en la mayoría de los modelos' },
            { icon: 'quiet', text: 'Funcionamiento silencioso, al estar la unidad oculta' },
        ],
        specs: {
            capacidad: '9.000 a 71.000 BTU/h (aprox. 2.300 a 18.000 frigorías/h)',
            frioCalor: 'Mayoría frío y calor',
            alimentacion: 'Monofásica 220-240V',
            refrigerante: 'R32',
            nota: null,
        },
        marcas: ['gree', 'bgh', 'daikin', 'samsung'],
        faqs: [
            {
                question: '¿Cuánto consume un equipo baja silueta?',
                answer: 'Depende de la capacidad del equipo y de las horas de uso. Los modelos inverter regulan el consumo según la demanda real, por lo que consumen menos que un equipo on/off de la misma capacidad funcionando todo el tiempo al máximo.',
            },
            {
                question: '¿Qué mantenimiento necesita?',
                answer: 'Limpieza periódica de filtros y una revisión técnica anual, igual que el resto de los equipos de climatización central.',
            },
            {
                question: '¿En qué se diferencia de un separado para conductos?',
                answer: 'El baja silueta tiene un perfil más compacto, pensado para espacios con poca altura disponible. El separado para conductos admite mayor caudal y se adapta mejor a superficies más grandes.',
            },
            FAQS_COMUNES.envios,
            FAQS_COMUNES.entrega,
            FAQS_COMUNES.garantia,
        ],
        relacionados: ['separado-conductos', 'piso-techo'],
        whatsappMessage: 'Hola! Quiero consultar por un equipo baja silueta',
    },
    {
        slug: 'cassette',
        h1: 'Aire acondicionado cassette',
        title: 'Aire Acondicionado Cassette y 360° | BEKK',
        metaDescription: 'Equipos cassette y cassette 360° de marcas líderes. Venta a todo el país con asesoramiento. Pedí tu cotización.',
        heroSubtitle: 'Equipo que se embute en el cielorraso y reparte el aire en cuatro direcciones (o en todo el perímetro, en la variante 360°). Venta a todo el país con asesoramiento profesional.',
        image: '/productos/cassette.webp',
        productosSlugs: ['cassette', 'cassette-360'],
        queEs: [
            'El cassette es una unidad interior que se monta embutida en el cielorraso, quedando a la vista solo su panel frontal. Difunde el aire en cuatro direcciones, lo que ayuda a repartir la temperatura de forma pareja en el espacio donde se instala.',
            'La variante cassette 360° distribuye el aire en todo el perímetro del equipo en lugar de en cuatro salidas puntuales, logrando una circulación aún más uniforme. Ambas variantes se destacan por su bajo nivel sonoro y están disponibles en versión inverter u on/off.',
        ],
        ventajas: [
            { icon: 'airflow', text: 'Distribución de aire en 4 direcciones (360° en todo el perímetro en esa variante)' },
            { icon: 'quiet', text: 'Bajo nivel sonoro de funcionamiento' },
            { icon: 'hidden', text: 'Diseño discreto: solo el panel queda a la vista' },
            { icon: 'bolt', text: 'Disponible en inverter u on/off' },
            { icon: 'temp', text: 'Frío y calor en la mayoría de los modelos' },
        ],
        specs: {
            capacidad: '9.000 a 60.000 BTU/h (aprox. 2.300 a 15.000 frigorías/h)',
            frioCalor: 'Mayoría frío y calor',
            alimentacion: 'Monofásica 220V; trifásica en las capacidades mayores',
            refrigerante: 'R32',
            nota: null,
        },
        marcas: ['daikin', 'samsung', 'bgh', 'gree'],
        faqs: [
            {
                question: '¿Cuánto consume un equipo cassette?',
                answer: 'Depende de la capacidad y de las horas de uso. Los modelos inverter regulan el consumo según la demanda real del ambiente.',
            },
            {
                question: '¿Qué diferencia hay entre el cassette estándar y el 360°?',
                answer: 'El estándar reparte el aire en 4 direcciones puntuales. El 360° lo distribuye en todo el perímetro del equipo, logrando una circulación más uniforme.',
            },
            {
                question: '¿Qué mantenimiento necesita?',
                answer: 'Limpieza periódica de filtros y una revisión técnica anual.',
            },
            FAQS_COMUNES.envios,
            FAQS_COMUNES.entrega,
            FAQS_COMUNES.garantia,
        ],
        relacionados: ['piso-techo', 'baja-silueta'],
        whatsappMessage: 'Hola! Quiero consultar por un equipo cassette',
    },
    {
        slug: 'piso-techo',
        h1: 'Aire acondicionado piso techo',
        title: 'Aire Acondicionado Piso Techo | BEKK',
        metaDescription: 'Equipos piso techo de marcas líderes, montaje en piso o techo. Venta a todo el país. Pedí tu cotización.',
        heroSubtitle: 'Equipo que admite instalación vertical u horizontal, apoyado en el piso o colgado del techo. Venta a todo el país con asesoramiento profesional.',
        image: '/productos/piso-techo.webp',
        productosSlugs: ['piso-techo'],
        queEs: [
            'El equipo piso techo es una unidad interior versátil: puede instalarse de forma vertical, apoyada sobre el piso, o de forma horizontal, colgada del techo. Esa flexibilidad lo convierte en una alternativa cuando no hay cielorraso donde alojar otro tipo de equipo.',
            'Entrega un caudal de aire mayor al de un split tradicional, lo que le permite climatizar espacios amplios con una sola unidad interior. Se conecta a una unidad exterior y la mayoría de los modelos ofrece frío y calor.',
        ],
        ventajas: [
            { icon: 'flex', text: 'Montaje flexible: vertical en piso u horizontal en techo' },
            { icon: 'check', text: 'No necesita cielorraso ni obra para instalarse' },
            { icon: 'airflow', text: 'Mayor caudal de aire que un equipo split tradicional' },
            { icon: 'expand', text: 'Climatiza espacios amplios con una sola unidad interior' },
            { icon: 'temp', text: 'Frío y calor en la mayoría de los modelos' },
        ],
        specs: {
            capacidad: '9.000 a 60.000 BTU/h (aprox. 2.800 a 15.000 frigorías/h)',
            frioCalor: 'Mayoría frío y calor',
            alimentacion: 'Monofásica 220V',
            refrigerante: 'R32',
            nota: null,
        },
        marcas: ['bgh', 'daikin', 'samsung'],
        faqs: [
            {
                question: '¿Se puede instalar sin cielorraso?',
                answer: 'Sí, es una de sus ventajas: se apoya en el piso o se cuelga del techo, sin necesitar un cielorraso ni obra para ocultarlo.',
            },
            {
                question: '¿Cuánto consume?',
                answer: 'Depende de la capacidad y de las horas de uso. Los modelos inverter regulan el consumo según la demanda real.',
            },
            {
                question: '¿Qué mantenimiento necesita?',
                answer: 'Limpieza periódica de filtros y una revisión técnica anual.',
            },
            FAQS_COMUNES.envios,
            FAQS_COMUNES.entrega,
            FAQS_COMUNES.garantia,
        ],
        relacionados: ['cassette', 'rooftop'],
        whatsappMessage: 'Hola! Quiero consultar por un equipo piso techo',
    },
    {
        slug: 'rooftop',
        h1: 'Equipos rooftop',
        title: 'Equipos Rooftop | BEKK Climatización',
        metaDescription: 'Equipos rooftop compactos de alta capacidad y marcas líderes. Venta a todo el país. Pedí tu cotización.',
        heroSubtitle: 'Unidad central para conductos que se instala en el exterior, habitualmente sobre la cubierta. Venta a todo el país con asesoramiento profesional.',
        image: '/productos/rooftop.webp',
        productosSlugs: ['rooftop'],
        queEs: [
            'El rooftop es una unidad central que concentra en un solo equipo exterior todo lo necesario para climatizar un espacio por conductos: compresor, serpentinas e intercambio de aire. Se instala habitualmente sobre la cubierta del edificio o nave.',
            'Al ser una sola unidad de instalación exterior, simplifica el montaje frente a tener varias unidades distribuidas, y libera espacio interior ya que no requiere una unidad exterior adicional por sector. Está disponible en versión solo frío o frío y calor.',
        ],
        ventajas: [
            { icon: 'box', text: 'Todo el sistema concentrado en un único equipo exterior' },
            { icon: 'check', text: 'Simplifica el montaje frente a múltiples unidades exteriores' },
            { icon: 'expand', text: 'Alta capacidad para grandes superficies' },
            { icon: 'airflow', text: 'Distribución por conductos hacia los distintos sectores' },
            { icon: 'temp', text: 'Disponible en solo frío o frío y calor' },
        ],
        specs: {
            capacidad: '3 a 30 TR (aprox. 36.000 a 360.000 BTU/h)',
            frioCalor: 'Según modelo: solo frío o frío y calor',
            alimentacion: 'Trifásica 380-460V',
            refrigerante: 'R410A / R454B en líneas nuevas',
            nota: null,
        },
        marcas: ['carrier', 'midea', 'york'],
        faqs: [
            {
                question: '¿Por qué conviene un rooftop frente a varias unidades exteriores?',
                answer: 'Porque concentra todo el sistema en un único equipo instalado en el techo, lo que simplifica el montaje y libera espacio interior y de fachada.',
            },
            {
                question: '¿Qué mantenimiento necesita?',
                answer: 'Revisión técnica periódica del equipo y de la red de conductos, además de la limpieza de filtros.',
            },
            {
                question: '¿Viene en versión frío y calor?',
                answer: 'Sí, según el modelo. Hay versiones solo frío y versiones frío y calor.',
            },
            FAQS_COMUNES.envios,
            FAQS_COMUNES.entrega,
            FAQS_COMUNES.garantia,
        ],
        relacionados: ['chillers', 'separado-conductos'],
        whatsappMessage: 'Hola! Quiero consultar por un equipo rooftop',
    },
    {
        slug: 'chillers',
        h1: 'Chillers y unidades enfriadoras de agua',
        title: 'Chillers y Enfriadoras de Agua | BEKK',
        metaDescription: 'Chillers y unidades enfriadoras de agua de marcas líderes. Venta a todo el país con asesoramiento. Pedí tu cotización.',
        heroSubtitle: 'Sistema de climatización por agua enfriada, orientado a instalaciones de mayor porte. Venta a todo el país con asesoramiento profesional.',
        image: '/productos/unidades-enfriadoras-chillers.webp',
        productosSlugs: ['unidades-enfriadoras-chillers'],
        queEs: [
            'Un chiller (o unidad enfriadora) enfría agua en lugar de aire, y esa agua se distribuye por una red de cañerías hasta las unidades que climatizan cada espacio. Es un sistema por agua, a diferencia de los sistemas por refrigerante directo como el VRV.',
            'Por su capacidad, se usa en instalaciones de mayor porte, donde conviene centralizar la generación de frío en una o pocas unidades y distribuir agua en lugar de aire o refrigerante por distancias largas.',
        ],
        ventajas: [
            { icon: 'water', text: 'Sistema por agua, pensado para instalaciones de mayor porte' },
            { icon: 'box', text: 'Centraliza la generación de frío en una o pocas unidades' },
            { icon: 'expand', text: 'Permite distribuir climatización a distancias mayores que el aire' },
            { icon: 'chart', text: 'Escalable según la capacidad que requiera el proyecto' },
        ],
        specs: {
            capacidad: 'Desde 5 TR hasta varios cientos de TR en líneas industriales',
            frioCalor: 'Mayoría solo frío; algunas líneas con bomba de calor',
            alimentacion: 'Trifásica 380-400V',
            refrigerante: 'R410A / R134a / R454B según línea',
            nota: null,
        },
        marcas: ['york', 'carrier'],
        faqs: [
            {
                question: '¿En qué se diferencia un chiller de un sistema VRV?',
                answer: 'El chiller distribuye agua enfriada por cañerías; el VRV distribuye refrigerante directo por tuberías de cobre. El chiller se usa habitualmente en instalaciones de mayor porte.',
            },
            {
                question: '¿Qué mantenimiento necesita?',
                answer: 'Revisión técnica periódica del equipo, de la red hidráulica y de las unidades que reciben el agua enfriada.',
            },
            FAQS_COMUNES.envios,
            FAQS_COMUNES.entrega,
            FAQS_COMUNES.garantia,
        ],
        relacionados: ['rooftop', 'sistemas-vrv'],
        whatsappMessage: 'Hola! Quiero consultar por chillers / unidades enfriadoras',
    },
    {
        slug: 'separado-conductos',
        h1: 'Equipos separados para conductos y multiposición',
        title: 'Separado para Conductos y Multiposición | BEKK',
        metaDescription: 'Equipos separados para conductos y multiposición de marcas líderes. Venta a todo el país. Pedí tu cotización.',
        heroSubtitle: 'Equipo que se distribuye por conductos y admite montaje vertical u horizontal (multiposición), lo que da flexibilidad según el espacio disponible. Venta a todo el país con asesoramiento profesional.',
        image: '/productos/separado-para-conductos-multiposicion.webp',
        productosSlugs: ['separado-para-conductos-multiposicion'],
        queEs: [
            'El separado para conductos es una unidad interior que distribuye el aire por una red de conductos y rejillas, sin quedar a la vista. La variante multiposición admite instalarse en distintas posiciones (horizontal u vertical) según el espacio técnico disponible, lo que facilita adaptarlo a construcciones ya terminadas o en obra.',
            'Se conecta a una unidad exterior y suele ofrecer mayor caudal que un baja silueta, por lo que se adapta mejor a superficies más grandes.',
        ],
        ventajas: [
            { icon: 'flex', text: 'Se adapta a distintas posiciones de montaje según el espacio técnico' },
            { icon: 'airflow', text: 'Mayor caudal que un baja silueta, para superficies más grandes' },
            { icon: 'hidden', text: 'Distribución por conductos: no queda a la vista' },
            { icon: 'temp', text: 'Frío y calor en la mayoría de los modelos' },
        ],
        specs: {
            capacidad: 'Aprox. 18.000 a 31.000 BTU/h (5,5 a 9 kW) en los modelos monofásicos; capacidades mayores a confirmar',
            frioCalor: 'Mayoría frío y calor',
            alimentacion: 'Monofásica 220-240V confirmada; versión trifásica para mayor capacidad a confirmar con el fabricante',
            refrigerante: 'R32',
            nota: 'Capacidad y alimentación trifásica a validar con el catálogo real de BEKK.',
        },
        marcas: ['midea', 'bgh', 'gree'],
        faqs: [
            {
                question: '¿Qué es el multiposición?',
                answer: 'Es la variante del separado para conductos que puede instalarse en distintas posiciones —horizontal o vertical— según el espacio técnico disponible.',
            },
            {
                question: '¿En qué se diferencia del baja silueta?',
                answer: 'El separado para conductos admite mayor caudal, por lo que se adapta mejor a superficies más grandes. El baja silueta tiene un perfil más compacto para espacios con poca altura.',
            },
            {
                question: '¿Qué mantenimiento necesita?',
                answer: 'Limpieza periódica de filtros y una revisión técnica anual.',
            },
            FAQS_COMUNES.envios,
            FAQS_COMUNES.entrega,
            FAQS_COMUNES.garantia,
        ],
        relacionados: ['baja-silueta', 'calefactores'],
        whatsappMessage: 'Hola! Quiero consultar por un equipo separado para conductos / multiposición',
    },
    {
        slug: 'calefactores',
        h1: 'Calefactores y calefactores de conducto',
        title: 'Calefactores Centrales y de Conducto | BEKK',
        metaDescription: 'Calefactores y calefactores de conducto de marcas líderes. Venta a todo el país. Pedí tu cotización.',
        heroSubtitle: 'Equipos para la parte de calor de un sistema central, alimentados a gas natural, gas envasado o gasoil. Venta a todo el país con asesoramiento profesional.',
        image: '/productos/calefactor.webp',
        productosSlugs: ['calefactor', 'calefactor-de-conducto'],
        queEs: [
            'El calefactor central genera la calefacción de un sistema de climatización y puede combinarse con un conjunto de frío para cubrir también el verano. El calefactor de conducto es la variante pensada para instalarse dentro de la propia red de conductos de aire acondicionado o ventilación, en forma horizontal o vertical.',
            'Ambas versiones se alimentan a gas natural, gas envasado o gasoil, según la instalación disponible, y están pensadas para sistemas por conductos de mayor capacidad que un calefactor individual.',
        ],
        ventajas: [
            { icon: 'flame', text: 'Alta capacidad de calefacción para sistemas por conductos' },
            { icon: 'check', text: 'El de conducto se instala dentro de la propia red de aire acondicionado' },
            { icon: 'temp', text: 'Puede combinarse con un conjunto de frío para climatizar todo el año' },
            { icon: 'flame', text: 'Funciona con gas natural, gas envasado o gasoil' },
        ],
        specs: {
            capacidad: 'A confirmar con BEKK',
            frioCalor: 'Solo calor',
            alimentacion: 'Gas natural o gas envasado confirmado; gasoil disponible según modelo',
            refrigerante: 'No aplica (combustión)',
            nota: 'No se encontró ficha pública de la línea de calefactores centrales/de conducto que vende BEKK ni la marca exacta que los fabrica — pendiente de confirmar con el cliente antes de publicar una capacidad específica.',
        },
        marcas: [],
        faqs: [
            {
                question: '¿Con qué se alimentan?',
                answer: 'Pueden alimentarse a gas natural, gas envasado o gasoil, según la instalación disponible.',
            },
            {
                question: '¿Cuál es la diferencia entre el calefactor y el calefactor de conducto?',
                answer: 'El calefactor de conducto se instala dentro de la propia red de conductos de aire acondicionado o ventilación. El calefactor central es la unidad que genera el calor para todo el sistema.',
            },
            {
                question: '¿Se puede combinar con equipos de frío?',
                answer: 'Sí, se puede combinar con un conjunto de frío para climatizar en verano e invierno con el mismo sistema de conductos.',
            },
            FAQS_COMUNES.envios,
            FAQS_COMUNES.entrega,
            FAQS_COMUNES.garantia,
        ],
        relacionados: ['conjunto-de-frio', 'separado-conductos'],
        whatsappMessage: 'Hola! Quiero consultar por calefactores',
    },
    {
        slug: 'conjunto-de-frio',
        h1: 'Conjunto de frío',
        title: 'Conjunto de Frío | BEKK Climatización',
        metaDescription: 'Conjuntos de frío de marcas líderes para sistemas por conductos. Venta a todo el país. Pedí tu cotización.',
        heroSubtitle: 'Equipo por conductos pensado para anexar a un calefactor existente. Venta a todo el país con asesoramiento profesional.',
        image: '/productos/conjunto-de-frio.webp',
        productosSlugs: ['conjunto-de-frio'],
        queEs: [
            'El conjunto de frío agrega la función de refrigeración a un sistema de calefacción central por conductos ya instalado. En lugar de reemplazar el calefactor, se anexa a él, de modo que el mismo sistema de conductos sirve tanto para calefaccionar en invierno como para refrigerar en verano.',
            'Es una alternativa habitual cuando ya existe una instalación de calefacción central por conductos y se busca sumar frío sin rehacer la red de distribución de aire.',
        ],
        ventajas: [
            { icon: 'temp', text: 'Suma refrigeración a un sistema de calefacción central ya instalado' },
            { icon: 'airflow', text: 'Aprovecha la misma red de conductos existente' },
            { icon: 'check', text: 'No requiere rehacer la distribución de aire' },
        ],
        specs: {
            capacidad: 'A confirmar con BEKK',
            frioCalor: 'Solo frío (se anexa a un calefactor existente)',
            alimentacion: 'A confirmar con BEKK',
            refrigerante: 'A confirmar con BEKK',
            nota: 'No se encontró ficha pública de distribuidor argentino para esta categoría ni la marca exacta que fabrica el conjunto de frío que vende BEKK — pendiente de confirmar con el cliente antes de publicar una capacidad específica.',
        },
        marcas: [],
        faqs: [
            {
                question: '¿Qué es un conjunto de frío?',
                answer: 'Es el equipo que se anexa a un calefactor central por conductos ya instalado, para agregarle la función de refrigeración y climatizar también en verano.',
            },
            {
                question: '¿Se puede instalar sobre cualquier calefactor?',
                answer: 'Depende de la compatibilidad con el calefactor existente. Escribinos con los datos de tu instalación y te asesoramos.',
            },
            FAQS_COMUNES.envios,
            FAQS_COMUNES.entrega,
            FAQS_COMUNES.garantia,
        ],
        relacionados: ['calefactores', 'baja-silueta'],
        whatsappMessage: 'Hola! Quiero consultar por un conjunto de frío',
    },
    {
        slug: 'sistemas-vrv',
        h1: 'Sistemas VRV / VRF',
        title: 'Sistemas VRV / VRF | BEKK Climatización',
        metaDescription: 'Sistemas VRV / VRF de caudal variable de refrigerante, de marcas líderes. Venta a todo el país. Pedí tu cotización.',
        heroSubtitle: 'Sistema de caudal variable de refrigerante que conecta una única unidad exterior con múltiples unidades interiores. Venta a todo el país con asesoramiento profesional.',
        image: '/productos/sistema-vrv.webp',
        productosSlugs: ['sistema-vrv'],
        queEs: [
            'VRV (Volumen de Refrigerante Variable, también conocido como VRF) es un sistema de aire acondicionado central avanzado que conecta una única unidad exterior con múltiples unidades interiores, permitiendo climatizar distintos espacios de forma independiente.',
            'La particularidad está en el caudal variable: el sistema regula cuánto refrigerante envía a cada unidad interior según lo que ese espacio esté pidiendo en ese momento, en lugar de trabajar siempre al máximo y encenderse y apagarse. Una misma unidad exterior puede alimentar numerosas unidades interiores, según el modelo y la marca.',
        ],
        ventajas: [
            { icon: 'box', text: 'Una sola unidad exterior alimenta múltiples unidades interiores' },
            { icon: 'zones', text: 'Control de temperatura independiente por espacio' },
            { icon: 'bolt', text: 'Caudal de refrigerante variable: mayor eficiencia que un sistema que enciende y apaga al máximo' },
            { icon: 'check', text: 'Reduce la cantidad de unidades exteriores necesarias' },
            { icon: 'temp', text: 'Frío y calor, o recuperación de calor según el modelo' },
        ],
        specs: {
            capacidad: 'Unidades exteriores de 4 a 24 HP, con hasta 64 unidades interiores por unidad exterior según el modelo',
            frioCalor: 'Frío y calor (bomba de calor), o recuperación de calor en sistemas de 3 tubos',
            alimentacion: 'Trifásica 380-460V',
            refrigerante: 'R410A',
            nota: null,
        },
        marcas: ['samsung', 'daikin'],
        faqs: [
            {
                question: '¿Cuántas unidades interiores puede manejar una sola unidad exterior?',
                answer: 'Depende del modelo y la marca: puede llegar hasta varias decenas de unidades interiores conectadas a una sola unidad exterior.',
            },
            {
                question: '¿Se puede controlar cada ambiente por separado?',
                answer: 'Sí, esa es la principal ventaja del sistema: cada unidad interior se controla de forma independiente.',
            },
            {
                question: '¿Qué mantenimiento necesita?',
                answer: 'Revisión técnica periódica del sistema y de las unidades interiores, además de la limpieza de filtros.',
            },
            FAQS_COMUNES.envios,
            FAQS_COMUNES.entrega,
            FAQS_COMUNES.garantia,
        ],
        relacionados: ['chillers', 'cassette'],
        whatsappMessage: 'Hola! Quiero consultar por sistemas VRV',
    },
];

export function getProductDetail(slug) {
    return productDetails.find((p) => p.slug === slug);
}

// VRV conserva su URL histórica en /soluciones (ya indexada y usada por el
// anuncio); el resto vive bajo /productos.
export function productPath(slug) {
    return slug === 'sistemas-vrv' ? '/soluciones/sistemas-vrv' : `/productos/${slug}`;
}
