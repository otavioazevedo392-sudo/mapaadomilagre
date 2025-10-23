import { HeroSection } from "@/components/sections/hero-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhatIsSection } from "@/components/sections/what-is-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { BonusSection } from "@/components/sections/bonus-section";
import { IncludedSection } from "@/components/sections/included-section";
import { OfferSection } from "@/components/sections/offer-section";
import { MoreTestimonialsSection } from "@/components/sections/more-testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { Footer } from "@/components/sections/footer";
import { FixedCTA } from "@/components/fixed-cta";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TestimonialsSection />
      <WhatIsSection />
      <FeaturesSection />
      <BonusSection />
      <IncludedSection />
      <OfferSection />
      <MoreTestimonialsSection />
      <FAQSection />
      <Footer />
      <FixedCTA />
    </div>
  );
}
