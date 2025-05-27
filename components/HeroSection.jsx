import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section 
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
        > 
        <div className="container max-w-4xl mx-auto text-center z-10"> 
          <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
             <span className="opacity-0 animate-fade-in">Hi, I'm</span>
             <span className="text-primary opacity-0 animate-fade-in-delay-1">
             {" "}
             Rumaisa
             </span>
             <span className="text-primary-foreground opacity-0 animate-fade-in-delay-2">
             {" "}
             Nazir
             </span>
             
          </h1>

<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            I am an aspiring full-stack web developer skilled in modern technologies
             for both frontend and backend development. I am passionate about building 
             efficient, scalable, and user-friendly web applications.
          
          </p>

          </div>
          
          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#projects" className="lunar-button">
            Browse My Work

            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />

        </div>
        </section>
    );
};
