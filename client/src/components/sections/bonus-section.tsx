import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, BookHeart, Printer, Gift } from "lucide-react";

const bonuses = [
  {
    id: "1",
    icon: CalendarDays,
    title: "As Promessas Mais Poderosas da Bíblia",
    description: "Separadas por tema para você encontrar rapidamente a palavra certa para cada momento.",
  },
  {
    id: "2",
    icon: BookHeart,
    title: "Palavras Que Renovam a Esperança",
    description: "Nos momentos difíceis, encontre conforto e força nas promessas de Deus.",
  },
  {
    id: "3",
    icon: Printer,
    title: "Versículos Que Fortalecem a Fé",
    description: "Palavras que trazem paz ao coração e renovam sua confiança em Deus.",
  },
];

export function BonusSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent-gold/5 via-card to-accent-gold/5" data-testid="section-bonus">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 px-2">
          <Badge 
            className="bg-accent-gold text-accent-gold-foreground text-sm font-semibold shadow-lg"
          >
            <Gift className="w-4 h-4 mr-1" />
            BÔNUS EXCLUSIVOS
          </Badge>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-card-foreground" data-testid="text-bonus-title">
            <span className="text-accent-gold">Guia das Promessas</span> <br className="hidden sm:block" />
            Um Presente Especial Para Você
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            E para que você aprofunde ainda mais sua fé, vamos liberar um desconto exclusivo para voce apos a compra o Guia das Promessas — um bônus especial que vai fortalecer sua confiança em Deus em cada área da sua vida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <Card 
                key={bonus.id}
                className="p-8 md:p-10 text-center transition-all duration-300 bg-background border-2 border-card-border group relative overflow-hidden"
                data-testid={`card-bonus-${bonus.id}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-accent-gold/10 transition-colors" />
                <Badge className="mb-4 bg-accent-gold/20 text-accent-gold-foreground border-0 font-bold">
                  BÔNUS {index + 1}
                </Badge>
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent-gold to-accent-gold/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <Icon className="w-10 h-10 text-accent-gold-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl mb-4 text-card-foreground relative z-10">
                  {bonus.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {bonus.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-xl md:text-2xl text-card-foreground font-semibold italic">
            "Quando você conhece as promessas que Deus fez a você, a fé se torna inabalável."
          </p>
        </div>
      </div>
    </section>
  );
}
