export const institutionConfig = {
  name: 'Grupo Getulinense de Combate ao Câncer',
  mission:
    'Dar ao paciente diagnosticado com câncer condições de sobrevida maior e melhor, caminhando em direção à cura.',
  phoneLabel: '(14) 3552-2966',
  phoneHref: 'tel:+551435522966',
  email: 'ggccancer@hotmail.com',
  cnpj: '06.311.935/0001-75',
  address: {
    streetAddress: 'Rua Barão do Rio Branco, 551',
    postalCode: '16450-015',
    addressLocality: 'Getulina',
    addressRegion: 'SP',
    addressCountry: 'BR',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Rua+Bar%C3%A3o+do+Rio+Branco+551+Getulina+SP',
  },
};

export const siteConfig = {
  url: 'https://ggcc.org.br/',
  shareImage: 'https://ggcc.org.br/og-image.webp',
  shareImageWidth: 1334,
  shareImageHeight: 580,
};

// Evento de 25 anos: altere somente este objeto quando os dados forem confirmados.
// Informe time no formato 'HH:mm'. Enquanto estiver null, o contador usa
// provisoriamente 00:00:00 no fuso de São Paulo (UTC-03:00).
export const anniversaryEvent = {
  badge: 'Evento especial',
  title: 'Celebração dos 25 anos do GGCC',
  introduction:
    'Convidamos a comunidade para celebrar as bodas de prata do grupo em um jantar especial. Venha compartilhar este momento conosco.',
  date: '2027-01-22',
  time: null,
  utcOffset: '-03:00',
  venue: 'SAG — Sociedade Amigos de Getulina',
  singer: 'Banda Freeson',
  image: new URL('../img/foto_25anos.webp', import.meta.url).href,
  imageWidth: 1280,
  imageHeight: 960,
  ticketUrl: '#contato',
  ticketMessage: 'Os convites são limitados. Solicite o seu com antecedência.',
};

export const actions = [
  {
    title: 'Atendimento e encaminhamento',
    text: 'Plantões de atendimento, consultas e exames de sangue para tratamentos de quimioterapia e radioterapia.',
    icon: 'clipboard',
  },
  {
    title: 'Alimentos e medicamentos',
    text: 'Cestas básicas mensais, alimentos frescos quinzenais e medicamentos não fornecidos pela rede básica de saúde.',
    icon: 'basket',
  },
  {
    title: 'Exames e necessidades especiais',
    text: 'Custeio de exames emergenciais, próteses, bolsas de colostomia, sondas, oxigênio e fraldas.',
    icon: 'stethoscope',
  },
  {
    title: 'Apoio emocional',
    text: 'Visitas domiciliares e hospitalares para acolher o paciente e toda a sua família.',
    icon: 'heartHands',
  },
  {
    title: 'Casas de apoio',
    text: 'Complementação financeira para alojamentos que recebem pacientes durante o tratamento em Jaú.',
    icon: 'home',
  },
  {
    title: 'Empréstimo de equipamentos',
    text: 'Camas hospitalares, colchões, andadores, muletas, bengalas e cadeiras de rodas para a comunidade.',
    icon: 'wheelchair',
  },
];

// Bazar: substitua os campos src vazios pelos arquivos finais quando disponíveis.
export const bazarConfig = {
  facebookUrl: 'https://www.facebook.com/profile.php?id=61561690959148',
  images: [
    {
      src: new URL('../img/bazar_1.webp', import.meta.url).href,
      alt: 'Roupas coloridas organizadas em cabides no bazar beneficente do GGCC',
      width: 2048,
      height: 2048,
    },
    {
      src: new URL('../img/bazar_2.webp', import.meta.url).href,
      alt: 'Casacos, camisas e vestidos expostos em cabides no bazar beneficente do GGCC',
      width: 2048,
      height: 2048,
    },
    {
      src: new URL('../img/bazar_3.webp', import.meta.url).href,
      alt: 'Camisas masculinas organizadas em uma arara no bazar beneficente do GGCC',
      width: 2048,
      height: 2048,
    },
    {
      src: new URL('../img/bazar_4.webp', import.meta.url).href,
      alt: 'Peças femininas coloridas expostas em araras no bazar beneficente do GGCC',
      width: 1536,
      height: 2048,
    },
  ],
};

// Dados institucionais editáveis das páginas internas.
// Para adicionar fotografias, salve-as em img/ e informe o caminho no campo correspondente.
export const diretoria = [
  { nome: 'Rosana Marilia Rodrigues Methodio', cargo: 'Presidente', foto: new URL('../img/Dona_Rosana.webp', import.meta.url).href, fotoWidth: 959, fotoHeight: 1280 },
  { nome: 'Carmen Lidia Fernandes', cargo: 'Vice-presidente', foto: new URL('../img/Dona_Carmen.webp', import.meta.url).href, fotoWidth: 1254, fotoHeight: 1254 },
  { nome: 'Maristella Mattar Garcia', cargo: '1º Secretário', foto: new URL('../img/Dona_Maristella.webp', import.meta.url).href, fotoWidth: 1254, fotoHeight: 1254 },
  { nome: 'Rita de Cássia Mengato Ferreira Lima', cargo: '2º Secretário', foto: new URL('../img/Dona_Rita_Mengato.webp', import.meta.url).href, fotoWidth: 1280, fotoHeight: 853 },
  { nome: 'Rita de Cássia Salhane Bessegato Gomes', cargo: '1º Tesoureiro', foto: new URL('../img/Dona_Rita.webp', import.meta.url).href, fotoWidth: 1254, fotoHeight: 1254 },
  { nome: 'Jucelen Penachio de Carvalho', cargo: '2º Tesoureiro', foto: new URL('../img/Dona_Jucelen.webp', import.meta.url).href, fotoWidth: 1303, fotoHeight: 1207 },
];

export const conselhoFiscal = [
  { nome: 'Rosa Bulgarelli Antunes', cargo: 'Conselho Fiscal', foto: null },
  { nome: 'Maria Helena Guedes Ramos', cargo: 'Conselho Fiscal', foto: null },
  { nome: 'Maria Inês Biondo Mengato', cargo: 'Conselho Fiscal', foto: null },
];

export const suplentes = [
  { nome: 'Luzia Longhi', cargo: 'Suplente', foto: null },
  { nome: 'Maria de Lourdes Martins de Oliveira', cargo: 'Suplente', foto: null },
  { nome: 'Santina Marineli Fernandes', cargo: 'Suplente', foto: null },
];

export const memorialNames = [
  'Acácio Pereira de Oliveira',
  'Adavaldi de Souza',
  'Antonia Dagmar Penachio Moraes',
  'Antonia Ferreira Raiz',
  'Aparecida dos Santos Canazaro',
  'Aracê Campanha Rocchi Rodrigues',
  'Aurécio B. Ruellas',
  'Eurides Bana de Oliveira',
  'Hermenegildo Antonio Becegatto',
  'Iracema Alfieri',
  'Laurite M. Caliani',
  'Lizetti Cecílio Janeiro',
  'Luiz Bernardes',
  'Luiz Fernando Campos Marques',
  'Maria Aparecida Teixeira',
  'Maria de Lurdes Moreira Bernardes',
  'Nercides Menegatti',
  'Paula Jandira Guidetti Antunes',
  'Petronilha Lopes Caliani',
  'Sebastião Aleixo Zebeu',
  
];

// Notícias provisórias. Use type: 'short' quando todo o conteúdo couber no card
// e type: 'full' somente quando houver conteúdo adicional para a página interna.
export const noticias = [
  {
    type: 'short',
    slug: 'Baile-dos-Namorados',
    titulo: 'Baile dos Namorados',
    data: '13/06/2026',
    categoria: 'Evento realizado',
    resumo: 'A partir das 22h, na SAG, o Baile dos Namorados do GGCC celebra o amor e a alegria.',
    conteudo: [
      'A programação reúne música, dança e diversão ao som da banda MAMÃO COM AÇÚCAR.',
    ],
    imagem: new URL('../img/news_baileNamorados.webp', import.meta.url).href,
    imageWidth: 875,
    imageHeight: 1280,
    destaque: true,
  },
  {
    type: 'short',
    slug: 'feira-do-pastel',
    titulo: 'Feira do Pastel',
    data: '11/04/2026',
    categoria: 'Evento realizado',
    resumo: 'A partir das 19h, na Praça 9 de Julho, o GGCC realiza mais uma feira beneficente, com venda de pastéis e bebidas.',
    conteudo: [
      'As fichas podem ser adquiridas antecipadamente com o grupo ou no local do evento. Toda ajuda é bem-vinda e será destinada às ações do GGCC na comunidade.',
      
    ],
    imagem: new URL('../img/news_pastel.webp', import.meta.url).href,
    imageWidth: 1280,
    imageHeight: 692,
    destaque: true,
  },
];

export const contactConfig = {
  recipient: institutionConfig.email,
  // Adicione aqui um endpoint HTTPS quando o grupo contratar um serviço de formulário.
  endpoint: '',
};

export const pixConfig = {
  key: institutionConfig.cnpj,
  qrCodeImage: 'pix-qrcode.svg',
  qrCodeWidth: 512,
  qrCodeHeight: 512,
};
