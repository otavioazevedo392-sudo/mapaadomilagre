import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, DollarSign, Check, BookOpen, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export function OfferSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePurchase = () => {
    alert("Funcionalidade de pagamento será implementada em breve!");
  };

  const included = [
    "Mapa da Bíblia completo",
    "3 bônus exclusivos",
    "Acesso vitalício",
    "Garantia total de 30 dias",
  ];

  return (
    <section 
      id="offer-section"
      className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-accent-gold/5 to-background" 
      data-testid="section-offer"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4 mb-8 px-2">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground" data-testid="text-offer-title">
            Aproveite o desconto especial de hoje!
          </h2>
          <p className="text-base md:text-lg text-muted-foreground" data-testid="text-offer-date">
            Quinta-feira, 23 de Outubro de 2025
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <Card className="p-6 md:p-12 shadow-xl border-2 border-accent-gold/30">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-accent-gold" />
              <p className="text-sm font-semibold text-muted-foreground">
                Oferta expira em:
              </p>
            </div>

            <div className="flex justify-center gap-2 md:gap-4 mb-8" data-testid="countdown-timer">
              <div className="text-center">
                <div className="bg-accent-gold/10 border border-accent-gold/30 rounded-lg px-2 py-2 md:px-4 md:py-3 min-w-[60px] md:min-w-[80px]">
                  <div className="text-2xl md:text-4xl font-bold text-accent-gold">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">HORAS</div>
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-muted-foreground flex items-center">:</div>
              <div className="text-center">
                <div className="bg-accent-gold/10 border border-accent-gold/30 rounded-lg px-2 py-2 md:px-4 md:py-3 min-w-[60px] md:min-w-[80px]">
                  <div className="text-2xl md:text-4xl font-bold text-accent-gold">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">MINUTOS</div>
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-muted-foreground flex items-center">:</div>
              <div className="text-center">
                <div className="bg-accent-gold/10 border border-accent-gold/30 rounded-lg px-2 py-2 md:px-4 md:py-3 min-w-[60px] md:min-w-[80px]">
                  <div className="text-2xl md:text-4xl font-bold text-accent-gold">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">SEGUNDOS</div>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
                <p className="text-xl md:text-3xl text-muted-foreground line-through" data-testid="text-old-price">
                  R$ 97,00
                </p>
                <Badge variant="destructive" className="text-sm md:text-base px-2 md:px-3 py-1">
                  -62% OFF
                </Badge>
              </div>
              <div className="text-4xl md:text-6xl font-bold text-accent-gold mb-2" data-testid="text-new-price">
                R$ 37,00
              </div>
              <p className="text-sm md:text-base text-muted-foreground">
                pagamento único
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <p className="font-semibold text-card-foreground text-center mb-4">
                Inclui:
              </p>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-gold/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent-gold" />
                    </div>
                    <span className="text-card-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              size="lg"
              onClick={handlePurchase}
              className="w-full bg-accent-gold hover-elevate active-elevate-2 text-accent-gold-foreground font-bold text-sm md:text-lg shadow-lg px-3 md:px-6"
              data-testid="button-purchase"
            >
              <BookOpen className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 flex-shrink-0" />
              <span className="leading-tight">SIM! QUERO O MEU MAPA DA BÍBLIA AGORA!</span>
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent-gold" />
                <span>Compra 100% segura</span>
              </div>
              <div className="hidden sm:block">|</div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-accent-gold" />
                <span>Reembolso garantido por 30 dias</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
