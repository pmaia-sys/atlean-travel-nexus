import { Button } from "@/components/ui/button";
import atleanLogo from "@/assets/atlean-logo.png";
import { Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img 
            src={atleanLogo} 
            alt="Atlean.ai" 
            className="mb-12 h-16 md:h-20 w-auto"
          />
          
          <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            CRM Inteligente SPTravel
          </h1>
          
          <p className="mb-4 text-xl md:text-2xl text-muted-foreground max-w-3xl font-light">
            Solução Central Automatizada com IA
          </p>
          
          <p className="mb-12 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Unifique Gestão Comercial, Recursos Humanos e Marketing num único sistema inteligente que aprende, automatiza e otimiza o seu negócio.
          </p>
          
          <Button 
            variant="hero" 
            size="lg"
            asChild
            className="group"
          >
            <a 
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3HSP65l0LPWUWR6dfKHW5PJicWuFcBt-uJIjno2ayrs6VhQdDgSRHXMMbqZTVFPlRIto5NvNML?es=1&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="group-hover:scale-110 transition-transform" />
              Agendar Reunião
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
