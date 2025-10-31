import { Button } from "@/components/ui/button";
import { BookOpen, Heart } from "lucide-react";

export function FinalCTASection() {
  const scrollToPurchase = () => {
    const offerSection = document.getElementById("offer-section");
    offerSection?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const premiumButton = document.querySelector('[data-testid="button-purchase-premium"]') as HTMLElement;
      premiumButton?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 500);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent-gold/10 to-primary/10" data-testid="section-final-cta">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <Heart className="w-16 h-16 text-accent-gold fill-accent-gold/20" />
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground" data-testid="text-final-cta-title">
            Nunca Mais Diga <br className="hidden sm:block" />
            <span className="text-accent-gold">"Não Consigo Entender a Bíblia"</span>
          </h2>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-card-foreground leading-relaxed">
              A Palavra de Deus foi escrita para ser compreendida por todos — inclusive por você.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Com o Mapa da Bíblia, cada leitura se torna uma experiência viva de fé e entendimento.
            </p>

            <p className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed">
              Garanta agora o seu e redescubra a alegria de caminhar com Deus!
            </p>
          </div>

          <Button 
            size="lg"
            onClick={scrollToPurchase}
            className="bg-accent-gold text-accent-gold-foreground font-bold shadow-2xl text-base md:text-lg px-8 py-6 w-full sm:w-auto mt-8"
            data-testid="button-cta-final"
          >
            <BookOpen className="w-5 h-5 mr-2 flex-shrink-0" />
            <span className="leading-tight text-center">QUERO MEU MAPA DA BÍBLIA AGORA</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
