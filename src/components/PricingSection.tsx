"use client";

import { Check, ArrowRight } from "lucide-react";
import { PRICING_PLANS, WHATSAPP_URL } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function PricingSection() {
  return (
    <SectionWrapper id="pricing">
      <AnimatedSection animation="fadeUp">
        <div className="text-center mb-16">
          <span className="text-gym-accent text-sm font-bold uppercase tracking-widest">
            Sin permanencia · Cancela cuando quieras
          </span>
          <h2 className="font-oswald uppercase text-3xl md:text-5xl lg:text-6xl font-bold text-gym-text mt-3">
            Elige tu plan
          </h2>
          <p className="text-gym-text-secondary mt-4 max-w-xl mx-auto">
            Matrícula gratis este mes. Empieza sin compromiso.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection
        stagger
        staggerDelay={0.12}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto"
      >
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col ${
              plan.isPopular
                ? "bg-gym-card border-2 border-gym-accent glow-accent order-first lg:order-none lg:scale-105 z-10"
                : "bg-gym-card border border-white/5 hover:border-white/15"
            }`}
          >
            {/* Popular badge */}
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gym-accent text-white text-xs font-bold uppercase px-5 py-1.5 rounded-full whitespace-nowrap shadow-lg shadow-gym-accent/30">
                  ⭐ Más Popular
                </span>
              </div>
            )}

            {/* Plan header */}
            <div className="mb-6">
              <h3 className="font-oswald uppercase text-xl text-gym-text">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-gym-text-secondary text-lg">{plan.currency}</span>
                <span className={`font-oswald text-5xl md:text-6xl font-bold ${plan.isPopular ? "text-gradient-red" : "text-gym-text"}`}>
                  {plan.price}
                </span>
                <span className="text-gym-text-secondary text-sm">/mes</span>
              </div>
            </div>

            {/* Divider */}
            <div className={`h-px mb-6 ${plan.isPopular ? "bg-gradient-to-r from-transparent via-gym-accent/30 to-transparent" : "bg-white/10"}`} />

            {/* Features */}
            <ul className="space-y-3 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.isPopular ? "bg-gym-accent/20" : "bg-gym-red/15"}`}>
                    <Check size={12} className={plan.isPopular ? "text-gym-accent" : "text-gym-red"} />
                  </div>
                  <span className="text-sm text-gym-detail leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Button
                variant={plan.isPopular ? "primary" : "outline"}
                fullWidth
                size="lg"
                href={WHATSAPP_URL}
                pulse={plan.isPopular}
              >
                {plan.ctaText}
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        ))}
      </AnimatedSection>

      {/* Trust line */}
      <AnimatedSection animation="fadeUp" delay={0.3}>
        <p className="text-center text-gym-text-secondary text-sm mt-10">
          💳 Pago seguro · 🔄 Sin permanencia · 🎁 Primera clase gratis
        </p>
      </AnimatedSection>
    </SectionWrapper>
  );
}
