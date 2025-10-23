import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { testimonials } from "@shared/schema";
import { Star, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { useState } from "react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerView = 1;

  const next = () => {
    setCurrentIndex((prev) => 
      prev + testimonialsPerView >= testimonials.length ? 0 : prev + testimonialsPerView
    );
  };

  const prev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - testimonialsPerView) : prev - testimonialsPerView
    );
  };

  const scrollToPurchase = () => {
    const offerSection = document.getElementById("offer-section");
    offerSection?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const premiumButton = document.querySelector('[data-testid="button-purchase-premium"]') as HTMLElement;
      premiumButton?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 500);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerView);

  return (
    <section className="py-12 md:py-20 bg-background" data-testid="section-testimonials">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4 mb-12 px-2">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground" data-testid="text-testimonials-title">
            O que estão dizendo sobre o Mapa da Bíblia
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Milhares de fiéis já transformaram seu estudo da Palavra. Veja o que dizem:
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="grid gap-6">
            {visibleTestimonials.map((testimonial) => (
              <Card 
                key={testimonial.id} 
                className="p-6 md:p-8 shadow-md hover-elevate transition-all duration-300"
                data-testid={`card-testimonial-${testimonial.id}`}
              >
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />
                  ))}
                </div>
                <blockquote className="text-base md:text-lg italic text-card-foreground text-center mb-4">
                  "{testimonial.text}"
                </blockquote>
                <p className="text-sm font-semibold text-center text-muted-foreground">
                  — {testimonial.name}
                </p>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              disabled={currentIndex === 0}
              className="hover-elevate active-elevate-2"
              data-testid="button-testimonials-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              disabled={currentIndex + testimonialsPerView >= testimonials.length}
              className="hover-elevate active-elevate-2"
              data-testid="button-testimonials-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-accent-gold w-8" : "bg-muted"
                }`}
                data-testid={`button-testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={scrollToPurchase}
            className="bg-accent-gold hover-elevate active-elevate-2 text-accent-gold-foreground font-semibold text-sm md:text-base w-full sm:w-auto px-4 md:px-6 whitespace-normal"
            data-testid="button-cta-testimonials"
          >
            <BookOpen className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 flex-shrink-0" />
            <span className="leading-tight text-center">QUERO FAZER PARTE DESSA TRANSFORMAÇÃO!</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
