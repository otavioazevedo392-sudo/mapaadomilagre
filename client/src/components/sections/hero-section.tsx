import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users } from "lucide-react";

export function HeroSection() {
  const scrollToPurchase = () => {
    const offerSection = document.getElementById("offer-section");
    offerSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent-gold/10 py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge 
            variant="secondary" 
            className="text-sm md:text-base px-4 py-2 gap-2 bg-accent-gold/20 text-accent-gold-foreground border-accent-gold/30"
            data-testid="badge-social-proof"
          >
            <Users className="w-4 h-4" />
            +1.000 católicos satisfeitos
          </Badge>

          <h1 
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-4xl text-foreground px-2"
            data-testid="text-hero-title"
          >
            Entenda os 73 livros da Bíblia de forma simples e transforme sua vida com a Palavra de Deus
          </h1>

          <div className="w-full max-w-3xl px-4">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border-2 border-accent-gold/30">
              <iframe 
                src="https://screenapp.io/app/v/VZDOJvS4It" 
                title="Mapa da Bíblia - Vídeo de Apresentação"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-testid="video-hero"
              />
            </div>
          </div>

          <p 
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed px-2"
            data-testid="text-hero-subtitle"
          >
            Um método visual e fácil, aprovado por milhares de católicos, para compreender a Bíblia sem complicação — e nunca mais dizer "não entendo a Palavra".
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:justify-center">
            <Button 
              size="lg"
              onClick={scrollToPurchase}
              className="bg-accent-gold hover-elevate active-elevate-2 text-accent-gold-foreground font-semibold text-sm md:text-lg shadow-lg w-full sm:w-auto px-4 md:px-6 whitespace-normal"
              data-testid="button-cta-hero"
            >
              <BookOpen className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 flex-shrink-0" />
              <span className="leading-tight text-center">QUERO O MEU MAPA DA BÍBLIA!</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
