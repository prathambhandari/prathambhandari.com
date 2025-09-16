import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CourseSection } from "@/components/sections/CourseSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { UbuntuDock } from "@/components/UbuntuDock";

const Index = () => {
  return (
    <div className="relative w-full">
      {/* Main Content */}
      <main className="relative w-full pb-24">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <CourseSection />
        <ContactSection />
      </main>

      {/* Left-side Ubuntu Dock Navigation */}
      <UbuntuDock />
    </div>
  );
};

export default Index;
