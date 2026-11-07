/* ============================================================================
   EDITE APENAS ESTE ARQUIVO PARA PERSONALIZAR O PORTFÓLIO
   ----------------------------------------------------------------------------
   1. Troque os textos entre "aspas" pelos seus dados.
   2. Para adicionar um projeto, copie um bloco { ... } inteiro e cole embaixo.
   3. Salve, abra o index.html no navegador e veja o resultado.
   ========================================================================== */

const PROFILE = {
  name: "Vinicius Daniel Boni",
  initials: "VB", // 2 letras para o logo do menu
  role: "Desenvolvedor Full Stack & Dados",
  tagline: "Construo aplicações web e soluções de dados que unem performance, " +
           "boa experiência e código limpo. Do banco de dados até a interface.",
  status: "Disponível para novos projetos",
  location: "Araraquara, São Paulo, Brasil",
  email: "viniciusdanielboni@gmail.com",
  phone: "+55 (16) 981425733", // deixe vazio "" para esconder
  resumeUrl: "assets/curriculo.pdf", // coloque o PDF nesta pasta
  
  // Textos que aparecem e desaparecem no hero
  roles: [
    "Desenvolvedor Full Stack",
    "Analista de Dados",
    "Automação & APIs",
    "Front-end Engineer"
  ],
  
  socials: [
    { label: "GitHub", icon: "github", url: "https://github.com/PyNetStacks" },
    { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/vinicius-daniel-boni-78bb9b445/" },
    { label: "E-mail", icon: "mail", url: "mailto:viniciusdanielboni@gmail.com" }
  ]
};

/* ---------------------------------------------------------------- SOBRE --- */
const ABOUT = {
  paragraphs: [
    "Sou desenvolvedor com foco em <strong>redes web</strong> e <strong>cibersegurança</strong>. " +
    "Gosto de problemas que exigem pensar no todo: modelagem, performance, " +
    "experiência do usuário e manutenção a longo prazo.",
    
    "Trabalho principalmente com <strong>JavaScript/TypeScript</strong>, <strong>Python</strong> e bancos de dados " +
    "relacionais. Também me divirto montando dashboards, pipelines de ETL e " +
    "automações que economizam horas de trabalho manual.",
    
    "Fora do código, gosto de estudar arquitetura de software, contribuir em projetos " +
    "open source e escrever sobre o que aprendo."
  ],
  facts: [
    { label: "Localização", value: "Araraquara, São Paulo, BR" },
    { label: "Foco atual", value: "Full Stack + Dados" },
    { label: "Experiência", value: "3+ anos" },
    { label: "Inglês", value: "Intermediário" },
    { label: "Disponibilidade", value: "Remoto / Híbrido" }
  ]
};

/* --------------------------------------------------------------- STATS --- */
const STATS = [
  { value: 12, suffix: "+", label: "Projetos entregues" },
  { value: 2, suffix: "+", label: "Anos de experiência" },
  { value: 4, suffix: "", label: "Tecnologias dominadas" },
  { value: 100, suffix: "%", label: "Dedicação" }
];

/* -------------------------------------------------------------- SKILLS --- */
const SKILLS = [
  {
    title: "Front-end",
    icon: "layout",
    items: [
      { name: "HTML5 / CSS3", level: 95 },
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "React / Next.js", level: 85 },
      { name: "Tailwind CSS", level: 80 }
    ]
  },
  {
    title: "Back-end",
    icon: "server",
    items: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python (FastAPI / Flask)", level: 82 },
      { name: "REST & GraphQL", level: 78 },
      { name: "Autenticação / JWT", level: 75 }
    ]
  },
  {
    title: "Dados",
    icon: "database",
    items: [
      { name: "PostgreSQL / MySQL", level: 85 },
      { name: "Pandas / NumPy", level: 80 },
      { name: "Power BI / Looker", level: 70 },
      { name: "ETL & Airflow", level: 65 }
    ]
  },
  {
    title: "DevOps & Ferramentas",
    icon: "tool",
    items: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 75 },
      { name: "Linux / Bash", level: 78 },
      { name: "CI/CD (Actions)", level: 70 }
    ]
  }
];

/* Tecnologias do letreiro animado */
const MARQUEE = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", 
  "PostgreSQL", "Docker", "Git", "Tailwind", "FastAPI", "Power BI", 
  "Linux", "GraphQL"
];

/* ------------------------------------------------------------ PROJETOS --- */
/* categories: "web" | "dados" | "api" | "outros" (usadas nos filtros) */
const PROJECTS = [
  {
    title: "Dashboard de Vendas",
    description: "Painel interativo com KPIs de vendas, filtros por período e gráficos " +
                 "responsivos. Consome API própria e atualiza em tempo real.",
    tags: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    category: "dados",
    featured: true,
    gradient: "linear-gradient(135deg,#6c8cff,#a855f7)",
    emoji: "📊",
    links: { demo: "https://exemplo.com", code: "https://github.com/PyNetStacks" }
  },
  {
    title: "API de Gestão de Tarefas",
    description: "API REST com autenticação JWT, controle de permissões, testes " +
                 "automatizados e documentação Swagger. Deploy com Docker.",
    tags: ["Node.js", "Express", "JWT", "Docker"],
    category: "api",
    featured: true,
    gradient: "linear-gradient(135deg,#22d3ee,#3b82f6)",
    emoji: "🔐",
    links: { demo: "https://exemplo.com", code: "https://github.com/seu-usuario" }
  },
  {
    title: "E-commerce Full Stack",
    description: "Loja completa com catálogo, carrinho, checkout e painel administrativo. " +
                 "Integração com gateway de pagamento e controle de estoque.",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    category: "web",
    featured: true,
    gradient: "linear-gradient(135deg,#f472b6,#fb923c)",
    emoji: "🛒",
    links: { demo: "https://exemplo.com", code: "https://github.com/seu-usuario" }
  },
  {
    title: "Pipeline de ETL",
    description: "Coleta, limpeza e consolidação de dados de múltiplas fontes em um " +
                 "data warehouse, com agendamento diário e alertas de falha.",
    tags: ["Python", "Pandas", "Airflow", "BigQuery"],
    category: "dados",
    gradient: "linear-gradient(135deg,#34d399,#22d3ee)",
    emoji: "🔄",
    links: { code: "https://github.com/seu-usuario" }
  },
  {
    title: "App de Finanças Pessoais",
    description: "Aplicação para registrar gastos, categorizar transações e visualizar " +
                 "relatórios mensais. Funciona offline com armazenamento local.",
    tags: ["React", "TypeScript", "IndexedDB"],
    category: "web",
    gradient: "linear-gradient(135deg,#a78bfa,#6c8cff)",
    emoji: "💰",
    links: { demo: "https://exemplo.com", code: "https://github.com/seu-usuario" }
  },
  {
    title: "Bot de Automação",
    description: "Bot que monitora canais, extrai informações e envia relatórios " +
                 "formatados automaticamente para a equipe.",
    tags: ["Python", "APIs", "Cron"],
    category: "outros",
    gradient: "linear-gradient(135deg,#fbbf24,#f97316)",
    emoji: "🤖",
    links: { code: "https://github.com/seu-usuario" }
  }
];

/* -------------------------------------------------- EXPERIÊNCIA / FORMAÇÃO */
const TIMELINE = [
  {
    type: "work",
    period: "2025 — Atual",
    title: "Desenvolvedor Full Stack",
    org: "Empresa Própria",
    description: "Desenvolvimento de aplicações web internas, integração de APIs e " +
                 "otimização de consultas no banco de dados."
  },
  {
    type: "education",
    period: "2025 — Atual",
    title: "Técnico em Informática",
    org: "Instituto Federal de São Paulo - Campus Araraquara",
    description: "Ensino médio integrado com o técnico."
  },
  {
    type: "education",
    period: "2026",
    title: "Certificação em Redes",
    org: "CISCO",
    description: "Curso de Redes realizado e oferecido pela CISCO Academy."
  }
];

/* ------------------------------------------------------------- CONTATO --- */
// Deixe formEndpoint vazio para o formulário abrir o cliente de e-mail (mailto).
// Para receber as mensagens por e-mail, crie um formulário grátis em
// https://formspree.io e cole a URL aqui: "https://formspree.io/f/SEU_ID"
const CONTACT = {
  formEndpoint: ""
};
