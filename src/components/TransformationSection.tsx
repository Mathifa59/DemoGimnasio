"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function TransformationSection() {
  return (
    <SectionWrapper id="transformation" background="card">
      <AnimatedSection animation="fadeUp">
        <h2 className="font-oswald uppercase text-3xl md:text-4xl text-gym-text font-bold text-center mb-12">
          Resultados Reales
        </h2>
      </AnimatedSection>

      <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-gym-dark rounded-lg p-6 md:p-8"
          >
            <span className="text-gym-red text-5xl font-serif leading-none opacity-50">
              &ldquo;
            </span>
            <p className="italic text-gym-text-secondary text-sm md:text-base leading-relaxed mt-2 font-inter">
              {testimonial.text}
            </p>
            <span className="inline-block bg-gym-red/10 text-gym-red text-xs font-bold uppercase px-3 py-1 rounded-full mt-4">
              {testimonial.result}
            </span>
            <p className="font-oswald uppercase text-gym-text font-bold mt-3">
              {testimonial.name}
            </p>
            <div className="flex gap-1 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < testimonial.rating
                      ? "text-gym-accent fill-gym-accent"
                      : "text-white/20"
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </AnimatedSection>
    </SectionWrapper>
  );
}
