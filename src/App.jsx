const profile = {
  name: "Pratham Bhandari",
  shortName: "P. BHANDARI",
  avatarUrl: "https://avatars.githubusercontent.com/u/62651866?v=4&s=256",
  location: "Mangalore, India",
  email: "contact@prathambhandari.com",
  education: "BCA · Manipal University Jaipur · 2025–present",
  intro:
    "I am Pratham Bhandari , a full-stack web developer based in Mangalore, India. I build websites and web apps, freelance for startups, and care about products that feel good to use.",
  bio: "Within freelance work and full-time roles I have been mastering the craft of full-stack development, UI implementation, and shipping real products. Outside of code you'll find me exploring new places, listening to music, or on the field playing football.",
};

const experience = [
  {
    role: "Freelance Web Developer",
    org: "Self-employed",
    period: "Present",
  },
  {
    role: "Junior Support Engineer",
    org: "UnifyCX",
    period: "Mar 2025 — Jul 2025",
  },
  {
    role: "Technical Assistant & Program Manager",
    org: "MicroDegree · Mangalore",
    period: "Apr 2022 — Sep 2023",
  },
];

const connectLinks = [
  { label: "GitHub", href: "https://github.com/prathambhandari" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prathambhandari",
  },
];

/** Products: { label, href, description? } — optional blurb below the link chip. */
const products = [
  {
    label: "My Simple Resume",
    href: "https://www.mysimpleresume.com/",
    description: "A website where you can create a CV very quickly.",
  },
];

const certificates = [
  {
    id: "complete-web-developer-udemy",
    title: "Complete Web Developer",
    issuer: "Udemy",
    issued: "Jun 2023",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-d71a8b84-1663-432f-bd03-414501b921c1/",
  },
  {
    id: "diploma-basic-programming-keonics",
    title: "Diploma in Basic Programming",
    issuer: "Keonics — India",
    issued: "Apr 2020",
    skills: "C (Programming Language)",
  },
  {
    id: "java-microdegree",
    title: "Java",
    issuer: "MicroDegree",
    issued: "May 2023",
    credentialId: "JAC-142",
    skills: "Java",
  },
];

const techStack = [
  "JavaScript",
  "React",
  "Tailwind CSS",
  "HTML / CSS",
  "Git",
  "Node.js",
  "Express",
  "MongoDB",
  "AWS",
  "Supabase",
  "Vercel",
];

const projects = [
  {
    title: "Victor Grossman Memorial",
    description:
      "Memorial website for Victor Grossman, long-standing US activist based in Berlin.",
    preview: "/previews/victor-grossman.webp",
    previewWidth: 1024,
    previewHeight: 532,
    liveUrl: "https://victorgrossman.com/",
  },
  {
    title: "Devify Labs",
    description:
      "Devify Labs is a full-service digital studio building websites, web apps, and mobile applications for startups.",
    preview: "/previews/devify-labs.webp",
    previewWidth: 1024,
    previewHeight: 555,
    liveUrl: "https://www.devifylabs.com/",
  },
  {
    title: "Github Finder",
    description: "Site where you can find github accounts via names.",
    preview: "/previews/github-finder.webp",
    previewWidth: 900,
    previewHeight: 435,
    liveUrl: "https://githubusernamefind.netlify.app/",
    codeUrl: "https://github.com/prathambhandari/Github_finder",
  },
  {
    title: "Wood Run",
    description:
      "Endless runner mobile game created in 2019 using Unity.",
    preview: "/previews/wood-run.webp",
    previewWidth: 800,
    previewHeight: 548,
    liveUrl: "https://prathambhandari.github.io/wood-run/",
    hideActions: true,
  },
  {
    title: "Q-Sales",
    description:
      "UI/UX design created for e-commerce startup Qsales · Adobe XD · UI · UX",
    preview: "/previews/q-sales.webp",
    previewWidth: 1024,
    previewHeight: 574,
    hideActions: true,
  },
];

const pad = (n) => String(n).padStart(2, "0");

function App() {
  return (
    <div className="shell">
      <div className="grid-lines" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <header className="topbar">
        <a className="topbar__logo" href="#top">
          {profile.shortName}
        </a>
        <span className="topbar__status">
          <span className="dot" aria-hidden="true" />
          Available for work
        </span>
        <nav className="topbar__nav" aria-label="Primary">
          <a href="#cases">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__portrait">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              width={160}
              height={160}
              decoding="async"
              fetchPriority="high"
            />
            <span className="hero__portrait-dot" aria-hidden="true" />
          </div>

          <p className="hero__bio">{profile.bio}</p>

          <h1 className="hero__headline">
            <span>Want to work</span>
            <span>
              with me
              <a
                className="hero__arrow"
                href="#contact"
                aria-label="Jump to contact"
              >
                ↑
              </a>
            </span>
          </h1>

          <div className="hero__footer">
            <span className="tag tag--accent">Full-Stack Web Developer</span>
            <span className="tag">{profile.location}</span>
            <span className="tag">{profile.education}</span>
          </div>
        </section>

        <section className="block" id="cases">
          <header className="block__head">
            <h2 className="block__title">
              Selected <em>Cases</em>
            </h2>
            <span className="block__count">[ {pad(projects.length)} ]</span>
          </header>

          <ul className="cases">
            {projects.map((project, i) => {
              const CaseTag = project.liveUrl ? "a" : "div";
              const linkProps = project.liveUrl
                ? {
                    href: project.liveUrl,
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": `${project.title} — open live site`,
                  }
                : {};
              return (
              <li key={project.title} className="case">
                <CaseTag className="case__main" {...linkProps}>
                  <span className="case__index">{pad(i + 1)}</span>
                  <span className="case__title">{project.title}</span>
                  <span className="case__thumb">
                    <img
                      src={project.preview}
                      alt=""
                      width={project.previewWidth}
                      height={project.previewHeight}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                </CaseTag>
                <div className="case__meta">
                  <p className="case__desc">{project.description}</p>
                  <div className="case__links">
                    {!project.hideActions ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-link"
                      >
                        Live ↗
                      </a>
                    ) : null}
                    {project.codeUrl ? (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-link"
                      >
                        Code ↗
                      </a>
                    ) : null}
                  </div>
                </div>
              </li>
              );
            })}
          </ul>
        </section>

        <section className="block" id="experience">
          <header className="block__head">
            <h2 className="block__title">
              Where I&apos;ve <em>Worked</em>
            </h2>
            <span className="block__count">[ {pad(experience.length)} ]</span>
          </header>

          <ol className="ladder">
            {experience.map((job, i) => (
              <li key={`${job.org}-${job.period}`} className="rung">
                <span className="rung__index">{pad(i + 1)}</span>
                <span className="rung__role">{job.role}</span>
                <span className="rung__org">{job.org}</span>
                <span className="rung__period">{job.period}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="block split" id="more">
          <div className="split__col">
            <header className="block__head">
              <h2 className="block__title block__title--sm">Certificates</h2>
              <span className="block__count">[ {pad(certificates.length)} ]</span>
            </header>
            <div className="certs">
              {certificates.map((c) => (
                <article key={c.id} className="cert">
                  <h3 className="cert__title">{c.title}</h3>
                  <p className="cert__meta">
                    {c.issuer} · {c.issued}
                  </p>
                  {c.credentialId ? (
                    <p className="cert__id">ID — {c.credentialId}</p>
                  ) : null}
                  {c.skills ? <p className="cert__skills">{c.skills}</p> : null}
                  {c.credentialUrl ? (
                    <a
                      href={c.credentialUrl}
                      className="text-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show credential ↗
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <div className="split__col">
            <header className="block__head">
              <h2 className="block__title block__title--sm">Products</h2>
              <span className="block__count">[ {pad(products.length)} ]</span>
            </header>
            <div className="products">
              {products.map((item) => (
                <article key={item.label} className="product">
                  <a
                    href={item.href}
                    className="product__name"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label} ↗
                  </a>
                  {item.description ? (
                    <p className="product__desc">{item.description}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="marquee-wrap" aria-label="Tech stack">
          <div className="marquee">
            {[0, 1].map((dup) => (
              <ul className="marquee__track" key={dup} aria-hidden={dup === 1}>
                {techStack.map((tech) => (
                  <li key={`${dup}-${tech}`}>
                    {tech}
                    <span className="marquee__sep">/</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <footer className="contact" id="contact">
          <a
            className="contact__headline"
            href="https://calendar.app.google/TeoL36YWahFhGFGs5"
            target="_blank"
            rel="noreferrer"
          >
            Start a project
            <span className="contact__arrow">↑</span>
          </a>

          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>

          <div className="contact__grid">
            <div className="contact__col">
              <span className="contact__label">Get in touch</span>
              <div className="contact__links">
                {connectLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label} ↗
                  </a>
                ))}
              </div>
            </div>
            <div className="contact__col contact__col--end">
              <span className="contact__label">Based in</span>
              <p className="contact__place">{profile.location}</p>
              <p className="contact__copy">
                © {new Date().getFullYear()} {profile.name}
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
