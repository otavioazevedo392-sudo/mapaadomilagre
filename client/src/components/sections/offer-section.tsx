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

  const includedBasic = [
    "Mapa da Bíblia completo",
    "3 bônus exclusivos",
    "Acesso vitalício",
    "Garantia total de 30 dias",
  ];

  const includedPremium = [
    "Mapa da Bíblia completo",
    "5 bônus exclusivos:",
    "⭐ BÔNUS 3: Guia dos Salmos Temáticos EXCLUSIVO",
    "⭐ BÔNUS 4: Caderno de Oração Digital EXCLUSIVO",
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

        <div className="flex items-center justify-center gap-2 mb-8">
          <Clock className="w-5 h-5 text-accent-gold" />
          <p className="text-sm font-semibold text-muted-foreground">
            Oferta expira em:
          </p>
        </div>

        <div className="flex justify-center gap-2 md:gap-4 mb-12" data-testid="countdown-timer">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 md:p-8 shadow-xl border-2 border-accent-gold/30">
            <div className="text-center mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
                <p className="text-xl md:text-2xl text-muted-foreground line-through" data-testid="text-old-price-basic">
                  R$ 69,90
                </p>
                <Badge variant="destructive" className="text-sm md:text-base px-2 md:px-3 py-1">
                  -81% OFF
                </Badge>
              </div>
              <div className="text-3xl md:text-5xl font-bold text-accent-gold mb-2" data-testid="text-new-price-basic">
                R$ 13,90
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
                {includedBasic.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-gold/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent-gold" />
                    </div>
                    <span className="text-card-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              size="lg"
              onClick={handlePurchase}
              className="w-full bg-accent-gold hover-elevate active-elevate-2 text-accent-gold-foreground font-bold text-sm md:text-base shadow-lg px-3 md:px-6 whitespace-normal"
              data-testid="button-purchase-basic"
            >
              <BookOpen className="w-5 h-5 mr-1.5 flex-shrink-0" />
              <span className="leading-tight text-center">QUERO ESTA OFERTA!</span>
            </Button>

            <div className="flex flex-col items-center justify-center gap-3 mt-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent-gold" />
                <span>Compra 100% segura</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-accent-gold" />
                <span>Reembolso garantido por 30 dias</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 md:p-8 shadow-2xl border-4 border-accent-gold relative">
            <Badge 
              className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-gold text-accent-gold-foreground font-bold text-sm px-4 py-1.5"
              data-testid="badge-most-chosen"
            >
              MAIS ESCOLHIDA
            </Badge>

            <div className="text-center mb-6 mt-2">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
                <p className="text-xl md:text-2xl text-muted-foreground line-through" data-testid="text-old-price-premium">
                  R$ 109,90
                </p>
                <Badge variant="destructive" className="text-sm md:text-base px-2 md:px-3 py-1">
                  -75% OFF
                </Badge>
              </div>
              <div className="text-3xl md:text-5xl font-bold text-accent-gold mb-2" data-testid="text-new-price-premium">
                R$ 27,90
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
                {includedPremium.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-gold/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent-gold" />
                    </div>
                    <span className="text-card-foreground text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              size="lg"
              onClick={handlePurchase}
              className="w-full bg-accent-gold hover-elevate active-elevate-2 text-accent-gold-foreground font-bold text-sm md:text-base shadow-lg px-3 md:px-6 whitespace-normal"
              data-testid="button-purchase-premium"
            >
              <BookOpen className="w-5 h-5 mr-1.5 flex-shrink-0" />
              <span className="leading-tight text-center">SIM! QUERO O MEU MAPA DA BÍBLIA AGORA!</span>
            </Button>

            <div className="flex flex-col items-center justify-center gap-3 mt-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent-gold" />
                <span>Compra 100% segura</span>
              </div>
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
