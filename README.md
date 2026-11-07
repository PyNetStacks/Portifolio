# 🚀 Portfólio — GitHub Pages

Portfólio profissional **100% estático** (HTML + CSS + JS puro, sem build, sem dependências).
Basta subir a pasta no GitHub e ativar o GitHub Pages.

---

## 📁 Estrutura

```
portfolio/
├── index.html            → página principal
├── 404.html              → página de erro personalizada
├── assets/
│   ├── style.css         → estilos (temas claro/escuro)
│   ├── data.js           → ⚠️ TODO O SEU CONTEÚDO FICA AQUI
│   └── app.js            → lógica (não precisa mexer)
├── .nojekyll             → evita o processamento Jekyll
└── README.md
```

---

## ✏️ Como personalizar (5 minutos)

Abra **`assets/data.js`**. Todo o site é gerado a partir dele.

| Constante    | O que é |
|--------------|---------|
| `PROFILE`    | Nome, iniciais, cargo, frase de apresentação, e-mail, telefone, local, currículo, redes sociais e textos do efeito de digitação |
| `ABOUT`      | Parágrafos do "Sobre mim" + ficha rápida |
| `STATS`      | Números animados (projetos, anos de experiência...) |
| `SKILLS`     | Grupos de habilidades com porcentagem das barras |
| `MARQUEE`    | Tecnologias do letreiro animado |
| `PROJECTS`   | Seus projetos (título, descrição, tags, categoria, links e cor do card) |
| `TIMELINE`   | Experiência profissional e formação |
| `CONTACT`    | Endpoint do formulário (opcional) |

### Exemplo: adicionar um projeto

```js
{
  title: "Meu Novo Projeto",
  description: "O que ele faz e qual problema resolve.",
  tags: ["React", "Node.js", "PostgreSQL"],
  category: "web",              // web | dados | api | outros
  featured: true,               // mostra a etiqueta "Destaque"
  gradient: "linear-gradient(135deg,#6c8cff,#a855f7)",
  emoji: "🚀",                  // imagem do card (pode ser emoji)
  links: {
    demo: "https://meu-projeto.com",
    code: "https://github.com/usuario/repo"
  }
}
```

> Deixe `demo` ou `code` de fora se não existir — o botão correspondente desaparece sozinho.

### Currículo
Coloque seu PDF em `assets/curriculo.pdf` (ou ajuste `PROFILE.resumeUrl`).
Se `resumeUrl` ficar vazio, o botão "Baixar currículo" é escondido.

### Formulário de contato
Por padrão o formulário abre o app de e-mail do visitante (`mailto`) — funciona sem servidor.
Para receber mensagens direto na caixa de entrada, crie um form grátis em
[formspree.io](https://formspree.io) e cole a URL em `CONTACT.formEndpoint`:

```js
const CONTACT = { formEndpoint: "https://formspree.io/f/SEU_ID" };
```

### Tema, foto e métricas
- Tema **escuro/claro**: botão no menu, salvo no `localStorage`.
- Não há foto por padrão (o visual usa um cartão de código) — se quiser, adicione uma
  imagem em `assets/` e insira um `<img>` dentro de `.hero-visual`.
- Para métricas reais (Google Analytics), cole o script antes de `</head>` no `index.html`.

---

## 🌐 Como publicar no GitHub Pages

### Opção A — repositório novo (recomendado)

```bash
# 1. crie a pasta e entre nela
cd portfolio

# 2. inicie o git
git init
git add .
git commit -m "feat: portfólio inicial"

# 3. crie o repositório no GitHub e conecte
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

Depois, **no GitHub**:

1. Vá em **Settings → Pages**
2. Em *Source*, escolha **Deploy from a branch**
3. Branch: **main** · Pasta: **/ (root)**
4. **Save** e aguarde ~1 minuto

Seu site ficará em:
`https://SEU-USUARIO.github.io/SEU-REPO/`

### Opção B — site de usuário (`usuario.github.io`)

Se quiser o endereço `https://SEU-USUARIO.github.io`:

1. Crie um repositório chamado exatamente **`SEU-USUARIO.github.io`**
2. Suba os arquivos **na raiz** desse repositório (não em subpasta)
3. Pages já vem ativado automaticamente

> ⚠️ O arquivo `.nojekyll` é importante: ele impede que o Jekyll ignore arquivos
> que começam com `_`. Já está incluído — só não apague.

### Domínio próprio (opcional)

1. Crie o arquivo `CNAME` na raiz com o domínio, ex.: `meuportifolio.com`
2. No seu provedor de DNS, aponte:
   - `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME www` → `SEU-USUARIO.github.io`
3. Em **Settings → Pages → Custom domain**, informe o domínio e marque **Enforce HTTPS**

---

## 🧪 Testar localmente

Basta abrir o `index.html` no navegador. Ou, para simular o servidor:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

---

## ✅ Checklist antes de publicar

- [ ] Trocar **nome, iniciais e cargo** em `PROFILE`
- [ ] Trocar e-mail, telefone e links das redes sociais
- [ ] Atualizar `canonical` e `og:url` no `index.html` (linha do `<link rel="canonical">`)
- [ ] Substituir os **projetos de exemplo** pelos seus
- [ ] Ajustar experiência e formação (`TIMELINE`)
- [ ] Adicionar `assets/curriculo.pdf`
- [ ] Testar no celular (menu hambúrguer, layout)
- [ ] Conferir que todos os links abrem

---

## 🎨 Detalhes técnicos

- **Zero dependências** — só Google Fonts (Inter, Space Grotesk, JetBrains Mono)
- **Responsivo** — 4 breakpoints (980 / 780 / 520px)
- **Acessível** — `skip-link`, `aria-*`, foco visível, `prefers-reduced-motion`
- **Performance** — sem frameworks, sem imagens pesadas, animações via CSS
- **SEO** — meta description, Open Graph, Twitter Card, HTML semântico
- **Temas** — variáveis CSS (dark/light) salvas no navegador
- **Impressão** — `Ctrl+P` gera uma versão limpa (útil como currículo)

---

Feito com HTML, CSS e café ☕
