# Grupo Getulinense de Combate ao Câncer

Landing page institucional construída com Vite, HTML5 semântico, JavaScript ES Modules e Tailwind CSS v4.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

O resultado temporário é gerado em `dist/`. Essa pasta não contém código-fonte:
ela é recriada pelo build e fica oculta no explorador do VS Code para evitar
confusão com as páginas originais. No GitHub Actions, o caminho-base do
repositório é informado automaticamente ao Vite.

## Organização

- `index.html`: landing page;
- `interna.html`: exibe Membros, Memorial, Galeria, Notícias e a notícia completa conforme a URL;
- `src/app.js`: todo o comportamento do site;
- `src/data.js`: conteúdo institucional, Bazar e configurações;
- `src/eventos.js`: textos, imagens, categorias e ícones dos eventos;
- `src/galeria.js`: fotografias da galeria e seleção exibida na home;
- `src/countdown.js`: cálculo isolado do contador dos 25 anos;
- `src/styles.css`: Tailwind CSS e estilos compartilhados;
- `img/`: fotografias em WebP, logotipo original e sua versão otimizada para a interface em PNG, além do QR Code oficial;
- `public/`: favicons, `robots.txt`, `sitemap.xml`, imagem social e arquivos públicos copiados sem transformação, incluindo `historico.pdf`;
- `dist/`: saída automática do build, não deve ser editada.

## Publicação no GitHub Pages

O workflow em `.github/workflows/deploy.yml` gera e publica o site automaticamente a cada push para a branch `main`.

No repositório do GitHub, selecione obrigatoriamente
**Settings → Pages → Build and deployment → Source → GitHub Actions**.

Não selecione **Deploy from a branch**: essa opção publica o HTML-fonte sem
compilar o Vite e o Tailwind, deixando o layout sem estilos.

## Atualização de conteúdo

Os elementos dinâmicos do `index.html` são apenas estruturas vazias. Não
duplique neles os textos dos arquivos de dados: o `src/app.js` preenche esses
elementos durante o carregamento da página. Dessa forma, cada informação possui
uma única fonte oficial.

Os dados institucionais compartilhados entre a página inicial e as páginas
internas (nome, missão, telefone, e-mail, CNPJ e localização) ficam
centralizados em `institutionConfig`, no arquivo `src/data.js`.

### Evento de 25 anos

Edite somente o objeto `anniversaryEvent` no início de `src/data.js`. Nele ficam
data, horário, local, cantor, imagem, link dos convites e mensagem de
disponibilidade. A data usa `AAAA-MM-DD`; o horário usa `HH:mm`. Enquanto
`time` estiver como `null`, o contador considera provisoriamente `00:00:00` no
fuso de São Paulo (`UTC-03:00`).

### Membros

Edite os arrays `diretoria`, `conselhoFiscal` e `suplentes` em `src/data.js`.
Adicione as fotografias em WebP na pasta `img/` e informe caminho, largura e
altura nos campos `foto`, `fotoWidth` e `fotoHeight`.

### Memorial

Edite o array de nomes `memorialNames` em `src/data.js`. O Memorial apresenta
somente os nomes, na ordem definida nesse array.

### Bazar

Edite `bazarConfig` em `src/data.js`. As quatro posições de imagem ficam no
array `images`: salve as fotografias em WebP na pasta `img/` e atualize os
campos `src`, `alt`, `width` e `height`. O endereço oficial usado pelo botão e pelo rodapé fica em
`bazarConfig.facebookUrl`.

### Eventos

Os cards ficam no array `events` de `src/eventos.js`. Cada item centraliza
título, descrição, fotografia em WebP, dimensões, texto alternativo, categoria
e ícone. O Leilão de Gado utiliza um placeholder até receber uma fotografia
oficial.

### Como ajudar

Os tópicos de “Doação financeira”, “Doe itens” e “Seja voluntário” ficam
diretamente na seção `#ajudar` do `index.html`. A chave e o QR Code do Pix
continuam centralizados em `pixConfig`, no final de `src/data.js`.

### Galeria

Todas as fotografias em WebP ficam em `src/galeria.js`. Cada item possui `src`,
`width`, `height`, `alt` para acessibilidade e a opção `featured`. A galeria
não exibe legendas visíveis.

A página inicial mostra as seis primeiras imagens marcadas com
`featured: true`. A página completa usa `/galeria/` e exibe todos os itens do
arquivo.

### Notícias

As publicações ficam no array `noticias` de `src/data.js`. Para criar uma notícia:

1. duplique um objeto existente no array `noticias`;
2. use `type: 'short'` quando todo o conteúdo couber no card ou `type: 'full'`
   quando houver conteúdo adicional relevante;
3. escolha um `slug` único;
4. atualize título, `publishedAt`, `eventDate`, categoria, resumo e conteúdo;
5. salve a fotografia em WebP na pasta `img/`;
6. informe caminho, largura e altura nos campos `imagem`, `imageWidth` e
   `imageHeight`;
7. use opcionalmente `featured: true` para fixá-la antes das demais.

`publishedAt` é a data de entrada da publicação no site e controla a ordenação e
o badge “Novo”. `eventDate` é a data do acontecimento exibida ao visitante; se
ela não existir, o card exibe `publishedAt`. Use o formato `DD/MM/AAAA`. Quando a
data histórica de publicação não for conhecida, mantenha `publishedAt: null`:
esses itens vêm depois dos que possuem data conhecida e preservam sua ordem
original entre si. A Home e a listagem usam a mesma ordenação.

Para uma novidade em vídeo, adicione o objeto `video` com `src` e `title`. O
iframe será carregado somente na página individual, enquanto os cards continuarão
usando apenas `imagem` e exibirão o indicador de reprodução.

Somente notícias `full` exibem “Ler mais” e usam a página individual
`/noticias/?slug=slug-da-noticia`.

### História em PDF

O botão “Ler história completa” utiliza `public/historico.pdf`. Todo arquivo
nessa pasta é copiado pelo Vite para a raiz de `dist/`, preservando o link
relativo usado no HTML e o caminho-base do GitHub Pages.

### Formulário

As opções ficam no final de `src/data.js`. Como o projeto antigo possuía apenas um
endpoint provisório, o comportamento padrão abre o aplicativo de e-mail do
visitante com a mensagem preenchida para `ggccancer@hotmail.com`.

Quando houver um endpoint HTTPS de formulário configurado pelo grupo, informe-o
em `contactConfig.endpoint`. O JavaScript passará a enviar os dados diretamente
e exibirá os estados de carregamento, sucesso e erro.

### QR Code do Pix

A chave e a imagem oficial ficam em `pixConfig`, no final de `src/data.js`.
Para trocar o QR Code, salve a nova imagem em `img/` e atualize
`pixConfig.qrCodeImage`. Não use um QR Code antes de sua validação pelo grupo.
O QR Code não deve ser convertido para WebP.

### Formatos de imagem

Use WebP com qualidade entre 82% e 85% para todas as fotografias novas. Preserve
o logotipo oficial em PNG, pois ele utiliza transparência, e mantenha o QR Code
no formato original. Informe sempre as dimensões reais da imagem nos respectivos
arquivos de dados para evitar deslocamentos de layout durante o carregamento.

### Botão “Voltar ao topo”

O botão é criado pela função `initBackToTop` em `src/app.js` e funciona na
página inicial e nas páginas internas. A distância de rolagem necessária para
exibi-lo fica na constante `BACK_TO_TOP_THRESHOLD`, no mesmo arquivo.
