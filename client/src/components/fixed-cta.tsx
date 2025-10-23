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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-md border-t shadow-lg md:hidden">
      <Button 
        size="lg"
        onClick={scrollToPurchase}
        className="w-full bg-accent-gold hover-elevate active-elevate-2 text-accent-gold-foreground font-bold text-base shadow-lg"
        data-testid="button-fixed-cta"
      >
        <BookOpen className="w-5 h-5 mr-2" />
        QUERO O MEU MAPA DA BÍBLIA!
      </Button>
    </div>
  );
}
