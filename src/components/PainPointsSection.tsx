"use client";

import { PAIN_POINTS } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { TrendingUp, Target, Zap, Clock, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp, Target, Zap, Clock,
};

export default function PainPointsSection() {
  return (
    <SectionWrapper id="pain-points">
      <AnimatedSection animation="fadeUp">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-gym-red text-sm font-bold uppercase tracking-widest">
            Te entendemos
          </span>
          <h2 className="font-oswald uppercase text-2xl sm:text-3xl md:text-5xl font-bold text-gym-text mt-3">
            ¿Te suena esto?
          </h2>
          <p className="text-gym-text-secondary mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Sabemos lo frustrante que es no ver resultados. Por eso diseñamos cada programa para resolver exactamente eso.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection
        stagger
        staggerDelay={0.1}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto"
      >
        {PAIN_POINTS.map((point) => {
          const Icon = iconMap[point.icon];
          return (
            <div
              key={point.problem}
              className="group relative bg-gym-card rounded-xl p-6 md:p-8 border border-white/5 hover:border-gym-red/30 transition-all duration-500 overflow-hidden"
            >
              {/* Red accent line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gym-red to-gym-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-gym-red/10 flex items-center justify-center mt-1">
                  {Icon && <Icon size={20} className="text-gym-red" />}
                </div>
                <div>
                  <p className="text-gym-text-secondary text-sm line-through decoration-gym-red/50">
                    &ldquo;{point.problem}&rdquo;
                  </p>
                  <p className="text-gym-text mt-2 text-sm leading-relaxed font-medium">
                    {point.solution}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </AnimatedSection>
    </SectionWrapper>
  );
}
