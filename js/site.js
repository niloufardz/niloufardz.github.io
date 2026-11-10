/* ============================================================
   EDIT YOUR DETAILS HERE — the sidebar, menu and footer on
   every page are built from this one block.
   ============================================================ */
const SITE = {
  name: "Niloufar Dizangian",
  short: "niloufar",                       // shown in the top-left logo
  role: "Ph.D. Candidate · Power Electronics",
  status: "Open to postdoc & power electronics engineering roles",
  location: "Nancy, France",
  affiliation: '<a href="https://ijl.univ-lorraine.fr/" target="_blank" rel="noopener">Institut Jean Lamour</a> · <a href="https://www.univ-lorraine.fr/" target="_blank" rel="noopener">Université de Lorraine</a>',
  photo: "assets/img/profile.jpg",
  links: [
    { icon: "mail",     label: "Email",          url: "mailto:niloufar.dizangian@univ-lorraine.fr" },
    { icon: "linkedin", label: "LinkedIn",       url: "https://www.linkedin.com/in/niloufar-dizangian" },
    { icon: "scholar",  label: "Google Scholar", url: "https://scholar.google.com/citations?user=XI7mW7IAAAAJ" },
    { icon: "researchgate", label: "ResearchGate", url: "https://www.researchgate.net/profile/Niloofar-Dizangian" },
    { icon: "orcid",    label: "ORCID",          url: "https://orcid.org/0009-0001-7564-1799" },
  ],
  menu: [
    { label: "home",         url: "index.html" },
    { label: "research",     url: "research.html" },
    { label: "publications", url: "publications.html" },
    { label: "experience",   url: "experience.html" },
    { label: "cv",           url: "cv.html" },
    { label: "feed",         url: "feed.html" },
  ],
};

/* ---------- nothing below needs editing ---------- */
const ICONS = {
  pin:'<path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10z"/><circle cx="12" cy="11" r="2"/>',
  lab:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  linkedin:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
  scholar:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/>',
  github:'<path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.9-2.4c3-.3 6-1.5 6-6.6a5 5 0 0 0-1.4-3.6 4.6 4.6 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12 12 0 0 0-6.4 0C6.1 1.1 5 1.4 5 1.4a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 3.5 8.5c0 5.1 3 6.3 6 6.6a3 3 0 0 0-.9 2.4V21"/>',
  researchgate:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 17V8h3a2.5 2.5 0 0 1 0 5H7M10 13l3 4M18.5 9.5a2 2 0 0 0-3.5 1.3v1.4a2 2 0 0 0 3.7 1V12h-1.5"/>',
  orcid:'<circle cx="12" cy="12" r="9"/><path d="M9 8v8M12 8h1.5a4 4 0 0 1 0 8H12z"/>',
  link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
};
const icon = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[n]||ICONS.link}</svg>`;

(function build(){
  const here = location.pathname.split("/").pop() || "index.html";

  const top = document.createElement("header");
  top.className = "topbar";
  top.innerHTML = `<div class="in">
      <a class="brand" href="index.html"><span class="prompt">~/</span>${SITE.short}<span class="led blink" style="margin-left:9px;vertical-align:middle"></span></a>
      <button class="nav-toggle" aria-label="Menu">menu ☰</button>
      <nav class="nav">${SITE.menu.map(m=>`<a href="${m.url}" class="${m.url===here?'on':''}">${m.label}</a>`).join("")}</nav>
    </div>`;
  document.body.prepend(top);
  top.querySelector(".nav-toggle").onclick = () => top.querySelector(".nav").classList.toggle("open");

  const side = document.querySelector("aside.side");
  if (side) side.innerHTML = `
    <div class="photo"><img src="${SITE.photo}" alt="Portrait of ${SITE.name}"></div>
    <div class="who"><p class="name">${SITE.name}</p><p class="role">${SITE.role}</p></div>
    <div class="status"><span class="led blink"></span>${SITE.status}</div>
    <ul>
      <li>${icon("pin")}${SITE.location}</li>
      <li>${icon("lab")}<span>${SITE.affiliation}</span></li>
      ${SITE.links.map(l=>`<li>${icon(l.icon)}<a href="${l.url}" ${l.url.startsWith("http")?'target="_blank" rel="noopener"':''}>${l.label}</a></li>`).join("")}
    </ul>`;

  const foot = document.createElement("footer");
  foot.innerHTML = `<span>© ${new Date().getFullYear()} ${SITE.name}</span><span>built in plain HTML · hosted on GitHub Pages</span>`;
  document.body.append(foot);
})();
