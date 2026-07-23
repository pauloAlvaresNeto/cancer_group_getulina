const galleryImages = {
  equipe: new URL('../img/membros.jpg', import.meta.url).href,
  doacoes: new URL('../img/WhatsApp Image 2026-07-20 at 15.15.28.jpeg', import.meta.url).href,
  evento: new URL('../img/IMG_8755.jpeg', import.meta.url).href,
  voluntarias: new URL('../img/2.jpeg', import.meta.url).href,
  produtos: new URL('../img/WhatsApp Image 2026-07-20 at 15.15.31.jpeg', import.meta.url).href,
  campanha: new URL('../img/WhatsApp Image 2026-07-20 at 15.15.32.jpeg', import.meta.url).href,
};

export const quickLinks = [
  { label: 'Atendimento', href: '#contato', icon: 'heartPulse' },
  { label: 'Medicamentos', href: '#acoes', icon: 'pill' },
  { label: 'Equipamentos', href: '#acoes', icon: 'wheelchair' },
  { label: 'Apoio emocional', href: '#acoes', icon: 'heartHands' },
  { label: 'Bazar', href: '#bazar', icon: 'shirt' },
  { label: 'Como ajudar', href: '#ajudar', icon: 'handHeart' },
];

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
];

export const gallery = [
  {
    src: galleryImages.equipe,
    alt: 'Equipe de voluntários reunida durante evento beneficente',
    caption: 'Voluntários reunidos em mais uma ação beneficente',
    featured: true,
  },
  {
    src: galleryImages.doacoes,
    alt: 'Voluntários recebendo grande doação de alimentos',
    caption: 'Doações de alimentos recebidas pela equipe',
  },
  {
    src: galleryImages.evento,
    alt: 'Salão cheio durante evento realizado pelo GGCC',
    caption: 'A comunidade reunida em um dos eventos do grupo',
  },
  {
    src: galleryImages.voluntarias,
    alt: 'Voluntárias preparando alimentos em evento',
    caption: 'Voluntárias trabalhando juntas em evento beneficente',
  },
  {
    src: galleryImages.produtos,
    alt: 'Equipe com itens produzidos para ação beneficente',
    caption: 'Produtos preparados com dedicação pelos voluntários',
  },
  {
    src: galleryImages.campanha,
    alt: 'Equipe do GGCC em campanha na praça',
    caption: 'Mobilização do grupo junto à comunidade',
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
    slug: 'feira-do-pastel',
    titulo: 'Feira do Pastel',
    data: 'Data a confirmar',
    categoria: 'Evento',
    resumo: 'Espaço reservado para divulgar data, horário, local e informações da próxima feira beneficente.',
    conteudo: [
      'Este conteúdo é provisório. Use este primeiro parágrafo para apresentar a Feira do Pastel e explicar como a comunidade poderá participar.',
      'Use este segundo parágrafo para informar data, horário, local, formas de colaboração e demais orientações importantes.',
    ],
    imagem: null,
    destaque: true,
  },
  {
    id: 2,
    slug: 'reuniao-de-voluntarios',
    titulo: 'Reunião de voluntários',
    data: 'Data a confirmar',
    categoria: 'Encontro',
    resumo: 'Espaço reservado para comunicados, pautas e registros das reuniões da equipe de voluntários.',
    conteudo: [
      'Este conteúdo é provisório. Apresente aqui o objetivo da reunião, os temas tratados e os encaminhamentos definidos pelo grupo.',
      'Quando houver um registro oficial, substitua este texto pelas informações revisadas e adicione uma fotografia autorizada.',
    ],
    imagem: null,
    destaque: true,
  },
  {
    id: 3,
    slug: 'acao-beneficente',
    titulo: 'Ação beneficente',
    data: 'Data a confirmar',
    categoria: 'Ação',
    resumo: 'Espaço reservado para apresentar campanhas, resultados e atividades realizadas junto à comunidade.',
    conteudo: [
      'Este conteúdo é provisório. Conte aqui como a ação foi realizada, quem participou e qual foi o resultado alcançado.',
      'Inclua somente informações confirmadas pelo grupo e fotografias cuja publicação tenha sido autorizada.',
    ],
    imagem: null,
    destaque: true,
  },
];

export const contactConfig = {
  recipient: 'ggccancer@hotmail.com',
  // Adicione aqui um endpoint HTTPS quando o grupo contratar um serviço de formulário.
  endpoint: '',
};

export const pixConfig = {
  key: '06.311.935/0001-75',
  // Adicione a imagem oficial em img/qrcode-pix.png e informe o caminho abaixo.
  qrCodeImage: '',
};
