"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PROGRAMS, WHATSAPP_URL } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ProgramsSection() {
  return (
    <SectionWrapper id="programs" background="card">
      <AnimatedSection animation="fadeUp">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-gym-accent text-sm font-bold uppercase tracking-widest">
            Programas de entrenamiento
          </span>
          <h2 className="font-oswald uppercase text-2xl sm:text-3xl md:text-5xl font-bold text-gym-text mt-3">
            Encuentra tu programa
          </h2>
          <p className="text-gym-text-secondary mt-3 sm:mt-4 max-w-xl mx-auto text-sm sm:text-base">
            4 programas diseñados por expertos. Elige el tuyo y empieza con una clase gratis.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection
        stagger
        staggerDelay={0.12}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {PROGRAMS.map((program) => (
          <div
            key={program.name}
            className="group relative overflow-hidden rounded-xl h-60 sm:h-72 md:h-96 cursor-pointer"
          >
            {/* Image with zoom on hover */}
            <Image
              src={program.image}
              alt={program.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Multi-layer overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gym-red/0 group-hover:bg-gym-red/10 transition-colors duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="font-oswald uppercase text-2xl md:text-3xl font-bold text-gym-text">
                {program.name}
              </h3>
              <p className="text-sm text-gym-detail mt-2 max-w-sm sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-500">
                {program.description}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-gym-accent uppercase tracking-wider sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-500 hover:text-gym-red"
              >
                {program.ctaText}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gym-red/0 group-hover:border-gym-red transition-colors duration-500" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gym-red/0 group-hover:border-gym-red transition-colors duration-500" />
          </div>
        ))}
      </AnimatedSection>
    </SectionWrapper>
  );
}
