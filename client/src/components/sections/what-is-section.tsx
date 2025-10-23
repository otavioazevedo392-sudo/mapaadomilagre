import { Button } from "@/components/ui/button";
import { BookOpen, Heart } from "lucide-react";

export function WhatIsSection() {
  const scrollToPurchase = () => {
    const offerSection = document.getElementById("offer-section");
    offerSection?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const premiumButton = document.querySelector('[data-testid="button-purchase-premium"]') as HTMLElement;
      premiumButton?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 500);
  };

  return (
    <section className="py-12 md:py-20 bg-card" data-testid="section-what-is">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-card-foreground px-2 text-center" data-testid="text-what-is-title">
            De Gênesis a Apocalipse — Entenda toda a Bíblia de forma clara e visual
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg border border-card-border">
              <img 
                src="https://i.ibb.co/twZMq5J1/Design-sem-nome-2.png" 
                alt="Mapa da Bíblia - Material de Estudo" 
                className="w-full h-full object-cover"
                data-testid="img-what-is-product"
              />
            </div>
            
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p data-testid="text-what-is-description">
              O <span className="font-semibold text-card-foreground">Mapa da Bíblia</span> é um guia visual completo, criado conforme a tradição católica e baseado na Bíblia Ave Maria.
            </p>
            
            <p>
              Ele reúne resumos, mapas e símbolos dos <span className="font-semibold text-card-foreground">73 livros</span>, para que você compreenda com facilidade a riqueza dos ensinamentos de cada parte da Sagrada Escritura.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6 my-8">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-accent-gold" />
                <p className="font-semibold text-lg text-card-foreground">
                  Benefício emocional:
                </p>
              </div>
              <p className="text-card-foreground">
                Estude com confiança, aprofunde sua fé e sinta a presença viva da Palavra em cada leitura.
              </p>
            </div>
          </div>
        </div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={scrollToPurchase}
              className="bg-accent-gold hover-elevate active-elevate-2 text-accent-gold-foreground font-semibold text-sm md:text-lg w-full sm:w-auto px-4 md:px-6 whitespace-normal"
              data-testid="button-cta-what-is"
            >
              <BookOpen className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 flex-shrink-0" />
              <span className="leading-tight text-center">QUERO O MEU AGORA!</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
