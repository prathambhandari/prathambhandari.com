import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Flutter Development",
      skills: ["Flutter", "Dart", "Firebase", "State Management", "Provider"],
      color: "from-emerald-500 to-teal-500",
      size: "col-span-1 md:col-span-2",
      featured: true,
    },
    {
      title: "Mobile Technologies",
      skills: ["Flutter", "Android"],
      color: "from-teal-500 to-cyan-500",
      size: "col-span-1",
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "CI/CD"],
      color: "from-cyan-500 to-teal-500",
      size: "col-span-1",
    },
    {
      title: "Programming Languages",
      skills: ["Dart", "JavaScript", "TypeScript", "Java", "C"],
      color: "from-cyan-500 to-emerald-500",
      size: "col-span-1",
    },
    {
      title: "Web Development",
      skills: ["React", "Next.js", "Tailwind CSS", "Html", "Css"],
      color: "from-emerald-500 to-green-500",
      size: "col-span-1 md:col-span-2",
    },
    {
      title: "Backend & Database",
      skills: ["Firebase", "AWS", "MongoDB", "PostgreSQL"],
      color: "from-teal-500 to-emerald-500",
      size: "col-span-1",
    },
  ];

  return (
    <div className="py-16  px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl mt-20 font-bold text-gray-900 dark:text-white mb-3">
          Skills & Expertise
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Specialized in Flutter development with comprehensive mobile and web
          skills
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className={`${category.size} p-5 group transition-transform duration-300 transform hover:scale-[1.015] cursor-pointer relative overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 flex flex-col justify-between rounded-xl shadow-sm hover:shadow-2xl`}
          >
            {/* Gradient background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-[0.08] group-hover:opacity-[0.2] transition-opacity duration-300 blur-sm`}
            ></div>

            {/* Card Content */}
            <div className="relative z-10 flex flex-col gap-4 h-full">
              <div className="flex items-center justify-between">
                <h3
                  className={`text-base md:text-lg font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300 ${
                    category.featured ? "text-lg md:text-xl" : ""
                  }`}
                >
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
