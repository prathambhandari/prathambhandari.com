import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Wood Run",
      description: "Endless Runner mobile game created in 2019 Using Unity",
      image: "https://i.ibb.co/mbwzbDW/work2.png",
      tech: ["Unity", "C#", "Unity Assets"],
      liveUrl: "#",
    },
    {
      title: "Q-Sales",
      description: "UI/UX Design created for E-commerce startup Qsales",
      image: "https://i.ibb.co/B3XKVPC/work5.jpg",
      tech: ["Adobe XD", "UI", "UX"],
      liveUrl: "#",
    },
    {
      title: "Github Finder",
      description: "Site where you can Find github accounts via names",
      image: "https://i.ibb.co/bFQ5mqK/work3.jpg",
      tech: ["JavaScript", "React", "Bootstrap"],
      liveUrl: "#",
    },
  ];

  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mt-20 font-bold text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A showcase of my latest work and creative solutions
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                Live Demo
              </Button> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
