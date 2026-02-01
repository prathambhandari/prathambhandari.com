import React from "react";
import Window from "./window";

const width = "55vw";
const height = "73vh";

const skills = {
  Frontend: [
    { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "Sass", icon: "https://skillicons.dev/icons?i=sass" },
    { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Redux", icon: "https://skillicons.dev/icons?i=redux" },
  ],
  Backend: [
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
  ],
  Other: [
    { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
    { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
    { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
    { name: "npm", icon: "https://skillicons.dev/icons?i=npm" },
    { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
    { name: "Netlify", icon: "https://skillicons.dev/icons?i=netlify" },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
  ],
};

const Skills = ({ windowState, setwindowState, windowName }) => {
  return (
    <Window
      windowName={windowName}
      windowState={windowState}
      setwindowState={setwindowState}
      width={width}
      height={height}
    >
      <div className="h-full p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Skills</h1>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-6">
            <h2 className="text-lg text-gray-400 mb-3">{category}</h2>
            <div className="flex flex-wrap gap-4">
              {items.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3 rounded-lg flex flex-col items-center justify-center gap-2"
                  title={skill.name}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10"
                  />
                  <span className="text-sm text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
};

export default Skills;
