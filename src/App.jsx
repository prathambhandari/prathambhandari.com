import { useState } from "react";

const profile = {
  name: "Pratham Bhandari",
  avatarUrl: "/portrait.webp",
  location: "Mangalore, India",
  education: "BCA · Manipal University Jaipur · 2025–present",
  intro:
    "I'm Pratham Bhandari, a full-stack engineer and educator based in Mangalore, India. I build web apps and products with React, Node, Next.js, and Svelte, including GenAI platforms like Arkclip. I've taught Git & GitHub to 7,000+ students on Udemy and currently train 120+ engineers in full-stack development.",
};

const experience = [
  {
    role: "Fullstack WebDev Trainer",
    org: "WinShriTech",
    period: "Aug 2026 to Present",
  },
  {
    role: "Freelance Web Developer",
    org: "Self-employed",
    period: "Jan 2019 to Present",
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

const courses = [
  {
    title: "Git and GitHub: Collaboration and Version Control Unveiled",
    platform: "Udemy",
    href: "https://www.udemy.com/course/git-and-github-collaboration-and-version-control-unveiled/",
    description:
      "A comprehensive Udemy course I teach on Git and GitHub, covering version control fundamentals, branching, merging, rebasing, and real-world collaboration workflows.",
    rating: 4.5,
    ratingCount: 61,
    students: 7145,
    preview: "/previews/udemy-git-github.png",
    previewWidth: 480,
    previewHeight: 270,
    previewAlt: "Git and GitHub Udemy course",
  },
];

const reviews = [
  {
    name: "Sudhakar",
    rating: 5,
    date: "2 years ago",
    href: `${courses[0].href}#reviews`,
    text: "Learning new things is enjoyable and easy to understand with his clear and uncomplicated teaching method.",
  },
  {
    name: "Gemechu",
    rating: 5,
    date: "2 years ago",
    href: `${courses[0].href}#reviews`,
    text: "For me this course is nice and I understand 100% because I have some basic knowledge. Now it is clear for me.",
  },
  {
    name: "Alejandro Serrano",
    rating: 5,
    date: "2 years ago",
    href: `${courses[0].href}#reviews`,
    text: "It is a good course for someone who wants to start with Git and GitHub, and if English is not your native language, it can help you practice English too.",
  },
];

const formatCount = (n) => n.toLocaleString("en-US");

const faqs = [
  {
    q: "Who is Pratham Bhandari?",
    a: "Pratham Bhandari is a full-stack web developer and educator based in Mangalore, Karnataka, India. He builds web apps and products with React, Next.js, Node.js, Svelte and Python FastAPI, and is the creator of Arkclip and My Simple Resume.",
  },
  {
    q: "What technologies does Pratham Bhandari work with?",
    a: "JavaScript, TypeScript, React, Next.js, Svelte, Node.js, Express, Python FastAPI, Tailwind CSS, MongoDB, Supabase, Qdrant, Docker, Linux and AWS.",
  },
  {
    q: "What products has Pratham Bhandari built?",
    a: "Arkclip (arkclip.com), an AI video clipping and transcription platform built with Next.js, Python FastAPI and AWS, and My Simple Resume (mysimpleresume.com), a fast resume builder built with Svelte.",
  },
  {
    q: "Does Pratham Bhandari teach full-stack web development?",
    a: "Yes. He has taught Git & GitHub to 7,000+ students on Udemy and currently trains 120+ students in full-stack web development as a trainer at WinShriTech.",
  },
  {
    q: "Is Pratham Bhandari available for freelance web development?",
    a: "He has worked as a freelance full-stack web developer since 2019 and can be contacted through LinkedIn or GitHub.",
  },
];

const products = [
  {
    title: "My Simple Resume",
    tagline: "Build clean, professional developer resumes in seconds",
    description:
      "A fast and intuitive resume builder crafted for engineers and creatives. Built with Svelte, focusing on instant real-time live preview, streamlined form workflows, and pixel-perfect export.",
    preview: "/previews/my-simple-resume.webp",
    previewWidth: 1024,
    previewHeight: 500,
    liveUrl: "https://www.mysimpleresume.com/",
    tags: ["Svelte", "Tailwind CSS", "PDF Export"],
  },
  {
    title: "Arkclip",
    tagline: "AI-powered video clipping and automated transcription platform",
    description:
      "A modern creator tool for video clipping, smart hook detection, and subtitle generation. Engineered with Next.js on the frontend, Python FastAPI backend, AWS cloud infrastructure, and AI pipelines.",
    preview: "/previews/arkclip.webp",
    previewWidth: 1024,
    previewHeight: 504,
    liveUrl: "https://arkclip.com/",
    tags: ["Next.js", "Python FastAPI", "AWS", "AI Video"],
  },
];

const trainingBatches = [
  {
    id: "batch-1",
    label: "CSE",
    image: "/previews/CSE.webp",
    width: 830,
    height: 554,
  },
  {
    id: "batch-2",
    label: "ISE",
    image: "/previews/ISE.webp",
    width: 828,
    height: 563,
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
  { name: "Qdrant", slug: "qdrant" },
  { name: "Docker", slug: "docker" },
  { name: "Linux", slug: "linux" },
  { name: "AWS", slug: "amazonwebservices" },
  { name: "Supabase", slug: "supabase" },
];

const projects = [
  {
    title: "RAG Application - Chat with PDF",
    description:
      "A GenAI RAG app that lets you chat with any PDF using Qdrant as a vector database for document retrieval.",
    preview: "/previews/chat-with-pdf.webp",
    previewWidth: 1024,
    previewHeight: 598,
    liveUrl: "https://chat-with-pdf-k1yg.onrender.com/",
  },
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
    description: "Endless runner mobile game created in 2019 using Unity.",
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
            <a href="#training">Training</a>
            <a href="#products">Products</a>
            <a href="#cases">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main id="top">
          <section className="hero">
            <h1 className="sr-only">
              Pratham Bhandari – Full-Stack Web Developer in Mangalore, India
            </h1>
            <div className="hero__content">
              <p className="hero__intro">{profile.intro}</p>

              <div className="hero__portrait">
                <img
                  src={profile.avatarUrl}
                  alt="Pratham Bhandari, full-stack web developer based in Mangalore, India"
                  width={600}
                  height={800}
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>

            <div className="hero__footer">
              <span className="tag tag--accent">Available for Hire &amp; Consulting</span>
              <span className="tag">Full-Stack Web Developer</span>
              <span className="tag">{profile.location}</span>
              <span className="tag">{profile.education}</span>
            </div>
          </section>

          <section className="block" id="training">
            <div className="training__intro">
              <p className="training__desc">
                Conducting Full-Stack Web Development training for over 120+
                students. Mentoring aspiring developers through live coding,
                real-world project architecture.
              </p>
            </div>

            <div className="training__gallery">
              {trainingBatches.map((batch) => (
                <div key={batch.id} className="training__card">
                  <div className="training__image-wrap">
                    <img
                      src={batch.image}
                      alt="Pratham Bhandari teaching a full-stack web development training class to engineering students"
                      width={batch.width}
                      height={batch.height}
                      loading="lazy"
                      decoding="async"
                      className="training__image"
                    />
                    <span className="training__badge">{batch.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="block skills" id="skills" aria-label="Skills">
            <span className="skills__label">Skills</span>
            <ul className="skills-grid">
              {techStack.map((tech) => (
                <li key={tech.name} className="skills-grid__item">
                  <img
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${tech.slug}.svg`}
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

          <section className="block" id="products">
            <header className="block__head">
              <h2 className="block__title">Products</h2>
              <span className="block__count">[ {pad(products.length)} ]</span>
            </header>

            <div className="product-showcase">
              {products.map((item, i) => (
                <article key={item.title} className="product-card">
                  <div className="product-card__media">
                    {item.liveUrl ? (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${item.title}, open live app`}
                        className="product-card__img-link"
                      >
                        <img
                          src={item.preview}
                          alt={`${item.title} – ${item.tagline}. Built by Pratham Bhandari`}
                          width={item.previewWidth}
                          height={item.previewHeight}
                          loading="lazy"
                          decoding="async"
                          className="product-card__img"
                        />
                      </a>
                    ) : (
                      <div className="product-card__img-link">
                        <img
                          src={item.preview}
                          alt={item.title}
                          width={item.previewWidth}
                          height={item.previewHeight}
                          loading="lazy"
                          decoding="async"
                          className="product-card__img"
                        />
                      </div>
                    )}
                  </div>
                  <div className="product-card__content">
                    <div className="product-card__header">
                      <span className="product-card__index">{pad(i + 1)}</span>
                      <h3 className="product-card__title">
                        {item.liveUrl ? (
                          <a
                            href={item.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="product-card__title-link"
                          >
                            {item.title} ↗
                          </a>
                        ) : (
                          item.title
                        )}
                      </h3>
                    </div>
                    <p className="product-card__tagline">{item.tagline}</p>
                    <p className="product-card__desc">{item.description}</p>
                    <div className="product-card__footer">
                      <div className="product-card__tags">
                        {item.tags.map((tag) => (
                          <span key={tag} className="product-card__tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {item.liveUrl ? (
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-link"
                        >
                          Visit site ↗
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
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
                      <span className="case__index">
                        {pad(projectIndex + 1)}
                      </span>
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
                      <span className="course__platform">
                        {course.platform}
                      </span>
                      <span className="course__title">{course.title}</span>
                      <div className="course__stats">
                        <span className="course__stat course__stat--rating">
                          <span className="course__stat-value">
                            {course.rating} ★
                          </span>
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


          <section className="block" id="reviews">
            <header className="block__head">
              <h2 className="block__title">Reviews</h2>
              <span className="block__count">[ {pad(reviews.length)} ]</span>
            </header>

            <div className="reviews">
              {reviews.map((review) => (
                <a
                  key={review.name}
                  className="review"
                  href={review.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${review.name}'s review on Udemy`}
                >
                  <div className="review__head">
                    <span className="review__avatar" aria-hidden="true">
                      {review.name.charAt(0)}
                    </span>
                    <div>
                      <h3 className="review__name">{review.name}</h3>
                      <div className="review__meta">
                        <span
                          className="review__stars"
                          aria-label={`${review.rating} out of 5 stars`}
                        >
                          {"★".repeat(review.rating)}
                        </span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="review__text">{review.text}</p>
                  <span className="review__link">View on course ↗</span>
                </a>
              ))}
            </div>
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

          <section className="block" id="more">
            <header className="block__head">
              <h2 className="block__title block__title--sm">Certificates</h2>
              <span className="block__count">
                [ {pad(certificates.length)} ]
              </span>
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
          </section>

          <section className="block" id="faq">
            <header className="block__head">
              <h2 className="block__title">FAQ</h2>
              <span className="block__count">[ {pad(faqs.length)} ]</span>
            </header>
            <dl className="faq">
              {faqs.map((item) => (
                <div key={item.q} className="faq__item">
                  <dt className="faq__q">{item.q}</dt>
                  <dd className="faq__a">{item.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <footer className="contact" id="contact">
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
