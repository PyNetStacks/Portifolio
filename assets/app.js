/* ==========================================================================
   PORTFÓLIO — app.js
   Renderiza o conteúdo de data.js e cuida das interações.
   Não precisa editar este arquivo para personalizar (use data.js).
   ========================================================================== */

/* ------------------------------------------------------------------ utils */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const esc = (str = "") =>
  String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));

/* ----------------------------------------------------------------- ícones */
const ICONS = {
  github: '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.7 1.2 3.4.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.5 4.6 18.5 5 18.5 5c.6 1.7.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 6 9 7 9-7"/></svg>',
  phone: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  globe: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>',
  external: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/></svg>',
  code: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
  layout: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>',
  server: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="7" rx="2"/><rect x="2" y="14" width="20" height="7" rx="2"/><path d="M6 6.5h.01M6 17.5h.01"/></svg>',
  database: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg>',
  tool: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.1 2.1 0 0 1-3-3L16.7 8.3a4 4 0 0 0-2-2z"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"/></svg>'
};

const icon = (name) => ICONS[name] || ICONS.globe;

/* ------------------------------------------------------- tema (dark/light) */
(function initTheme() {
  const saved = localStorage.getItem("portfolio-theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  document.documentElement.dataset.theme = saved || (prefersLight ? "light" : "dark");
})();

$("#themeToggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("portfolio-theme", next);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", next === "dark" ? "#070a11" : "#f7f8fb");
});

/* =========================================================== 1. IDENTIDADE */
$("#heroName").textContent = PROFILE.name;
$("#brandName").textContent = PROFILE.name;
$("#brandMark").textContent = PROFILE.initials || "SN";
$("#footerName").textContent = PROFILE.name;
$("#heroTagline").textContent = PROFILE.tagline;
$("#heroStatus").textContent = PROFILE.status || "Disponível";
$("#year").textContent = new Date().getFullYear();
document.title = `${PROFILE.name} — ${PROFILE.role}`;
document.querySelector('meta[name="author"]').setAttribute("content", PROFILE.name);

const resumeBtn = $("#resumeBtn");
if (PROFILE.resumeUrl) {
  resumeBtn.href = PROFILE.resumeUrl;
  resumeBtn.setAttribute("download", "");
  resumeBtn.setAttribute("target", "_blank");
} else {
  resumeBtn.style.display = "none";
}

/* socials do hero */
$("#heroSocials").innerHTML = PROFILE.socials
  .map(
    (s) => `<a class="social-btn" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer"
              aria-label="${esc(s.label)}">${icon(s.icon)}<span>${esc(s.label)}</span></a>`
  )
  .join("");

/* ------------------------------------------------------ cartão perfil.json */
(function renderCodeCard() {
  const items = [
    ['"nome"', `"${PROFILE.name}"`],
    ['"cargo"', `"${PROFILE.role.split("&")[0].trim()}"`],
    ['"foco"', `"${(PROFILE.roles && PROFILE.roles[1]) || "Web"}"`],
    ['"local"', `"${PROFILE.location}"`],
    ['"disponivel"', "true"]
  ];
  const lines = [
    "<span style='color:#6b7a94'>// perfil.json</span>",
    "{"
  ];
  items.forEach(([k, v], i) => {
    const val = v === "true"
      ? `<span class="b">${v}</span>`
      : `<span class="s">${esc(v)}</span>`;
    lines.push(`  <span class="k">${esc(k)}</span>: ${val}${i < items.length - 1 ? "," : ""}`);
  });
  lines.push("}");
  $("#codeProfile").innerHTML = lines.join("\n");
})();

/* ------------------------------------------------------------- typewriter */
(function typewriter() {
  const words = (PROFILE.roles && PROFILE.roles.length) ? PROFILE.roles : [PROFILE.role];
  const el = $("#typewriter");
  let w = 0, c = 0, deleting = false;

  function tick() {
    const word = words[w];
    c += deleting ? -1 : 1;
    el.textContent = word.slice(0, c);

    let delay = deleting ? 38 : 78;
    if (!deleting && c === word.length) { delay = 1900; deleting = true; }
    else if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; delay = 320; }
    setTimeout(tick, delay);
  }
  tick();
})();

/* ================================================== 2. STATS (contadores) */
$("#stats").innerHTML = STATS.map(
  (s) => `<div class="stat">
      <div class="stat-value" data-target="${Number(s.value) || 0}" data-suffix="${esc(s.suffix || "")}">0</div>
      <div class="stat-label">${esc(s.label)}</div>
    </div>`
).join("");

/* ================================================================ 3. SOBRE */
$("#aboutText").innerHTML = ABOUT.paragraphs.map((p) => `<p>${p}</p>`).join("");

$("#factList").innerHTML = ABOUT.facts
  .map((f) => `<li><span class="k">${esc(f.label)}</span><span class="v">${esc(f.value)}</span></li>`)
  .join("");

/* =============================================================== 4. SKILLS */
$("#skillsWrap").innerHTML = SKILLS.map(
  (group) => `
  <article class="skill-card">
    <div class="skill-card-head">
      <span class="skill-icon">${icon(group.icon)}</span>
      <h3>${esc(group.title)}</h3>
    </div>
    ${group.items
      .map(
        (s) => `
      <div class="skill-item">
        <div class="skill-top">
          <span>${esc(s.name)}</span>
          <span class="skill-pct">${s.level}%</span>
        </div>
        <div class="bar"><div class="bar-fill" data-level="${Number(s.level) || 0}"></div></div>
      </div>`
      )
      .join("")}
  </article>`
).join("");

/* letreiro duplicado para loop contínuo */
const marqueeHtml = MARQUEE.map((t) => `<span>${esc(t)}</span>`).join("");
$("#marqueeTrack").innerHTML = marqueeHtml + marqueeHtml;

/* ============================================================= 5. PROJETOS */
const CATEGORIES = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "dados", label: "Dados" },
  { id: "api", label: "APIs" },
  { id: "outros", label: "Outros" }
];

$("#filters").innerHTML = CATEGORIES.map(
  (c, i) => `<button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${c.id}" role="tab"
             aria-selected="${i === 0}">${c.label}</button>`
).join("");

const PROJECTS_HTML = (list) =>
  list
    .map(
      (p, i) => `
    <article class="project-card" style="animation-delay:${i * 55}ms">
      <div class="project-thumb" style="background:${esc(p.gradient || "linear-gradient(135deg,var(--accent),var(--accent-2))")}">
        ${p.featured ? '<span class="featured-tag">Destaque</span>' : ""}
        <span class="emoji">${p.emoji || "📁"}</span>
      </div>
      <div class="project-body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        <div class="tags">${(p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        <div class="project-links">
          ${p.links && p.links.demo ? `<a href="${esc(p.links.demo)}" target="_blank" rel="noopener noreferrer">${icon("external")} Demo</a>` : ""}
          ${p.links && p.links.code ? `<a href="${esc(p.links.code)}" target="_blank" rel="noopener noreferrer">${icon("code")} Código</a>` : ""}
        </div>
      </div>
    </article>`
    )
    .join("");

function renderProjects(filter = "all") {
  const list = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const grid = $("#projectsGrid");
  grid.innerHTML = list.length
    ? PROJECTS_HTML(list)
    : `<p style="color:var(--text-dim)">Nenhum projeto nessa categoria ainda.</p>`;
  $$(".project-card", grid).forEach((el) => {
    el.style.opacity = 1;
  });
}
renderProjects();

$("#filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  $$(".filter-btn").forEach((b) => {
    b.classList.toggle("active", b === btn);
    b.setAttribute("aria-selected", b === btn);
  });
  renderProjects(btn.dataset.filter);
});

/* ===================================================== 6. TIMELINE / EXP. */
$("#timeline").innerHTML = TIMELINE.map(
  (t) => `
  <div class="tl-item" data-type="${esc(t.type || "work")}">
    <span class="tl-period">${esc(t.period)}</span>
    <h3 class="tl-title">${esc(t.title)}</h3>
    <p class="tl-org">${esc(t.org)}</p>
    ${t.description ? `<p class="tl-desc">${esc(t.description)}</p>` : ""}
    ${t.bullets && t.bullets.length ? `<ul class="tl-bullets">${t.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
  </div>`
).join("");

/* ============================================================== 7. CONTATO */
const contactItems = [
  PROFILE.email && { icon: "mail", label: PROFILE.email, href: `mailto:${PROFILE.email}` },
  PROFILE.phone && { icon: "phone", label: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/[^\d+]/g, "")}` },
  PROFILE.location && { icon: "pin", label: PROFILE.location, href: null }
].filter(Boolean);

$("#contactList").innerHTML = contactItems
  .map(
    (c) => `<li><span class="ci">${icon(c.icon)}</span>${
      c.href ? `<a href="${esc(c.href)}">${esc(c.label)}</a>` : `<span>${esc(c.label)}</span>`
    }</li>`
  )
  .join("");

$("#contactSocials").innerHTML = PROFILE.socials
  .map(
    (s) => `<a class="social-btn" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer"
             aria-label="${esc(s.label)}">${icon(s.icon)}</a>`
  )
  .join("");

/* ---------------------------------------------------------- formulário */
const form = $("#contactForm");
const msg = $("#formMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  msg.className = "form-msg";
  msg.textContent = "";

  const nome = $("#nome"), email = $("#email"), mensagem = $("#mensagem");
  let ok = true;
  [nome, email, mensagem].forEach((f) => f.classList.remove("invalid"));

  if (!nome.value.trim()) { nome.classList.add("invalid"); ok = false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) { email.classList.add("invalid"); ok = false; }
  if (!mensagem.value.trim()) { mensagem.classList.add("invalid"); ok = false; }

  if (!ok) {
    msg.classList.add("err");
    msg.textContent = "Confira os campos destacados.";
    return;
  }

  const assunto = $("#assunto").value.trim() || `Contato do portfólio — ${nome.value.trim()}`;

  if (CONTACT.formEndpoint) {
    msg.textContent = "Enviando...";
    try {
      const res = await fetch(CONTACT.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nome: nome.value.trim(),
          email: email.value.trim(),
          assunto,
          mensagem: mensagem.value.trim()
        })
      });
      if (!res.ok) throw new Error("Falha no envio");
      form.reset();
      msg.classList.add("ok");
      msg.textContent = "Mensagem enviada! Obrigado pelo contato 🙌";
    } catch {
      msg.classList.add("err");
      msg.textContent = "Não foi possível enviar. Me chame direto por e-mail.";
    }
  } else {
    const body = `${mensagem.value.trim()}\n\n— ${nome.value.trim()} (${email.value.trim()})`;
    window.location.href =
      `mailto:${PROFILE.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}`;
    msg.classList.add("ok");
    msg.textContent = "Abrindo seu aplicativo de e-mail...";
  }
});

/* ==================================================== 8. NAV & PROGRESSO */
const nav = $("#nav");
const navLinks = $("#navLinks");
const progress = $("#scrollProgress");
const toTop = $("#toTop");

function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle("scrolled", y > 12);
  toTop.classList.toggle("show", y > 500);

  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = h > 0 ? `${(y / h) * 100}%` : "0%";

  // link ativo
  const sections = $$("main section[id]");
  let current = "";
  sections.forEach((sec) => {
    if (y >= sec.offsetTop - 140) current = sec.id;
  });
  $$("a", navLinks).forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* menu mobile */
$("#menuToggle").addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  $("#menuToggle").setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    navLinks.classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target)) navLinks.classList.remove("open");
});

toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ==================================================== 9. REVEAL & CONTADOR */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add("visible");

      // barras de skill
      $$(".bar-fill", el).forEach((bar) => {
        if (!bar.dataset.done) {
          bar.dataset.done = "1";
          requestAnimationFrame(() => (bar.style.width = `${bar.dataset.level}%`));
        }
      });

      // contadores
      $$(".stat-value", el).forEach((counter) => {
        if (counter.dataset.done) return;
        counter.dataset.done = "1";
        const target = Number(counter.dataset.target) || 0;
        const suffix = counter.dataset.suffix || "";
        const start = performance.now();
        const dur = 1300;
        function step(now) {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          counter.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });

      io.unobserve(el);
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
);

$$(".reveal").forEach((el) => io.observe(el));
$$(".skill-card, .stat").forEach((el) => io.observe(el));
