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

/**  @type {Array<Property>} The Portuguese properties data */
const propertiesES = [
  // TODO: Add Spanish properties text
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
  // es: propertiesES,
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
