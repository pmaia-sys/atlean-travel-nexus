import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Link2, MessageSquare, FileText } from "lucide-react";

const ModulesSection = () => {
  const modules = [
    {
      icon: Users,
      title: "SPTravel Human",
      subtitle: "Módulo de Recursos Humanos",
      description: "Plataforma de gestão 360º com IA de desempenho e recomendação.",
      features: [
        "Avaliação de performance e acompanhamento de metas",
        "Versão colaborador (ponto, objetivos, feedback, autoavaliação)",
        "Versão administrador (dashboards e alertas automáticos)",
        "Assistente IA de produtividade com sugestões diárias",
      ],
    },
    {
      icon: Target,
      title: "SPTravel Board",
      subtitle: "Marketing e Vendas",
      description: "CRM de marketing e vendas com IA preditiva integrada.",
      features: [
        "Análise de comportamento e segmentação de clientes",
        "Criação automática de campanhas personalizadas",
        "Integração com redes sociais, email e WhatsApp",
        "Ligação direta com OptiTravel e SIGAV",
      ],
    },
    {
      icon: Link2,
      title: "Integração Automática",
      subtitle: "Sincronização Inteligente",
      description: "IA que acede, recolhe e organiza dados automaticamente.",
      features: [
        "Login automático em plataformas (OptiTravel, SIGAV)",
        "Recolha e validação automática de ficheiros de vendas",
        "Reconhecimento de padrões e correção de erros",
        "Relatórios automáticos por email",
      ],
    },
    {
      icon: MessageSquare,
      title: "Chatbots Multicanal",
      subtitle: "Atendimento Automatizado",
      description: "Sistema de atendimento com IA conversacional empática.",
      features: [
        "Chatbot no site e área de cliente",
        "Linha telefónica com IA",
        "Integração completa com CRM SPTravel",
        "Consultor virtual 24/7",
      ],
      value: "10 000 €",
    },
    {
      icon: FileText,
      title: "Leitura de Faturas",
      subtitle: "OCR Inteligente",
      description: "Módulo OCR com IA para processamento automático de faturas.",
      features: [
        "Leitura de faturas nacionais e internacionais",
        "Extração de dados (NIF, valor, IVA, fornecedor)",
        "Integração direta no CRM",
        "Simplificação da gestão financeira",
      ],
      value: "2 500 €",
    },
  ];

  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Módulos Integrados
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada módulo trabalha em conjunto para criar um ecossistema inteligente e totalmente automatizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-medium)] bg-card/50 backdrop-blur group"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-[var(--shadow-soft)] group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{module.title}</CardTitle>
                  <CardDescription className="text-sm font-semibold text-primary">
                    {module.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{module.description}</p>
                  <ul className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {module.value && (
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">Valor do módulo:</p>
                      <p className="text-xl font-bold text-primary">{module.value}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
