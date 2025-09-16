import { ExternalLink, Github, Code, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LazyImage } from "@/components/LazyImage";

const projects = [
  {
    title: "Wood Run",
    description: "Endless Runner mobile game created in 2019 Using Unity.",
    image: "https://i.ibb.co/mbwzbDW/work2.png",
    technologies: ["Unity", "C#", "Unity Assets"],
    github: "https://github.com",
    live: "https://demo.com",
    featured: false,
    status: "",
  },
  {
    title: "Q-Sales",
    description: "UI/UX Design created for E-commerce startup Qsales",
    image: "https://i.ibb.co/B3XKVPC/work5.jpg",
    technologies: ["Adobe XD", "UI", "UX"],
    github: "https://github.com",
    live: "https://demo.com",
    featured: false,
    status: "",
  },
  {
    title: "Github Finder",
    description: "Site where you can Find github accounts via names",
    image: "https://i.ibb.co/bFQ5mqK/work3.jpg",
    technologies: ["JavaScript", "React", "Bootstrap"],
    github: "https://github.com",
    live: "https://demo.com",
    featured: false,
    status: "",
  },
];

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "bg-green-500";
      case "Beta":
        return "bg-yellow-500";
      case "Development":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card
      className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm h-full"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <LazyImage
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Status Badge */}
        {/* <div className="absolute top-3 right-3">
          <div
            className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(
              project.status
            )}`}
          >
            {project.status}
          </div>
        </div> */}

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
              <Star className="w-3 h-3 fill-current" />
              Featured
            </div>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        {/* Project Title */}
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 lg:py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Ubuntu-style Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border mb-4 lg:mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm font-mono text-muted-foreground ml-2">
              ~/projects
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4">
            Recent work with modern technologies
          </p>
        </div>

        {/* Mobile-first Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-full">
          {projects.map((project, index) => (
            <div key={index} className="md:col-span-1">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Ubuntu-style Terminal Button */}
        <div className="text-center mt-8 lg:mt-10">
          <Button
            variant="outline"
            size="default"
            asChild
            className="font-mono text-sm w-full sm:w-auto"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className="w-4 h-4 mr-2" />$ git clone --all-projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
