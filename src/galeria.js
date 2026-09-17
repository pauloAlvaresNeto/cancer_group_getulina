// Galeria oficial: adicione, remova ou substitua fotografias somente neste arquivo.
// Use featured: true nas imagens que também devem aparecer na página inicial.
export const gallery = [
  {
    src: new URL('../img/galeria/geral/galeria_1.webp', import.meta.url).href,
    width: 960,
    height: 686,
    alt: 'Voluntárias e voluntários reunidos em uma sala durante atividade do GGCC',
    featured: true,
  },
  {
    src: new URL('../img/galeria/geral/galeria_2.webp', import.meta.url).href,
    width: 1448,
    height: 1086,
    alt: 'Grupo de voluntárias reunido atrás de uma mesa com alimentos preparados',
    featured: true,
  },
  {
    src: new URL('../img/galeria/geral/galeria_3.webp', import.meta.url).href,
    width: 1600,
    height: 1200,
    alt: 'Voluntários ao lado de um veículo carregado com cestas e alimentos doados',
    featured: true,
  },
  {
    src: new URL('../img/galeria/geral/galeria_4.webp', import.meta.url).href,
    width: 1600,
    height: 1200,
    alt: 'Voluntários reunidos ao redor de alimentos doados em uma área coberta',
    featured: true,
  },
  {
    src: new URL('../img/galeria/geral/galeria_5.webp', import.meta.url).href,
    width: 1200,
    height: 1600,
    alt: 'Voluntários do GGCC atrás de uma mesa com produtos embalados para ação beneficente',
    featured: true,
  },
  {
    src: new URL('../img/galeria/geral/galeria_6.webp', import.meta.url).href,
    width: 1600,
    height: 1200,
    alt: 'Equipe do GGCC reunida ao lado de uma caminhonete e de uma faixa do grupo',
    featured: true,
  },
  {
    src: new URL('../img/galeria/geral/galeria_7.webp', import.meta.url).href,
    width: 1600,
    height: 768,
    alt: 'Salão com mesas ocupadas durante evento beneficente do GGCC',
  },
  {
    src: new URL('../img/galeria/geral/galeria_8.webp', import.meta.url).href,
    width: 1280,
    height: 961,
    alt: 'Voluntárias exibindo produtos decorados e embalados para venda beneficente',
  },
  {
    src: new URL('../img/galeria/geral/galeria_9.webp', import.meta.url).href,
    width: 1280,
    height: 960,
    alt: 'Grupo de mulheres reunido durante confraternização em um salão',
  },
  {
    src: new URL('../img/galeria/geral/galeria_10.webp', import.meta.url).href,
    width: 1280,
    height: 960,
    alt: 'Voluntárias do GGCC com camisetas laranja reunidas para uma fotografia',
  },
  {
    src: new URL('../img/galeria/geral/galeria_11.webp', import.meta.url).href,
    width: 1200,
    height: 1600,
    alt: 'Voluntárias trabalhando ao redor de uma mesa com alimentos em uma cozinha',
  },
  {
    src: new URL('../img/galeria/geral/galeria_12.webp', import.meta.url).href,
    width: 1600,
    height: 1200,
    alt: 'Equipe da barraca do pastel reunida atrás da bancada de preparo',
  },
  {
    src: new URL('../img/galeria/geral/galeria_13.webp', import.meta.url).href,
    width: 590,
    height: 443,
    alt: 'Voluntárias alinhadas em um palco durante cerimônia do GGCC',
  },
  {
    src: new URL('../img/galeria/geral/galeria_14.webp', import.meta.url).href,
    width: 590,
    height: 443,
    alt: 'Voluntárias do GGCC reunidas em uma área arborizada durante atividade externa',
  },
  {
    src: new URL('../img/galeria/geral/galeria_15.webp', import.meta.url).href,
    width: 590,
    height: 443,
    alt: 'Grupo de voluntárias posando atrás de uma mesa decorada em vermelho e branco',
  },
  ...[
    [1, 1280, 720], [2, 1280, 720], [3, 720, 1280], [4, 720, 1280], [5, 720, 1280],
    [6, 720, 1280], [7, 720, 1280], [8, 1280, 720], [9, 1280, 720], [10, 720, 1280],
    [11, 1280, 720], [12, 1280, 720], [13, 720, 1280], [14, 1280, 720], [15, 1280, 720],
    [16, 720, 1280], [17, 720, 1280], [18, 720, 1280], [19, 720, 1280], [20, 720, 1280],
    [21, 720, 1280], [22, 720, 1280], [23, 720, 1280], [24, 720, 1280], [25, 1280, 720],
    [26, 720, 1280], [27, 720, 1280], [28, 1280, 720], [29, 720, 1280], [30, 1280, 720],
    [31, 720, 1280], [32, 720, 1280], [33, 720, 1280], [34, 1280, 720], [35, 1280, 720],
    [36, 720, 1280], [37, 720, 1280], [38, 720, 1280], [39, 1280, 720], [40, 720, 1280],
    [41, 720, 1280], [42, 720, 1280], [43, 1280, 720], [44, 1280, 720], [45, 720, 1280],
    [46, 720, 1280], [47, 1280, 720], [48, 720, 1280], [49, 1280, 720], [50, 1280, 720],
    [51, 720, 1280], [52, 1280, 720], [53, 1280, 720], [54, 1280, 720], [55, 1280, 720],
  ].map(([number, width, height]) => {
    const filename = String(number).padStart(2, '0');
    const descriptions = [
      'Registro do Chá Beneficente do GGCC',
      'Convidados durante o Chá Beneficente do GGCC',
      'Momento de confraternização no Chá Beneficente do GGCC',
      'Atividade durante o Chá Beneficente realizado pelo GGCC',
    ];

    return {
      src: new URL(`../img/galeria/cha-beneficente/cha-beneficente-${filename}.webp`, import.meta.url).href,
      width,
      height,
      alt: descriptions[(number - 1) % descriptions.length],
      album: 'cha-beneficente',
    };
  }),
];
