import { Card } from "@/components/ui/card";
import { testimonials } from "@shared/schema";
import { Star } from "lucide-react";

export function MoreTestimonialsSection() {
  const displayTestimonials = testimonials.slice(0, 6);

  return (
    <section className="py-12 md:py-20 bg-card" data-testid="section-more-testimonials">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4 mb-12 px-2">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-card-foreground">
            Mais de 1.000 católicos já transformaram seu estudo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTestimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="p-6 hover-elevate transition-all duration-300 bg-background"
              data-testid={`card-more-testimonial-${testimonial.id}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <blockquote className="text-sm md:text-base italic text-card-foreground mb-4">
                "{testimonial.text}"
              </blockquote>
              <p className="text-sm font-semibold text-muted-foreground">
                — {testimonial.name}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
