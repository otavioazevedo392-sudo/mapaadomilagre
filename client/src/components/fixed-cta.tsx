import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

export function FixedCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsVisible(heroBottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPurchase = () => {
    const offerSection = document.getElementById("offer-section");
    offerSection?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/95 backdrop-blur-md border-t shadow-lg md:hidden">
      <Button 
        size="lg"
        onClick={scrollToPurchase}
        className="w-full bg-accent-gold hover-elevate active-elevate-2 text-accent-gold-foreground font-bold text-sm shadow-lg px-3"
        data-testid="button-fixed-cta"
      >
        <BookOpen className="w-4 h-4 mr-1.5 flex-shrink-0" />
        <span className="leading-tight">QUERO O MEU MAPA DA BÍBLIA!</span>
      </Button>
    </div>
  );
}
