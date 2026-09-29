import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoveRight,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

const navItems = [
  { id: "expertise", label: "Expertise" },
  { id: "parcours", label: "Parcours" },
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
];

const stats = [
  { value: "15", unit: "ans", label: "d’expérience front-end" },
  { value: "40%", unit: "", label: "de dette technique réduite" },
  { value: "100k+", unit: "", label: "utilisateurs actifs accompagnés" },
  { value: "30%", unit: "", label: "plus rapide à intégrer" },
];

const capabilities = [
  {
    number: "01",
    title: "Architecture Front-End",
    text: "Des interfaces Angular structurées, lisibles et prêtes à évoluer — du cadrage des contrats d’API à la revue de code.",
    tags: ["Angular v2 → v20", "TypeScript", "Clean Architecture"],
    accent: "coral",
  },
  {
    number: "02",
    title: "Performance & modernisation",
    text: "Je rends les applications legacy plus rapides et plus maintenables, sans perdre le produit en route.",
    tags: ["Migration AngularJS", "RxJS / NgRx", "Performance"],
    accent: "blue",
  },
  {
    number: "03",
    title: "Leadership technique",
    text: "Une direction technique concrète : accompagner les équipes, aligner Front et Back, livrer avec confiance.",
    tags: ["Mentorat", "CI/CD", "Coordination"],
    accent: "mint",
  },
];

const experiences = [
  {
    period: "2022 — aujourd’hui",
    role: "Team Leader Technique / Lead Front-End",
    company: "Novatel-IT · Sousse",
    description:
      "Référente Angular sur cinq projets stratégiques. Supervision de quatre développeurs Front-End et coordination de deux équipes Back-End Java/PHP.",
    result: "95% de livraisons dans les délais",
  },
  {
    period: "2020 — 2022",
    role: "Team Leader Technique / Front-End Senior",
    company: "GBM / Proxym-IT · Sousse",
    description:
      "Développement d’applications web et mobiles internationales avec Angular, Ionic et IBM MobileFirst. Encadrement de trois développeurs juniors.",
    result: "35% de bugs en production en moins",
  },
  {
    period: "2014 — 2020",
    role: "Développeuse Front-End / Mobile",
    company: "Proxym-IT · Sousse",
    description:
      "Contribution à huit projets internationaux et à des applications représentant plus de 100 000 utilisateurs actifs.",
    result: "50+ APIs REST / SOAP intégrées",
  },
  {
    period: "2009 — 2014",
    role: "Développeuse Web / Front-End PHP",
    company: "D&D · Monastir",
    description:
      "Conception de plateformes e-commerce, sites dynamiques et modules CMS pour plus de dix clients.",
    result: "50k visites mensuelles accompagnées",
  },
];

const projects = [
  {
    index: "01",
    category: "Migration · Performance",
    title: "Legacy to Angular",
    subtitle: "Deux applications modernisées, une base technique durable.",
    description:
      "Pilotage de deux migrations AngularJS vers Angular : refactorisation progressive, réduction de la dette technique et amélioration de l’expérience de chargement.",
    metrics: [
      { value: "40%", label: "dette technique réduite" },
      { value: "25%", label: "temps de chargement gagné" },
    ],
    stack: ["Angular", "TypeScript", "RxJS", "NgRx"],
    color: "project-coral",
  },
  {
    index: "02",
    category: "International · Produit",
    title: "RTA Dubai & KGOC Kuwait",
    subtitle: "Des produits opérationnels pour des utilisateurs internationaux.",
    description:
      "Développement d’une application de gestion des transports et d’une solution de gestion du temps et des tâches utilisée par plus de 500 employés.",
    metrics: [
      { value: "90%", label: "d’adoption dès la 1re semaine" },
      { value: "0", label: "bug critique en production" },
    ],
    stack: ["Angular", "Ionic", "Java", "MobileFirst"],
    color: "project-blue",
  },
  {
    index: "03",
    category: "Delivery · Leadership",
    title: "HubOne Mission France",
    subtitle: "Trois modules critiques livrés en dix jours.",
    description:
      "Coordination avec deux équipes clientes lors d’une mission sur site en France en 2025, avec une attention particulière portée à la clarté des échanges et à la qualité de livraison.",
    metrics: [
      { value: "10j", label: "pour livrer 3 modules" },
      { value: "4", label: "développeurs accompagnés" },
    ],
    stack: ["Angular 20", "Material 3", "CI/CD", "Code review"],
    color: "project-mint",
  },
];

const toolGroups = [
  {
    label: "Front-End",
    items: ["Angular v2 à v20", "AngularJS", "TypeScript", "JavaScript ES6+", "RxJS", "NgRx"],
  },
  {
    label: "Interfaces",
    items: ["HTML5", "CSS3 / SCSS", "Angular Material", "Material 3", "Responsive Design"],
  },
  {
    label: "API & qualité",
    items: ["REST / SOAP", "Swagger", "Postman", "Design Patterns", "Revue de code"],
  },
  {
    label: "Delivery",
    items: ["Git / GitFlow", "Jenkins", "Azure DevOps", "Docker", "CI/CD"],
  },
];

function scrollToSection(id: string, closeMenu?: () => void) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  closeMenu?.();
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Maha Sghaier, accueil">
            <span className="brand-mark">MS</span>
            <span className="brand-copy">
              <strong>MAHA</strong>
              <span>Front-End / Lead</span>
            </span>
          </a>

          <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navigation principale">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="mailto:mahasghaier@gmail.com?subject=Échange%20opportunité%20Angular">
            Parlons projet <ArrowUpRight size={16} strokeWidth={2.2} />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="contenu">
        <section className="hero-section" id="top">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy reveal-up">
              <p className="eyebrow"><span className="eyebrow-dot" /> Disponible pour de nouveaux défis</p>
              <h1>
                Construire du <em>front-end</em>
                <br />
                qui tient la route.
              </h1>
              <p className="hero-lead">
                Je suis <strong>Maha Sghaier</strong>, Développeuse Front-End Angular Senior et Lead Technique. Je transforme des systèmes complexes en interfaces rapides, lisibles et durables.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projets">
                  Voir mes projets <MoveRight size={17} />
                </a>
                <a className="button button-ghost" href="mailto:mahasghaier@gmail.com">
                  Me contacter <Mail size={16} />
                </a>
              </div>
              <div className="hero-meta">
                <span><span className="status-pulse" /> Sousse, Tunisie</span>
                <span>15 ans d’expérience</span>
                <span>FR · EN B2</span>
              </div>
            </div>

            <div className="hero-card-wrap reveal-up delay-1">
              <div className="hero-card-backdrop" aria-hidden="true">ANGULAR</div>
              <div className="profile-card">
                <div className="profile-card-top">
                  <span className="mono-label">PROFILE / 2025</span>
                  <span className="availability-badge"><span /> OPEN TO WORK</span>
                </div>
                <div className="monogram">MS</div>
                <div className="profile-card-name">Maha Sghaier</div>
                <div className="profile-card-role">Senior Front-End Engineer<br />Technical Lead</div>
                <div className="profile-card-rule" />
                <div className="profile-card-code">
                  <span><i>const</i> focus</span><b>=</b><strong>"impact"</strong>
                  <span><i>const</i> stack</span><b>=</b><strong>["ng", "ts", "rx"]</strong>
                </div>
                <div className="profile-card-foot">
                  <span>01 / 04</span>
                  <span>MAHA.SGHAIER</span>
                </div>
              </div>
              <div className="hero-float-note">
                <Sparkles size={15} />
                <span>Mission France<br /><strong>2025</strong></span>
              </div>
            </div>
          </div>
          <div className="container hero-scroll-hint">
            <button type="button" onClick={() => scrollToSection("expertise")}>
              <ArrowDown size={15} />
              <span>Défiler pour découvrir</span>
            </button>
            <span className="hero-coordinate">35°49&apos;N / 10°38&apos;E</span>
          </div>
        </section>

        <section className="proof-strip" aria-label="Chiffres clés">
          <div className="container stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-item" key={stat.label}>
                <div className="stat-value">{stat.value}<small>{stat.unit}</small></div>
                <div className="stat-label">{stat.label}</div>
                {index < stats.length - 1 && <span className="stat-separator" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </section>

        <section className="section expertise-section" id="expertise">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="section-kicker">01 — Ce que je fais</p>
                <h2>Le code est un outil.<br /><em>L’impact est le but.</em></h2>
              </div>
              <p className="section-intro">Un bon front-end ne se contente pas d’être joli. Il doit être compris par l’équipe, adopté par l’utilisateur et prêt pour la prochaine version.</p>
            </div>
            <div className="capabilities-grid">
              {capabilities.map((capability) => (
                <article className={`capability-card ${capability.accent}`} key={capability.number}>
                  <div className="capability-top"><span className="capability-number">{capability.number}</span><Code2 size={20} /></div>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                  <div className="tag-row">
                    {capability.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section journey-section" id="parcours">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">02 — Parcours</p>
              <h2>Une trajectoire construite<br /><em>sur le terrain.</em></h2>
            </div>
            <div className="journey-layout">
              <div className="journey-aside">
                <div className="journey-stamp">15<span>YRS</span></div>
                <p>Du web PHP aux plateformes Angular internationales, chaque étape a ajouté une nouvelle couche de recul technique.</p>
                <a className="text-link" href="mailto:mahasghaier@gmail.com?subject=Demande%20de%20CV%20Maha%20Sghaier">Demander le CV <ArrowUpRight size={16} /></a>
              </div>
              <div className="timeline">
                {experiences.map((experience, index) => (
                  <article className="timeline-item" key={experience.period}>
                    <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                    <div className="timeline-content">
                      <div className="timeline-period">{experience.period}</div>
                      <h3>{experience.role}</h3>
                      <p className="timeline-company">{experience.company}</p>
                      <p className="timeline-description">{experience.description}</p>
                      <div className="timeline-result"><Check size={14} /> {experience.result}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projets">
          <div className="container">
            <div className="section-heading split-heading projects-heading">
              <div>
                <p className="section-kicker">03 — Projets sélectionnés</p>
                <h2>Des résultats qui<br /><em>parlent d’eux-mêmes.</em></h2>
              </div>
              <p className="section-intro">Quelques chapitres représentatifs d’une carrière dédiée à rendre le digital plus fiable, plus fluide et plus utile.</p>
            </div>
            <div className="projects-list">
              {projects.map((project) => (
                <article className={`project-card ${project.color}`} key={project.index}>
                  <div className="project-card-top">
                    <span className="project-index">{project.index}</span>
                    <span className="project-category">{project.category}</span>
                    <ArrowUpRight className="project-arrow" size={20} />
                  </div>
                  <div className="project-card-content">
                    <div className="project-title-block">
                      <h3>{project.title}</h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                      <p className="project-description">{project.description}</p>
                    </div>
                    <div className="project-metrics">
                      {project.metrics.map((metric) => (
                        <div className="project-metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
                      ))}
                    </div>
                  </div>
                  <div className="project-card-foot">
                    <div className="tag-row">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                    <span className="case-study-label">Case study <ArrowUpRight size={15} /></span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section toolkit-section" id="toolkit">
          <div className="container toolkit-layout">
            <div className="toolkit-intro">
              <p className="section-kicker">04 — Toolkit</p>
              <h2>Les bons outils,<br /><em>au bon moment.</em></h2>
              <p>Une expertise solide sur l’écosystème Angular, enrichie par une culture produit, qualité et delivery.</p>
              <div className="toolkit-orbit" aria-hidden="true"><span>NG</span><span>TS</span><span>RX</span><span>CI</span></div>
            </div>
            <div className="tool-groups">
              {toolGroups.map((group) => (
                <div className="tool-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <div className="tool-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div>
              <p className="section-kicker">05 — Contact</p>
              <h2>Un projet ambitieux ?<br /><em>Construisons-le bien.</em></h2>
              <p className="contact-lead">Vous cherchez une experte Angular pour structurer un produit, accélérer une migration ou faire grandir une équipe ? Parlons de ce que vous préparez.</p>
            </div>
            <div className="contact-actions">
              <a className="contact-email" href="mailto:mahasghaier@gmail.com">mahasghaier@gmail.com <ArrowUpRight size={22} /></a>
              <div className="contact-links">
                <a href="tel:+21697069828"><Phone size={15} /> +216 97 069 828</a>
                <a href="https://linkedin.com/in/maha-sghaier" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ExternalLink size={13} /></a>
              </div>
            </div>
          </div>
          <div className="contact-doodle" aria-hidden="true">LET&apos;S<br /><span>BUILD</span></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Maha Sghaier</span>
          <span>Designed & built with intention</span>
          <a href="#top">Retour en haut <ChevronDown size={14} className="rotate-180" /></a>
        </div>
      </footer>
    </div>
  );
}
