import { useState, useEffect } from "react";
import { Home, User, Code, Briefcase, GraduationCap, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

interface DockItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  action?: () => void;
}

export const UbuntuDock = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const dockItems: DockItem[] = [
    {
      id: "home",
      icon: Home,
      label: "Home",
      action: () => scrollToSection("home")
    },
    {
      id: "skills",
      icon: Code,
      label: "Skills",
      action: () => scrollToSection("skills")
    },
    {
      id: "projects",
      icon: Briefcase,
      label: "Projects",
      action: () => scrollToSection("projects")
    },
    {
      id: "course",
      icon: GraduationCap,
      label: "Course",
      action: () => scrollToSection("course")
    },
    {
      id: "contact",
      icon: Mail,
      label: "Contact",
      action: () => scrollToSection("contact")
    },
    {
      id: "theme",
      icon: theme === 'dark' ? Sun : Moon,
      label: "Toggle Theme",
      action: toggleTheme
    }
  ];

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'course', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="dock-container">
      <nav className="dock">
        {dockItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id || (item.id === "theme" && false);
          
          return (
            <div
              key={item.id}
              className={`dock-item group relative ${isActive ? 'active' : ''}`}
              onClick={item.action}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  item.action?.();
                }
              }}
            >
              <IconComponent className="w-6 h-6" />
              
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                <div className="bg-foreground text-background text-xs px-3 py-2 rounded-md whitespace-nowrap">
                  {item.label}
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-foreground"></div>
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
};