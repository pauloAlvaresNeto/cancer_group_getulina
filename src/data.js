import { siteSeoConfig } from './seo-config.js';

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
  url: siteSeoConfig.url,
  shareImage: siteSeoConfig.shareImage,
  shareImageWidth: siteSeoConfig.shareImageWidth,
  shareImageHeight: siteSeoConfig.shareImageHeight,
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
  image: new URL('../img/eventos/foto_25anos.webp', import.meta.url).href,
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
      src: new URL('../img/bazar/bazar_1.webp', import.meta.url).href,
      alt: 'Roupas coloridas organizadas em cabides no bazar beneficente do GGCC',
      width: 2048,
      height: 2048,
    },
    {
      src: new URL('../img/bazar/bazar_2.webp', import.meta.url).href,
      alt: 'Casacos, camisas e vestidos expostos em cabides no bazar beneficente do GGCC',
      width: 2048,
      height: 2048,
    },
    {
      src: new URL('../img/bazar/bazar_3.webp', import.meta.url).href,
      alt: 'Camisas masculinas organizadas em uma arara no bazar beneficente do GGCC',
      width: 2048,
      height: 2048,
    },
    {
      src: new URL('../img/bazar/bazar_4.webp', import.meta.url).href,
      alt: 'Peças femininas coloridas expostas em araras no bazar beneficente do GGCC',
      width: 1536,
      height: 2048,
    },
  ],
};

// Dados institucionais editáveis das páginas internas.
// Para adicionar fotografias, salve-as em img/ e informe o caminho no campo correspondente.
export const diretoria = [
  { nome: 'Rosana Marilia Rodrigues Methodio', cargo: 'Presidente', foto: new URL('../img/membros/Dona_Rosana.webp', import.meta.url).href, fotoWidth: 959, fotoHeight: 1280 },
  { nome: 'Carmen Lidia Fernandes', cargo: 'Vice-presidente', foto: new URL('../img/membros/Dona_Carmen.webp', import.meta.url).href, fotoWidth: 1254, fotoHeight: 1254 },
  { nome: 'Maristella Mattar Garcia', cargo: '1º Secretário', foto: new URL('../img/membros/Dona_Maristella.webp', import.meta.url).href, fotoWidth: 1254, fotoHeight: 1254 },
  { nome: 'Rita de Cássia Mengato Ferreira Lima', cargo: '2º Secretário', foto: new URL('../img/membros/Dona_Rita_Mengato.webp', import.meta.url).href, fotoWidth: 1280, fotoHeight: 853 },
  { nome: 'Rita de Cássia Salhane Bessegato Gomes', cargo: '1º Tesoureiro', foto: new URL('../img/membros/Dona_Rita.webp', import.meta.url).href, fotoWidth: 1254, fotoHeight: 1254 },
  { nome: 'Jucelen Penachio de Carvalho', cargo: '2º Tesoureiro', foto: new URL('../img/membros/Dona_Jucelen.webp', import.meta.url).href, fotoWidth: 1303, fotoHeight: 1207 },
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

// publishedAt controla a ordenação e o badge "Novo"; eventDate é a data exibida.
// Quando a data histórica de publicação não for conhecida, mantenha publishedAt
// como null: a ordenação preservará a posição original entre esses itens.
export const noticias = [
  {
    type: 'full',
    slug: 'cha-beneficente-realizado',
    titulo: 'Chá Beneficente reúne convidados para uma tarde de bingo na SAG',
    publishedAt: '13/09/2026',
    eventDate: '13/09/2026',
    categoria: 'Evento realizado',
    resumo: 'No dia 13 de setembro, o Chá Beneficente do GGCC reuniu convidados, bingo e uma tarde de convivência na SAG.',
    conteudo: [
      'No dia 13 de setembro, a SAG recebeu o Chá Beneficente do GGCC. Entre uma rodada de bingo e outra, convidados e voluntários dividiram a tarde entre conversas, bolos, salgados e chás.',
      'As fotos mostram um pouco do que marcou o encontro: as mesas reunidas, a movimentação durante o bingo e as pessoas que fizeram parte daquele domingo.',
      'O Chá terminou, mas os registros ficaram. Confira na galeria as fotos dessa tarde.',
    ],
    imagem: new URL('../img/noticias/cha-beneficente/cha-beneficente-capa.webp', import.meta.url).href,
    imagemAlt: 'Voluntários e convidados reunidos durante o Chá Beneficente do GGCC',
    imageWidth: 1280,
    imageHeight: 720,
    imageLoading: 'eager',
    imageFetchPriority: 'high',
    imagePosition: '50% 42%',
    imagens: [
      {
        src: new URL('../img/noticias/cha-beneficente/cha-beneficente-noticia-02.webp', import.meta.url).href,
        alt: 'Convidados durante o Chá Beneficente do GGCC',
        width: 720,
        height: 1280,
        objectPosition: '50% 0%',
      },
      {
        src: new URL('../img/noticias/cha-beneficente/cha-beneficente-noticia-03.webp', import.meta.url).href,
        alt: 'Momento de confraternização no Chá Beneficente do GGCC',
        width: 720,
        height: 1280,
        objectPosition: '50% 35%',
      },
      {
        src: new URL('../img/noticias/cha-beneficente/cha-beneficente-noticia-04.webp', import.meta.url).href,
        alt: 'Registro do Chá Beneficente realizado pelo GGCC',
        width: 1280,
        height: 720,
      },
      {
        src: new URL('../img/noticias/cha-beneficente/cha-beneficente-noticia-05.webp', import.meta.url).href,
        alt: 'Atividade durante o Chá Beneficente do GGCC',
        width: 1280,
        height: 720,
      },
      {
        src: new URL('../img/noticias/cha-beneficente/cha-beneficente-noticia-06.webp', import.meta.url).href,
        alt: 'Convidados reunidos em apoio ao GGCC durante o Chá Beneficente',
        width: 1280,
        height: 720,
      },
      {
        src: new URL('../img/noticias/cha-beneficente/cha-beneficente-noticia-07.webp', import.meta.url).href,
        alt: 'Registro de convivência no Chá Beneficente do GGCC',
        width: 720,
        height: 1280,
        objectPosition: '50% 8%',
      },
      {
        src: new URL('../img/noticias/cha-beneficente/cha-beneficente-noticia-08.webp', import.meta.url).href,
        alt: 'Encerramento do Chá Beneficente realizado pelo GGCC',
        width: 1280,
        height: 720,
      },
    ],
    galleryLink: {
      albumId: 'cha-beneficente',
      href: '/galeria/#cha-beneficente',
      text: 'Confira todos os registros do Chá Beneficente em nossa galeria.',
      label: 'Ver todas as fotos',
    },
    featured: true,
  },
  {
    type: 'full',
    slug: 'doacao-de-camiseta',
    titulo: 'Camiseta autografada do Corinthians será leiloada pelo GGCC',
    publishedAt: '21/08/2026',
    eventDate: '19/08/2026',
    categoria: 'Ação realizada',
    resumo: 'Camiseta do Corinthians autografada por jogadores será leiloada em benefício das ações do GGCC.',
    conteudo: [
      'Uma camiseta do Corinthians autografada por jogadores do clube chegou ao GGCC por meio de uma doação dos vereadores Luiz Carlos e Motoradio.',
      'A peça será leiloada em um próximo evento beneficente do grupo. A data e as informações sobre como participar serão divulgadas assim que estiverem definidas.',
      'O GGCC agradece aos vereadores pela doação e, em breve, contará mais sobre o leilão.',
    ],
    imagem: new URL('../img/noticias/doacao-camisetas.jpg', import.meta.url).href,
    imagemAlt: 'Representantes entregam camiseta doada ao Grupo Getulinense de Combate ao Câncer',
    imageWidth: 848,
    imageHeight: 478,
    video: {
      src: 'https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1596439092008531%2F&show_text=false&width=560&t=0',
      title: 'Vídeo da doação de camisetas ao GGCC',
    },
    featured: false,
  },
  {
    type: 'short',
    titulo: 'Chá Beneficente',
    publishedAt: null,
    eventDate: '13/09/2026',
    categoria: 'Evento encerrado',
    resumo: 'Evento encerrado.',
    conteudo: [
      'O Chá Beneficente do GGCC aconteceu no dia 13 de setembro, às 14h, na SAG. A programação contou com rodadas de bingo, incluindo uma TV como prêmio especial, além de bolos, salgados e chás.',
      'Os convites foram vendidos por R$ 30.',
      'O evento já foi realizado. Para ver como foi a tarde, confira a notícia e as fotos do Chá Beneficente.',
    ],
    imagem: new URL('../img/noticias/cha-beneficente-2026.webp', import.meta.url).href,
    imageWidth: 1200,
    imageHeight: 1600,
    imagePosition: '50% 18%',
    relatedLink: {
      href: '/noticias/?slug=cha-beneficente-realizado',
      label: 'Ver como foi',
    },
  },
  {
    type: 'short',
    slug: 'Baile-dos-Namorados',
    titulo: 'Baile dos Namorados leva música e dança à SAG',
    publishedAt: null,
    eventDate: '13/06/2026',
    categoria: 'Evento realizado',
    resumo: 'O Baile dos Namorados reuniu música e dança na SAG ao som da banda Mamão com Açúcar.',
    conteudo: [
      'O dia 13 de junho foi de música e dança na SAG com o Baile dos Namorados do GGCC.',
      'A noite teve a banda Mamão com Açúcar como atração, levando sua música para a pista e para quem participou do encontro.',
    ],
    imagem: new URL('../img/noticias/news_baileNamorados.webp', import.meta.url).href,
    imageWidth: 875,
    imageHeight: 1280,
    imagePosition: '50% 0%',
  },
  {
    type: 'short',
    slug: 'feira-do-pastel',
    titulo: 'Feira do Pastel',
    publishedAt: null,
    eventDate: '11/04/2026',
    categoria: 'Evento realizado',
    resumo: 'Feira do Pastel do GGCC aconteceu em 11 de abril, na Praça 9 de Julho, com venda de pastéis e bebidas.',
    conteudo: [
      'No dia 11 de abril, a Praça 9 de Julho recebeu a Feira do Pastel do GGCC. A partir das 19h, o grupo realizou a venda de pastéis e bebidas no local.',
      'A feira foi mais uma das ações promovidas pelo GGCC ao longo do ano e fica registrada aqui como parte da programação de 2026.',
    ],
    imagem: new URL('../img/noticias/news_pastel.webp', import.meta.url).href,
    imageWidth: 1280,
    imageHeight: 692,
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
