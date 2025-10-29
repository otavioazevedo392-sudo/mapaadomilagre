import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Infinity, RefreshCw, BookOpen, Star } from "lucide-react";
import { trackLead } from "@/components/meta-pixel";

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
    trackLead("CTA Included Section");
    const offerSection = document.getElementById("offer-section");
    offerSection?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const premiumButton = document.querySelector('[data-testid="button-purchase-premium"]') as HTMLElement;
      premiumButton?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 500);
  };

  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-included">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 px-2">
          <Badge 
            className="bg-accent-gold/10 text-accent-gold-foreground border border-accent-gold/30 text-sm font-semibold"
          >
            <Star className="w-4 h-4 mr-1" />
            ACESSO COMPLETO
          </Badge>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground" data-testid="text-included-title">
            Você receberá <span className="text-accent-gold">acesso imediato</span> <br className="hidden sm:block" />
            a mais de 250 páginas exclusivas!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo o conteúdo disponível instantaneamente após a compra
          </p>
        </div>

        <div className="mb-12 max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-accent-gold/30 ring-4 ring-accent-gold/10 transition-all duration-300">
            <img 
              src="https://i.ibb.co/fzDJ1kBw/Design-sem-nome-2.png" 
              alt="Mapa da Bíblia - Conteúdo Exclusivo" 
              className="w-full h-auto object-cover"
              data-testid="img-included-product"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {included.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={item.id}
                className="p-8 transition-all duration-300 border-2 border-card-border group relative overflow-hidden"
                data-testid={`card-included-${item.id}`}
              >
                <div className="absolute top-0 left-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-2xl -ml-16 -mt-16 group-hover:bg-accent-gold/10 transition-colors" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-gold to-accent-gold/80 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-accent-gold-foreground" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={scrollToPurchase}
            className="bg-accent-gold text-accent-gold-foreground font-bold shadow-2xl w-full sm:w-auto"
            data-testid="button-cta-included"
          >
            <BookOpen className="w-5 h-5 mr-2 flex-shrink-0" />
            <span className="leading-tight text-center">GARANTIR MEU ACESSO AGORA!</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
