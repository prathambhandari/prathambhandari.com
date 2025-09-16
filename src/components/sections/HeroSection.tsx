import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Download,
  ArrowDown,
  MapPin,
  Coffee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/developer-profile.jpg";
export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const scrollToNext = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Developer workspace"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-background/85 dark:bg-background/90"></div>
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 w-full px-4 sm:px-6 transition-all duration-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-2 lg:gap-2 items-center min-h-[calc(100vh-8rem)] py-6 lg:py-12  sm:px-8 lg:px-12">
            {/* Profile Image Section - First on mobile, second on desktop */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Professional developer profile"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 p-2 lg:p-3 bg-primary text-primary-foreground rounded-xl lg:rounded-2xl shadow-lg animate-bounce">
                  <Coffee className="w-3 h-3 lg:w-6 lg:h-6" />
                </div>
                <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 p-2 lg:p-3 bg-accent text-accent-foreground rounded-xl lg:rounded-2xl shadow-lg">
                  <MapPin className="w-3 h-3 lg:w-6 lg:h-6" />
                </div>
              </div>
            </div>

            {/* About Me Content - Second on mobile, first on desktop */}
            <div className="text-center lg:text-left order-2 lg:order-1 px-2 lg:px-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 lg:mb-6 leading-tight">
                <span className="text-muted-foreground text-sm sm:text-base lg:text-2xl block mb-1 lg:mb-2">
                  Hello, I'm
                </span>
                <span className="text-gradient">Pratham Bhandari</span>
                <br />
                <span className="text-foreground text-base sm:text-lg md:text-xl lg:text-4xl">
                  Full Stack Developer
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-xl text-muted-foreground mb-4 lg:mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Hey there! I’m a developer from Mangalore, India who loves
                bringing ideas to life through code. I mostly work with web
                development. Outside of coding, you’ll often find me exploring
                new places, listening to music, or out on the field playing
                football. I’m all about building things that feel good to use
                and are fun to create.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 lg:gap-4 mb-4 lg:mb-8 justify-center lg:justify-start">
                <Button
                  size="sm"
                  className="text-sm lg:text-lg px-4 lg:px-8 py-2 lg:py-6 bg-primary hover:bg-primary-hover text-primary-foreground w-full sm:w-auto"
                  onClick={() => scrollToNext()}
                >
                  View My Skills
                  <ArrowDown className="ml-2 w-3 h-3 lg:w-5 lg:h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="text-sm lg:text-lg px-4 lg:px-8 py-2 lg:py-6 w-full sm:w-auto"
                >
                  Download Resume
                  <Download className="ml-2 w-3 h-3 lg:w-5 lg:h-5" />
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-2 lg:gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/prathambhandari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 lg:p-3 rounded-xl bg-card hover:bg-card-hover transition-all duration-150 hover:scale-105 will-change-transform"
                >
                  <Github className="w-4 h-4 lg:w-6 lg:h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prathambhandari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 lg:p-3 rounded-xl bg-card hover:bg-card-hover transition-all duration-150 hover:scale-105 will-change-transform"
                >
                  <Linkedin className="w-4 h-4 lg:w-6 lg:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
};
