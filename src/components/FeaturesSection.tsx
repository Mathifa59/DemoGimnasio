"use client";

import { FEATURES } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Dumbbell, Heart, Users, Trophy, Clock, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Dumbbell, Heart, Users, Trophy, Clock,
};

export default function FeaturesSection() {
  return (
    <SectionWrapper id="features" background="card">
      <AnimatedSection animation="fadeUp">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-gym-accent text-sm font-bold uppercase tracking-widest">
            ¿Por qué Premium Gym?
          </span>
          <h2 className="font-oswald uppercase text-2xl sm:text-3xl md:text-5xl font-bold text-gym-text mt-3">
            Todo lo que necesitas.
            <br />
            <span className="text-gradient-red">Nada que te sobre.</span>
          </h2>
        </div>
      </AnimatedSection>

      <AnimatedSection
        stagger
        staggerDelay={0.12}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {FEATURES.map((feature) => {
          const Icon = iconMap[feature.icon];
          return (
            <div
              key={feature.title}
              className="group relative bg-gym-dark rounded-xl p-6 md:p-8 border border-white/5 hover:border-gym-red/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gym-red/10 overflow-hidden"
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gym-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Stat badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gym-red/10 flex items-center justify-center group-hover:bg-gym-red/20 transition-colors">
                    {Icon && <Icon size={24} className="text-gym-red" />}
                  </div>
                  <span className="text-gym-accent font-oswald font-bold text-sm">
                    {feature.stat}
                  </span>
                </div>

                <h3 className="font-oswald uppercase text-lg font-bold text-gym-text">
                  {feature.title}
                </h3>
                <p className="text-sm text-gym-text-secondary mt-3 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </AnimatedSection>
    </SectionWrapper>
  );
}
