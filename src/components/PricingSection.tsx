"use client";

import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function PricingSection() {
  return (
    <SectionWrapper id="pricing">
      <AnimatedSection animation="fadeUp">
        <h2 className="font-oswald uppercase text-3xl md:text-4xl lg:text-5xl font-bold text-gym-text text-center mb-12 md:mb-16">
          Planes y Precios
        </h2>
      </AnimatedSection>

      <AnimatedSection
        animation="fadeUp"
        stagger
        staggerDelay={0.15}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center"
      >
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`bg-gym-card rounded-lg p-6 md:p-8 relative transition-all duration-300 hover:shadow-xl hover:shadow-gym-red/10 hover:-translate-y-1 ${
              plan.isPopular
                ? "border-2 border-gym-accent lg:scale-105 order-first lg:order-0"
                : "border border-white/10"
            }`}
          >
            {plan.isPopular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gym-accent text-white text-xs font-bold uppercase px-4 py-1 rounded-full whitespace-nowrap">
                Más Popular
              </span>
            )}

            <h3 className="font-oswald uppercase text-xl text-gym-text mb-4">
              {plan.name}
            </h3>

            <div className="mb-6">
              <span className="text-lg text-gym-text align-top">
                {plan.currency}
              </span>
              <span className="text-4xl md:text-5xl font-bold text-gym-text">
                {plan.price}
              </span>
              <span className="text-gym-text-secondary text-sm ml-1">/mes</span>
            </div>

            <ul className="space-y-3 mt-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check size={18} className="text-gym-red shrink-0" />
                  <span className="text-sm text-gym-detail">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                variant={plan.isPopular ? "primary" : "outline"}
                fullWidth
              >
                {plan.ctaText}
              </Button>
            </div>
          </div>
        ))}
      </AnimatedSection>
    </SectionWrapper>
  );
}
