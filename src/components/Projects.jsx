import { memo } from "react";

const projects = [
  {
    id: 1,
    title: "Github Finder",
    description: "Site where you can Find github accounts via names",
    image: "https://i.ibb.co/bFQ5mqK/work3.jpg",
    tech: ["React", "Javascript"],
    liveUrl: "https://githubusernamefind.netlify.app/",
    githubUrl: "https://github.com/prathambhandari/Github_finder",
  },
  {
    id: 2,
    title: "Wood Run",
    description:
      "Endless Runner mobile game created in 2019 Using Unity.It was up until 2022 on Play Store.",
    image: "https://i.ibb.co/mbwzbDW/work2.png",
    tech: ["Unity", "C#", "Unity Assets"],
    // liveUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 3,
    title: "Productivity Dashboard",
    description: "A productivity dashboard web app to track tasks and time.",
    image:
      "https://i.ibb.co/xKns4mzg/B8-F6-D7-DB-7-D7-A-42-A8-A414-311-F4-E68803-B.png",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://prathambhandari.github.io/productivity-dashboard/",
    githubUrl: "https://github.com/prathambhandari/productivity-dashboard",
  },
  {
    id: 4,
    title: "Kanban Board",
    description: "A simple kanban board application to manage tasks.",
    image:
      "https://i.ibb.co/wDPPrLX/B97014-EE-5598-4662-A515-84-E6107-E13-DA.png",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://prathambhandari.github.io/kanban/",
    githubUrl: "https://github.com/prathambhandari/kanban",
  },
  {
    id: 5,
    title: "Image-Editor",
    description: "Brief description of this project.",
    image:
      "https://i.ibb.co/S4zMFgxc/07-F65964-5-C48-4-B17-ABB6-9-EBBB8511-AA2.png",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://prathambhandari.github.io/Image-Editor/",
    githubUrl: "https://github.com/prathambhandari/Image-Editor",
  },
  {
    id: 6,
    title: "Cohort Task Portfolio",
    description: "Html and CSS based portfolio projects.",
    image:
      "https://i.ibb.co/XxQ4TJ9h/1-A1-CB3-FB-0313-437-C-9385-EBEA17-D22-E32.png",
    tech: ["HTML", "CSS"],
    liveUrl: "https://prathambhandari.github.io/Cohort-Task-Portfolio/",
    githubUrl: "https://github.com/prathambhandari/Cohort-Task-Portfolio",
  },
];

const ProjectCard = memo(({ project }) => {
  return (
    <div className="group rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-200 will-change-transform flex flex-col md:flex-row w-full">
      <div className="w-full md:w-80 lg:w-96 2xl:w-[28rem] h-48 md:h-44 lg:h-52 2xl:h-60 flex-shrink-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-5 2xl:p-6 flex flex-col justify-center">
        <h3 className="text-lg md:text-xl 2xl:text-2xl font-medium mb-2 text-black">
          {project.title}
        </h3>
        <p className="text-neutral-700 text-sm md:text-base 2xl:text-lg mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.map((t) => (
            <span key={t} className="text-xs text-black   py-0.5 rounded">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 text-xs md:text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 text-xl font-bold hover:text-black hover:scale-105 transition-colors"
            >
              Live ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 text-xl font-bold hover:text-black hover:scale-105 transition-colors"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

const Projects = memo(() => {
  return (
    <div className="px-6 py-12 md:p-12 xl:p-16 2xl:p-20 flex flex-col items-center lg:items-start w-full max-w-4xl 2xl:max-w-5xl">
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-medium mb-8 2xl:mb-12"></h2>

      <div className="w-full flex flex-col gap-4 2xl:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
});

Projects.displayName = "Projects";

export default Projects;
