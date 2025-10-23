import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@shared/schema";
import { BookOpen } from "lucide-react";

export function FAQSection() {
  const scrollToPurchase = () => {
    const offerSection = document.getElementById("offer-section");
    offerSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-20 bg-background" data-testid="section-faq">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground" data-testid="text-faq-title">
            Dúvidas Frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="border rounded-lg px-6 bg-card"
              data-testid={`accordion-faq-${faq.id}`}
            >
              <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-accent-gold transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={scrollToPurchase}
            className="bg-accent-gold hover-elevate active-elevate-2 text-accent-gold-foreground font-semibold text-lg"
            data-testid="button-cta-faq"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            QUERO O MEU AGORA E COMEÇAR MEU ESTUDO!
          </Button>
        </div>
      </div>
    </section>
  );
}
