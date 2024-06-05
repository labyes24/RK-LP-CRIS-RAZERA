import { useTranslation } from 'react-i18next'

/**
 * The property info
 * @typedef {Object} Property
 * @property {string} id - indicates the unique identifier of the property.
 * @property {string} brokerId - indicates the broker identifier of the property.
 * @property {string} RKCode - indicates the property code on RK Imóveis website.
 * @property {string} title - indicates the title of the property.
 * @property {string} region - indicates the region of the property.
 * @property {string} description - indicates the description of the property.
 * @property {string} price - indicates the price of the property.
 * @property {Object} details - indicates the details of the property.
 * @property {string} details.square - The square meters of the property.
 * @property {string} details.rooms - The rooms of the property.
 * @property {string} details.bathrooms - The bathrooms of the property.
 * @property {string} details.garage - The garage of the property.
 * @property {Array<string>} pictures - indicates the URL of the pictures of the property.
 */

const BROKER_ID = crypto.randomUUID()

/**  @type {Array<Property>} The Portuguese properties data */
const propertiesPT = [
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9781',
    title: 'Solar das Bromélias',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Totalmente mobiliada com muito bom gosto e sofisticação.\n\n Situada na área nobre da praia dos Ingleses, a localização é bastante tranquila e próxima ao comércio loca proporcionando assim um ambiente agradável.\n\n O imóvel possui uma posição solar privilegiada, leste permitindo uma ótima iluminação e ventilação natural todos os cômodos do imóvel.\n\n O condomínio, por sua vez, oferece uma área de lazer completa, proporcionando opções de entretenimento relaxamento para você e sua família.',
    price: 'R$ 565.000,00',
    details: {
      square: '43,10 m²',
      rooms: '1',
      bathrooms: '1',
      garage: '1',
    },
    pictures: [
      '/properties/001A-BROMELIAS.webp',
      '/properties/001B-BROMELIAS.webp',
      '/properties/001C-BROMELIAS.webp',
      '/properties/001D-BROMELIAS.webp',
      '/properties/001E-BROMELIAS.webp',
      '/properties/001F-BROMELIAS.webp',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '8870',
    title: 'Res. Miragem',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Localizado entre o mar e as montanhas, o Residencial Miragem, oferece padrão de qualidade na construção, aliado a uma infraestrutura de lazer que garantirá diversão e conforto para você e sua família.\n\n Diferenciais:\n\n Captação de água da chuva;\n\n Controle de acesso livre de chaves;\n\n Infraestrutura para ar condicionado;\n\n Áreas de lazer decoradas;\n\n Isolamento acústico.\n\n Apartamento térreo tipo garden. Face norte.\n\n Apartamento de 2 quartos, sendo 1 suíte, uma vaga de garagem com mais de 81 m², com jardim particular gramado com mais de 47m².\n\n Aceita financiamento bancário.',
    price: 'R$ 790.000,00',
    details: {
      square: '81,89 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      '/properties/002a-Miragem.webp',
      '/properties/002b-Miragem.webp',
      '/properties/002c-Miragem.webp',
      '/properties/002d-Miragem.webp',
      '/properties/002e-Miragem.webp',
      '/properties/002f-Miragem.webp',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9571',
    title: 'Com. Osvaldo Gomez',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n **EXCLUSIVIDADE RK IMÓVEIS**\n\n Apartamento SEMIMOBILIADO com 02 dormitórios, sendo 01 suíte. Banheiro social, sala de estar, cozinha conjugada com sala de jantar, lavanderia, sacada com churrasqueira e pia, vaga de garagem e hobby box.\n\n Imóvel frente rua \n\n Área privativa de 80,89 m²\n\n Residencial localizado na área nobre da Praia Ingleses, cerca de 600m do mar, e bem próximo ao centrinho da praia. O condomínio possui piscina, salão de festas mobiliado e equipado, elevador, interfone e portão eletrônico.',
    price: 'R$ 700.000,00',
    details: {
      square: '80,89 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      '/properties/003a-Osvaldo.webp',
      '/properties/003b-Osvaldo.webp',
      '/properties/003c-Osvaldo.webp',
      '/properties/003d-Osvaldo.webp',
      '/properties/003e-Osvaldo.webp',
      '/properties/003f-Osvaldo.webp',
      '/properties/003g-Osvaldo.webp',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '8068',
    title: 'Res. Ilha de Citera',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Incorporação Imobiliária nº R-168.700 do Cartório do 2º Ofício de Registro de Imóveis de Florianópolis – SC.\n\n Entrega prevista MARÇO/2024\n\n Conheça o mais novo empreendimento na Praia dos Ingleses - RESIDENCIAL ILHA DE CITERA está localizado na entrada da praia - próximo a melhor região da praia. Invista em imóvel na planta!\n\n Apartamento NOVO de 03 dormitórios sendo 01 suíte, banheiro social, sala de estar e jantar, cozinha, área de serviço e sacada com churrasqueira a carvão e vaga de garagem.\n\n Ótimo acabamento e com excelentes condições de pagamento!',
    price: 'R$ 669.000,00',
    details: {
      square: '81,43 m²',
      rooms: '3',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      '/properties/004b-Citera.webp',
      '/properties/004a-Citera.webp',
      '/properties/004c-Citera.webp',
      '/properties/004d-Citera.webp',
      '/properties/004e-Citera.webp',
      '/properties/004f-Citera.webp',
      '/properties/004g-Citera.webp',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9396',
    title: 'Della Giustina',
    region: 'Ingleses',
    description:
      '**IMÓVEL COM MATRÍCULA**\n\n Apartamento MOBILIADO e decorado com 03 dormitórios, sendo 01 suíte, banheiro social, ampla sala de estar conjugada com cozinha, área de serviço separada, sacada com churrasqueira, hobbybox e vaga de garagem.\n\n IMÓVEL finamente decorado, com móveis planejados em todo apartamento.\n\n RESIDENCIAL DELLA GIUSTINA está localizado na área nobre da Praia dos Ingleses, cerca de 700 metros do mar, possui área de lazer com piscina, playground e salão de festas, além de portão eletrônico e interfone com acesso por TAG.',
    price: 'R$ 899.000,00',
    details: {
      square: '87,86 m²',
      rooms: '3',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      '/properties/005a-Giustina.webp',
      '/properties/005b-Giustina.webp',
      '/properties/005c-Giustina.webp',
      '/properties/005d-Giustina.webp',
      '/properties/005e-Giustina.webp',
      '/properties/005f-Giustina.webp',
      '/properties/005g-Giustina.webp',
    ],
  },
]

/**  @type {Array<Property>} The Spanish properties data */
const propertiesES = [
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9781',
    title: 'Solar das Bromélias',
    region: 'Ingleses',
    description:
      '**PROPIEDAD CON REGISTRO**\n\n Totalmente amueblado con mucho gusto y sofisticación. \n\n Ubicado en la zona privilegiada de Playa Ingleses, la ubicación es muy tranquila y cerca de los comercios locales, proporcionando así un ambiente agradable. \n\n La propiedad tiene una posición solar privilegiada, leste, lo que permite una excelente iluminación y ventilación natural en todos los ambientes de la propiedad.\n\n El condominio, a su vez, ofrece una completa zona de ocio, brindando opciones de entretenimiento y relajación para usted y su familia.',
    price: 'R$ 565.000,00',
    details: {
      square: '43,10 m²',
      rooms: '1',
      bathrooms: '1',
      garage: '1',
    },
    pictures: [
      '/properties/001A-BROMELIAS.webp',
      '/properties/001B-BROMELIAS.webp',
      '/properties/001C-BROMELIAS.webp',
      '/properties/001D-BROMELIAS.webp',
      '/properties/001E-BROMELIAS.webp',
      '/properties/001F-BROMELIAS.webp',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '8870',
    title: 'Res. Miragem',
    region: 'Ingleses',
    description:
      '**PROPIEDAD CON REGISTRO**\n\n Ubicado entre el mar y la montaña, Residencial Miragem ofrece estándares de calidad en la construcción, combinados con una infraestructura de ocio que garantizará diversión y comodidad para usted y su familia.\n\n Diferenciadores:\n\n Agua de lluvia en las cosechas;\n\n Control de acceso sin claves;\n\n Infraestructura para aire acondicionado;\n\nZonas de ocio decoradas;\n\n Insonorización.\n\n Apartamento en planta baja con jardín. Cara norte.\n\n Apartamento de 2 habitaciones, 1 suite, plaza de aparcamiento de más de 81 m², con jardín privado de césped de más de 47 m².\n\n Se acepta financiación bancaria.',
    price: 'R$ 790.000,00',
    details: {
      square: '81,89 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      '/properties/002a-Miragem.webp',
      '/properties/002b-Miragem.webp',
      '/properties/002c-Miragem.webp',
      '/properties/002d-Miragem.webp',
      '/properties/002e-Miragem.webp',
      '/properties/002f-Miragem.webp',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9571',
    title: 'Com. Osvaldo Gomez',
    region: 'Ingleses',
    description:
      '**PROPIEDAD CON REGISTRO**\n\n **EXCLUSIVIDAD RK IMÓVEIS**\n\n Apartamento SEMI AMUEBLADO de 02 habitaciones, 01 suite. baño de visitas, sala, cocina combinada con comedor, cuarto de lavado, balcón con asador y fregadero, estacionamiento y hobby box.\n\n Propiedad frente a la calle! \n\n Área privada de 80,89 m²\n\n Está ubicado en la zona privilegiada de Praia dos Ingleses, a unos 600 metros del mar, y muy cerca del centro de la playa. El condominio cuenta con piscina, salón de fiestas amueblado y equipado, ascensor, intercomunicador y portón electrónico.',
    price: 'R$ 700.000,00',
    details: {
      square: '80,89 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      '/properties/003a-Osvaldo.webp',
      '/properties/003b-Osvaldo.webp',
      '/properties/003c-Osvaldo.webp',
      '/properties/003d-Osvaldo.webp',
      '/properties/003e-Osvaldo.webp',
      '/properties/003f-Osvaldo.webp',
      '/properties/003g-Osvaldo.webp',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '8068',
    title: 'Res. Ilha de Citera',
    region: 'Ingleses',
    description:
      '**PROPIEDAD CON REGISTRO**\n\n Constitución Inmobiliaria N° R-168.700 de la Oficina Registral del 2º Registro de la Propiedad de Florianópolis – SC.\n\n Entrega prevista MARZO/2024\n\n Descubra el desarrollo más nuevo en Praia dos Ingleses: RESIDENCIAL ILHA DE CITERA está ubicado en la entrada de la playa, cerca de la mejor zona de la playa. ¡Invierta en propiedades sobre plano!\n\n Departamento NUEVO con 03 habitaciones, 01 suite, baño de visita, sala comedor, cocina, área de lavado y balcón con asador de carbón y estacionamiento.\n\n ¡Excelente acabado y excelentes condiciones de pago!',
    price: 'R$ 669.000,00',
    details: {
      square: '81,43 m²',
      rooms: '3',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      '/properties/004b-Citera.webp',
      '/properties/004a-Citera.webp',
      '/properties/004c-Citera.webp',
      '/properties/004d-Citera.webp',
      '/properties/004e-Citera.webp',
      '/properties/004f-Citera.webp',
      '/properties/004g-Citera.webp',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9396',
    title: 'Della Giustina',
    region: 'Ingleses',
    description:
      '**PROPIEDAD CON REGISTRO**\n\n Departamento AMUEBLADO y decorado con 03 habitaciones, 01 suite, baño de visitas, amplio living combinado con cocina, lavadero independiente, balcón con asador, hobbybox y estacionamiento. \n\n Propiedad finamente decorada, con muebles a medida en todo el departamento.\n\n RESIDENCIAL DELLA GIUSTINA está ubicado en la zona privilegiada de Praia dos Ingleses, a unos 700 metros del mar, cuenta con una zona de ocio con piscina, parque infantil y salón de fiestas, además de portón electrónico e intercomunicador con acceso por TAG.',
    price: 'R$ 899.000,00',
    details: {
      square: '87,86 m²',
      rooms: '3',
      bathrooms: '2',
      garage: '1',
    },
    pictures: [
      '/properties/005a-Giustina.webp',
      '/properties/005b-Giustina.webp',
      '/properties/005c-Giustina.webp',
      '/properties/005d-Giustina.webp',
      '/properties/005e-Giustina.webp',
      '/properties/005f-Giustina.webp',
      '/properties/005g-Giustina.webp',
    ],
  },
]

/**
 * The Properties data
 * @typedef {Object} PropertiesData
 * @property {Array<Property>} pt - The Portuguese property data.
 * @property {Array<Property>} es - The Spanish property data.
 */

/** @type {PropertiesData} The properties data */
const properties = {
  pt: propertiesPT,
  es: propertiesES,
}

/**
 * Retrieves the properties info.
 * @return {Array<Property>} returns an array of properties info.
 */
export function useProperties() {
  const {
    i18n: { language },
  } = useTranslation()

  if (properties[language]) {
    return properties[language]
  } else {
    return properties['pt']
  }
}
