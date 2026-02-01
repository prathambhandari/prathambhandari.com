import React from "react";
import Window from "./window";
import { RiArrowRightUpLine } from "@remixicon/react";

const width = "55vw";
const height = "73vh";

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

const Project = ({ windowState, setwindowState, windowName }) => {
  return (
    <Window
      windowState={windowState}
      setwindowState={setwindowState}
      windowName={windowName}
      width={width}
      height={height}
    >
      <div className="p-10">
        {projects.map((project) => {
          return (
            <div className="card  flex flex-col md:flex-col lg:flex-row justify-around gap-10  rounded-3xl p-4 mb-6 hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer">
              <img
                className="h-60 w-100 rounded-3xl"
                src={project.image}
                alt={project.title}
              />
              <div className="flex justify-around flex-col py-4 w-100">
                <h1 className="text-3xl">{project.title}</h1>
                <p>{project.description}</p>
                <div className="flex gap-3  font-semibold text-cyan-300">
                  {project.tech.map((elem) => {
                    return <span>{elem}</span>;
                  })}
                </div>
                <div className="flex gap-5  text-2xl">
                  <div className="flex items-center gap-1 hover:scale-110 transition-transform duration-150 ease-in-out font-semibold text-green-300">
                    <a href={project.liveUrl}>Live </a>
                    <RiArrowRightUpLine />
                  </div>
                  <div className="flex items-center gap-1 hover:scale-110 transition-transform duration-150 ease-in-out font-semibold ">
                    <a href={project.githubUrl}> Github</a>{" "}
                    <RiArrowRightUpLine />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Window>
  );
};

export default Project;
