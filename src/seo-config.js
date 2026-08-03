export const siteSeoConfig = Object.freeze({
  name: 'Grupo Getulinense de Combate ao Câncer',
  url: 'https://ggcc.org.br/',
  locale: 'pt_BR',
  shareImage: 'https://ggcc.org.br/og-image.webp',
  shareImageWidth: 1334,
  shareImageHeight: 580,
  shareImageAlt: 'Voluntários do Grupo Getulinense de Combate ao Câncer reunidos',
});

export const internalPageSeo = Object.freeze({
  noticias: Object.freeze({
    title: 'Notícias — GGCC Getulina',
    description: 'Eventos, campanhas, reuniões, avisos e atividades do Grupo Getulinense de Combate ao Câncer.',
    path: '/noticias/',
  }),
  membros: Object.freeze({
    title: 'Membros e voluntários — GGCC Getulina',
    description:
      'Informações sobre a diretoria, o conselho fiscal, os suplentes e os voluntários do Grupo Getulinense de Combate ao Câncer.',
    path: '/membros/',
  }),
  memorial: Object.freeze({
    title: 'Memorial — GGCC Getulina',
    description:
      'Uma homenagem às pessoas que dedicaram parte de suas vidas ao Grupo Getulinense de Combate ao Câncer.',
    path: '/memorial/',
  }),
  galeria: Object.freeze({
    title: 'Galeria — GGCC Getulina',
    description:
      'Registros das ações, dos encontros e dos momentos compartilhados pelo Grupo Getulinense de Combate ao Câncer.',
    path: '/galeria/',
  }),
});

export const createInternalPageStructuredData = ({ title, description, path }) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url: new URL(path, siteSeoConfig.url).href,
  inLanguage: 'pt-BR',
  isPartOf: {
    '@type': 'WebSite',
    name: siteSeoConfig.name,
    url: siteSeoConfig.url,
  },
  about: {
    '@type': 'NGO',
    name: siteSeoConfig.name,
    url: siteSeoConfig.url,
  },
});
