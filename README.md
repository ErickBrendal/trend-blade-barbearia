# Vibrum Co. - Site Oficial

Este é o site oficial da Vibrum Co., desenvolvido para apresentar os serviços, comodidades e informações de contato de forma elegante e moderna. O projeto foi construído utilizando React, Tailwind CSS e Shadcn/ui, garantindo responsividade e uma experiência de usuário otimizada em diferentes dispositivos.

## Funcionalidades

- **Design Responsivo**: Adapta-se perfeitamente a telas de desktop e mobile.
- **Navegação Suave**: Rolagem animada entre as seções da página.
- **Informações Completas**: Detalhes sobre serviços, preços, localização, horários e contato.
- **SEO Otimizado**: Meta tags para melhor ranqueamento em motores de busca.
- **Integração Social**: Links para agendamento e redes sociais.

## Estrutura do Projeto

```
. 
├── public/
│   └── favicon.ico
│   └── og-image.jpg (Imagem para Open Graph e Twitter)
├── src/
│   ├── assets/  
│   ├── components/
│   │   └── ui/  (Componentes Shadcn/ui)
│   ├── App.css  (Estilos globais e Tailwind)
│   ├── App.jsx  (Componente principal da aplicação)
│   └── main.jsx  (Ponto de entrada da aplicação)
├── .github/ (Configuração para GitHub Actions)
│   └── workflows/
│       └── deploy.yml (Workflow para GitHub Pages)
├── vercel.json (Configuração para Vercel)
├── netlify.toml (Configuração para Netlify)
├── index.html (Arquivo HTML principal com meta tags de SEO)
├── package.json (Dependências e scripts do projeto)
├── pnpm-lock.yaml 
└── vite.config.js (Configuração do Vite)
```

## Como Rodar Localmente

Para configurar e rodar o projeto em seu ambiente de desenvolvimento local, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone [URL_DO_SEU_REPOSITORIO]
   cd vibrum-co
   ```

2. **Instale as dependências:**
   Utilizamos `pnpm` como gerenciador de pacotes. Se você não o tem instalado, pode instalá-lo com `npm`:
   ```bash
   npm install -g pnpm
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   pnpm run dev
   ```
   O site estará acessível em `http://localhost:5173` (ou outra porta disponível).

## Como Fazer o Deploy

Este projeto está configurado para deploy fácil em três plataformas populares: Vercel, Netlify e GitHub Pages. Escolha a opção que melhor se adapta às suas necessidades.

### 1. Deploy no Vercel

O Vercel é uma plataforma de deploy e hospedagem para frontend que oferece integração contínua e deploy instantâneo. O arquivo `vercel.json` já está configurado.

**Passos:**

1. **Crie uma conta no Vercel** (se ainda não tiver).
2. **Importe seu repositório Git** (GitHub, GitLab, Bitbucket) para o Vercel.
3. O Vercel detectará automaticamente as configurações do projeto React e o arquivo `vercel.json`.
4. **Configure o build command** como `pnpm run build` e o **output directory** como `dist`.
5. Clique em **Deploy**.

Após o deploy, o Vercel fornecerá um URL público para o seu site. Você pode configurar um domínio personalizado posteriormente.

### 2. Deploy no Netlify

O Netlify é outra excelente plataforma para deploy de sites estáticos e aplicações frontend, com funcionalidades como deploy contínuo e CDN global. O arquivo `netlify.toml` já está configurado.

**Passos:**

1. **Crie uma conta no Netlify** (se ainda não tiver).
2. **Importe seu repositório Git** (GitHub, GitLab, Bitbucket) para o Netlify.
3. O Netlify detectará automaticamente as configurações do projeto React e o arquivo `netlify.toml`.
4. **Configure o build command** como `pnpm run build` e o **publish directory** como `dist`.
5. Clique em **Deploy site**.

O Netlify gerará um URL público para o seu site. Você pode conectar um domínio personalizado nas configurações do projeto.

### 3. Deploy no GitHub Pages

O GitHub Pages permite hospedar sites diretamente do seu repositório GitHub. Este projeto inclui um workflow de GitHub Actions (`.github/workflows/deploy.yml`) para automatizar o deploy.

**Passos:**

1. **Certifique-se de que seu código está em um repositório GitHub público.**
2. **Vá para as configurações do seu repositório** no GitHub.
3. Na seção **Pages**, selecione a branch `gh-pages` como fonte de deploy.
4. O workflow `deploy.yml` será acionado automaticamente em cada push para a branch `main`, construindo o projeto e publicando-o na branch `gh-pages`.

**Observação:** Para projetos React que usam `react-router-dom` no modo `BrowserRouter`, pode ser necessário configurar a `homepage` no `package.json` ou usar `HashRouter` para evitar problemas de roteamento em subdiretórios do GitHub Pages.

## Configurando um Domínio Próprio

Após o deploy em qualquer uma das plataformas acima, você pode configurar um domínio personalizado (ex: `trendblade.com.br`). O processo geral é:

1. **Adquira seu domínio** em um registrador de domínios (ex: Registro.br, GoDaddy, Namecheap).
2. **Nas configurações da sua plataforma de hospedagem** (Vercel, Netlify, GitHub Pages), adicione seu domínio personalizado.
3. A plataforma fornecerá os **registros DNS** (geralmente registros `A` e `CNAME`) que você precisará adicionar no painel de controle do seu registrador de domínios.
4. **Aguarde a propagação do DNS** (pode levar algumas horas). Após a propagação, seu site estará acessível pelo seu domínio próprio.

## Otimização para Produção

O comando `pnpm run build` cria uma versão otimizada do site na pasta `dist/`. Esta versão inclui:

- Minificação de código (HTML, CSS, JavaScript).
- Otimização de imagens.
- Cache-busting para arquivos estáticos.
- Outras otimizações para garantir carregamento rápido e alta performance.

## Contato

Para dúvidas ou suporte, entre em contato com a equipe de desenvolvimento. 

--- 

**Desenvolvido por Manus AI**


