import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import {
  createInternalPageStructuredData,
  internalPageSeo,
  siteSeoConfig,
} from './src/seo-config.js';

const internalPageSeoPlugin = () => ({
  name: 'internal-page-seo',
  transformIndexHtml(html) {
    const entry = Object.entries(internalPageSeo).find(([page]) =>
      html.includes(`data-internal-page="${page}"`),
    );

    if (!entry) return html;

    const [, pageConfig] = entry;
    const canonicalUrl = new URL(pageConfig.path, siteSeoConfig.url).href;

    return {
      html,
      tags: [
        { tag: 'title', children: pageConfig.title, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'description', content: pageConfig.description }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'robots', content: 'index, follow' }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#e95816' }, injectTo: 'head' },
        { tag: 'link', attrs: { rel: 'canonical', href: canonicalUrl }, injectTo: 'head' },
        { tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico', sizes: 'any' }, injectTo: 'head' },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }, injectTo: 'head' },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }, injectTo: 'head' },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:locale', content: siteSeoConfig.locale }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:site_name', content: siteSeoConfig.name }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:title', content: pageConfig.title }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:description', content: pageConfig.description }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:url', content: canonicalUrl }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image', content: siteSeoConfig.shareImage }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image:width', content: String(siteSeoConfig.shareImageWidth) }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image:height', content: String(siteSeoConfig.shareImageHeight) }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: siteSeoConfig.shareImageAlt }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'twitter:title', content: pageConfig.title }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'twitter:description', content: pageConfig.description }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'twitter:image', content: siteSeoConfig.shareImage }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'twitter:image:alt', content: siteSeoConfig.shareImageAlt }, injectTo: 'head' },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify(createInternalPageStructuredData(pageConfig)),
          injectTo: 'head',
        },
      ],
    };
  },
});

export default defineConfig({
  // O domínio próprio é publicado na raiz (https://ggcc.org.br/).
  base: '/',
  plugins: [internalPageSeoPlugin(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        inicio: 'index.html',
        legado: 'interna.html',
        noticias: 'noticias/index.html',
        membros: 'membros/index.html',
        memorial: 'memorial/index.html',
        galeria: 'galeria/index.html',
      },
    },
  },
});
