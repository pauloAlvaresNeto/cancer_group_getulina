import './styles.css';
import {
  actions,
  conselhoFiscal,
  contactConfig,
  diretoria,
  events,
  gallery,
  memorialSlots,
  noticias,
  pixConfig,
  quickLinks,
  suplentes,
} from './data.js';

const historyPdfUrl = new URL('../historico.pdf', import.meta.url).href;
const logoUrl = new URL('../img/logo.png', import.meta.url).href;

const icons = {
  heartPulse: '<path d="M3 12h4l2-5 4 10 2-5h6"/><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5a5.5 5.5 0 0 0 1-8.9Z"/>',
  pill: '<path d="m10.5 20.5 10-10a5 5 0 0 0-7-7l-10 10a5 5 0 0 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
  wheelchair: '<circle cx="8.5" cy="4.5" r="2"/><path d="M10 9H7l-1 5h7l2 5"/><path d="M7 11a5 5 0 1 0 6 6"/><path d="M15 11h3l2 4"/>',
  heartHands: '<path d="M20.8 8.6c.7-2.3-.7-4.6-3-5.2-1.8-.4-3.4.3-4.4 1.7L12 7l-1.4-1.9a4.4 4.4 0 0 0-7.4 4.7C4.8 12.8 12 18 12 18s5.4-3.9 7.8-6.8"/><path d="M3 16v2l4 3h3M21 16v2l-4 3h-3"/>',
  shirt: '<path d="m16 3-4 4-4-4-5 3 3 5v10h12V11l3-5-5-3Z"/>',
  handHeart: '<path d="M11 14.5c-2.5-2-5-3.7-5-6.5a3 3 0 0 1 5.3-2L12 7l.7-1A3 3 0 0 1 18 8c0 2.8-2.5 4.5-5 6.5l-1 .8-1-.8Z"/><path d="M3 16v2l4 3h4l3-3M21 16v2l-4 3h-2"/>',
  clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5V3h6v1.5M9 10h6M9 14h6"/>',
  basket: '<path d="M4 10h16l-2 10H6L4 10Z"/><path d="m8 10 4-6 4 6M8 14v2M12 14v2M16 14v2"/>',
  stethoscope: '<path d="M6 3v5a4 4 0 0 0 8 0V3"/><path d="M10 12v2a5 5 0 0 0 10 0v-1"/><circle cx="20" cy="10" r="2"/>',
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10M9 21v-6h6v6"/>',
  sparkles: '<path d="m12 3 1.4 3.6L17 8l-3.6 1.4L12 13l-1.4-3.6L7 8l3.6-1.4L12 3ZM5 14l.9 2.1L8 17l-2.1.9L5 20l-.9-2.1L2 17l2.1-.9L5 14ZM19 13l.9 2.1L22 16l-2.1.9L19 19l-.9-2.1L16 16l2.1-.9L19 13Z"/>',
  utensils: '<path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M15 3v18M15 3c3 1 5 4 5 8h-5"/>',
  gavel: '<path d="m14 7 3 3M5 16l6-6M8 5l6 6 3-3-6-6-3 3ZM3 21h12"/>',
  cup: '<path d="M4 8h14v5a6 6 0 0 1-12 0V8ZM18 10h1a3 3 0 0 1 0 6h-2M6 21h10"/>',
};

const svg = (name, className = 'size-6') =>
  `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;

const renderNewsCard = (noticia, { compact = false } = {}) => {
  const visual = noticia.imagem
    ? `<img src="${noticia.imagem}" alt="" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />`
    : `<div class="grid h-full w-full place-items-center bg-gradient-to-br from-orange-50 to-stone-100 text-orange-300">
        <span class="flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]">
          <svg class="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m5 18 5-5 3 3 2-2 4 4"/></svg>
          Imagem a adicionar
        </span>
      </div>`;

  return `
    <article class="group reveal overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-900/5">
      <div class="${compact ? 'aspect-[16/9]' : 'aspect-[4/3]'} overflow-hidden">${visual}</div>
      <div class="p-6">
        <div class="flex flex-wrap items-center gap-2 text-xs font-bold">
          <span class="text-orange-700">${noticia.categoria || 'Notícia'}</span>
          <span class="size-1 rounded-full bg-slate-300" aria-hidden="true"></span>
          <time class="text-slate-500">${noticia.data}</time>
        </div>
        <h3 class="mt-3 text-xl font-black leading-tight tracking-tight text-slate-900">${noticia.titulo}</h3>
        <p class="mt-3 text-sm leading-6 text-slate-600">${noticia.resumo}</p>
        <a href="./interna.html?pagina=noticia&slug=${encodeURIComponent(noticia.slug)}" class="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-orange-700 hover:text-orange-800 focus-visible:rounded focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange-600">
          Ler mais
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
        </a>
      </div>
    </article>`;
};

if (document.body.dataset.page === 'home') {

document.querySelector('#quick-links').innerHTML = quickLinks
  .map(
    ({ label, href, icon }) => `
      <a href="${href}" class="group reveal flex min-h-36 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-900/5 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange-600">
        <span class="grid size-11 place-items-center rounded-xl bg-orange-50 text-orange-700 transition group-hover:bg-orange-600 group-hover:text-white">${svg(icon)}</span>
        <span class="flex items-end justify-between gap-2 text-sm font-extrabold leading-tight text-slate-900">
          ${label}
          <svg class="size-4 shrink-0 text-orange-600 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
        </span>
      </a>`,
  )
  .join('');

document.querySelector('#actions-grid').innerHTML = actions
  .map(
    ({ title, text, icon }, index) => `
      <article class="reveal group rounded-[1.5rem] border border-slate-200/80 bg-white p-6 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7">
        <div class="flex items-start justify-between gap-5">
          <span class="grid size-12 place-items-center rounded-2xl bg-orange-50 text-orange-700 transition group-hover:bg-orange-600 group-hover:text-white">${svg(icon)}</span>
          <span class="text-xs font-black text-slate-300">0${index + 1}</span>
        </div>
        <h3 class="mt-8 text-xl font-black leading-tight tracking-tight text-slate-900">${title}</h3>
        <p class="mt-3 text-sm leading-6 text-slate-600">${text}</p>
      </article>`,
  )
  .join('');

document.querySelector('#events-grid').innerHTML = events
  .map(
    ({ title, text, icon }) => `
      <article class="reveal group flex flex-col rounded-[1.5rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-900/5 lg:min-h-72">
        <span class="grid size-12 place-items-center rounded-2xl bg-slate-950 text-orange-400">${svg(icon)}</span>
        <div class="mt-8 lg:mt-auto lg:pt-8">
          <h3 class="text-xl font-black leading-tight tracking-tight text-slate-900">${title}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">${text}</p>
        </div>
      </article>`,
  )
  .join('');

document.querySelector('#home-news-grid').innerHTML = noticias
  .filter((noticia) => noticia.destaque)
  .slice(0, 3)
  .map((noticia) => renderNewsCard(noticia, { compact: true }))
  .join('');

document.querySelector('#gallery-grid').innerHTML = gallery
  .map(
    ({ src, alt, caption, featured }, index) => `
      <button
        type="button"
        class="gallery-button reveal group relative overflow-hidden rounded-2xl text-left focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange-600 ${featured ? 'col-span-2 row-span-2' : index === 3 ? 'row-span-2' : ''}"
        data-src="${src}"
        data-alt="${alt}"
        data-caption="${caption}"
        aria-label="Ampliar foto: ${caption}"
      >
        <img src="${src}" alt="${alt}" loading="lazy" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-4 pb-4 pt-12 text-xs font-bold leading-5 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:text-sm">${caption}</span>
      </button>`,
  )
  .join('');

const header = document.querySelector('#site-header');
const updateHeader = () => {
  header.classList.toggle('border-slate-200', window.scrollY > 24);
  header.classList.toggle('bg-white/95', window.scrollY > 24);
  header.classList.toggle('shadow-sm', window.scrollY > 24);
  header.classList.toggle('backdrop-blur-xl', window.scrollY > 24);
};
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const menuButton = document.querySelector('#menu-button');
const mobileMenu = document.querySelector('#mobile-menu');
const menuIconPath = document.querySelector('#menu-icon-path');

const setMenuOpen = (open) => {
  mobileMenu.classList.toggle('hidden', !open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  menuIconPath.setAttribute('d', open ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16');
};

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

document.querySelectorAll('.mobile-nav-link').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

const moreButton = document.querySelector('#more-button');
const moreMenu = document.querySelector('#more-menu');
const setMoreOpen = (open) => {
  moreMenu.classList.toggle('hidden', !open);
  moreButton.setAttribute('aria-expanded', String(open));
};

moreButton.addEventListener('click', (event) => {
  event.stopPropagation();
  setMoreOpen(moreButton.getAttribute('aria-expanded') !== 'true');
});

document.addEventListener('click', (event) => {
  if (!moreMenu.contains(event.target)) setMoreOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenuOpen(false);
    setMoreOpen(false);
  }
});

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px' },
  );
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxCaption = document.querySelector('#lightbox-caption');
const lightboxClose = document.querySelector('#lightbox-close');

document.querySelectorAll('.gallery-button').forEach((button) => {
  button.addEventListener('click', () => {
    lightboxImage.src = button.dataset.src;
    lightboxImage.alt = button.dataset.alt;
    lightboxCaption.textContent = button.dataset.caption;
    lightbox.showModal();
  });
});

lightboxClose.addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});

const copyButton = document.querySelector('#copy-pix');
const pixKey = document.querySelector('#pix-key');
const pixQrPlaceholder = document.querySelector('#pix-qr-placeholder');

pixKey.textContent = pixConfig.key;
if (pixConfig.qrCodeImage) {
  pixQrPlaceholder.innerHTML = `<img src="${pixConfig.qrCodeImage}" alt="QR Code oficial do Pix do GGCC" class="h-full w-full rounded-xl object-contain" />`;
  pixQrPlaceholder.classList.remove('border-dashed');
}

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(pixConfig.key);
    copyButton.textContent = 'Chave copiada!';
  } catch {
    copyButton.textContent = `PIX: ${pixConfig.key}`;
  }
  window.setTimeout(() => {
    copyButton.textContent = 'Copiar chave PIX';
  }, 2500);
});

document.querySelector('#history-pdf-link').href = historyPdfUrl;

const contactForm = document.querySelector('#contact-form');
const contactSubmit = document.querySelector('#contact-submit');
const contactFeedback = document.querySelector('#contact-feedback');

const showContactFeedback = (message, type) => {
  contactFeedback.textContent = message;
  contactFeedback.className =
    type === 'success'
      ? 'mt-4 rounded-xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-800'
      : 'mt-4 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-800';
};

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  contactFeedback.classList.add('hidden');

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    showContactFeedback('Revise os campos obrigatórios antes de enviar.', 'error');
    return;
  }

  contactSubmit.disabled = true;
  contactSubmit.textContent = 'Enviando…';
  const formData = new FormData(contactForm);

  try {
    if (contactConfig.endpoint) {
      const response = await fetch(contactConfig.endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      if (!response.ok) throw new Error('Falha no serviço de formulário');
      contactForm.reset();
      showContactFeedback('Mensagem enviada com sucesso. Entraremos em contato em breve.', 'success');
    } else {
      const subject = encodeURIComponent(`[Site GGCC] ${formData.get('assunto')}`);
      const body = encodeURIComponent(
        `Nome: ${formData.get('nome')}\nE-mail: ${formData.get('email')}\nTelefone: ${formData.get('telefone') || 'Não informado'}\n\n${formData.get('mensagem')}`,
      );
      window.location.href = `mailto:${contactConfig.recipient}?subject=${subject}&body=${body}`;
      showContactFeedback('Seu aplicativo de e-mail foi aberto. Revise a mensagem e confirme o envio.', 'success');
    }
  } catch {
    showContactFeedback(
      `Não foi possível preparar o envio. Escreva diretamente para ${contactConfig.recipient}.`,
      'error',
    );
  } finally {
    contactSubmit.disabled = false;
    contactSubmit.textContent = 'Enviar mensagem';
  }
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
}

const getInitials = (name) => {
  if (!name) return '—';
  const words = name.trim().split(/\s+/);
  return `${words[0][0]}${words.length > 1 ? words.at(-1)[0] : ''}`.toUpperCase();
};

const initReveal = () => {
  const elements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px' },
    );
    elements.forEach((element) => observer.observe(element));
  } else {
    elements.forEach((element) => element.classList.add('is-visible'));
  }
};

const initInternalLayout = (active) => {
  const pageLink = (page, label) =>
    `<a class="nav-link ${active === page ? 'text-orange-700' : ''}" href="./interna.html?pagina=${page}">${label}</a>`;

  document.querySelector('#shared-header').innerHTML = `
    <header class="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
      <nav class="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8" aria-label="Navegação principal">
        <a href="./index.html#inicio" class="group flex min-w-0 items-center gap-3" aria-label="GGCC, voltar ao início">
          <img src="${logoUrl}" alt="" width="1024" height="1024" class="size-12 shrink-0 object-contain sm:size-14" />
          <span class="min-w-0 leading-tight">
            <strong class="block truncate text-sm font-extrabold text-slate-900 sm:text-base">Grupo Getulinense</strong>
            <span class="block truncate text-[10px] font-bold uppercase tracking-[0.18em] text-orange-600 sm:text-xs">Combate ao Câncer</span>
          </span>
        </a>
        <ul class="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
          <li><a class="nav-link" href="./index.html#historia">História</a></li>
          <li><a class="nav-link" href="./index.html#acoes">Ações</a></li>
          <li><a class="nav-link" href="./index.html#bazar">Bazar</a></li>
          <li><a class="nav-link" href="./index.html#eventos">Eventos</a></li>
          <li>${pageLink('noticias', 'Notícias')}</li>
          <li><a class="nav-link" href="./index.html#contato">Contato</a></li>
          <li class="relative">
            <button id="more-button" type="button" class="nav-link inline-flex items-center gap-1" aria-expanded="false" aria-controls="more-menu">
              Mais
              <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <ul id="more-menu" class="absolute right-0 top-full hidden w-48 rounded-2xl border border-slate-200 bg-white p-2 text-sm shadow-xl">
              <li><a class="dropdown-link" href="./interna.html?pagina=membros">Membros</a></li>
              <li><a class="dropdown-link" href="./interna.html?pagina=memorial">Memorial</a></li>
              <li><a class="dropdown-link" href="./index.html#galeria">Galeria</a></li>
              <li><a class="dropdown-link" href="./index.html#25-anos">25 Anos</a></li>
            </ul>
          </li>
        </ul>
        <div class="flex items-center gap-2">
          <a href="./index.html#ajudar" class="hidden rounded-full bg-orange-600 px-5 py-3 text-sm font-extrabold text-white sm:inline-flex">Quero ajudar</a>
          <button id="menu-button" type="button" class="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 lg:hidden" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobile-menu">
            <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path id="menu-icon-path" d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </nav>
      <div id="mobile-menu" class="hidden max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-100 bg-white px-5 pb-6 pt-3 shadow-xl lg:hidden">
        <ul class="mx-auto grid max-w-7xl gap-1 text-base font-bold">
          <li><a class="mobile-nav-link" href="./index.html#historia">História</a></li>
          <li><a class="mobile-nav-link" href="./index.html#acoes">Nossas ações</a></li>
          <li><a class="mobile-nav-link" href="./index.html#bazar">Bazar beneficente</a></li>
          <li><a class="mobile-nav-link" href="./index.html#eventos">Eventos</a></li>
          <li><a class="mobile-nav-link" href="./interna.html?pagina=noticias">Notícias</a></li>
          <li><a class="mobile-nav-link" href="./index.html#contato">Contato</a></li>
          <li><a class="mobile-nav-link" href="./interna.html?pagina=membros">Membros</a></li>
          <li><a class="mobile-nav-link" href="./interna.html?pagina=memorial">Memorial</a></li>
          <li><a class="mobile-nav-link" href="./index.html#galeria">Galeria</a></li>
          <li><a class="mobile-nav-link" href="./index.html#25-anos">25 Anos</a></li>
        </ul>
      </div>
    </header>`;

  document.querySelector('#shared-footer').innerHTML = `
    <footer class="bg-slate-950 py-12 text-white">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <div class="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div class="max-w-sm">
            <a href="./index.html#inicio" class="flex items-center gap-3">
              <img src="${logoUrl}" alt="" class="size-14 object-contain" />
              <span><strong class="block text-lg font-black">GGCC Getulina</strong><span class="text-xs font-bold uppercase tracking-[0.14em] text-orange-400">Combate ao Câncer</span></span>
            </a>
            <p class="mt-5 text-sm leading-6 text-white/55">Dar ao paciente diagnosticado com câncer condições de sobrevida maior e melhor, caminhando em direção à cura.</p>
          </div>
          <div>
            <h2 class="text-sm font-extrabold">Conteúdo</h2>
            <ul class="mt-4 grid gap-3 text-sm text-white/55">
              <li><a class="footer-link" href="./interna.html?pagina=noticias">Notícias</a></li>
              <li><a class="footer-link" href="./interna.html?pagina=membros">Membros</a></li>
              <li><a class="footer-link" href="./interna.html?pagina=memorial">Memorial</a></li>
              <li><a class="footer-link" href="./index.html#galeria">Galeria</a></li>
            </ul>
          </div>
          <div>
            <h2 class="text-sm font-extrabold">Contato</h2>
            <ul class="mt-4 grid gap-3 text-sm text-white/55">
              <li><a class="footer-link" href="tel:+551435522966">(14) 3552-2966</a></li>
              <li><a class="footer-link break-all" href="mailto:ggccancer@hotmail.com">ggccancer@hotmail.com</a></li>
              <li><a class="footer-link" href="./index.html#contato">Enviar mensagem</a></li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col justify-between gap-3 pt-7 text-xs text-white/40 sm:flex-row">
          <p>© ${new Date().getFullYear()} Grupo Getulinense de Combate ao Câncer.</p>
          <p>CNPJ 06.311.935/0001-75 · Getulina, SP</p>
        </div>
      </div>
    </footer>`;

  const menuButton = document.querySelector('#menu-button');
  const mobileMenu = document.querySelector('#mobile-menu');
  const menuIconPath = document.querySelector('#menu-icon-path');
  const setMenuOpen = (open) => {
    mobileMenu.classList.toggle('hidden', !open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    menuIconPath.setAttribute('d', open ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16');
  };
  menuButton.addEventListener('click', () => setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true'));
  document.querySelectorAll('.mobile-nav-link').forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));

  const moreButton = document.querySelector('#more-button');
  const moreMenu = document.querySelector('#more-menu');
  const setMoreOpen = (open) => {
    moreMenu.classList.toggle('hidden', !open);
    moreButton.setAttribute('aria-expanded', String(open));
  };
  moreButton.addEventListener('click', (event) => {
    event.stopPropagation();
    setMoreOpen(moreButton.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('click', (event) => {
    if (!moreMenu.contains(event.target)) setMoreOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
      setMoreOpen(false);
    }
  });
};

const memberVisual = (member, compact = false) =>
  member.foto
    ? `<img src="${member.foto}" alt="Fotografia de ${member.nome}" class="h-full w-full object-cover" />`
    : `<div class="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-stone-100 text-orange-700">
        <span class="grid ${compact ? 'size-14' : 'size-20'} place-items-center rounded-full bg-white text-xl font-black shadow-sm">${getInitials(member.nome)}</span>
        ${compact ? '' : '<span class="mt-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-400">Fotografia a adicionar</span>'}
      </div>`;

const renderSmallMembers = (members) =>
  members
    .map(
      (member) => `
        <article class="reveal flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div class="size-20 shrink-0 overflow-hidden rounded-xl">${memberVisual(member, true)}</div>
          <div><p class="text-xs font-extrabold uppercase tracking-[0.12em] text-orange-700">${member.cargo}</p><h3 class="mt-1 font-black leading-tight text-slate-900">${member.nome}</h3></div>
        </article>`,
    )
    .join('');

const renderMembers = () => `
  <header class="bg-[#f7f4ef] py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-5 sm:px-8"><p class="eyebrow">Quem faz acontecer</p><h1 class="section-title mt-3">Membros e voluntários</h1><p class="section-copy mt-5">Conta atualmente com 40 voluntários.</p></div>
  </header>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="mb-12 max-w-3xl"><p class="eyebrow">Gestão</p><h2 class="section-title mt-3">Composição da Diretoria</h2><p class="section-copy mt-5">Os espaços para fotografias estão preparados para receber os retratos oficiais posteriormente.</p></div>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        ${diretoria
          .map(
            (member) => `
              <article class="reveal overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
                <div class="aspect-[4/3]">${memberVisual(member)}</div>
                <div class="p-6"><p class="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-700">${member.cargo}</p><h3 class="mt-2 text-xl font-black leading-tight text-slate-900">${member.nome}</h3></div>
              </article>`,
          )
          .join('')}
      </div>
    </div>
  </section>
  <section class="bg-[#f7f4ef] py-20 sm:py-28">
    <div class="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
      <div><p class="eyebrow">Acompanhamento</p><h2 class="mt-3 text-3xl font-black text-slate-900">Conselho Fiscal</h2><div class="mt-7 grid gap-3">${renderSmallMembers(conselhoFiscal)}</div></div>
      <div><p class="eyebrow">Apoio</p><h2 class="mt-3 text-3xl font-black text-slate-900">Suplentes</h2><div class="mt-7 grid gap-3">${renderSmallMembers(suplentes)}</div></div>
    </div>
  </section>
  <section class="bg-white py-20">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="reveal flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-orange-600 p-8 text-white sm:p-12 lg:flex-row lg:items-center">
        <div><p class="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-100">Uma grande equipe</p><h2 class="mt-3 text-3xl font-black sm:text-4xl">40 voluntários unidos pelo cuidado.</h2></div>
        <a href="./index.html#contato" class="rounded-full bg-white px-6 py-3 text-sm font-extrabold text-orange-700">Quero ser voluntário</a>
      </div>
    </div>
  </section>`;

const renderMemorial = () => `
  <header class="bg-slate-950 py-20 text-white sm:py-28">
    <div class="mx-auto max-w-4xl px-5 text-center sm:px-8"><p class="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-400">Memória e gratidão</p><h1 class="mt-4 text-4xl font-black sm:text-6xl">Memorial</h1><p class="mx-auto mt-6 max-w-2xl leading-8 text-white/65">Um espaço de respeito e carinho para preservar a memória de pessoas que fizeram parte da caminhada do grupo.</p></div>
  </header>
  <section class="bg-[#f7f4ef] py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="mb-12 max-w-3xl"><p class="eyebrow">Estrutura em preparação</p><h2 class="section-title mt-3">Homenagens</h2><p class="section-copy mt-5">Nomes, fotografias e textos serão incluídos somente após revisão e autorização das famílias.</p></div>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        ${memorialSlots
          .map(
            (slot) => `
              <article class="reveal overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
                <div class="grid aspect-[4/3] place-items-center bg-gradient-to-br from-stone-100 to-orange-50 text-slate-400"><span class="text-xs font-extrabold uppercase tracking-[0.14em]">Fotografia a adicionar</span></div>
                <div class="p-6"><p class="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-700">Espaço reservado</p><h3 class="mt-2 text-xl font-black text-slate-900">${slot.nome || 'Nome a adicionar'}</h3><p class="mt-3 text-sm leading-6 text-slate-500">${slot.homenagem || 'Pequena homenagem será adicionada após revisão e autorização da família.'}</p></div>
              </article>`,
          )
          .join('')}
      </div>
      <a href="./index.html" class="mt-12 inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-extrabold">Voltar à página inicial</a>
    </div>
  </section>`;

const renderNewsList = () => `
  <header class="bg-[#f7f4ef] py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-5 sm:px-8"><p class="eyebrow">Fique por dentro</p><h1 class="section-title mt-3">Notícias</h1><p class="section-copy mt-5">Eventos, campanhas, reuniões, avisos e registros das atividades do grupo.</p></div>
  </header>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="mb-10 rounded-2xl border border-dashed border-orange-300 bg-orange-50 p-5 text-sm leading-6 text-orange-900">Os conteúdos exibidos nesta etapa são exemplos editáveis e devem ser substituídos pelas publicações oficiais do grupo.</div>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">${noticias.map((item) => renderNewsCard(item)).join('')}</div>
    </div>
  </section>`;

const renderArticle = (slug) => {
  const noticia = noticias.find((item) => item.slug === slug);
  if (!noticia) {
    return `<div class="mx-auto max-w-2xl px-5 py-24 text-center"><p class="eyebrow">Notícia não encontrada</p><h1 class="section-title mt-3">Este conteúdo não está disponível.</h1><a href="./interna.html?pagina=noticias" class="mt-8 inline-flex rounded-full bg-orange-600 px-6 py-3 text-sm font-extrabold text-white">Voltar às notícias</a></div>`;
  }
  const recent = noticias
    .filter((item) => item.slug !== noticia.slug)
    .slice(0, 2)
    .map((item) => `<a href="./interna.html?pagina=noticia&slug=${encodeURIComponent(item.slug)}" class="rounded-2xl border border-slate-200 bg-white p-5"><span class="text-xs font-bold text-orange-700">${item.categoria}</span><strong class="mt-2 block text-lg text-slate-900">${item.titulo}</strong></a>`)
    .join('');

  return `
    <article>
      <header class="bg-[#f7f4ef] px-5 pb-16 pt-16 sm:px-8 sm:pb-20">
        <div class="mx-auto max-w-4xl">
          <a href="./interna.html?pagina=noticias" class="text-sm font-extrabold text-orange-700">← Voltar às notícias</a>
          <div class="mt-10 flex gap-3 text-xs font-bold"><span class="rounded-full bg-orange-100 px-3 py-1.5 text-orange-800">${noticia.categoria}</span><time class="py-1.5 text-slate-500">${noticia.data}</time></div>
          <h1 class="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-6xl">${noticia.titulo}</h1><p class="mt-6 max-w-3xl text-lg leading-8 text-slate-600">${noticia.resumo}</p>
        </div>
      </header>
      <div class="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div class="grid aspect-[16/9] place-items-center rounded-[2rem] bg-gradient-to-br from-orange-50 to-stone-100 text-xs font-extrabold uppercase tracking-widest text-orange-300">Imagem da notícia a adicionar</div>
        <div class="mx-auto mt-12 max-w-3xl"><div class="space-y-6 text-base leading-8 text-slate-700">${noticia.conteudo.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div><div class="mt-14 border-t border-slate-200 pt-10"><h2 class="text-2xl font-black text-slate-900">Outras notícias recentes</h2><div class="mt-6 grid gap-4 sm:grid-cols-2">${recent}</div></div></div>
      </div>
    </article>`;
};

if (document.body.dataset.page === 'internal') {
  const params = new URLSearchParams(window.location.search);
  const page = params.get('pagina') || 'noticias';
  const views = {
    membros: { title: 'Membros — GGCC Getulina', html: renderMembers },
    memorial: { title: 'Memorial — GGCC Getulina', html: renderMemorial },
    noticias: { title: 'Notícias — GGCC Getulina', html: renderNewsList },
    noticia: { title: 'Notícia — GGCC Getulina', html: () => renderArticle(params.get('slug')) },
  };
  const view = views[page] || views.noticias;
  document.title = view.title;
  initInternalLayout(page === 'noticia' ? 'noticias' : page);
  document.querySelector('#internal-content').innerHTML = view.html();
  initReveal();
}
