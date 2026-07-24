// Eventos: substitua imagem e alt neste arquivo quando novas fotografias oficiais estiverem disponíveis.
export const events = [
  {
    titulo: 'Bazar de artesanato',
    descricao: 'Venda beneficente de artesanatos, roupas e acessórios doados pela comunidade.',
    imagem: new URL('../img/evento_artesanato.jpeg', import.meta.url).href,
    alt: 'Banca do bazar de artesanato do GGCC',
    icone: 'sparkles',
    categoria: 'Evento beneficente',
  },
  {
    titulo: 'Jantar italiano',
    descricao: 'Tradicional jantar beneficente com pratos típicos para arrecadação de recursos.',
    imagem: new URL('../img/evento_italiano.jpg', import.meta.url).href,
    alt: 'Salão decorado para o jantar italiano beneficente',
    icone: 'utensils',
    categoria: 'Gastronomia solidária',
  },
  {
    titulo: 'Leilão de gado',
    descricao: 'Evento anual realizado junto ao leilão da Paróquia, com animais doados pela comunidade.',
    imagem: '',
    alt: 'Fotografia do Leilão de gado',
    icone: 'gavel',
    categoria: 'Arrecadação',
  },
  {
    titulo: 'Chá beneficente',
    descricao: 'Encontro com venda de ingressos, prêmio especial e alimentos preparados para o evento.',
    imagem: new URL('../img/evento_cha.jpg', import.meta.url).href,
    alt: 'Salão preparado para o chá beneficente',
    icone: 'cup',
    categoria: 'Encontro beneficente',
  },
  {
    titulo: 'Barraca do Pastel',
    descricao:
      'Ação beneficente realizada algumas vezes ao longo do ano, com venda de pastéis para arrecadação de recursos para o grupo.',
    imagem: new URL('../img/evento_pastel.jpeg', import.meta.url).href,
    alt: 'Voluntárias trabalhando na Barraca do Pastel',
    icone: 'pastel',
    categoria: 'Gastronomia solidária',
  },
];
