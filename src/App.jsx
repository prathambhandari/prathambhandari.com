const profile = {
  name: "Pratham Bhandari",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/62651866?v=4&s=256",
  location: "Mangalore, India",
  education: "BCA · Manipal University Jaipur (remote) · 2025–present",
  bio: "Hey there! I'm a developer from Mangalore, India who loves bringing ideas to life through code. I mostly work with web development. Outside of coding, you'll often find me exploring new places, listening to music, or out on the field playing football. I'm all about building things that feel good to use and are fun to create.",
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
    description:
      "A website where you can create a CV very quickly.",
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
    liveUrl: "https://victor-grossman-delta.vercel.app/",
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
    description:
      "Site where you can Find github accounts via names.",
    preview: "/previews/github-finder.webp",
    previewWidth: 900,
    previewHeight: 435,
    liveUrl: "https://githubusernamefind.netlify.app/",
    codeUrl: "https://github.com/prathambhandari/Github_finder",
  },
  {
    title: "Wood Run",
    description:
      "Endless Runner mobile game created in 2019 Using Unity. It was up until 2022 on Play Store.",
    preview: "/previews/wood-run.webp",
    previewWidth: 800,
    previewHeight: 548,
    liveUrl: "https://prathambhandari.github.io/wood-run/",
    hideActions: true,
  },
  {
    title: "Productivity Dashboard",
    description:
      "A productivity dashboard web app to track tasks and time.",
    preview: "/previews/productivity-dashboard.webp",
    previewWidth: 1200,
    previewHeight: 581,
    liveUrl: "https://prathambhandari.github.io/productivity-dashboard/",
    codeUrl: "https://github.com/prathambhandari/productivity-dashboard",
  },
];

function App() {
  return (
    <div className="portfolio-shell">
      <main className="layout-grid">
        <aside className="column left-column">
          <section className="card profile-card" id="about">
            <div className="profile-card__block profile-card__block--identity">
              <span className="chip">Web Developer</span>
              <img
                className="profile-avatar"
                src={profile.avatarUrl}
                alt=""
                width={160}
                height={160}
                decoding="async"
                fetchPriority="high"
              />
              <h1>{profile.name}</h1>
            </div>
            <div className="profile-card__block profile-card__block--details">
              <p className="meta">{profile.location}</p>
              <p className="education">{profile.education}</p>
            </div>
            <div className="profile-card__block profile-card__block--bio">
              <p className="profile-bio">{profile.bio}</p>
            </div>
            <div className="profile-card__block profile-card__block--experience">
              <div className="experience-stepper" aria-label="Work experience">
                <h2 className="experience-heading">Experience</h2>
                <ol className="stepper">
                  {experience.map((job) => (
                    <li
                      key={`${job.org}-${job.period}`}
                      className="stepper-step"
                    >
                      <div className="stepper-rail" aria-hidden="true">
                        <span className="stepper-dot" />
                      </div>
                      <div className="stepper-panel">
                        <p className="stepper-role">{job.role}</p>
                        <p className="stepper-org">{job.org}</p>
                        <p className="stepper-period">{job.period}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="profile-card__block profile-card__block--connect">
              <h2 className="experience-heading">Connect</h2>
              <div className="connect-grid">
                {connectLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="connect-chip"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </aside>

        <section className="column center-column" id="projects">
          <div className="project-feed">
            {projects.map((project) => (
              <article key={project.title} className="card project-card">
                <a
                  href={project.liveUrl}
                  className="project-preview"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} — open live site`}
                >
                  <img
                    src={project.preview}
                    alt=""
                    width={project.previewWidth}
                    height={project.previewHeight}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <div className="project-card-body">
                  <div className="project-head">
                    <h3>{project.title}</h3>
                    {!project.hideActions ? (
                      <div className="project-links">
                        <a
                          href={project.liveUrl}
                          className="btn btn-primary btn-compact"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live
                        </a>
                        {project.codeUrl ? (
                          <a
                            href={project.codeUrl}
                            className="btn btn-ghost btn-compact"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Code
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                  <p className="project-desc">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="column right-column">
          <section className="card compact-card certificates-card">
            <h2>Certificates</h2>
            <div className="certificates-list">
              {certificates.map((c) => (
                <article key={c.id} className="certificate-item">
                  <h3 className="certificate-title">{c.title}</h3>
                  <p className="certificate-meta">
                    {c.issuer} · {c.issued}
                  </p>
                  {c.credentialId ? (
                    <p className="certificate-credential-id">
                      Credential ID: {c.credentialId}
                    </p>
                  ) : null}
                  {c.skills ? (
                    <p className="certificate-skills">Skills: {c.skills}</p>
                  ) : null}
                  {c.credentialUrl ? (
                    <a
                      href={c.credentialUrl}
                      className="certificate-credential-link text-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show credential
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className="card compact-card products-card">
            <h2>Products</h2>
            {products.length > 0 ? (
              <div className="products-list">
                {products.map((item) => (
                  <div key={item.label} className="product-entry">
                    <a
                      href={item.href}
                      className="connect-chip"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.label}
                    </a>
                    {item.description ? (
                      <p className="product-entry-desc">{item.description}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </section>

          <section className="card compact-card tech-stack-card">
            <h2>Tech Stack</h2>
            <div className="tags">
              {techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}

export default App;
