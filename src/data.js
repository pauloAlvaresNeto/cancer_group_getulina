// Evento de 25 anos: altere somente este objeto quando os dados forem confirmados.
// Informe time no formato 'HH:mm'. Enquanto estiver null, o contador usa
// provisoriamente 00:00:00 no fuso de São Paulo (UTC-03:00).
export const anniversaryEvent = {
  badge: 'Evento Especial',
  title: 'Celebração dos 25 Anos do GGCC',
  introduction:
    'Convidamos a comunidade para celebrar as bodas de prata do grupo, em um jantar de comemoração. Venha participar deste momento especial conosco!',
  date: '2027-01-22',
  time: null,
  timezone: 'America/Sao_Paulo',
  utcOffset: '-03:00',
  venue: 'SAG - Sociedade Amigos de Getulina',
  singer: 'Banda Freeson',
  image: new URL('../img/foto_25anos.webp', import.meta.url).href,
  imageWidth: 1280,
  imageHeight: 960,
  ticketUrl: '#contato',
  ticketMessage: 'Os convites são limitados. Garanta sua participação antecipadamente.',
};

export const actions = [
  {
    title: 'Atendimento e encaminhamento',
    text: 'Plantões de atendimento, consultas e exames de sangue para tratamentos de quimioterapia e radioterapia.',
    icon: 'clipboard',
  },
  {
    title: 'Alimentos e medicamentos',
    text: 'Cestas básicas mensais, alimentos frescos quinzenais e medicamentos não atendidos pela rede básica.',
    icon: 'basket',
  },
  {
    title: 'Exames e necessidades especiais',
    text: 'Cobertura para exames emergenciais, próteses, bolsas de colostomia, sondas, oxigênio e fraldas.',
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
      alt: 'Banca de artesanato do GGCC em evento comunitário',
      width: 2048,
      height: 2048,
    },
    {
      src: new URL('../img/bazar_2.webp', import.meta.url).href,
      alt: 'Banca de artesanato do GGCC em evento comunitário',
      width: 2048,
      height: 2048,
    },
    {
      src: new URL('../img/bazar_3.webp', import.meta.url).href,
      alt: 'Banca de artesanato do GGCC em evento comunitário',
      width: 2048,
      height: 2048,
    },
    {
      src: new URL('../img/bazar_4.webp', import.meta.url).href,
      alt: 'Banca de artesanato do GGCC em evento comunitário',
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
  'Aracê Campanha Rocchi Rodrigues',
  'Acácio Pereira de Oliveira',
  'Adavaldi de Souza',
  'Antonia Dagmar Penachio Moraes',
  'Antonia Ferreira Raiz',
  'Aparecida dos Santos Canazaro',
  'Aurécio B. Ruellas',
  'Eurides Bana de Oliveira',
  'Hermenegildo Antonio Becegatto',
  'Iracema Alfieri',
  'Laurite M. Caliani',
  'Luiz Bernardes',
  'Luiz Fernando Campos Marques',
  'Lizette Cecílio Janeiro',
  'Maria Aparecida Teixeira',
  'Maria de Lurdes Moreira Bernardes',
  'Nercides Menegatti',
  'Paula Jandira Guidetti Antunes',
  'Petronilha Lopes Caliani',
  'Sebastião Aleixo Zabeu',
];

// Notícias provisórias. Substitua estes exemplos pelo conteúdo oficial.
export const noticias = [
  {
    id: 1,
    slug: 'Baile-dos-Namorados',
    titulo: 'Baile dos Namorados',
    data: '13/06/26',
    categoria: 'Já Realizado',
    resumo: 'A partir das 22H na SAG, venha celebrar o AMOR e a ALEGRIA no Baile dos namorados do GGCC',
    conteudo: [
      'Prepare-se para uma noite especial com muita música dança e diversão com a banda MAMÃO COM AÇÚCAR. Garanta já o seu lugar!',
    ],
    imagem: new URL('../img/news_baileNamorados.webp', import.meta.url).href,
    imageWidth: 875,
    imageHeight: 1280,
    destaque: true,
  },
  {
   slug: 'feira-do-pastel',
    titulo: 'Feira do Pastel',
    data: '11/04/2026',
    categoria: 'Já Realizado',
    resumo: 'A partir das 19h na praça 9 de julho, o GGCC realiza mais uma feira beneficente com venda de pastéis e bebidas.',
    conteudo: [
      'Entre em contato com o grupo para adquirir a sua ficha ou então compre na hora do evento. Toda Ajuda é bem-vinda e será revertida para as ações do GGCC junto à comunidade.',
      
    ],
    imagem: new URL('../img/news_pastel.webp', import.meta.url).href,
    imageWidth: 1280,
    imageHeight: 692,
    destaque: true,
  },
  // {
  //   id: 3,
  //   slug: 'acao-beneficente',
  //   titulo: 'Ação beneficente',
  //   data: 'Data a confirmar',
  //   categoria: 'Ação',
  //   resumo: 'Espaço reservado para apresentar campanhas, resultados e atividades realizadas junto à comunidade.',
  //   conteudo: [
  //     'Este conteúdo é provisório. Conte aqui como a ação foi realizada, quem participou e qual foi o resultado alcançado.',
  //     'Inclua somente informações confirmadas pelo grupo e fotografias cuja publicação tenha sido autorizada.',
  //   ],
  //   imagem: null,
  //   destaque: true,
  // },
];

export const contactConfig = {
  recipient: 'ggccancer@hotmail.com',
  // Adicione aqui um endpoint HTTPS quando o grupo contratar um serviço de formulário.
  endpoint: '',
};

export const pixConfig = {
  key: '06.311.935/0001-75',
  // Salve uma nova imagem em img/ e atualize somente este caminho.
  qrCodeImage: new URL('../img/pix_qrCode.jpeg', import.meta.url).href,
  qrCodeWidth: 697,
  qrCodeHeight: 720,
};
