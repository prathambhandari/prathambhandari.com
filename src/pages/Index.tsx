import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Courses from "../components/Courses";
import Contact from "../components/Contact";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-gray-900"
          : "bg-gradient-to-br from-emerald-50 via-white to-teal-50"
      }`}
    >
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={toggleTheme}
          className="rounded-full shadow-lg backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 hover:scale-110 transition-all duration-300 mt-14 sm:mt-0"
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-yellow-500" />
          ) : (
            <Moon className="h-5 w-5 text-emerald-600" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex items-center space-x-6 px-8 py-3 rounded-full backdrop-blur-md bg-white/80 dark:bg-gray-800/80 shadow-lg border border-gray-200 dark:border-gray-700">
          <a
            href="#about"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#courses"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Courses
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="courses">
          <Courses />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; 2024 Portfolio. By Pratham ❤️</p>
      </footer>
    </div>
  );
};

export default Index;
