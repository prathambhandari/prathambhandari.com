import {
  Code2,
  Database,
  Server,
  Globe,
  Cpu,
  GitBranch,
  Cloud,
  Palette,
  Layers,
  Wrench,
  Settings,
  Code,
  Paintbrush,
  FileCode,
  Braces,
  Feather,
  Terminal,
  Squirrel,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FileCode, color: "#e34c26" },
      { name: "CSS", icon: Paintbrush, color: "#264de4" },
      { name: "Tailwind", icon: Palette, color: "#38bdf8" },
      { name: "Sass", icon: Feather, color: "#cc6699" },
      { name: "React", icon: Braces, color: "#61dafb" },
      { name: "Shadcn", icon: Palette, color: "#111827" },
      { name: "Next.js", icon: Globe, color: "#000000" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: Braces, color: "#f7df1e" },
      { name: "TypeScript", icon: Code2, color: "#3178c6" },
      { name: "Rust", icon: Squirrel, color: "#dea584" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Terminal, color: "#3c873a" },
      { name: "Axum", icon: Server, color: "#43b0f1" },
      { name: "MongoDB", icon: Database, color: "#47a248" },
      { name: "PostgreSQL", icon: Database, color: "#336791" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "AWS", icon: Cloud, color: "#ff9900" },
      { name: "Docker", icon: Layers, color: "#2496ed" },
      { name: "Git", icon: GitBranch, color: "#f34f29" },
      { name: "Kubernetes", icon: Settings, color: "#326ce5" },
      { name: "Jenkins", icon: Wrench, color: "#d24939" },
    ],
  },
];

interface SkillCardProps {
  skill: { name: string; icon: any; color: string };
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const Icon = skill.icon;

  return (
    <div
      className="flex items-center justify-center flex-col space-y-1.5 sm:space-y-2 p-2 sm:p-3 rounded-lg bg-card hover:bg-card-hover transition-all duration-150 cursor-pointer border border-border/50 hover:border-primary/30 group shadow-sm hover:shadow-md will-change-transform"
      style={{ animationDelay: `${index * 20}ms` }}
    >
      <div className="p-1.5 sm:p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors duration-150">
        <Icon
          className="w-4 h-4 sm:w-5 sm:h-5 group-hover:opacity-80 transition-colors duration-150"
          style={{ color: skill.color }}
        />
      </div>
      <span className="font-medium text-xs sm:text-sm text-foreground text-center">
        {skill.name}
      </span>
    </div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 lg:py-16 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        {/* Ubuntu-style Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-muted/50 border mb-4 lg:mb-6">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            <span className="text-xs sm:text-sm font-mono text-muted-foreground ml-2">
              ~/skills
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto px-4">
            Technologies and tools I use to build exceptional digital
            experiences
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-6 lg:space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-3 lg:space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-0">
                <h3 className="text-base sm:text-lg font-semibold text-foreground whitespace-nowrap">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-border"></div>
              </div>

              {/* Skills Grid - Responsive grid layout */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={categoryIndex * 4 + skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
