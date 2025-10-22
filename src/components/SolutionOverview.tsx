import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, TrendingUp, Zap } from "lucide-react";

const SolutionOverview = () => {
  const features = [
    {
      icon: Database,
      title: "CRM Central Unificado",
      description: "SPTravel Hub reúne contabilidade, marketing e RH num painel único com análise inteligente de indicadores e padrões.",
    },
    {
      icon: TrendingUp,
      title: "IA Analítica Preditiva",
      description: "Identifica automaticamente padrões, sugere prioridades de acompanhamento e otimiza processos comerciais.",
    },
    {
      icon: Zap,
      title: "Automação Inteligente",
      description: "Integração automática de dados, campanhas personalizadas e assistente de produtividade 24/7.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Uma Plataforma, Infinitas Possibilidades
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme a gestão da sua empresa com inteligência artificial integrada em todos os processos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-medium)] bg-card/50 backdrop-blur"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-[var(--shadow-soft)]">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
