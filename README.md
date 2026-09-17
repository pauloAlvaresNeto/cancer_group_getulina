# Grupo Getulinense de Combate ao Câncer

Site institucional desenvolvido para o **Grupo Getulinense de Combate ao Câncer**, com foco em apresentar a instituição, facilitar o acesso às informações e centralizar conteúdos como membros, memorial, eventos, notícias, galeria e formas de contribuição.

[🌐 Acessar o site](https://ggcc.org.br/)

## Sobre o projeto

Este projeto foi desenvolvido para modernizar e organizar a presença digital da instituição, transformando diferentes tipos de conteúdo em uma experiência única, responsiva e de fácil manutenção.

Além da página institucional, o site reúne informações importantes para o público e para a própria organização, como notícias, eventos, memorial, galeria, bazar, membros da diretoria, formas de ajudar e informações de contato.

## Principais funcionalidades

- Página institucional responsiva;
- apresentação da missão e informações do grupo;
- área de membros e diretoria;
- memorial;
- galeria de fotos;
- publicação de notícias;
- divulgação de eventos;
- seção de bazar;
- informações para doações e voluntariado;
- QR Code do Pix;
- formulário de contato;
- publicação automatizada com GitHub Actions.

## Tecnologias utilizadas

- **Vite** — ambiente de desenvolvimento e build;
- **HTML5** — estrutura semântica;
- **JavaScript ES Modules** — lógica e organização dos conteúdos;
- **Tailwind CSS v4** — estilização e responsividade;
- **GitHub Actions** — automação do processo de publicação;
- **GitHub Pages** — hospedagem do projeto.

## Organização do projeto

```text
cancer_group_getulina/
├── .github/workflows/  # Automação de deploy
├── img/                # Assets organizados por finalidade
│   ├── marca/           # Logotipos
│   ├── institucional/   # Fotos institucionais
│   ├── membros/         # Fotografias da diretoria
│   ├── bazar/           # Fotografias do bazar
│   ├── eventos/         # Imagens dos eventos
│   ├── noticias/        # Capas e fotos de notícias
│   ├── galeria/         # Fotos da galeria, separadas por álbum
│   └── arquivos-fonte/  # Materiais de origem, não publicados
├── public/             # Arquivos públicos e documentos
├── src/
│   ├── app.js          # Comportamento principal do site
│   ├── data.js         # Conteúdo institucional e configurações
│   ├── eventos.js      # Dados de eventos
│   ├── galeria.js      # Dados da galeria
│   ├── countdown.js    # Contador de aniversário
│   └── styles.css      # Estilos compartilhados
├── index.html          # Página principal
├── interna.html        # Páginas internas
├── package.json
└── README.md
```

## Executando localmente

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/pauloAlvaresNeto/cancer_group_getulina.git
cd cancer_group_getulina
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Publicação

O projeto possui um workflow em `.github/workflows/deploy.yml` responsável por gerar e publicar automaticamente o site a cada atualização na branch `main`.

**Site:** https://ggcc.org.br/

## Manutenção de conteúdo
   
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
Adicione as fotografias em WebP na pasta `img/membros/` e informe caminho, largura e
altura nos campos `foto`, `fotoWidth` e `fotoHeight`.

### Memorial

Edite o array de nomes `memorialNames` em `src/data.js`. O Memorial apresenta
somente os nomes, na ordem definida nesse array.

### Bazar

Edite `bazarConfig` em `src/data.js`. As quatro posições de imagem ficam no
array `images`: salve as fotografias em WebP na pasta `img/bazar/` e atualize os
campos `src`, `alt`, `width` e `height`. O endereço oficial usado pelo botão e pelo rodapé fica em
`bazarConfig.facebookUrl`.

### Eventos

Os cards ficam no array `events` de `src/eventos.js`. Cada item centraliza
título, descrição, fotografia em WebP (armazenada em `img/eventos/`), dimensões, texto alternativo, categoria
e ícone. O Leilão de Gado utiliza um placeholder até receber uma fotografia
oficial.

### Como ajudar

Os tópicos de “Doação financeira”, “Doe itens” e “Seja voluntário” ficam
diretamente na seção `#ajudar` do `index.html`. A chave e o QR Code do Pix
continuam centralizados em `pixConfig`, no final de `src/data.js`.

### Galeria

Todas as fotografias em WebP ficam em `img/galeria/` e são listadas em `src/galeria.js`. Cada item possui `src`,
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
4. atualize título, data, categoria, resumo e conteúdo;
5. salve a fotografia em WebP na pasta `img/noticias/`;
6. informe caminho, largura e altura nos campos `imagem`, `imageWidth` e
   `imageHeight`;
7. use `destaque: true` para exibi-la também na página inicial.

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
