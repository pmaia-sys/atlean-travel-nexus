import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary via-accent to-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para Transformar a sua Gestão?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-95">
            Agende uma reunião e descubra como a Atlean.ai pode revolucionar os seus processos de negócio com inteligência artificial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="secondary" 
              size="lg"
              asChild
              className="group w-full sm:w-auto"
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

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contacto@atlean.ai</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Resposta em 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
