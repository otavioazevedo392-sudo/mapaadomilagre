import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Heart } from "lucide-react";
import videoFile from "@assets/VSL-PRONTA_1760556470610-D3tlH_rc_1761254874631.mp4";

export function HeroSection() {
  const scrollToPurchase = () => {
    const offerSection = document.getElementById("offer-section");
    offerSection?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const premiumButton = document.querySelector('[data-testid="button-purchase-premium"]') as HTMLElement;
      premiumButton?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 500);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent-gold/5 via-background to-primary/5 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-4">
            <Badge 
              variant="secondary" 
              className="text-sm md:text-base gap-2 bg-accent-gold text-accent-gold-foreground border border-accent-gold-border shadow-md"
              data-testid="badge-social-proof"
            >
              <Users className="w-4 h-4" />
              +1.000 Católicos Já Transformaram Sua Maneira de Ler a Bíblia
            </Badge>
          </div>

          <h1 
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] max-w-5xl text-foreground px-2"
            data-testid="text-hero-title"
          >
            Entenda os <span className="text-accent-gold">73 Livros da Bíblia</span> de Forma Clara, Visual e Inspiradora
          </h1>

          <p 
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed px-2 font-medium"
            data-testid="text-hero-subtitle"
          >
            Um método simples e poderoso que faz você compreender a Palavra de Deus como nunca antes — <span className="text-foreground font-semibold">e nunca mais dizer "não entendo a Bíblia"</span>
          </p>

          <div className="w-full max-w-md px-4 mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-accent-gold/40 ring-4 ring-accent-gold/10 aspect-[9/16]">
              <video 
                src={`${videoFile}#t=1.004`}
                controls
                className="w-full h-full object-contain"
                data-testid="video-hero"
                preload="auto"
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <Button 
              size="lg"
              onClick={scrollToPurchase}
              className="bg-accent-gold text-accent-gold-foreground font-bold shadow-2xl w-full sm:w-auto"
              data-testid="button-cta-hero"
            >
              <BookOpen className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="leading-tight text-center">QUERO MEU MAPA DA BÍBLIA AGORA!</span>
            </Button>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Heart className="w-4 h-4 text-accent-gold fill-accent-gold" />
              Acesso imediato após a compra
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 max-w-[60vw] sm:max-w-[400px] aspect-square w-full bg-accent-gold/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 max-w-[60vw] sm:max-w-[400px] aspect-square w-full bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[70vw] sm:max-w-[500px] aspect-square w-full bg-accent-gold/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
