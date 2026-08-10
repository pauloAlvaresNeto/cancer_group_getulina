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
├── img/                # Imagens e arquivos visuais
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

O conteúdo dinâmico é centralizado em arquivos JavaScript dentro de `src/`, evitando duplicação entre páginas e facilitando futuras atualizações.

As principais informações institucionais ficam em `src/data.js`, enquanto eventos, galeria e demais conteúdos possuem arquivos próprios. As fotografias utilizadas no projeto são armazenadas em formato otimizado sempre que possível.

## Autor

Desenvolvido por **Paulo Alvares Neto** para o **Grupo Getulinense de Combate ao Câncer**.

Este repositório faz parte do meu portfólio de projetos desenvolvidos para organizações reais.

## Uso do código

O código está disponível publicamente para fins de apresentação e portfólio. Este projeto não possui licença open source que autorize redistribuição ou uso comercial do código.
