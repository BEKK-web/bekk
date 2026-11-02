// Contenido de las páginas de producto (una por equipo), pedidas por quien
// maneja la pauta de Google Ads: hoy todos los anuncios llevan a /productos
// (grilla genérica) y eso baja el Nivel de calidad. Cada entrada acá es una
// página propia con su URL fija, para que cada anuncio lleve al equipo que
// la persona buscó.
//
// ORIGEN DEL TEXTO Y DATOS TÉCNICOS:
//   · Los textos descriptivos siguen el mismo criterio que src/data/servicios.js:
//     redactados en base a conocimiento técnico general del rubro.
//   · La ficha técnica y las marcas de cada página salen del catálogo viejo de
//     BEKK (export de agosto 2024), colapsado a una página por tipo de equipo:
//     cada variante (marca, capacidad, inverter u on/off, 220V o 380V) se
//     resume como rango o lista en la tabla. Solo se muestran marcas de la
//     landing (BrandsStrip); Runway, que estaba en el catálogo, no se incluye.
//   · Marcas que no estaban en el catálogo para ese tipo se agregaron solo si
//     se verificó que la marca fabrica ese equipo (sitios oficiales). Se dejaron
//     afuera las que solo lo tienen como unidad interior de un sistema VRV o sin
//     evidencia (Daikin/Samsung/Gree en baja silueta, ducto o rooftop; York en
//     rooftop; BGH en VRV).
//   · VRV no estaba en el catálogo: su contenido sale de gruporefri.com
//     (ventajas-de-la-tecnologia-vrv-vrf), que no da rangos numéricos, por eso
//     la ficha es descriptiva y no cita HP, cantidad de interiores ni refrigerante.
//   · Las FAQ de envío/instalación/garantía/plazos replican exactamente las
//     respuestas ya publicadas en src/components/home/FaqSection.js, para no
//     contradecir el FAQPage de la home.
//   · Fotos: se reusa la única foto existente de src/data/productos.js por
//     producto. No hay galería de 4-8 fotos todavía (fotos reales pendientes).

const FAQS_COMUNES = {
    envios: {
        question: '¿Envían equipos a todo el país?',
        answer: 'Sí, realizamos envíos a todo el país. Instalación en CABA y Gran Buenos Aires.',
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
            'El equipo baja silueta es una unidad interior que se instala oculta sobre el cielorraso y distribuye el aire por una red de conductos, dejando a la vista únicamente las rejillas de difusión. Por su perfil compacto, se adapta a espacios con poca altura libre entre el techo y el cielorraso.',
            'Se conecta a una unidad exterior que puede ubicarse en balcón, patio o azotea, y admite distintas longitudes y trazados de conducto según el plano del espacio a climatizar. Ofrece frío y calor en una sola unidad.',
        ],
        ventajas: [
            { icon: 'hidden', text: 'No queda ningún equipo a la vista: solo se ven las rejillas' },
            { icon: 'airflow', text: 'Distribución de aire pareja en todos los ambientes conectados' },
            { icon: 'compact', text: 'Perfil bajo, pensado para espacios con poca altura de cielorraso' },
            { icon: 'temp', text: 'Frío y calor' },
            { icon: 'quiet', text: 'Funcionamiento silencioso, al estar la unidad oculta' },
        ],
        specs: {
            rows: [
                ['Capacidad', '9.000, 15.000 y 18.000 frigorías/h (3, 5 y 6 TR)'],
                ['Tecnología', 'Inverter y on/off'],
                ['Frío / frío y calor', 'Frío y calor'],
                ['Alimentación eléctrica', 'Monofásica 220V o trifásica 380V según capacidad'],
                ['Refrigerante', 'R410A y R32'],
            ],
        },
        marcas: ['surrey', 'bgh', 'gree', 'carrier', 'midea', 'york', 'samsung', 'daikin'],
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
                answer: 'El baja silueta tiene un perfil compacto, pensado para espacios con poca altura disponible. El separado para conductos admite montaje vertical u horizontal (multiposición), según el espacio técnico.',
            },
            FAQS_COMUNES.envios,
            FAQS_COMUNES.entrega,
            FAQS_COMUNES.garantia,
        ],
        relacionados: ['baja-silueta-alta-presion', 'separado-conductos', 'piso-techo'],
        whatsappMessage: 'Hola! Quiero consultar por un equipo baja silueta',
    },
    {
        slug: 'baja-silueta-alta-presion',
        h1: 'Aire acondicionado baja silueta de alta presión',
        title: 'Baja Silueta de Alta Presión | BEKK',
        metaDescription: 'Equipos baja silueta de alta presión de 8 a 16 TR, frío y calor por bomba con compresor Full DC Inverter. Venta a todo el país. Pedí tu cotización.',
        heroSubtitle: 'Baja silueta de mayor capacidad, frío y calor por bomba, con compresor y ventilador Full DC Inverter, para distribuir el aire por conductos.',
        image: '/productos/baja-silueta-alta-presion.webp',
        productosSlugs: [],
        queEs: [
            'La baja silueta de alta presión es una unidad interior de perfil bajo que se aloja sobre el cielorraso y distribuye el aire por conductos, pensada para capacidades mayores que el baja silueta estándar: de 8 a 16 TR.',
            'Funciona como bomba de calor, con compresor y ventilador Full DC Inverter, y mantiene un buen rendimiento tanto en calefacción como en frío con temperaturas exteriores extremas. Sus unidades condensadoras horizontales son compactas, lo que facilita la instalación en espacios reducidos.',
        ],
        ventajas: [
            { icon: 'temp', text: 'Frío y calor por bomba' },
            { icon: 'bolt', text: 'Compresor y ventilador Full DC Inverter' },
            { icon: 'flame', text: 'Alta performance en calefacción, con temperatura exterior de -30 °C a 30 °C' },
            { icon: 'check', text: 'Alta performance en frío, con temperatura exterior de -15 °C a 55 °C' },
            { icon: 'compact', text: 'Unidades condensadoras horizontales compactas, para espacios reducidos' },
            { icon: 'expand', text: 'Hasta 80 metros de cañería y 40 metros de diferencia de altura entre evaporadora y condensadora' },
            { icon: 'water', text: 'Bomba de drenaje con capacidad de 1200 mm de columna' },
        ],
        specs: {
            rows: [
                ['Capacidad', '8, 10, 12,5 y 16 TR (24.000 a 48.000 frigorías/h)'],
                ['Frío / frío y calor', 'Frío y calor por bomba'],
                ['Tecnología', 'Compresor y ventilador Full DC Inverter'],
                ['Temperatura exterior de trabajo', 'Calefacción: -30 °C a 30 °C. Frío: -15 °C a 55 °C'],
                ['Cañería', 'Hasta 80 m de longitud máxima y 40 m de diferencia de altura entre evaporadora y condensadora'],
                ['Drenaje', 'Bomba con capacidad de 1200 mm de columna'],
            ],
        },
        marcas: ['carrier'],
        faqs: [
            {
                question: '¿En qué se diferencia del baja silueta estándar?',
                answer: 'Es una versión de mayor capacidad (de 8 a 16 TR, frente a 3 a 6 TR del estándar), con bomba de calor, compresor y ventilador Full DC Inverter y hasta 80 metros de cañería.',
            },
            {
                question: '¿Funciona con temperaturas exteriores extremas?',
                answer: 'Sí. En calefacción trabaja con temperatura exterior de -30 °C a 30 °C y en frío de -15 °C a 55 °C.',
            },
            {
                question: '¿Qué mantenimiento necesita?',
                answer: 'Limpieza periódica de filtros y una revisión técnica anual.',
            },
            FAQS_COMUNES.envios,
            FAQS_COMUNES.entrega,
            FAQS_COMUNES.garantia,
        ],
        relacionados: ['baja-silueta', 'separado-conductos'],
        whatsappMessage: 'Hola! Quiero consultar por un equipo baja silueta de alta presión',
    },
    {
        slug: 'cassette',
        h1: 'Aire acondicionado cassette',
        title: 'Aire Acondicionado Cassette y 360° | BEKK',
        metaDescription: 'Equipos cassette y cassette 360° de marcas líderes. Venta a todo el país con asesoramiento. Pedí tu cotización.',
        heroSubtitle: 'Equipo que se embute en el cielorraso y distribuye el aire en cuatro direcciones (o en todo el perímetro, en la variante 360°).',
        image: '/productos/cassette.webp',
        productosSlugs: ['cassette', 'cassette-360'],
        queEs: [
            'El cassette es una unidad interior que se monta embutida en el cielorraso, quedando a la vista solo su panel frontal. Difunde el aire en cuatro direcciones, lo que ayuda a distribuir la temperatura de forma pareja en el espacio donde se instala.',
            'La variante cassette 360° distribuye el aire en todo el perímetro del equipo en lugar de en cuatro salidas puntuales, logrando una circulación aún más uniforme. Ambas variantes se destacan por su bajo nivel sonoro y están disponibles en versión inverter u on/off.',
        ],
        ventajas: [
            { icon: 'airflow', text: 'Distribución de aire en 4 direcciones (360° en todo el perímetro en esa variante)' },
            { icon: 'quiet', text: 'Bajo nivel sonoro de funcionamiento' },
            { icon: 'hidden', text: 'Diseño discreto: solo el panel queda a la vista' },
            { icon: 'bolt', text: 'Disponible en inverter u on/off' },
            { icon: 'temp', text: 'Frío y calor' },
        ],
        specs: {
            rows: [
                ['Variantes', 'Cassette de 4 vías y Cassette 360°'],
                ['Capacidad', '6.000 a 18.000 frigorías/h (2 a 6 TR)'],
                ['Tecnología', 'Inverter u on/off'],
                ['Frío / frío y calor', 'Frío y calor'],
                ['Alimentación eléctrica', 'Monofásica 220V o trifásica 380V según capacidad'],
                ['Refrigerante', 'R410A y R32'],
            ],
        },
        marcas: ['surrey', 'bgh', 'gree', 'samsung', 'midea', 'carrier', 'daikin'],
        faqs: [
            {
                question: '¿Cuánto consume un equipo cassette?',
                answer: 'Depende de la capacidad y de las horas de uso. Los modelos inverter regulan el consumo según la demanda real del ambiente.',
            },
            {
                question: '¿Qué diferencia hay entre el cassette estándar y el 360°?',
                answer: 'El estándar distribuye el aire en 4 direcciones puntuales. El 360° lo distribuye en todo el perímetro del equipo, logrando una circulación más uniforme.',
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
            'El equipo piso techo es una unidad interior versátil: puede instalarse de forma vertical, apoyada sobre el piso, o de forma horizontal, colgada del techo.',
            'Entrega un caudal de aire mayor al de un split tradicional, lo que le permite climatizar espacios amplios con una sola unidad interior. Se conecta a una unidad exterior y ofrece frío y calor.',
        ],
        ventajas: [
            { icon: 'flex', text: 'Montaje flexible: vertical en piso u horizontal en techo' },
            { icon: 'check', text: 'No requiere conducto' },
            { icon: 'airflow', text: 'Mayor caudal de aire que un equipo split tradicional' },
            { icon: 'expand', text: 'Climatiza espacios amplios con una sola unidad interior' },
            { icon: 'temp', text: 'Frío y calor' },
        ],
        specs: {
            rows: [
                ['Capacidad', '9.000 a 18.000 frigorías/h (3 a 6 TR)'],
                ['Tecnología', 'Inverter u on/off'],
                ['Frío / frío y calor', 'Frío y calor'],
                ['Alimentación eléctrica', 'Monofásica 220V o trifásica 380V según capacidad'],
                ['Refrigerante', 'R410A y R32'],
            ],
        },
        marcas: ['surrey', 'bgh', 'gree', 'midea', 'carrier', 'york', 'samsung', 'daikin'],
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
        heroSubtitle: 'Unidad central para conductos de instalación exterior.',
        image: '/productos/rooftop.webp',
        productosSlugs: ['rooftop'],
        queEs: [
            'El rooftop es una unidad central que concentra en un solo equipo exterior todo lo necesario para climatizar un espacio por conductos: compresor, serpentinas e intercambio de aire.',
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
            rows: [
                ['Variantes', 'Frío solo, frío y calor con bomba de calor, o frío y calor a gas'],
                ['Capacidad', '15.000 a 90.000 frigorías/h (5 a 30 TR)'],
                ['Alimentación eléctrica', 'Trifásica 380V según modelo'],
                ['Combustible (versión a gas)', 'Gas natural'],
                ['Refrigerante', 'R410A'],
            ],
        },
        marcas: ['surrey', 'midea', 'carrier', 'westric', 'gree', 'york'],
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
            'Por su capacidad, se usa en instalaciones de mayor porte, donde conviene centralizar la generación de frío en una o pocas unidades y distribuir agua en lugar de aire o refrigerante por distancias largas. Hay equipos condensados por aire o por agua, aptos para sistemas de confort y de precisión.',
        ],
        ventajas: [
            { icon: 'water', text: 'Sistema por agua, pensado para instalaciones de mayor porte' },
            { icon: 'box', text: 'Centraliza la generación de frío en una o pocas unidades' },
            { icon: 'chart', text: 'Escalable: desde 5 TR hasta 150 TR según la línea' },
            { icon: 'check', text: 'Aptos para sistemas de confort y de precisión' },
            { icon: 'temp', text: 'Versiones frío solo o frío y calor con bomba de calor' },
            { icon: 'flex', text: 'Opción de operar con temperaturas negativas y descarga de aire vertical u horizontal según modelo' },
        ],
        specs: {
            rows: [
                ['Variantes', 'Condensados por aire o por agua, con compresores scroll, a tornillo o centrífugos'],
                ['Capacidad', 'Desde 5 TR (17,6 kW) hasta 150 TR (527,5 kW) según marca y línea'],
                ['Frío / frío y calor', 'Frío solo o frío y calor con bomba de calor, según marca y línea'],
                ['Alimentación eléctrica', 'Trifásica 380V'],
                ['Refrigerante', 'R410A, R32, R134a o R407C según marca y línea'],
            ],
        },
        marcas: ['surrey', 'westric', 'daikin'],
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
            'Se conecta a una unidad exterior y se adapta a distintos espacios técnicos gracias a su montaje vertical u horizontal.',
        ],
        ventajas: [
            { icon: 'flex', text: 'Se adapta a distintas posiciones de montaje según el espacio técnico' },
            { icon: 'hidden', text: 'Distribución por conductos: no queda a la vista' },
            { icon: 'temp', text: 'Frío y calor' },
        ],
        specs: {
            rows: [
                ['Variantes', 'Separado para conductos y multiposición (montaje vertical u horizontal)'],
                ['Capacidad', '9.000, 15.000 y 18.000 frigorías/h (3, 5 y 6 TR)'],
                ['Frío / frío y calor', 'Frío y calor'],
                ['Alimentación eléctrica', 'Según modelo; hay versiones trifásicas 380V'],
                ['Refrigerante', 'R410A'],
            ],
        },
        variantes: [
            {
                title: 'Sistemas separados comerciales de alta eficiencia',
                image: '/productos/separados-comerciales.webp',
                alt: 'Sistema separado comercial de alta eficiencia: unidad evaporadora y condensadora',
                capacidad: 'De 20, 25 y 30 TR',
                marca: 'Carrier',
                bullets: [
                    'Refrigerante ecológico Puron (R410A)',
                    'Serpentinas con recubrimiento Gold Cover',
                    'Unidades evaporadoras con paneles de acero galvanizado revestidos con poliuretano expandido',
                    'Excelente aislamiento acústico, alta resistencia a la humedad y alta resistencia estructural',
                    'Compresores scroll de alta eficiencia',
                    'Nivel de filtrado MERV 8',
                    'Unidad evaporadora equipada con ventiladores de alta contrapresión estática',
                    'Unidades evaporadoras de montaje vertical u horizontal',
                ],
            },
        ],
        marcas: ['surrey', 'bgh', 'carrier'],
        faqs: [
            {
                question: '¿Qué es el multiposición?',
                answer: 'Es la variante del separado para conductos que puede instalarse en distintas posiciones —horizontal o vertical— según el espacio técnico disponible.',
            },
            {
                question: '¿En qué se diferencia del baja silueta?',
                answer: 'El separado para conductos admite montaje vertical u horizontal (multiposición), según el espacio técnico disponible. El baja silueta tiene un perfil más compacto para espacios con poca altura.',
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
        h1: 'Calefactores',
        title: 'Calefactores Centrales | BEKK',
        metaDescription: 'Calefactores centrales de marcas líderes. Venta a todo el país. Pedí tu cotización.',
        heroSubtitle: 'Equipos para la parte de calor de un sistema central, alimentados a gas. Venta a todo el país con asesoramiento profesional.',
        image: '/productos/calefactor.webp',
        productosSlugs: ['calefactor', 'calefactor-de-conducto'],
        queEs: [
            'El calefactor central genera la calefacción de un sistema de climatización y puede combinarse con un conjunto de frío para cubrir también el verano.',
        ],
        ventajas: [
            { icon: 'flame', text: 'Alta capacidad de calefacción para sistemas por conductos' },
            { icon: 'temp', text: 'Puede combinarse con un conjunto de frío para climatizar todo el año' },
            { icon: 'flame', text: 'Funciona con gas natural o gas envasado' },
        ],
        specs: {
            rows: [
                ['Variantes', 'Calefactor central por conductos'],
                ['Capacidad', '17.500 a 50.000 kcal/h'],
                ['Combustible', 'Gas natural o gas envasado (con kit)'],
                ['Alimentación eléctrica', 'Monofásica 220V'],
                ['Frío / calor', 'Solo calor'],
            ],
        },
        marcas: ['westric', 'midea'],
        faqs: [
            {
                question: '¿Con qué se alimentan?',
                answer: 'Se alimentan a gas natural o gas envasado, según la instalación disponible.',
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
            rows: [
                ['Capacidad', '9.000 a 18.000 frigorías/h (3 a 6 TR)'],
                ['Frío / calor', 'Solo frío (se anexa a un calefactor existente)'],
                ['Refrigerante', 'R410A'],
            ],
        },
        marcas: ['midea', 'westric'],
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
            'Su particularidad es que ajusta el volumen y el flujo de refrigerante según la demanda de cada zona, en lugar de trabajar siempre al máximo. Eso optimiza la eficiencia energética y permite programar la temperatura de cada unidad interior por separado.',
            'Es un sistema modular: pueden combinarse varias unidades exteriores en una instalación centralizada, y se adapta a distintas arquitecturas y requisitos de espacio.',
        ],
        ventajas: [
            { icon: 'bolt', text: 'Eficiencia energética: el refrigerante se ajusta a la demanda de cada zona' },
            { icon: 'zones', text: 'Temperatura programable de forma independiente en cada unidad interior' },
            { icon: 'quiet', text: 'Nivel de ruido muy inferior al de los equipos tradicionales' },
            { icon: 'flex', text: 'Se adapta a distintas arquitecturas y requisitos de espacio' },
            { icon: 'box', text: 'Modular: varias unidades exteriores combinadas en un sistema centralizado' },
            { icon: 'temp', text: 'Calefacción y enfriamiento simultáneos en distintas áreas' },
        ],
        specs: {
            rows: [
                ['Tipo de sistema', 'Caudal variable de refrigerante, con una unidad exterior para múltiples unidades interiores'],
                ['Control', 'Temperatura independiente en cada unidad interior'],
                ['Frío / frío y calor', 'Frío y calor, con funcionamiento simultáneo en distintas áreas según el sistema'],
                ['Configuración', 'Modular: se combinan varias unidades exteriores en un sistema centralizado'],
            ],
        },
        marcas: ['samsung', 'daikin', 'carrier'],
        faqs: [
            {
                question: '¿Qué significa VRV o VRF?',
                answer: 'Significa Volumen de Refrigerante Variable: el sistema ajusta el flujo de refrigerante según la demanda de cada zona.',
            },
            {
                question: '¿Se puede controlar cada ambiente por separado?',
                answer: 'Sí, esa es la principal ventaja del sistema: la temperatura de cada unidad interior se programa de forma independiente.',
            },
            {
                question: '¿Puede calefaccionar y enfriar al mismo tiempo?',
                answer: 'Sí, según el sistema: puede funcionar con calefacción y enfriamiento simultáneos en distintas áreas.',
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
