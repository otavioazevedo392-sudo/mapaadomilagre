import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, X, AlertCircle, BookOpen, Shield, DollarSign } from "lucide-react";

interface BackRedirectDialogProps {
  open: boolean;
  onClose: () => void;
}

export function BackRedirectDialog({ open, onClose }: BackRedirectDialogProps) {
  const included = [
    "Mapa da Bíblia completo",
    "3 bônus exclusivos",
    "Acesso vitalício",
    "Garantia total de 30 dias",
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-md md:max-w-lg max-h-[90vh] overflow-y-auto p-0"
        data-testid="dialog-back-redirect"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none z-10"
          data-testid="button-close-back-offer"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Fechar</span>
        </button>

        <div className="p-6 md:p-8 space-y-6">
          <DialogHeader className="space-y-4">
            <div className="flex justify-center">
              <Badge 
                variant="destructive" 
                className="animate-pulse"
                data-testid="badge-wait"
              >
                <AlertCircle className="w-4 h-4 mr-2" />
                ESPERE!
              </Badge>
            </div>
            
            <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-foreground">
              Antes de sair...
            </DialogTitle>
            
            <DialogDescription className="text-center text-base md:text-lg text-muted-foreground">
              Que tal uma <span className="font-bold text-accent-gold">oferta especial exclusiva</span> só para você?
            </DialogDescription>
          </DialogHeader>

          <Card className="p-6 shadow-xl border-4 border-accent-gold relative">
            <Badge 
              className="absolute -top-3 left-1/2 -translate-x-1/2 bg-destructive text-destructive-foreground font-bold"
              data-testid="badge-exclusive-offer"
            >
              OFERTA EXCLUSIVA
            </Badge>

            <h3 className="text-center font-bold text-xl md:text-2xl text-foreground mb-4 mt-2">
              Versão Essencial
            </h3>

            <div className="text-center mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
                <p className="text-lg md:text-xl text-muted-foreground line-through" data-testid="text-old-price-back">
                  R$ 69,90
                </p>
                <Badge variant="destructive">
                  -86% OFF
                </Badge>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2" data-testid="text-new-price-back">
                R$ 9,90
              </div>
              <p className="text-sm md:text-base text-muted-foreground">
                pagamento único
              </p>
              <p className="text-xs md:text-sm text-destructive font-semibold mt-2">
                Oferta válida apenas para os próximos visitantes
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <p className="font-semibold text-card-foreground text-center mb-4">
                Você ainda recebe:
              </p>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-center gap-3" data-testid={`list-item-benefit-${index}`}>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-gold/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent-gold" />
                    </div>
                    <span className="text-card-foreground text-sm" data-testid={`text-benefit-${index}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              size="lg"
              asChild
              className="w-full bg-accent-gold text-accent-gold-foreground font-bold shadow-2xl whitespace-normal mb-4"
              data-testid="button-accept-back-offer"
            >
              <a href="https://pay.kirvano.com/99102701-800e-466a-9605-68e104b0a600" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-5 h-5 mr-1.5 flex-shrink-0" />
                <span className="leading-tight text-center">SIM! Quero Aproveitar Esta Oferta</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="w-full text-muted-foreground"
              data-testid="button-decline-back-offer"
            >
              Não, obrigado. Prefiro sair.
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

          <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
            <AlertCircle className="w-3 h-3" />
            Esta é uma oferta única que não aparecerá novamente
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
