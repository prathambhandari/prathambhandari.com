import { memo } from "react";

const SkillIcon = memo(({ name }) => (
  <img
    src={`https://skillicons.dev/icons?i=${name}`}
    alt={name}
    loading="lazy"
    decoding="async"
    className="w-10 h-10 md:w-12 md:h-12 2xl:w-14 2xl:h-14 hover:scale-110 transition-transform duration-100 will-change-transform"
  />
));

SkillIcon.displayName = "SkillIcon";

const Skills = memo(() => {
  const frontend = ["html", "css", "js", "scss", "tailwind", "react", "redux"];
  const backend = ["nodejs", "express"];
  const other = ["github", "aws", "figma", "npm", "vercel", "netlify", "git"];

  return (
    <div className="px-6 pt-25 pb-6 sm:px-8 sm:py-8 md:p-12 xl:p-16 2xl:p-20 flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-2xl 2xl:max-w-3xl mx-auto lg:mx-0">
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-medium mb-8 2xl:mb-12 text-neutral-900">
        Skills
      </h2>

      {/* Frontend */}
      <div className="mb-8 2xl:mb-12 w-full flex flex-col items-center lg:items-start">
        <h3 className="text-neutral-500 text-sm md:text-base 2xl:text-lg mb-4">
          Frontend
        </h3>
        <div className="flex flex-wrap gap-3 2xl:gap-4 justify-center lg:justify-start">
          {frontend.map((skill) => (
            <SkillIcon key={skill} name={skill} />
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="mb-8 2xl:mb-12 w-full flex flex-col items-center lg:items-start">
        <h3 className="text-neutral-500 text-sm md:text-base 2xl:text-lg mb-4">
          Backend
        </h3>
        <div className="flex flex-wrap gap-3 2xl:gap-4 justify-center lg:justify-start">
          {backend.map((skill) => (
            <SkillIcon key={skill} name={skill} />
          ))}
        </div>
      </div>

      {/* Other */}
      <div className="w-full flex flex-col items-center lg:items-start">
        <h3 className="text-neutral-500 text-sm md:text-base 2xl:text-lg mb-4">
          Other
        </h3>
        <div className="flex flex-wrap gap-3 2xl:gap-4 justify-center lg:justify-start">
          {other.map((skill) => (
            <SkillIcon key={skill} name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
});

Skills.displayName = "Skills";

export default Skills;
