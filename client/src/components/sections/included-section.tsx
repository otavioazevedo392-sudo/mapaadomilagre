import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Infinity, RefreshCw, BookOpen } from "lucide-react";

const included = [
  {
    id: "1",
    icon: FileText,
    title: "Arquivos digitais em PDF",
    description: "Mais de 250 páginas de conteúdo exclusivo",
  },
  {
    id: "2",
    icon: Infinity,
    title: "Acesso vitalício à área de membros",
    description: "Sem mensalidades ou taxas recorrentes",
  },
  {
    id: "3",
    icon: RefreshCw,
    title: "Atualizações futuras inclusas",
    description: "Receba melhorias e novos conteúdos gratuitamente",
  },
];

export function IncludedSection() {
  const scrollToPurchase = () => {
    const offerSection = document.getElementById("offer-section");
    offerSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-20 bg-background" data-testid="section-included">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground" data-testid="text-included-title">
            Você receberá acesso imediato a mais de 250 páginas exclusivas!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {included.map((item) => {
            const Icon = item.icon;
            return (
              <Card 
                key={item.id}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-included-${item.id}`}
              >
                <Icon className="w-10 h-10 text-accent-gold mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={scrollToPurchase}
            className="bg-accent-gold hover-elevate active-elevate-2 text-accent-gold-foreground font-semibold text-lg"
            data-testid="button-cta-included"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            GARANTIR MEU ACESSO AGORA!
          </Button>
        </div>
      </div>
    </section>
  );
}
