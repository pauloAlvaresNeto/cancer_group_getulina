import './styles.css';
import {
  actions,
  anniversaryEvent,
  bazarConfig,
  conselhoFiscal,
  contactConfig,
  diretoria,
  memorialSlots,
  noticias,
  pixConfig,
  suplentes,
} from './data.js';
import { getCountdownState } from './countdown.js';
import { events } from './eventos.js';
import { gallery } from './galeria.js';

const logoUrl = new URL('../img/logo.png', import.meta.url).href;

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
};

const svg = (name, className = 'size-6') =>
  `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;

const renderNewsCard = (noticia, { compact = false } = {}) => {
  const visual = noticia.imagem
    ? `<img src="${noticia.imagem}" alt="" width="${noticia.imageWidth}" height="${noticia.imageHeight}" loading="lazy" decoding="async" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />`
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
      aria-label="Ampliar foto: ${safeAlt}"
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
    <button id="lightbox-close" type="button" class="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-full bg-black/55 text-2xl text-white backdrop-blur transition hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white" aria-label="Fechar imagem">×</button>
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
  if (result.state === 'today') setCountdownStatus('O grande dia chegou!');
  else if (result.state === 'past') setCountdownStatus('Evento realizado.');
  else setCountdownStatus('Confira a configuração da data do evento.');
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
        ? `<img src="${src}" alt="${alt}" width="${width}" height="${height}" loading="lazy" decoding="async" class="aspect-[4/3] h-full w-full rounded-[1.5rem] object-cover" />`
        : `<div class="grid aspect-[4/3] place-items-center rounded-[1.5rem] border border-dashed border-white/25 bg-white/5 p-6 text-center text-white/45">
            <span class="flex flex-col items-center gap-3 text-xs font-extrabold uppercase tracking-[0.14em]">
              <svg class="size-8 text-orange-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m5 18 5-5 3 3 2-2 4 4"/></svg>
              Fotografia ${index + 1} a adicionar
            </span>
          </div>`,
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
    ({ titulo, descricao, imagem, alt, width, height, icone, categoria }, index) => `
      <article class="reveal group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-900/5 lg:col-span-2 ${
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
                    Fotografia a adicionar
                  </span>
                </div>`
          }
        </div>
        <div class="flex flex-1 flex-col p-6">
          <div class="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.12em] text-orange-700">
            <span class="grid size-9 shrink-0 place-items-center rounded-xl bg-orange-50">${svg(icone, 'size-5')}</span>
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
  pixQrPlaceholder.innerHTML = `<img src="${pixConfig.qrCodeImage}" alt="QR Code oficial do Pix do GGCC" width="${pixConfig.qrCodeWidth}" height="${pixConfig.qrCodeHeight}" loading="lazy" decoding="async" class="h-full w-full rounded-xl object-contain" />`;
  pixQrPlaceholder.classList.remove('border-dashed');
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
      <span>Chave copiada!</span>`;
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
          <img src="${logoUrl}" alt="" width="1024" height="1024" decoding="async" class="size-12 shrink-0 object-contain sm:size-14" />
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
        </ul>
      </div>
    </header>`;

  document.querySelector('#shared-footer').innerHTML = `
    <footer class="bg-slate-950 py-12 text-white">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <div class="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div class="max-w-sm">
            <a href="./index.html#inicio" class="flex items-center gap-3">
              <img src="${logoUrl}" alt="" width="1024" height="1024" loading="lazy" decoding="async" class="size-14 object-contain" />
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
    ? `<img src="${member.foto}" alt="Fotografia de ${member.nome}" width="${member.fotoWidth}" height="${member.fotoHeight}" loading="lazy" decoding="async" class="h-full w-full object-cover" />`
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
  <header class="bg-[#f7f4ef] py-20 sm:py-28">
    <div class="mx-auto max-w-4xl px-5 text-center sm:px-8"><p class="eyebrow">Quem faz acontecer</p><h1 class="section-title mx-auto mt-4">Membros e voluntários</h1><p class="section-copy mx-auto mt-6">Conta atualmente com 40 voluntários.</p></div>
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
  <header class="bg-[#f7f4ef] py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-5 sm:px-8"><p class="eyebrow">Fique por dentro</p><h1 class="section-title mt-3">Notícias</h1><p class="section-copy mt-5">Eventos, campanhas, reuniões, avisos e registros das atividades do grupo.</p></div>
  </header>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
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
        ${
          noticia.imagem
            ? `<figure class="overflow-hidden rounded-[2rem] bg-stone-100">
                <img src="${noticia.imagem}" alt="${noticia.titulo}" width="${noticia.imageWidth}" height="${noticia.imageHeight}" loading="lazy" decoding="async" class="aspect-[16/9] h-full w-full object-cover" />
              </figure>`
            : `<div class="grid aspect-[16/9] place-items-center rounded-[2rem] bg-gradient-to-br from-orange-50 to-stone-100 text-xs font-extrabold uppercase tracking-widest text-orange-300">Imagem da notícia a adicionar</div>`
        }
        <div class="mx-auto mt-12 max-w-3xl"><div class="space-y-6 text-base leading-8 text-slate-700">${noticia.conteudo.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div><div class="mt-14 border-t border-slate-200 pt-10"><h2 class="text-2xl font-black text-slate-900">Outras notícias recentes</h2><div class="mt-6 grid gap-4 sm:grid-cols-2">${recent}</div></div></div>
      </div>
    </article>`;
};

if (document.body.dataset.page === 'internal') {
  const params = new URLSearchParams(window.location.search);
  const page = params.get('pagina') || 'noticias';
  const views = {
    membros: { title: 'Membros — GGCC', html: renderMembers },
    memorial: { title: 'Memorial — GGCC', html: renderMemorial },
    galeria: { title: 'Galeria — GGCC', html: renderGallery },
    noticias: { title: 'Notícias — GGCC', html: renderNewsList },
    noticia: { title: 'Notícia — GGCC', html: () => renderArticle(params.get('slug')) },
  };
  const view = views[page] || views.noticias;
  document.title = view.title;
  initInternalLayout(page === 'noticia' ? 'noticias' : page);
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
