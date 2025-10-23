import { Card } from "@/components/ui/card";
import { Book, MapIcon, Clock, NotebookPen } from "lucide-react";

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
    <section className="py-12 md:py-20 bg-background" data-testid="section-features">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4 mb-12 px-2">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground" data-testid="text-features-title">
            O Que Você Vai Encontrar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.id}
                className="p-6 md:p-8 hover-elevate transition-all duration-300 bg-gradient-to-r from-accent-gold/5 to-transparent"
                data-testid={`card-feature-${feature.id}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-gold/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-accent-gold">
                        {feature.number}
                      </span>
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-card-foreground">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 ml-16">
                  {feature.items.map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-accent-gold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
