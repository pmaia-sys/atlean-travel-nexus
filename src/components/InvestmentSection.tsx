import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const InvestmentSection = () => {
  const included = [
    "CRM Central SPTravel Hub (€60.000)",
    "Módulo SPTravel Human - RH 360º",
    "Módulo SPTravel Board - Marketing & Vendas",
    "Integração Automática de Dados",
    "Chatbots Multicanal (€10.000)",
    "Leitura de Faturas OCR (€2.500)",
    "Suporte técnico e formação incluídos",
    "Atualizações e manutenção do primeiro ano",
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Investimento Total
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Solução completa e integrada para transformar a sua gestão empresarial
            </p>
          </div>

          <Card className="border-2 border-primary/30 shadow-[var(--shadow-glow)] bg-card/80 backdrop-blur">
            <CardHeader className="text-center pb-8">
              <div className="mb-4">
                <p className="text-muted-foreground text-lg mb-2">Investimento Único</p>
                <CardTitle className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  €72.500
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-secondary/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Solução Inclui:</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
                <p className="text-center text-muted-foreground">
                  <span className="font-semibold text-foreground">Nota:</span> Solução escalável preparada para crescer com o seu negócio. ROI estimado em 12-18 meses através de automação e otimização de processos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
