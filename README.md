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
- `img/`: imagens e logotipo;
- `historico.pdf`: história completa;
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

### Evento de 25 anos

Edite somente o objeto `anniversaryEvent` no início de `src/data.js`. Nele ficam
data, horário, local, cantor, imagem, link dos convites e mensagem de
disponibilidade. A data usa `AAAA-MM-DD`; o horário usa `HH:mm`. Enquanto
`time` estiver como `null`, o contador considera provisoriamente `00:00:00` no
fuso de São Paulo (`UTC-03:00`).

### Membros

Edite os arrays `diretoria`, `conselhoFiscal` e `suplentes` em `src/data.js`.
Adicione as fotografias em `img/` e informe o caminho no campo `foto`.

### Memorial

Edite o array `memorialSlots` em `src/data.js` somente depois de confirmar
nomes, homenagens, fotografias e autorizações das famílias.

### Bazar

Edite `bazarConfig` em `src/data.js`. As quatro posições de imagem ficam no
array `images`: salve os arquivos finais em `img/` e atualize os campos `src` e
`alt`. O endereço oficial usado pelo botão e pelo rodapé fica em
`bazarConfig.facebookUrl`.

### Eventos

Os cards ficam no array `events` de `src/eventos.js`. Cada item centraliza
título, descrição, fotografia, texto alternativo, categoria e ícone. O Leilão
de Gado utiliza um placeholder até receber uma fotografia oficial.

### Como ajudar

Os tópicos de “Doação financeira”, “Doe itens” e “Seja voluntário” ficam
diretamente na seção `#ajudar` do `index.html`. A chave e o QR Code do Pix
continuam centralizados em `pixConfig`, no final de `src/data.js`.

### Galeria

Todas as fotografias ficam em `src/galeria.js`. Cada item possui `src`, `alt`,
legenda opcional em `caption` e a opção `featured`.

A página inicial mostra as seis primeiras imagens marcadas com
`featured: true`. A página completa usa
`interna.html?pagina=galeria` e exibe todos os itens do arquivo.

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
