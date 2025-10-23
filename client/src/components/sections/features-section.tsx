import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, MapIcon, Clock, NotebookPen, Sparkles } from "lucide-react";

const features = [
  {
    id: "1",
    icon: Book,
    number: "1",
    title: "Mapa dos 73 Livros",
    items: [
      "Resumo do livro",
      "Temas centrais e simbologias",
      "Principais personagens",
      "Linha do tempo e eventos",
      "Versículos-chave",
    ],
  },
  {
    id: "2",
    icon: MapIcon,
    number: "2",
    title: "Panorama da Bíblia",
    items: [
      "Antigo e Novo Testamento",
      "Gêneros literários",
      "Tabela Periódica da Bíblia",
      "Conexões entre os livros",
    ],
  },
  {
    id: "3",
    icon: Clock,
    number: "3",
    title: "Eventos Cronológicos",
    items: [
      "Linha do tempo da história da salvação",
      "Contexto histórico e conexões",
      "Entendimento progressivo da fé",
    ],
  },
  {
    id: "4",
    icon: NotebookPen,
    number: "4",
    title: "Registros da Fé",
    items: [
      "Espaço para anotações",
      "Reflexões pessoais",
      "Aplicação prática no dia a dia",
    ],
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-features">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 px-2">
          <Badge 
            className="bg-accent-gold/10 text-accent-gold-foreground border border-accent-gold/30 text-sm font-semibold"
          >
            <Sparkles className="w-4 h-4 mr-1" />
            CONTEÚDO COMPLETO
          </Badge>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground" data-testid="text-features-title">
            O Que Você Vai <span className="text-accent-gold">Encontrar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um guia completo e organizado para você dominar toda a Bíblia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.id}
                className="p-8 md:p-10 hover-elevate transition-all duration-300 border-2 border-card-border group"
                data-testid={`card-feature-${feature.id}`}
              >
                <div className="flex flex-col space-y-5">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-gold to-accent-gold/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-accent-gold-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-accent-gold/20 text-accent-gold-foreground border-0 font-bold">
                          {feature.number}
                        </Badge>
                      </div>
                      <h3 className="font-heading font-bold text-2xl md:text-2xl text-card-foreground">
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-3.5">
                    {feature.items.map((item, index) => (
                      <li 
                        key={index}
                        className="flex items-start gap-3 text-base text-muted-foreground"
                      >
                        <span className="text-accent-gold mt-0.5 font-bold text-lg">✓</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
