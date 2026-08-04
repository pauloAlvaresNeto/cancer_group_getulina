/**
 * Google Analytics 4
 *
 * Configuração:
 * 1. Crie um arquivo `.env` na raiz do projeto.
 * 2. Adicione `VITE_GA_MEASUREMENT_ID=SEU_ID` (por exemplo, `G-XXXXXXXXXX`).
 * 3. Execute `npm run build`. Variáveis `VITE_*` são incorporadas pelo Vite no build.
 *
 * Teste: gere o build e execute `npm run preview`. No navegador, confirme a requisição
 * `gtag/js` na aba Network e o acesso no relatório em tempo real do GA4. Durante
 * `npm run dev`, nenhuma requisição de Analytics é feita de propósito.
 */

const SCRIPT_ID = 'ga4-gtag-script';
const GTAG_SCRIPT_URL = 'https://www.googletagmanager.com/gtag/js';

let initialized = false;

/**
 * Carrega e configura o GA4 uma única vez, exclusivamente em produção.
 * A chamada `config` envia automaticamente o `page_view` da página atual.
 */
export const initAnalytics = () => {
  if (import.meta.env.DEV || !import.meta.env.PROD || initialized) return;

  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
  if (!measurementId) return;

  initialized = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  // Evita inserir outra cópia caso o inicializador seja chamado novamente
  // ou o script já tenha sido adicionado por outra integração.
  const existingScript = document.getElementById(SCRIPT_ID)
    || document.querySelector(`script[src^="${GTAG_SCRIPT_URL}"]`);

  if (existingScript) return;

  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `${GTAG_SCRIPT_URL}?id=${encodeURIComponent(measurementId)}`;
  document.head.append(script);
};
