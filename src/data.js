// Evento de 25 anos: altere somente este objeto quando os dados forem confirmados.
// Em targetDate, use o formato ISO com fuso horário, por exemplo:
// '2027-01-30T20:00:00-03:00'. Enquanto estiver vazio, o contador informa
// que a data ainda será confirmada.
export const anniversaryEvent = {
  badge: 'Evento Especial',
  title: 'Celebração dos 25 Anos do GGCC',
  introduction:
    'Convidamos a comunidade para celebrar as bodas de prata do grupo, em um jantar de comemoração. Venha participar deste momento especial conosco!',
  date: '22 de janeiro de 2027',
  targetDate: '',
  time: 'A confirmar',
  venue: 'SAG - Sociedade Amigos de Getulina',
  singer: ' banda freeson',
  image: new URL('../img/foto_25anos.jpeg', import.meta.url).href,
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
      src: new URL('../img/bazar_1.jpg', import.meta.url).href,
      alt: 'Banca de artesanato do GGCC em evento comunitário',
    },
    {
      src: new URL('../img/bazar_2.jpg', import.meta.url).href,
      alt: 'Banca de artesanato do GGCC em evento comunitário',
    },
    {
      src: new URL('../img/bazar_3.jpg', import.meta.url).href,
      alt: 'Banca de artesanato do GGCC em evento comunitário',
    },
    {
      src: new URL('../img/bazar_4.jpg', import.meta.url).href,
      alt: 'Banca de artesanato do GGCC em evento comunitário',
    },
  ],
};

export const events = [
  {
    title: 'Bazar de artesanato',
    text: 'Venda beneficente de artesanatos, roupas e acessórios doados pela comunidade.',
    icon: 'sparkles',
  },
  {
    title: 'Jantar italiano',
    text: 'Tradicional jantar beneficente com pratos típicos para arrecadação de recursos.',
    icon: 'utensils',
  },
  {
    title: 'Leilão de gado',
    text: 'Evento anual realizado junto ao leilão da Paróquia, com animais doados pela comunidade.',
    icon: 'gavel',
  },
  {
    title: 'Chá beneficente',
    text: 'Encontro com venda de ingressos, prêmio especial e alimentos preparados para o evento.',
    icon: 'cup',
  },
  {
    title: 'Barraca do Pastel',
    text: 'Ação beneficente realizada algumas vezes ao longo do ano, com venda de pastéis para arrecadação de recursos para o grupo.',
    icon: 'pastel',
  },
];

// Dados institucionais editáveis das páginas internas.
// Para adicionar fotografias, salve-as em img/ e informe o caminho no campo correspondente.
export const diretoria = [
  { nome: 'Rosana Marilia Rodrigues Methodio', cargo: 'Presidente', foto: null },
  { nome: 'Carmen Lidia Fernandes', cargo: 'Vice-presidente', foto: null },
  { nome: 'Maristella Mattar Garcia', cargo: '1º Secretário', foto: null },
  { nome: 'Rita de Cássia Mengato Ferreira Lima', cargo: '2º Secretário', foto: null },
  { nome: 'Rita de Cássia Salhane Bessegato Gomes', cargo: '1º Tesoureiro', foto: null },
  { nome: 'Jucelen Penachio de Carvalho', cargo: '2º Tesoureiro', foto: null },
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

// Memorial provisório: não publique nomes ou homenagens sem autorização.
export const memorialSlots = [
  { id: 1, nome: '', homenagem: '', imagem: null },
  { id: 2, nome: '', homenagem: '', imagem: null },
  { id: 3, nome: '', homenagem: '', imagem: null },
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
    imagem: new URL('../img/news_baileNamorados.jpeg', import.meta.url).href,
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
    imagem: new URL('../img/news_pastel.jpeg', import.meta.url).href,
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
  // Adicione a imagem oficial em img/qrcode-pix.png e informe o caminho abaixo.
qrCodeImage: new URL('../img/pix_qrCode.jpeg', import.meta.url).href,
};
