// Contenido de las páginas de servicio.
//
// ORIGEN DEL TEXTO:
//   · `intro` de residencial y corporativa: texto provisto por el cliente.
//   · El resto: redactado en base a conocimiento técnico general del rubro y a
//     los datos operativos que sí confirmó (entrega, instalación, garantía,
//     cobertura, marcas y catálogo real de equipos).
//   · No se incluyen casos reales, precios, plazos de obra ni diferenciales
//     competitivos: se le pidieron al cliente y no los aportó. Cierre
//     definitivo, no queda pendiente de una vuelta futura.

const COMO_TRABAJAMOS = {
    heading: 'Cómo trabajamos',
    paragraphs: [
        'Te asesoramos sin cargo para definir qué equipo corresponde a tu espacio. Una vez confirmada la compra, entregamos dentro de las 48 horas hábiles de recibido el pago.',
        'Realizamos envíos a todo el país. La instalación la coordinamos a través de instaladores tercerizados de amplia experiencia, con cobertura en CABA y Gran Buenos Aires. La garantía de los equipos la otorga el fabricante.',
    ],
};

export const servicios = [
    {
        slug: 'climatizacion-residencial',
        cardDescription: 'Equipos que pueden quedar a la vista, como cassettes y piso techo, u ocultos, como baja silueta y separados para conductos, para una climatización homogénea en toda la casa.',
        title: 'Climatización residencial',
        shortTitle: 'Residencial',
        metaTitle: 'Aire acondicionado central para casas y departamentos | BEKK',
        metaDescription:
            'Climatización central para el hogar: cassettes, piso techo, baja silueta y separados para conductos. Asesoramiento sin cargo y entrega en 48 horas.',
        intro: 'Variedad de equipos que te permiten elegir la mejor alternativa para tu hogar. Hay equipos que quedan a la vista, como los cassettes y los piso techo, y otros que quedan ocultos, como la baja silueta, los calefactores y los separados para conductos. Según esa elección vas a obtener una climatización homogénea en tu casa, logrando una agradable sensación de bienestar.',
        sections: [
            {
                heading: 'Equipos que quedan a la vista',
                paragraphs: [
                    'Son los que se montan sin necesidad de obra para ocultarlos, por lo que suelen ser la opción más directa cuando la vivienda ya está construida.',
                ],
                bullets: [
                    ['Cassette', 'se monta en el cielorraso y difunde el aire en cuatro direcciones, lo que ayuda a repartir la temperatura de forma pareja. Se destacan por su bajo nivel sonoro.'],
                    ['Cassette 360', 'variante de flujo circular, que distribuye el aire en todo el perímetro del equipo.'],
                    ['Piso techo', 'admite instalación vertical u horizontal, apoyado en el piso o colgado del techo. Es una alternativa versátil cuando no hay cielorraso donde alojar el equipo.'],
                ],
            },
            {
                heading: 'Equipos que quedan ocultos',
                paragraphs: [
                    'Distribuyen el aire por conductos y dejan a la vista solo las rejillas, de modo que el equipo no interfiere con el diseño de los ambientes. Requieren espacio técnico, por lo que se definen mejor durante una obra o refacción.',
                ],
                bullets: [
                    ['Baja silueta', 'unidad interior de perfil bajo que se aloja sobre el cielorraso y climatiza amplios espacios sin quedar a la vista.'],
                    ['Separado para conductos (multiposición)', 'permite montaje vertical u horizontal, lo que da flexibilidad según el espacio disponible.'],
                    ['Calefactores', 'para la parte de calor. Se alimentan a gas natural, gas envasado o gasoil, y pueden combinarse con conjuntos de frío.'],
                    ['Conjuntos de frío', 'por conductos, pensados para anexar a un calefactor existente.'],
                ],
            },
            {
                heading: 'Cómo elegir el sistema',
                paragraphs: [
                    'La elección depende de varios factores: la superficie total a climatizar, la cantidad de ambientes, si hay cielorraso o espacio técnico para alojar equipos y conductos, y si se trata de una obra nueva o de una vivienda ya terminada.',
                    'También incide si buscás solo frío o frío y calor, y qué nivel de independencia querés entre ambientes. Si no tenés definido el equipo, escribinos y lo vemos juntos.',
                ],
            },
            COMO_TRABAJAMOS,
        ],
        whatsappMessage: 'Hola! Quiero consultar por climatización residencial',
    },
    {
        slug: 'climatizacion-corporativa',
        cardDescription: 'Equipos de mayor capacidad para locales, oficinas, salas de reuniones y servers: rooftop, chillers, separados para conductos y conjuntos de frío.',
        title: 'Climatización corporativa',
        shortTitle: 'Corporativa',
        metaTitle: 'Climatización central para oficinas y locales | BEKK',
        metaDescription:
            'Equipos de gran capacidad para locales, oficinas y servers: rooftop, chillers, separados para conductos y conjuntos de frío. Asesoramiento sin cargo.',
        intro: 'Equipos de mayor capacidad para grandes dimensiones: locales comerciales, oficinas, líneas de trabajo, salas de reuniones, salas de proyección y servers. En este segmento se entrecruzan factores de bienestar y de necesidad, ligados a los procesos productivos. Para una correcta elección de equipo se debe definir cuál es la necesidad que se busca cubrir.',
        sections: [
            {
                heading: 'Equipos para gran escala',
                paragraphs: [
                    'A diferencia del segmento residencial, acá el punto de partida no es la superficie sino la carga térmica real del espacio: cuánta gente circula, qué equipamiento hay funcionando y cuántas horas por día debe sostenerse la temperatura.',
                ],
                bullets: [
                    ['Rooftop', 'unidad central para conductos que se instala en el exterior, habitualmente sobre la cubierta. Al ser una sola unidad de instalación exterior, simplifica el montaje en locales y naves.'],
                    ['Separado para conductos', 'distribuye por conductos y admite montaje vertical u horizontal, lo que facilita adaptarlo al espacio técnico disponible.'],
                    ['Unidades enfriadoras (chillers)', 'sistema por agua, orientado a instalaciones de mayor porte.'],
                    ['Calefactores y calefactores de conducto', 'para la parte de calor. Los de conducto se instalan en forma horizontal o vertical dentro de conductos de aire acondicionado o ventilación que requieran ser calentados.'],
                    ['Conjuntos de frío', 'por conductos, pensados para anexar a un calefactor existente.'],
                ],
            },
            {
                heading: 'Definir la necesidad antes que el equipo',
                paragraphs: [
                    'No es lo mismo climatizar una oficina donde el objetivo es el confort de las personas, que una sala de servers donde el equipamiento necesita una temperatura estable de forma continua, o un local comercial con mucha circulación y apertura constante de puertas.',
                    'Cada uno de esos escenarios puede resolverse con equipos distintos, y elegir mal suele traducirse en un sistema sobredimensionado o en uno que no llega a sostener la temperatura. Por eso conviene partir de la necesidad concreta y no del catálogo.',
                ],
            },
            COMO_TRABAJAMOS,
        ],
        whatsappMessage: 'Hola! Quiero consultar por climatización corporativa',
    },
    {
        slug: 'sistemas-vrv',
        cardDescription: 'Una única unidad exterior alimenta varias interiores y permite climatizar cada ambiente de forma independiente.',
        title: 'Sistemas VRV',
        shortTitle: 'Sistemas VRV',
        metaTitle: 'Sistemas VRV y VRF de aire acondicionado central | BEKK',
        metaDescription:
            'Sistemas VRV/VRF: una unidad exterior alimenta varias interiores y permite climatizar cada ambiente de forma independiente. Asesoramiento sin cargo en Buenos Aires.',
        intro: 'VRV (Volumen de Refrigerante Variable, también conocido como VRF) es un tipo de aire acondicionado central avanzado que conecta una única unidad exterior con múltiples unidades interiores, y permite climatizar diferentes espacios de forma independiente.',
        sections: [
            {
                heading: 'Cómo funciona',
                paragraphs: [
                    'En un sistema convencional, cada unidad interior necesita su propia unidad exterior. En un sistema VRV, una sola unidad exterior alimenta a varias interiores a través de un circuito de refrigerante común.',
                    'La particularidad está en el caudal variable: el sistema regula cuánto refrigerante envía a cada unidad interior según lo que ese ambiente esté pidiendo en ese momento, en lugar de trabajar siempre al máximo y encenderse y apagarse.',
                ],
            },
            {
                heading: 'Cuándo conviene',
                paragraphs: [
                    'Es una solución adecuada cuando hay varios ambientes con necesidades distintas y se busca controlarlos por separado: oficinas con sectores de uso desparejo, pisos con orientaciones diferentes, o edificios donde no hay lugar para instalar muchas unidades exteriores.',
                    'También es habitual cuando la cantidad de unidades exteriores sería un problema por espacio disponible o por estética de fachada, ya que concentra todo en un solo equipo exterior.',
                ],
            },
            {
                heading: 'Qué tener en cuenta',
                paragraphs: [
                    'Es un sistema de mayor complejidad que un equipo individual, tanto en el dimensionamiento como en la instalación, y se define en función de la cantidad de ambientes, su uso y la simultaneidad esperada entre ellos.',
                    'Si estás evaluando si un VRV es lo que corresponde a tu proyecto, escribinos y lo analizamos según el caso.',
                ],
            },
            COMO_TRABAJAMOS,
        ],
        whatsappMessage: 'Hola! Quiero consultar por sistemas VRV',
    },
];

export function getServicio(slug) {
    return servicios.find((s) => s.slug === slug);
}
