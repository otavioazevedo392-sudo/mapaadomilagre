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
    setTimeout(() => {
      const premiumButton = document.querySelector('[data-testid="button-purchase-premium"]') as HTMLElement;
      premiumButton?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 500);
  };

  return (
    <section className="py-12 md:py-20 bg-background" data-testid="section-included">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4 mb-12 px-2">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground" data-testid="text-included-title">
            Você receberá acesso imediato a mais de 250 páginas exclusivas!
          </h2>
        </div>

        <div className="mb-8 max-w-3xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-xl border-2 border-accent-gold/20">
            <img 
              src="https://i.ibb.co/fzDJ1kBw/Design-sem-nome-2.png" 
              alt="Mapa da Bíblia - Conteúdo Exclusivo" 
              className="w-full h-auto object-cover"
              data-testid="img-included-product"
            />
          </div>
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
            className="bg-accent-gold hover-elevate active-elevate-2 text-accent-gold-foreground font-semibold text-sm md:text-lg w-full sm:w-auto px-4 md:px-6 whitespace-normal"
            data-testid="button-cta-included"
          >
            <BookOpen className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 flex-shrink-0" />
            <span className="leading-tight text-center">GARANTIR MEU ACESSO AGORA!</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
