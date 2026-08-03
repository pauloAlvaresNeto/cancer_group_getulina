const legacyRoutes = {
  noticias: '/noticias/',
  membros: '/membros/',
  memorial: '/memorial/',
  galeria: '/galeria/',
};

const params = new URLSearchParams(location.search);
const page = params.get('pagina');
let target = legacyRoutes[page];

if (page === 'noticia') {
  const slug = params.get('slug');
  target = slug ? `/noticias/?slug=${encodeURIComponent(slug)}` : '/noticias/';
}

location.replace(target || '/noticias/');
