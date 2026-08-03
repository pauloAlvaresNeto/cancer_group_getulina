import './styles.css';

document.documentElement.classList.add('scroll-smooth');
document.body.className = 'bg-stone-50 font-sans text-slate-800 antialiased';
document.body.innerHTML = `
  <a
    href="#internal-content"
    class="fixed left-4 top-3 z-[100] -translate-y-20 rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-transform focus:translate-y-0"
  >
    Ir para o conteúdo
  </a>
  <div id="shared-header"></div>
  <main id="internal-content" class="pt-20"></main>
  <div id="shared-footer"></div>
`;

void import('./app.js');
