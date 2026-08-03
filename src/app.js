import {
  actions,
  anniversaryEvent,
  bazarConfig,
  conselhoFiscal,
  contactConfig,
  diretoria,
  institutionConfig,
  memorialNames,
  noticias,
  pixConfig,
  siteConfig,
  suplentes,
} from './data.js';
import { getCountdownState } from './countdown.js';
import { events } from './eventos.js';
import { gallery } from './galeria.js';

const logoUrl = new URL('../img/logo-256.png', import.meta.url).href;
const institutionLocation = `${institutionConfig.address.addressLocality}, ${institutionConfig.address.addressRegion}`;
const institutionCityRegion = `${institutionConfig.address.addressLocality}/${institutionConfig.address.addressRegion}`;
const shareImageAlt = 'Voluntários do Grupo Getulinense de Combate ao Câncer reunidos';

const upsertMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  element.content = content;
};

const setPageMetadata = ({
  title,
  description,
  path,
  type = 'website',
  robots = 'index, follow',
}) => {
  const canonicalUrl = path ? new URL(path, siteConfig.url).href : null;

  document.title = title;
  upsertMeta('name', 'description', description);
  upsertMeta('name', 'robots', robots);
  upsertMeta('property', 'og:type', type);
  upsertMeta('property', 'og:locale', 'pt_BR');
  upsertMeta('property', 'og:site_name', institutionConfig.name);
  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  if (canonicalUrl) {
    upsertMeta('property', 'og:url', canonicalUrl);
  } else {
    document.head.querySelector('meta[property="og:url"]')?.remove();
  }
  upsertMeta('property', 'og:image', siteConfig.shareImage);
  upsertMeta('property', 'og:image:width', String(siteConfig.shareImageWidth));
  upsertMeta('property', 'og:image:height', String(siteConfig.shareImageHeight));
  upsertMeta('property', 'og:image:alt', shareImageAlt);
  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', title);
  upsertMeta('name', 'twitter:description', description);
  upsertMeta('name', 'twitter:image', siteConfig.shareImage);
  upsertMeta('name', 'twitter:image:alt', shareImageAlt);

  const canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonicalUrl) {
    canonical?.remove();
  } else if (canonical) {
    canonical.href = canonicalUrl;
  } else {
    const newCanonical = document.createElement('link');
    newCanonical.rel = 'canonical';
    newCanonical.href = canonicalUrl;
    document.head.append(newCanonical);
  }
};

const icons = {
  wheelchair: '<circle cx="8.5" cy="4.5" r="2"/><path d="M10 9H7l-1 5h7l2 5"/><path d="M7 11a5 5 0 1 0 6 6"/><path d="M15 11h3l2 4"/>',
  heartHands: '<path d="M20.8 8.6c.7-2.3-.7-4.6-3-5.2-1.8-.4-3.4.3-4.4 1.7L12 7l-1.4-1.9a4.4 4.4 0 0 0-7.4 4.7C4.8 12.8 12 18 12 18s5.4-3.9 7.8-6.8"/><path d="M3 16v2l4 3h3M21 16v2l-4 3h-3"/>',
  clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5V3h6v1.5M9 10h6M9 14h6"/>',
  basket: '<path d="M4 10h16l-2 10H6L4 10Z"/><path d="m8 10 4-6 4 6M8 14v2M12 14v2M16 14v2"/>',
  stethoscope: '<path d="M6 3v5a4 4 0 0 0 8 0V3"/><path d="M10 12v2a5 5 0 0 0 10 0v-1"/><circle cx="20" cy="10" r="2"/>',
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10M9 21v-6h6v6"/>',
  sparkles: '<path d="m12 3 1.4 3.6L17 8l-3.6 1.4L12 13l-1.4-3.6L7 8l3.6-1.4L12 3ZM5 14l.9 2.1L8 17l-2.1.9L5 20l-.9-2.1L2 17l2.1-.9L5 14ZM19 13l.9 2.1L22 16l-2.1.9L19 19l-.9-2.1L16 16l2.1-.9L19 13Z"/>',
  utensils: '<path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M15 3v18M15 3c3 1 5 4 5 8h-5"/>',
  gavel: '<path d="m14 7 3 3M5 16l6-6M8 5l6 6 3-3-6-6-3 3ZM3 21h12"/>',
  cup: '<path d="M4 8h14v5a6 6 0 0 1-12 0V8ZM18 10h1a3 3 0 0 1 0 6h-2M6 21h10"/>',
  pastel: '<path d="M4 15a8 8 0 0 1 16 0H4Z"/><path d="M6.5 12.5 8 14l1.5-1.5L11 14l1.5-1.5L14 14l1.5-1.5L17 14M4 18h16"/>',
  sprig: '<path d="M6 19c5-3 9-8 12-15"/><path d="M10 15c-3 .2-5-1.2-6-3.8 3-.3 5.3.9 6 3.8ZM13.5 10.5c.2-3 1.9-5.2 4.7-6.1.1 3-1.5 5.2-4.7 6.1ZM8 17.7c-2.1.2-3.8 1.1-5 2.8"/>',
};

const svg = (name, className = 'size-6') =>
  `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;

const hasNewsDetail = (noticia) => noticia.type === 'full' && Boolean(noticia.slug);

const renderNewsCard = (noticia, { compact = false, headingLevel = 3 } = {}) => {
  const showDetail = hasNewsDetail(noticia);
  const headingTag = headingLevel === 2 ? 'h2' : 'h3';
  const cardText = (
    showDetail ? [noticia.resumo] : [noticia.resumo, ...(noticia.conteudo || [])]
  )
    .filter(Boolean)
    .map(
      (paragraph, index) =>
        `<p class="${index === 0 ? 'mt-3' : 'mt-2'} text-sm leading-6 text-slate-600">${paragraph}</p>`,
    )
    .join('');
  const visual = noticia.imagem
    ? `<img src="${noticia.imagem}" alt="" width="${noticia.imageWidth}" height="${noticia.imageHeight}" loading="lazy" decoding="async" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />`
    : `<div class="grid h-full w-full place-items-center bg-gradient-to-br from-orange-50 to-stone-100 text-orange-300">
        <span class="flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]">
          <svg class="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m5 18 5-5 3 3 2-2 4 4"/></svg>
          Imagem ainda não disponível
        </span>
      </div>`;

  return `
    <article class="content-card group reveal overflow-hidden">
      <div class="${compact ? 'aspect-[16/9]' : 'aspect-[4/3]'} overflow-hidden">${visual}</div>
      <div class="p-6">
        <div class="flex flex-wrap items-center gap-2 text-xs font-bold">
          <span class="text-orange-700">${noticia.categoria || 'Notícia'}</span>
          <span class="size-1 rounded-full bg-slate-300" aria-hidden="true"></span>
          <time class="text-slate-500">${noticia.data}</time>
        </div>
        <${headingTag} class="mt-3 text-xl font-black leading-tight tracking-tight text-slate-900">${noticia.titulo}</${headingTag}>
        ${cardText}
        ${
          showDetail
            ? `<a href="./interna.html?pagina=noticia&slug=${encodeURIComponent(noticia.slug)}" class="mt-6 inline-flex min-h-11 items-center gap-2 rounded text-sm font-extrabold text-orange-700 hover:text-orange-800 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange-600">
                Ler notícia completa
                <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
              </a>`
            : ''
        }
      </div>
    </article>`;
};

const renderGalleryCard = ({ src, alt = '', width, height }) => {
  const safeAlt =
    typeof alt === 'string' && alt.trim()
      ? alt.trim()
      : 'Registro das atividades do Grupo Getulinense de Combate ao Câncer';

  return `
    <button
      type="button"
      class="gallery-button reveal group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-stone-100 text-left shadow-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange-600"
      data-src="${src}"
      data-alt="${safeAlt}"
      data-width="${width}"
      data-height="${height}"
      aria-label="Ampliar fotografia: ${safeAlt}"
    >
      <img src="${src}" alt="${safeAlt}" width="${width}" height="${height}" loading="lazy" decoding="async" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
    </button>`;
};

const lightboxMarkup = () => `
  <dialog
    id="lightbox"
    class="m-auto max-h-[92vh] w-[min(92vw,1100px)] overflow-hidden rounded-[2rem] bg-slate-950 p-0 text-white shadow-2xl backdrop:bg-slate-950/85 backdrop:backdrop-blur-sm"
    aria-label="Visualização ampliada da galeria"
  >
    <button id="lightbox-close" type="button" class="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-full bg-black/55 text-2xl text-white backdrop-blur transition hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white" aria-label="Fechar fotografia ampliada">×</button>
    <div class="relative">
      <img id="lightbox-image" src="" alt="" decoding="async" class="max-h-[78vh] w-full object-contain" />
      <button id="lightbox-previous" type="button" class="absolute left-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-2xl text-white backdrop-blur transition hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white" aria-label="Fotografia anterior">‹</button>
      <button id="lightbox-next" type="button" class="absolute right-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-2xl text-white backdrop-blur transition hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white" aria-label="Próxima fotografia">›</button>
    </div>
  </dialog>`;

const initGalleryLightbox = () => {
  const buttons = [...document.querySelectorAll('.gallery-button')];
  if (!buttons.length) return;

  if (!document.querySelector('#lightbox')) {
    document.body.insertAdjacentHTML('beforeend', lightboxMarkup());
  }

  const lightbox = document.querySelector('#lightbox');
  const image = document.querySelector('#lightbox-image');
  const closeButton = document.querySelector('#lightbox-close');
  const previousButton = document.querySelector('#lightbox-previous');
  const nextButton = document.querySelector('#lightbox-next');
  let currentIndex = 0;
  let lastTrigger = null;

  const showImage = (index) => {
    currentIndex = (index + buttons.length) % buttons.length;
    const button = buttons[currentIndex];
    image.src = button.dataset.src;
    image.alt = button.dataset.alt;
    image.width = Number(button.dataset.width);
    image.height = Number(button.dataset.height);
  };

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      lastTrigger = button;
      showImage(index);
      lightbox.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', () => lightbox.close());
  previousButton.addEventListener('click', () => showImage(currentIndex - 1));
  nextButton.addEventListener('click', () => showImage(currentIndex + 1));
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (event.key === 'ArrowRight') showImage(currentIndex + 1);
  });
  lightbox.addEventListener('close', () => lastTrigger?.focus());
};

if (document.body.dataset.page === 'home') {

const setEventText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

const setInstitutionContent = () => {
  document.querySelectorAll('[data-institution-mission]').forEach((element) => {
    element.textContent = institutionConfig.mission;
  });
  document.querySelectorAll('[data-institution-phone]').forEach((link) => {
    link.href = institutionConfig.phoneHref;
  });
  document.querySelectorAll('[data-institution-phone-label]').forEach((element) => {
    element.textContent = institutionConfig.phoneLabel;
  });
  document.querySelectorAll('[data-institution-email]').forEach((link) => {
    link.href = `mailto:${institutionConfig.email}`;
  });
  document.querySelectorAll('[data-institution-email-label]').forEach((element) => {
    element.textContent = institutionConfig.email;
  });
  document.querySelectorAll('[data-institution-cnpj]').forEach((element) => {
    element.textContent = institutionConfig.cnpj;
  });
  document.querySelectorAll('[data-institution-location]').forEach((element) => {
    element.textContent = institutionLocation;
  });
  document.querySelectorAll('[data-institution-street]').forEach((element) => {
    element.textContent = institutionConfig.address.streetAddress;
  });
  document.querySelectorAll('[data-institution-postal-code]').forEach((element) => {
    element.textContent = institutionConfig.address.postalCode;
  });
  document.querySelectorAll('[data-institution-city-region]').forEach((element) => {
    element.textContent = institutionCityRegion;
  });
  document.querySelectorAll('[data-institution-map]').forEach((link) => {
    link.href = institutionConfig.address.mapUrl;
  });
};

setInstitutionContent();
setEventText('#event-badge', anniversaryEvent.badge);
setEventText('#anniversary-title', anniversaryEvent.title);
setEventText('#event-introduction', anniversaryEvent.introduction);
const [eventYear, eventMonth, eventDay] = anniversaryEvent.date.split('-').map(Number);
const eventDateLabel = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
}).format(new Date(Date.UTC(eventYear, eventMonth - 1, eventDay)));
setEventText('#event-date', eventDateLabel);
setEventText('#event-time', anniversaryEvent.time || 'Horário oficial a confirmar');
setEventText('#event-venue', anniversaryEvent.venue);
setEventText('#event-singer', anniversaryEvent.singer);
setEventText('#event-ticket-message', anniversaryEvent.ticketMessage);

const eventImage = document.querySelector('#event-image');
if (eventImage && anniversaryEvent.image) {
  eventImage.src = anniversaryEvent.image;
  eventImage.width = anniversaryEvent.imageWidth;
  eventImage.height = anniversaryEvent.imageHeight;
}

const eventTicketLink = document.querySelector('#event-ticket-link');
if (eventTicketLink) {
  eventTicketLink.href = anniversaryEvent.ticketUrl || '#contato';
  if (/^https?:\/\//.test(anniversaryEvent.ticketUrl)) {
    eventTicketLink.target = '_blank';
    eventTicketLink.rel = 'noopener noreferrer';
  }
}

const countdown = {
  days: document.querySelector('#countdown-days'),
  hours: document.querySelector('#countdown-hours'),
  minutes: document.querySelector('#countdown-minutes'),
  seconds: document.querySelector('#countdown-seconds'),
  status: document.querySelector('#countdown-status'),
};

const setCountdownStatus = (message) => {
  if (countdown.status.textContent !== message) countdown.status.textContent = message;
};

let countdownInterval;
const updateEventCountdown = () => {
  const result = getCountdownState(anniversaryEvent);
  const values = [result.days, result.hours, result.minutes, result.seconds];
  [countdown.days, countdown.hours, countdown.minutes, countdown.seconds].forEach((element, index) => {
    element.textContent = String(values[index]).padStart(2, '0');
  });

  if (result.state === 'future') {
    setCountdownStatus(
      anniversaryEvent.time
        ? `para o jantar dos 25 anos do Grupo · ${anniversaryEvent.time}.`
        : 'para o jantar dos 25 anos do Grupo',
    );
    return result.state;
  }

  window.clearInterval(countdownInterval);
  if (result.state === 'today') setCountdownStatus('O evento é hoje.');
  else if (result.state === 'past') setCountdownStatus('Evento realizado.');
  else setCountdownStatus('A data do evento ainda não está disponível.');
  return result.state;
};

if (updateEventCountdown() === 'future') {
  countdownInterval = window.setInterval(updateEventCountdown, 1_000);
}

document.querySelectorAll('[data-facebook-link]').forEach((link) => {
  link.href = bazarConfig.facebookUrl;
});

document.querySelector('#bazar-gallery').innerHTML = bazarConfig.images
  .map(
    ({ src, alt, width, height }, index) =>
      src
        ? `<img src="${src}" alt="${alt}" width="${width}" height="${height}" loading="lazy" decoding="async" class="block aspect-[4/3] w-full rounded-[1.5rem] object-cover" />`
        : `<div class="grid aspect-[4/3] place-items-center rounded-[1.5rem] border border-dashed border-white/25 bg-white/5 p-6 text-center text-white/45">
            <span class="flex flex-col items-center gap-3 text-xs font-extrabold uppercase tracking-[0.14em]">
              <svg class="size-8 text-orange-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m5 18 5-5 3 3 2-2 4 4"/></svg>
              Fotografia ${index + 1} ainda não disponível
            </span>
          </div>`,
  )
  .join('');

document.querySelector('#actions-grid').innerHTML = actions
  .map(
    ({ title, text, icon }, index) => `
      <article class="content-card reveal group p-6 sm:p-7">
        <div class="flex items-start justify-between gap-5">
          <span class="content-card-icon size-12 rounded-2xl">${svg(icon)}</span>
          <span class="text-xs font-black text-slate-300">0${index + 1}</span>
        </div>
        <h3 class="mt-8 text-xl font-black leading-tight tracking-tight text-slate-900">${title}</h3>
        <p class="mt-3 text-sm leading-6 text-slate-600">${text}</p>
      </article>`,
  )
  .join('');

document.querySelector('#events-grid').innerHTML = events
  .map(
    ({ titulo, descricao, imagem, alt, width, height, icone, categoria }, index) => `
      <article class="content-card reveal group flex h-full flex-col overflow-hidden lg:col-span-2 ${
        index === 3 ? 'lg:col-start-2' : ''
      } ${
        index === 4
          ? 'sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.5rem)] lg:col-span-2 lg:mx-0 lg:w-full'
          : ''
      }">
        <div class="h-28 shrink-0 overflow-hidden rounded-t-[1.5rem] bg-gradient-to-br from-stone-100 to-orange-50 sm:h-32 xl:h-36">
          ${
            imagem
              ? `<img src="${imagem}" alt="${alt}" width="${width}" height="${height}" loading="lazy" decoding="async" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />`
              : `<div class="grid h-full w-full place-items-center p-6 text-center text-orange-700/55">
                  <span class="flex flex-col items-center gap-3 text-xs font-extrabold uppercase tracking-[0.14em]">
                    ${svg(icone, 'size-9')}
                    Fotografia ainda não disponível
                  </span>
                </div>`
          }
        </div>
        <div class="flex flex-1 flex-col p-6">
          <div class="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.12em] text-orange-700">
            <span class="content-card-icon size-9 rounded-xl">${svg(icone, 'size-5')}</span>
            <span>${categoria}</span>
          </div>
          <h3 class="mt-5 text-xl font-black leading-tight tracking-tight text-slate-900">${titulo}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">${descricao}</p>
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
  .filter(({ featured }) => featured)
  .slice(0, 6)
  .map((item) => renderGalleryCard(item))
  .join('');

const header = document.querySelector('#site-header');
const updateHeader = () => {
  header.classList.toggle('border-slate-200', window.scrollY > 24);
  header.classList.toggle('shadow-sm', window.scrollY > 24);
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

const testimonialButton = document.querySelector('#depoimento-toggle');
const testimonialContent = document.querySelector('#depoimento-completo');
const testimonialPreview = document.querySelector('#depoimento-previa');
const testimonialEllipsis = document.querySelector('#depoimento-reticencias');
const testimonialHighlight = document.querySelector('#depoimento-liga');
const testimonialPreviewTarget = document.querySelector('#depoimento-destaque-previa');
const testimonialContentTarget = document.querySelector('#depoimento-destaque-completo');

testimonialButton?.addEventListener('click', () => {
  const expanded = testimonialButton.getAttribute('aria-expanded') === 'true';
  const willExpand = !expanded;
  testimonialButton.setAttribute('aria-expanded', String(!expanded));
  testimonialButton.textContent = expanded ? 'Ler depoimento completo' : 'Ocultar depoimento completo';
  testimonialContent.hidden = expanded;
  testimonialPreview.hidden = willExpand;
  testimonialEllipsis.hidden = willExpand;
  (willExpand ? testimonialContentTarget : testimonialPreviewTarget).append(testimonialHighlight);
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

initGalleryLightbox();

const copyButton = document.querySelector('#copy-pix');
const pixKey = document.querySelector('#pix-key');
const pixQrPlaceholder = document.querySelector('#pix-qr-placeholder');
const pixCopyStatus = document.querySelector('#pix-copy-status');

pixKey.textContent = pixConfig.key;
if (pixConfig.qrCodeImage) {
  const pixQrCodeUrl = `${import.meta.env.BASE_URL}${pixConfig.qrCodeImage}`;
  pixQrPlaceholder.innerHTML = `<img src="${pixQrCodeUrl}" alt="QR Code Pix para fazer uma doação ao GGCC" width="${pixConfig.qrCodeWidth}" height="${pixConfig.qrCodeHeight}" loading="lazy" decoding="async" class="h-auto w-full" />`;
}

const fallbackCopyText = (value) => {
  const temporaryField = document.createElement('textarea');
  temporaryField.value = value;
  temporaryField.setAttribute('readonly', '');
  temporaryField.style.position = 'fixed';
  temporaryField.style.inset = '0 auto auto -9999px';
  temporaryField.style.opacity = '0';
  document.body.append(temporaryField);
  temporaryField.focus();
  temporaryField.select();
  temporaryField.setSelectionRange(0, value.length);
  const copied = document.execCommand('copy');
  temporaryField.remove();
  if (!copied) throw new Error('Não foi possível copiar a chave Pix');
};

const copyText = async (value) => {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch {
      // Alguns navegadores bloqueiam a API mesmo em contexto seguro.
    }
  }
  fallbackCopyText(value);
};

const defaultCopyButtonContent = copyButton.innerHTML;
let copyFeedbackActive = false;

copyButton.addEventListener('click', async () => {
  if (copyFeedbackActive) return;
  copyFeedbackActive = true;
  copyButton.disabled = true;
  pixCopyStatus.textContent = '';

  try {
    await copyText(pixConfig.key);
    copyButton.innerHTML = `
      <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
        <path d="m5 12 4 4L19 6" />
      </svg>
      <span>Chave Pix copiada</span>`;
    pixCopyStatus.textContent = 'Chave Pix copiada com sucesso.';
  } catch {
    copyButton.innerHTML = '<span>Não foi possível copiar</span>';
    pixCopyStatus.textContent = `Não foi possível copiar automaticamente. A chave Pix é ${pixConfig.key}.`;
  }

  window.setTimeout(() => {
    copyButton.innerHTML = defaultCopyButtonContent;
    copyButton.disabled = false;
    copyFeedbackActive = false;
  }, 2_000);
});

const contactForm = document.querySelector('#contact-form');
const contactSubmit = document.querySelector('#contact-submit');
const contactFeedback = document.querySelector('#contact-feedback');
const contactSubject = document.querySelector('#contact-subject');

document.querySelectorAll('[data-contact-subject]').forEach((link) => {
  link.addEventListener('click', () => {
    contactSubject.value = link.dataset.contactSubject;
  });
});

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
      `Não foi possível concluir o envio. Escreva diretamente para ${contactConfig.recipient}.`,
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
          <img src="${logoUrl}" alt="" width="256" height="256" decoding="async" class="size-12 shrink-0 object-contain sm:size-14" />
          <span class="min-w-0 leading-tight">
            <strong class="block truncate text-sm font-extrabold text-slate-900 sm:text-base">Grupo Getulinense</strong>
            <span class="block truncate text-[10px] font-bold uppercase tracking-[0.18em] text-orange-600 sm:text-xs">Combate ao Câncer</span>
          </span>
        </a>
        <ul class="hidden items-center gap-6 text-sm font-semibold text-slate-700 xl:flex">
          <li><a class="nav-link" href="./index.html#historia">História</a></li>
          <li><a class="nav-link" href="./index.html#depoimento">Depoimento</a></li>
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
            </ul>
          </li>
        </ul>
        <div class="flex items-center gap-2">
          <a href="./index.html#ajudar" class="hidden rounded-full bg-orange-600 px-5 py-3 text-sm font-extrabold text-white sm:inline-flex">Quero ajudar</a>
          <button id="menu-button" type="button" class="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 xl:hidden" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobile-menu">
            <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path id="menu-icon-path" d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </nav>
      <div id="mobile-menu" class="hidden max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-100 bg-white px-5 pb-6 pt-3 shadow-xl xl:hidden">
        <ul class="mx-auto grid max-w-7xl gap-1 text-base font-bold">
          <li><a class="mobile-nav-link" href="./index.html#historia">História</a></li>
          <li><a class="mobile-nav-link" href="./index.html#depoimento">Depoimento</a></li>
          <li><a class="mobile-nav-link" href="./index.html#acoes">Nossas ações</a></li>
          <li><a class="mobile-nav-link" href="./index.html#bazar">Bazar beneficente</a></li>
          <li><a class="mobile-nav-link" href="./index.html#eventos">Eventos</a></li>
          <li><a class="mobile-nav-link" href="./interna.html?pagina=noticias">Notícias</a></li>
          <li><a class="mobile-nav-link" href="./index.html#contato">Contato</a></li>
          <li><a class="mobile-nav-link" href="./interna.html?pagina=membros">Membros</a></li>
          <li><a class="mobile-nav-link" href="./interna.html?pagina=memorial">Memorial</a></li>
        </ul>
      </div>
    </header>`;

  document.querySelector('#shared-footer').innerHTML = `
    <footer class="bg-slate-950 py-12 text-white">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <div class="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div class="max-w-sm">
            <a href="./index.html#inicio" class="flex items-center gap-3">
              <img src="${logoUrl}" alt="" width="256" height="256" loading="lazy" decoding="async" class="size-14 object-contain" />
              <span><strong class="block text-lg font-black">GGCC Getulina</strong><span class="text-xs font-bold uppercase tracking-[0.14em] text-orange-400">Combate ao Câncer</span></span>
            </a>
            <p class="mt-5 text-sm leading-6 text-white/55">${institutionConfig.mission}</p>
          </div>
          <div>
            <h2 class="text-sm font-extrabold">Conteúdo</h2>
            <ul class="mt-4 grid gap-3 text-sm text-white/55">
              <li><a class="footer-link" href="./interna.html?pagina=noticias">Notícias</a></li>
              <li><a class="footer-link" href="./interna.html?pagina=membros">Membros</a></li>
              <li><a class="footer-link" href="./interna.html?pagina=memorial">Memorial</a></li>
            </ul>
          </div>
          <div>
            <h2 class="text-sm font-extrabold">Contato</h2>
            <ul class="mt-4 grid gap-3 text-sm text-white/55">
              <li><a class="footer-link" href="${institutionConfig.phoneHref}">${institutionConfig.phoneLabel}</a></li>
              <li><a class="footer-link break-all" href="mailto:${institutionConfig.email}">${institutionConfig.email}</a></li>
              <li><a class="footer-link" href="./index.html#contato">Enviar mensagem</a></li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col justify-between gap-3 pt-7 text-xs text-white/40 sm:flex-row">
          <p>© ${new Date().getFullYear()} ${institutionConfig.name}.</p>
          <p>CNPJ ${institutionConfig.cnpj} · ${institutionLocation}</p>
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
    ? `<img src="${member.foto}" alt="Fotografia de ${member.nome}" width="${member.fotoWidth}" height="${member.fotoHeight}" loading="lazy" decoding="async" class="h-full w-full object-cover" />`
    : `<div class="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-stone-100 text-orange-700">
        <span class="grid ${compact ? 'size-14' : 'size-20'} place-items-center rounded-full bg-white text-xl font-black shadow-sm">${getInitials(member.nome)}</span>
        ${compact ? '' : '<span class="mt-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-400">Fotografia ainda não disponível</span>'}
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

const internalPanel = {
  header: 'py-20 sm:py-24 lg:py-28',
  container: 'mx-auto max-w-5xl px-5 sm:px-8',
  content: 'max-w-3xl',
  title:
    'text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl',
  copy: 'max-w-2xl text-base leading-8 sm:text-lg',
};

const renderHomeBackButton = () => `
  <div class="mt-10 text-center sm:mt-12">
    <a href="./index.html" class="inline-flex min-h-12 items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:border-orange-300 hover:text-orange-700 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange-600">Voltar à página inicial</a>
  </div>`;

const renderMembers = () => `
  <header class="bg-[#f7f4ef] ${internalPanel.header}">
    <div class="${internalPanel.container}">
      <div class="${internalPanel.content} mx-auto text-center">
        <p class="eyebrow">Quem faz acontecer</p>
        <h1 class="${internalPanel.title} mt-4 text-slate-900">Membros e voluntários</h1>
        <p class="${internalPanel.copy} mx-auto mt-6 text-slate-600">O GGCC conta atualmente com 40 voluntários.</p>
      </div>
    </div>
  </header>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="mb-12 max-w-3xl"><p class="eyebrow">Gestão</p><h2 class="section-title mt-3">Composição da diretoria</h2><p class="section-copy mt-5">As fotografias oficiais serão incluídas assim que estiverem disponíveis.</p></div>
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
        <div><p class="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-100">Voluntariado</p><h2 class="mt-3 text-3xl font-black sm:text-4xl">Uma equipe unida pelo cuidado.</h2></div>
        <a href="./index.html#contato" class="rounded-full bg-white px-6 py-3 text-sm font-extrabold text-orange-700">Quero ser voluntário</a>
      </div>
      ${renderHomeBackButton()}
    </div>
  </section>`;

const renderMemorial = () => `
  <header class="bg-slate-950 text-white ${internalPanel.header}">
    <div class="${internalPanel.container}">
      <div class="${internalPanel.content} mx-auto text-center">
        <span class="mx-auto grid size-9 place-items-center text-orange-400/75" aria-hidden="true">
          ${svg('sprig', 'size-8')}
        </span>
        <p class="mt-5 text-[0.6875rem] font-extrabold uppercase tracking-[0.3em] text-orange-400">Memorial</p>
        <h1 class="${internalPanel.title} mt-4 text-white">Para sempre em nossa história</h1>
        <p class="${internalPanel.copy} mx-auto mt-6 text-white/75">Algumas pessoas deixam marcas que o tempo não apaga.</p>
      </div>
    </div>
  </header>
  <section class="bg-[#f7f4ef] py-20 sm:py-24 lg:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="reveal mx-auto max-w-3xl text-center">
        <p class="text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
          Este memorial é uma forma singela de agradecer a todas as pessoas que dedicaram parte de suas vidas ao Grupo Getulinense de Combate ao Câncer.
        </p>
        <p class="mt-5 text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
          O legado dessas pessoas permanece vivo em cada gesto de cuidado, solidariedade e esperança.
        </p>
      </div>

      <ul class="reveal mt-16 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3" role="list">
        ${memorialNames
          .map(
            (name) => `
              <li class="flex min-h-32 min-w-0 flex-col items-center justify-center rounded-sm border border-slate-900/[0.09] bg-white/60 px-6 py-7 text-center sm:min-h-36 sm:px-8">
                <span class="mb-5 h-px w-10 bg-orange-500/45" aria-hidden="true"></span>
                <span class="whitespace-normal break-words text-lg font-medium leading-8 tracking-[-0.01em] text-slate-800 sm:text-xl">
                  ${name}
                </span>
              </li>`,
          )
          .join('')}
      </ul>

      <div class="reveal mx-auto mt-12 max-w-3xl border-t border-slate-900/[0.08] pt-10 text-center sm:mt-16 sm:pt-12">
        <span class="mx-auto grid size-8 place-items-center text-orange-600/65" aria-hidden="true">
          ${svg('sprig', 'size-7')}
        </span>
        <p class="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
          O cuidado, a dedicação e a solidariedade de cada pessoa continuam presentes na história do Grupo Getulinense de Combate ao Câncer.
        </p>
        <p class="mt-6 text-xl font-semibold leading-8 tracking-[-0.015em] text-slate-900 sm:text-2xl sm:leading-9">
          Quem dedica parte da própria vida ao cuidado do próximo permanece para sempre em nossa memória.
        </p>
      </div>

      ${renderHomeBackButton()}
    </div>
  </section>`;

const renderGallery = () => `
  <header class="bg-slate-950 py-20 text-white sm:py-28">
    <div class="mx-auto max-w-4xl px-5 text-center sm:px-8">
      <p class="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-400">Nossa caminhada</p>
      <h1 class="mt-4 text-4xl font-black sm:text-6xl">Galeria</h1>
      <p class="mx-auto mt-6 max-w-2xl leading-8 text-white/65">Registros das ações, encontros e momentos compartilhados pelo Grupo Getulinense de Combate ao Câncer.</p>
    </div>
  </header>
  <section class="bg-[#f7f4ef] py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        ${gallery.map((item) => renderGalleryCard(item)).join('')}
      </div>
      <a href="./index.html#galeria" class="mt-12 inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 transition hover:border-orange-300 hover:text-orange-700 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange-600">Voltar à página inicial</a>
    </div>
  </section>`;

const renderNewsList = () => `
  <header class="bg-[#f7f4ef] ${internalPanel.header}">
    <div class="${internalPanel.container}">
      <div class="${internalPanel.content} mx-auto text-center">
        <p class="eyebrow">Fique por dentro</p>
        <h1 class="${internalPanel.title} mt-4 text-slate-900">Notícias</h1>
        <p class="${internalPanel.copy} mx-auto mt-6 text-slate-600">Eventos, campanhas, reuniões, avisos e registros das atividades do GGCC.</p>
      </div>
    </div>
  </header>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">${noticias.map((item) => renderNewsCard(item, { headingLevel: 2 })).join('')}</div>
      ${renderHomeBackButton()}
    </div>
  </section>`;

const renderArticle = (slug) => {
  const noticia = noticias.find((item) => hasNewsDetail(item) && item.slug === slug);
  if (!noticia) {
    return `<div class="mx-auto max-w-2xl px-5 py-24 text-center"><p class="eyebrow">Notícia não encontrada</p><h1 class="section-title mt-3">Este conteúdo não está disponível.</h1><a href="./interna.html?pagina=noticias" class="mt-8 inline-flex rounded-full bg-orange-600 px-6 py-3 text-sm font-extrabold text-white">Voltar às notícias</a></div>`;
  }
  const recent = noticias
    .filter((item) => hasNewsDetail(item) && item.slug !== noticia.slug)
    .slice(0, 2)
    .map((item) => `<a href="./interna.html?pagina=noticia&slug=${encodeURIComponent(item.slug)}" class="rounded-2xl border border-slate-200 bg-white p-5"><span class="text-xs font-bold text-orange-700">${item.categoria}</span><strong class="mt-2 block text-lg text-slate-900">${item.titulo}</strong></a>`)
    .join('');
  const recentSection = recent
    ? `<div class="mt-14 border-t border-slate-200 pt-10">
        <h2 class="text-2xl font-black text-slate-900">Outras notícias recentes</h2>
        <div class="mt-6 grid gap-4 sm:grid-cols-2">${recent}</div>
      </div>`
    : '';

  return `
    <article>
      <header class="bg-[#f7f4ef] ${internalPanel.header}">
        <div class="${internalPanel.container}">
          <div class="${internalPanel.content}">
            <a href="./interna.html?pagina=noticias" class="text-sm font-extrabold text-orange-700">← Voltar às notícias</a>
            <div class="mt-8 flex gap-3 text-xs font-bold"><span class="rounded-full bg-orange-100 px-3 py-1.5 text-orange-800">${noticia.categoria}</span><time class="py-1.5 text-slate-500">${noticia.data}</time></div>
            <h1 class="${internalPanel.title} mt-5 text-slate-900">${noticia.titulo}</h1>
            <p class="${internalPanel.copy} mt-6 text-slate-600">${noticia.resumo}</p>
          </div>
        </div>
      </header>
      <div class="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        ${
          noticia.imagem
            ? `<figure class="overflow-hidden rounded-[2rem] bg-stone-100">
                <img src="${noticia.imagem}" alt="${noticia.titulo}" width="${noticia.imageWidth}" height="${noticia.imageHeight}" loading="lazy" decoding="async" class="aspect-[16/9] h-full w-full object-cover" />
              </figure>`
            : `<div class="grid aspect-[16/9] place-items-center rounded-[2rem] bg-gradient-to-br from-orange-50 to-stone-100 text-xs font-extrabold uppercase tracking-widest text-orange-300">Imagem da notícia ainda não disponível</div>`
        }
        <div class="mx-auto mt-12 max-w-3xl">
          <div class="space-y-6 text-base leading-8 text-slate-700">${noticia.conteudo.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div>
          ${recentSection}
        </div>
      </div>
    </article>`;
};

if (document.body.dataset.page === 'internal') {
  const params = new URLSearchParams(window.location.search);
  const page = params.get('pagina') || 'noticias';
  const views = {
    membros: {
      title: 'Membros e voluntários — GGCC Getulina',
      description:
        'Informações sobre a diretoria, o conselho fiscal, os suplentes e os voluntários do Grupo Getulinense de Combate ao Câncer.',
      path: 'interna.html?pagina=membros',
      html: renderMembers,
    },
    memorial: {
      title: 'Memorial — GGCC Getulina',
      description:
        'Uma homenagem às pessoas que dedicaram parte de suas vidas ao Grupo Getulinense de Combate ao Câncer.',
      path: 'interna.html?pagina=memorial',
      html: renderMemorial,
    },
    galeria: {
      title: 'Galeria — GGCC Getulina',
      description:
        'Registros das ações, dos encontros e dos momentos compartilhados pelo Grupo Getulinense de Combate ao Câncer.',
      path: 'interna.html?pagina=galeria',
      html: renderGallery,
    },
    noticias: {
      title: 'Notícias — GGCC Getulina',
      description:
        'Eventos, campanhas, reuniões, avisos e atividades do Grupo Getulinense de Combate ao Câncer.',
      path: 'interna.html?pagina=noticias',
      html: renderNewsList,
    },
  };
  let view = views[page];

  if (page === 'noticia') {
    const slug = params.get('slug');
    const noticia = noticias.find((item) => hasNewsDetail(item) && item.slug === slug);
    view = noticia
      ? {
          title: `${noticia.titulo} — GGCC Getulina`,
          description: noticia.resumo,
          path: `interna.html?pagina=noticia&slug=${encodeURIComponent(noticia.slug)}`,
          type: 'article',
          html: () => renderArticle(slug),
        }
      : {
          title: 'Notícia não encontrada — GGCC Getulina',
          description: 'A notícia solicitada não está disponível.',
          robots: 'noindex, follow',
          html: () => renderArticle(slug),
        };
  } else if (!view) {
    view = {
      title: 'Conteúdo não encontrado — GGCC Getulina',
      description: 'O conteúdo solicitado não está disponível.',
      robots: 'noindex, follow',
      html: renderNewsList,
    };
  }

  setPageMetadata(view);
  initInternalLayout(page === 'noticia' || !views[page] ? 'noticias' : page);
  document.querySelector('#internal-content').innerHTML = view.html();
  initReveal();
  initGalleryLightbox();
}

// Distância em pixels antes de exibir o botão flutuante.
const BACK_TO_TOP_THRESHOLD = 500;

const initBackToTop = () => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<button
      id="back-to-top"
      type="button"
      class="pointer-events-none fixed bottom-5 right-5 z-40 grid size-12 translate-y-4 place-items-center rounded-full bg-orange-600 text-white opacity-0 shadow-xl shadow-slate-900/20 transition duration-300 motion-safe:hover:-translate-y-1 hover:bg-orange-700 motion-reduce:transition-none sm:bottom-6 sm:right-6 sm:size-14"
      aria-label="Voltar ao topo"
      aria-hidden="true"
      tabindex="-1"
    >
      <svg class="size-5 sm:size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="m6 15 6-6 6 6" />
      </svg>
    </button>`,
  );

  const button = document.querySelector('#back-to-top');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let visible = false;
  let scrollUpdateScheduled = false;

  const setVisible = (nextVisible) => {
    if (visible === nextVisible) return;
    visible = nextVisible;
    button.classList.toggle('pointer-events-none', !visible);
    button.classList.toggle('translate-y-4', !visible);
    button.classList.toggle('opacity-0', !visible);
    button.classList.toggle('translate-y-0', visible);
    button.classList.toggle('opacity-100', visible);
    button.setAttribute('aria-hidden', String(!visible));
    button.tabIndex = visible ? 0 : -1;
  };

  const updateVisibility = () => {
    setVisible(window.scrollY >= BACK_TO_TOP_THRESHOLD);
    scrollUpdateScheduled = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (scrollUpdateScheduled) return;
      scrollUpdateScheduled = true;
      window.requestAnimationFrame(updateVisibility);
    },
    { passive: true },
  );

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion.matches ? 'auto' : 'smooth',
    });
  });

  updateVisibility();
};

initBackToTop();
