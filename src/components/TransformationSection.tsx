"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS, TRUST_STATS } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function TransformationSection() {
  return (
    <SectionWrapper id="transformation" background="card">
      <AnimatedSection animation="fadeUp">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-gym-accent text-sm font-bold uppercase tracking-widest">
            Resultados que hablan
          </span>
          <h2 className="font-oswald uppercase text-2xl sm:text-3xl md:text-5xl font-bold text-gym-text mt-3">
            Ellos ya lo lograron
          </h2>
        </div>
      </AnimatedSection>

      {/* Trust stats bar */}
      <AnimatedSection animation="fadeUp" delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="text-center p-3 sm:p-4 rounded-xl bg-gym-dark/50 border border-white/5">
              <span className="font-oswald text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-red">
                {stat.value}
              </span>
              <p className="text-xs text-gym-text-secondary uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection
        stagger
        staggerDelay={0.1}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto"
      >
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.name}
            className="group bg-gym-dark rounded-xl p-6 md:p-8 border border-white/5 hover:border-gym-red/20 transition-all duration-500 relative overflow-hidden"
          >
            {/* Subtle hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gym-red/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              {/* Quote icon */}
              <Quote size={24} className="text-gym-red/30 mb-4" />

              {/* Text */}
              <p className="italic text-gym-detail text-sm md:text-base leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Result badge */}
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="font-oswald uppercase text-gym-text font-bold text-sm">
                    {testimonial.name}
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={
                          i < testimonial.rating
                            ? "text-gym-accent fill-gym-accent"
                            : "text-white/20"
                        }
                      />
                    ))}
                  </div>
                </div>
                <span className="bg-gym-red/10 text-gym-red text-xs font-bold uppercase px-3 py-1.5 rounded-full border border-gym-red/20">
                  {testimonial.result}
                </span>
              </div>
            </div>
          </div>
        ))}
      </AnimatedSection>
    </SectionWrapper>
  );
}
