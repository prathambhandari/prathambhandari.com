import { useState } from "react";

const profile = {
  name: "Pratham Bhandari",
  avatarUrl: "/portrait.webp",
  location: "Mangalore, India",
  email: "contact@prathambhandari.com",
  education: "BCA · Manipal University Jaipur · 2025–present",
  intro:
    "I am Pratham Bhandari , a full-stack web developer based in Mangalore, India. I build websites and web apps, freelance for startups, and care about products that feel good to use.",
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
    period: "Mar 2025 to Jul 2025",
  },
  {
    role: "Technical Assistant & Program Manager",
    org: "MicroDegree · Mangalore",
    period: "Apr 2022 to Sep 2023",
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

const courses = [
  {
    title: "Git and GitHub: Collaboration and Version Control Unveiled",
    platform: "Udemy",
    href: "https://www.udemy.com/course/git-and-github-collaboration-and-version-control-unveiled/",
    description:
      "A comprehensive Udemy course I teach on Git and GitHub, covering version control fundamentals, branching, merging, rebasing, and real-world collaboration workflows.",
    rating: 4.5,
    ratingCount: 60,
    students: 7145,
    preview: "/previews/udemy-git-github.png",
    previewWidth: 480,
    previewHeight: 270,
    previewAlt: "Git and GitHub Udemy course",
  },
];

const formatCount = (n) => n.toLocaleString("en-US");

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
    issuer: "Keonics, India",
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
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Express", slug: "express" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "HTML / CSS", slug: "html5" },
  { name: "Git", slug: "git" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "SQL", slug: "postgresql" },
  { name: "Docker", slug: "docker" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "Jenkins", slug: "jenkins" },
  { name: "GitLab", slug: "gitlab" },
  { name: "Ansible", slug: "ansible" },
  { name: "Linux", slug: "linux" },
  { name: "AWS", slug: "amazonwebservices" },
  { name: "Supabase", slug: "supabase" },
  { name: "Vercel", slug: "vercel" },
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

const PROJECTS_PER_PAGE = 2;

function App() {
  const [projectPage, setProjectPage] = useState(0);
  const projectPageCount = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const visibleProjects = projects.slice(
    projectPage * PROJECTS_PER_PAGE,
    projectPage * PROJECTS_PER_PAGE + PROJECTS_PER_PAGE,
  );

  const showPrevProjects = () => {
    setProjectPage((page) => Math.max(0, page - 1));
  };

  const showNextProjects = () => {
    setProjectPage((page) => Math.min(projectPageCount - 1, page + 1));
  };

  return (
    <div className="shell">
      <div className="grid-lines" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="page">
      <header className="topbar">
        <a className="topbar__logo" href="#top">
          {profile.name}
        </a>
        <nav className="topbar__nav" aria-label="Primary">
          <a href="#cases">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__content">
            <p className="hero__intro">{profile.intro}</p>

            <div className="hero__portrait">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                width={600}
                height={800}
                decoding="async"
                fetchPriority="high"
            />
          </div>
          </div>

          <div className="hero__footer">
            <span className="tag tag--accent">Full-Stack Web Developer</span>
            <span className="tag">{profile.location}</span>
            <span className="tag">{profile.education}</span>
          </div>
        </section>

        <section className="block skills" id="skills" aria-label="Skills">
          <span className="skills__label">Skills</span>
          <ul className="skills-grid">
            {techStack.map((tech) => (
              <li key={tech.name} className="skills-grid__item">
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${tech.slug}.svg`}
                  alt=""
                  className="skills-grid__icon"
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                />
                <span className="skills-grid__name">{tech.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="block" id="cases">
          <header className="block__head">
            <h2 className="block__title">Projects</h2>
            <div className="block__actions">
              <span className="block__count">
                [ {pad(projects.length)} · {pad(projectPage + 1)} /{" "}
                {pad(projectPageCount)} ]
              </span>
              <div className="case-nav">
                <button
                  type="button"
                  className="case-nav__btn"
                  onClick={showPrevProjects}
                  disabled={projectPage === 0}
                  aria-label="Previous projects"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="case-nav__btn"
                  onClick={showNextProjects}
                  disabled={projectPage >= projectPageCount - 1}
                  aria-label="Next projects"
                >
                  →
                </button>
              </div>
            </div>
          </header>

          <ul className="cases">
            {visibleProjects.map((project, i) => {
              const projectIndex = projectPage * PROJECTS_PER_PAGE + i;
              const CaseTag = project.liveUrl ? "a" : "div";
              const linkProps = project.liveUrl
                ? {
                    href: project.liveUrl,
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": `${project.title}, open live site`,
                  }
                : {};
              return (
              <li key={project.title} className="case">
                <CaseTag className="case__main" {...linkProps}>
                  <span className="case__index">{pad(projectIndex + 1)}</span>
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

        <section className="block" id="courses">
          <header className="block__head">
            <h2 className="block__title">Course</h2>
            <span className="block__count">[ {pad(courses.length)} ]</span>
          </header>

          <ul className="courses">
            {courses.map((course, i) => (
              <li key={course.title} className="course">
                <a
                  className="course__main"
                  href={course.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${course.title}, open on ${course.platform}`}
                >
                  <span className="course__index">{pad(i + 1)}</span>
                  <div className="course__body">
                    <span className="course__platform">{course.platform}</span>
                    <span className="course__title">{course.title}</span>
                    <div className="course__stats">
                      <span className="course__stat course__stat--rating">
                        <span className="course__stat-value">{course.rating} ★</span>
                        <span className="course__stat-label">Rating</span>
                      </span>
                      <span className="course__stat course__stat--students">
                        <span className="course__stat-value">
                          {formatCount(course.students)}
                        </span>
                        <span className="course__stat-label">Students</span>
                      </span>
                      <span className="course__stat course__stat--reviews">
                        <span className="course__stat-value">
                          {formatCount(course.ratingCount)}
                        </span>
                        <span className="course__stat-label">Reviews</span>
                      </span>
                    </div>
                  </div>
                  <span className="course__thumb">
                    <img
                      src={course.preview}
                      alt={course.previewAlt}
                      width={course.previewWidth}
                      height={course.previewHeight}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                </a>
                <div className="course__meta">
                  <p className="course__desc">{course.description}</p>
                  <a
                    href={course.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    View course ↗
                  </a>
                </div>
              </li>
            ))}
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
                    <p className="cert__id">ID: {c.credentialId}</p>
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
    </div>
  );
}

export default App;
