import { Code, Server, Smartphone, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Tailwind CSS"
  },
  {
    icon: Server,
    title: "Backend Development", 
    description: "Node.js, Python, PostgreSQL, MongoDB"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Flutter, Progressive Web Apps"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization, SEO, Accessibility, Testing"
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience building 
            web applications that solve real-world problems. I love turning complex 
            requirements into elegant, user-friendly solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Starting my journey as a curious problem-solver, I've evolved from writing 
              my first "Hello World" to architecting scalable applications that serve 
              thousands of users. Every project teaches me something new, and I'm 
              always excited about the next challenge.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with the 
              developer community. I believe in continuous learning and staying 
              updated with the latest industry trends.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="portfolio-card text-center group">
                <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <highlight.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="portfolio-card">
            <h4 className="text-3xl font-bold text-primary mb-2">50+</h4>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="portfolio-card">
            <h4 className="text-3xl font-bold text-primary mb-2">5+</h4>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="portfolio-card">
            <h4 className="text-3xl font-bold text-primary mb-2">20+</h4>
            <p className="text-muted-foreground">Technologies</p>
          </div>
          <div className="portfolio-card">
            <h4 className="text-3xl font-bold text-primary mb-2">100%</h4>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};