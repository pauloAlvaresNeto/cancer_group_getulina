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
confusão com as páginas originais. A configuração `base: './'` mantém os
caminhos relativos compatíveis com projetos do GitHub Pages.

## Organização

- `index.html`: landing page;
- `interna.html`: exibe Membros, Memorial, Notícias e a notícia completa conforme a URL;
- `src/app.js`: todo o comportamento do site;
- `src/data.js`: todo o conteúdo editável;
- `src/styles.css`: Tailwind CSS e estilos compartilhados;
- `img/`: imagens e logotipo;
- `historico.pdf`: história completa;
- `dist/`: saída automática do build, não deve ser editada.

## Publicação no GitHub Pages

O workflow em `.github/workflows/deploy.yml` gera e publica o site automaticamente a cada push para a branch `main`.

No repositório do GitHub, selecione **Settings → Pages → Source → GitHub Actions** uma única vez para ativar o fluxo.

## Atualização de conteúdo

### Membros

Edite os arrays `diretoria`, `conselhoFiscal` e `suplentes` em `src/data.js`.
Adicione as fotografias em `img/` e informe o caminho no campo `foto`.

### Memorial

Edite o array `memorialSlots` em `src/data.js` somente depois de confirmar
nomes, homenagens, fotografias e autorizações das famílias.

### Notícias

As publicações ficam no array `noticias` de `src/data.js`. Para criar uma notícia:

1. duplique um objeto existente no array `noticias`;
2. escolha um `id` e um `slug` únicos;
3. atualize título, data, categoria, resumo e conteúdo;
4. salve a imagem em `img/`;
5. informe o caminho no campo `imagem`;
6. use `destaque: true` para exibi-la também na página inicial.

A página individual usa
`interna.html?pagina=noticia&slug=slug-da-noticia`.

### História em PDF

O botão “Ler história completa” utiliza o arquivo `historico.pdf`. O endereço do
arquivo é configurado em `src/app.js` para que o Vite o inclua no build.

### Formulário

As opções ficam no final de `src/data.js`. Como o projeto antigo possuía apenas um
endpoint provisório, o comportamento padrão abre o aplicativo de e-mail do
visitante com a mensagem preenchida para `ggccancer@hotmail.com`.

Quando houver um endpoint HTTPS de formulário configurado pelo grupo, informe-o
em `contactConfig.endpoint`. O JavaScript passará a enviar os dados diretamente
e exibirá os estados de carregamento, sucesso e erro.

### QR Code do Pix

Salve o QR Code oficial em `img/qrcode-pix.png` e atualize
`pixConfig.qrCodeImage` em `src/data.js`. Não use um QR Code antes de sua
validação pelo grupo.
