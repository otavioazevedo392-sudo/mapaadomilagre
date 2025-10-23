import { Card } from "@/components/ui/card";
import { CalendarDays, BookHeart, Printer } from "lucide-react";

const bonuses = [
  {
    id: "1",
    icon: CalendarDays,
    title: "Plano de Leitura da Bíblia",
    description: "Estudo guiado capítulo a capítulo, ideal para quem quer manter constância espiritual.",
  },
  {
    id: "2",
    icon: BookHeart,
    title: "Diário da Oração (Lectio Divina)",
    description: "Planner de oração para aprofundar a leitura e meditação das Escrituras.",
  },
  {
    id: "3",
    icon: Printer,
    title: "Versão Imprimível",
    description: "Arquivos em alta qualidade para você imprimir e encadernar, se quiser.",
  },
];

export function BonusSection() {
  return (
    <section className="py-12 md:py-20 bg-card" data-testid="section-bonus">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-card-foreground" data-testid="text-bonus-title">
            Receba também estes presentes para fortalecer sua fé
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {bonuses.map((bonus) => {
            const Icon = bonus.icon;
            return (
              <Card 
                key={bonus.id}
                className="p-6 md:p-8 text-center hover-elevate transition-all duration-300 bg-background shadow-md"
                data-testid={`card-bonus-${bonus.id}`}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-gold/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-accent-gold" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-card-foreground">
                  {bonus.title}
                </h3>
                <p className="text-muted-foreground">
                  {bonus.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
