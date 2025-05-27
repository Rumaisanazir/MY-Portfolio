import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
         <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
         {/* Theme Toggle */}
         <ThemeToggle />

         {/* Background Effects */}
         <StarBackground />

         {/* Navbar */}
         <Navbar />

         {/* Main Content */}
         <main className="container mx-auto max-w-7xl px-4">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection /> 
            <ContactSection />  
         </main>

         {/* Footer */}
         <Footer />

    </div>
    );
};
