/* =========================================================
   GAC GETULINA — SCRIPT.JS
   - Menu mobile (toggle + fechar ao clicar em link)
   - Navbar glass ao rolar 80px
   - IntersectionObserver para fade-in
   - Lightbox da galeria
   - Smooth scroll (fallback via JS)
   - Ano atual no footer
   - Submit do formulário de contato (feedback visual)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1) MENU MOBILE ---------- */
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      menuToggle.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    });

    // Fechar menu ao clicar em qualquer link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
      });
    });
  }

  /* ---------- 1.1) DROPDOWN "MAIS" (DESKTOP) ---------- */
  // O hover é tratado no CSS; aqui cuidamos do clique/teclado e do fechamento.
  const navDropdowns = document.querySelectorAll('.nav-dropdown');

  const closeNavDropdowns = () => {
    navDropdowns.forEach(dropdown => {
      dropdown.classList.remove('open');
      const toggle = dropdown.querySelector('.nav-dropdown-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  };

  navDropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const wasOpen = dropdown.classList.contains('open');
      closeNavDropdowns();
      if (!wasOpen) {
        dropdown.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Fecha ao escolher um item do menu
    dropdown.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeNavDropdowns);
    });
  });

  if (navDropdowns.length) {
    document.addEventListener('click', (e) => {
      if (![...navDropdowns].some(dropdown => dropdown.contains(e.target))) {
        closeNavDropdowns();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeNavDropdowns();
    });
  }

  /* ---------- 1.2) SUB-LISTA "MAIS" (MENU MOBILE) ---------- */
  document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
    const submenu = document.getElementById(toggle.getAttribute('aria-controls'));
    if (!submenu) return;

    toggle.addEventListener('click', () => {
      const isOpen = submenu.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  });

  /* ---------- 2) NAVBAR GLASS AO ROLAR ---------- */
  const navbar = document.getElementById('navbar');
  const SCROLL_THRESHOLD = 80;

  const updateNavbar = () => {
    if (!navbar) return;
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  /* ---------- 3) FADE-IN AO ENTRAR NA VIEWPORT ---------- */
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px',
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: mostrar tudo
    fadeElements.forEach(el => el.classList.add('visible'));
  }

  /* ---------- 3.1) CONTAGEM ANIMADA DOS NÚMEROS (stat-cards) ---------- */
  const statNumbers = document.querySelectorAll('.stat-number[data-count-to]');

  const animateCount = (el) => {
    const target = parseInt(el.dataset.countTo, 10);
    const suffix = el.dataset.suffix || '';
    const prefix = suffix === '+' ? '+' : '';
    const duration = 1500;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutQuad
      const eased = 1 - (1 - progress) * (1 - progress);
      const value = Math.round(target * eased);
      el.textContent = prefix + value;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window && statNumbers.length) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    statNumbers.forEach(el => countObserver.observe(el));
  }

  /* ---------- 4) SMOOTH SCROLL (fallback) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 70; // altura aproximada da navbar
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---------- 5) LIGHTBOX DA GALERIA ---------- */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxCaption = document.getElementById('lightbox-caption');

  const openLightbox = (caption) => {
    if (!lightbox) return;
    lightbox.classList.remove('hidden');
    lightboxCaption.textContent = caption || '';
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  };

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const caption = item.dataset.caption || '';
      openLightbox(caption);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      // Fecha ao clicar no fundo (fora do conteúdo)
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Fechar lightbox com tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && !lightbox.classList.contains('hidden')) {
      closeLightbox();
    }
  });

  /* ---------- 5.05) MAPA GOOGLE (lazy-load ao entrar na viewport) ---------- */
  // O iframe guarda o endereço em data-src; só injetamos o src real quando
  // a seção do mapa se aproxima da viewport, evitando a requisição no load.
  const lazyMap = document.querySelector('iframe[data-src]');

  const loadMap = () => {
    if (lazyMap && !lazyMap.src) {
      lazyMap.src = lazyMap.dataset.src;
    }
  };

  if (lazyMap) {
    if ('IntersectionObserver' in window) {
      const mapObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadMap();
            obs.disconnect();
          }
        });
      }, { rootMargin: '200px 0px' });
      mapObserver.observe(lazyMap);
    } else {
      loadMap();
    }
  }

  /* ---------- 5.1) AVATAR HELPER + RENDER DA EQUIPE ---------- */

  // Gera avatar: se existir imagem com o nome, usa <img>; caso contrário cria círculo com inicial.
  function getAvatar(nome, size = 56, opts = {}) {
    const { bg = '#E86500', color = '#fff' } = opts;
    const inicial = (nome || '?').trim().charAt(0).toUpperCase();
    const wrap = document.createElement('div');
    wrap.style.cssText = `
      width:${size}px; height:${size}px; border-radius:50%;
      background:${bg}; color:${color}; font-weight:700;
      font-size:${size * 0.4}px; display:flex;
      align-items:center; justify-content:center;
      font-family:'Nunito',sans-serif; flex-shrink:0;
      overflow:hidden; position:relative;
    `;
    wrap.textContent = inicial;

    // Tenta carregar imagem com o nome em slug (ex: "Maria Silva" → "maria-silva.jpg")
    const slug = (nome || '')
      .toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9\s]/g, '')
      .trim().replace(/\s+/g, '-');

    if (slug) {
      const img = new Image();
      img.alt = nome;
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;position:absolute;inset:0;';
      img.onload = () => { wrap.textContent = ''; wrap.appendChild(img); };
      img.src = `membros/${slug}.jpg`;
    }
    return wrap;
  }

  // --- Diretoria ---
  document.querySelectorAll('[data-team-grid]').forEach(grid => {
    let members = [];
    try { members = JSON.parse(grid.dataset.members || '[]'); } catch (_) {}

    members.forEach(({ nome, cargo }) => {
      const card = document.createElement('article');
      card.className = 'card member-card highlight fade-in visible';

      const avatar = getAvatar(nome, 96);
      avatar.classList.add('member-avatar');
      card.appendChild(avatar);

      const h3 = document.createElement('h3');
      h3.className = 'member-name';
      h3.textContent = nome;
      card.appendChild(h3);

      const p = document.createElement('p');
      p.className = 'member-role';
      p.textContent = cargo;
      card.appendChild(p);

      grid.appendChild(card);
    });
  });

  // --- Conselho Fiscal (titulares + suplentes) ---
  document.querySelectorAll('[data-council-list]').forEach(list => {
    const tipo = list.dataset.councilList;
    const opts = tipo === 'suplentes'
      ? { bg: '#FBBF6A', color: '#2D2D2D' }
      : { bg: '#E86500', color: '#fff' };

    let members = [];
    try { members = JSON.parse(list.dataset.members || '[]'); } catch (_) {}

    members.forEach(nome => {
      const li = document.createElement('li');
      li.className = 'council-chip';
      li.appendChild(getAvatar(nome, 40, opts));
      const span = document.createElement('span');
      span.textContent = nome;
      li.appendChild(span);
      list.appendChild(li);
    });
  });

  /* ---------- 5.2) IMAGENS COM FALLBACK (data-hide-on-error) ---------- */
  // Se a imagem não carregar, esconde o <img> e marca o container para
  // exibir o fundo/ícone decorativo definido no CSS (.no-image).
  document.querySelectorAll('img[data-hide-on-error]').forEach(img => {
    const handleError = () => {
      img.classList.add('hidden');
      if (img.parentElement) img.parentElement.classList.add('no-image');
    };
    img.addEventListener('error', handleError);
    if (img.complete && img.naturalWidth === 0) handleError();
  });

  /* ---------- 6) ANO ATUAL NO FOOTER ---------- */
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- 7) FORMULÁRIO DE CONTATO (Formspree) ---------- */
  const formContato = document.getElementById('form-contato');
  const btnEnviar = document.getElementById('btn-enviar');
  const formSucesso = document.getElementById('form-sucesso');
  const formErro = document.getElementById('form-erro');

  if (formContato) {
    formContato.addEventListener('submit', async function (e) {
      e.preventDefault();

      // Validação simples dos campos obrigatórios
      const nome = formContato.nome.value.trim();
      const email = formContato.email.value.trim();
      const mensagem = formContato.mensagem.value.trim();
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!nome || !email || !mensagem) {
        formErro.textContent = '⚠️ Por favor, preencha nome, e-mail e mensagem.';
        formErro.classList.remove('hidden');
        formSucesso.classList.add('hidden');
        return;
      }

      if (!emailValido) {
        formErro.textContent = '⚠️ Por favor, informe um e-mail válido.';
        formErro.classList.remove('hidden');
        formSucesso.classList.add('hidden');
        return;
      }

      // Passou na validação → envia para o Formspree
      formErro.classList.add('hidden');
      btnEnviar.disabled = true;
      btnEnviar.textContent = 'Enviando...';

      try {
        const response = await fetch(formContato.action, {
          method: 'POST',
          body: new FormData(formContato),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          formContato.reset();
          formSucesso.classList.remove('hidden');
          formErro.classList.add('hidden');
          btnEnviar.textContent = 'Enviado!';
        } else {
          throw new Error();
        }
      } catch {
        formErro.textContent = '❌ Ocorreu um erro. Tente novamente ou nos ligue: (14) 3552-2966.';
        formErro.classList.remove('hidden');
        formSucesso.classList.add('hidden');
        btnEnviar.disabled = false;
        btnEnviar.textContent = 'Enviar mensagem';
      }
    });
  }
});
