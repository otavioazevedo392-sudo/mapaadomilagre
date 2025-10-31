import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Heart, CheckCircle2, Sparkles } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-card" data-testid="section-what-is">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge 
              className="bg-accent-gold/10 text-accent-gold-foreground border border-accent-gold/30 text-sm font-semibold"
            >
              <Sparkles className="w-4 h-4 mr-1" />
              O QUE É
            </Badge>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-card-foreground px-2" data-testid="text-what-is-title">
              Já tentou entender a Bíblia e <br className="hidden sm:block" />
              <span className="text-accent-gold">sentiu que era difícil demais?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <p className="text-lg text-card-foreground leading-relaxed" data-testid="text-what-is-description">
                  Você começa a ler cheio de vontade... mas logo se perde.<br />
                  As palavras parecem complicadas.<br />
                  Os nomes são confusos.<br />
                  E a mensagem… parece distante.
                </p>
                
                <p className="text-base text-muted-foreground leading-relaxed">
                  Você quer se aproximar de Deus, mas quando abre a Bíblia tradicional, sente como se ela tivesse sido escrita para teólogos — não para pessoas comuns que só querem entender a Palavra.
                </p>

                <div className="bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 border-l-4 border-accent-gold rounded-lg p-6 mt-6">
                  <p className="text-card-foreground font-medium italic mb-4">
                    "Eu tento, mas não entendo…"<br />
                    "Parece que Deus fala com todo mundo, menos comigo."
                  </p>
                  <p className="text-card-foreground font-semibold">
                    Mas a verdade é que o problema nunca foi você.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    A forma como a Bíblia é apresentada — sem contexto, sem explicações visuais e com linguagem difícil — acaba afastando muita gente da fé.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary rounded-lg p-6 mt-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="w-6 h-6 text-accent-gold fill-accent-gold/20" />
                    <p className="font-bold text-lg text-card-foreground">
                      Por isso nasceu o Mapa da Bíblia
                    </p>
                  </div>
                  <p className="text-card-foreground font-medium">
                    Um método simples, visual e fiel à tradição católica, criado para ajudar você a compreender a Bíblia de maneira clara, prática e inspirada.
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  <p className="font-semibold text-card-foreground">Com o Mapa da Bíblia, até quem nunca conseguiu entender os textos vai finalmente:</p>
                  {[
                    "Enxergar o sentido de cada passagem",
                    "Compreender a história da salvação de forma cronológica e fácil",
                    "Sentir que a Palavra de Deus está falando diretamente com o coração"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                      <span className="text-card-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-accent-gold/20 transition-all duration-300">
                <img 
                  src="https://i.ibb.co/jZBN1Y4L/image.png" 
                  alt="Mapa da Bíblia - Material de Estudo" 
                  className="w-full h-full object-cover"
                  data-testid="img-what-is-product"
                />
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Button 
              size="lg"
              onClick={scrollToPurchase}
              className="bg-accent-gold text-accent-gold-foreground font-bold shadow-xl w-full sm:w-auto"
              data-testid="button-cta-what-is"
            >
              <BookOpen className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="leading-tight text-center">QUERO O MEU AGORA!</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
