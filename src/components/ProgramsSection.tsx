"use client";

import Image from "next/image";
import { PROGRAMS } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ProgramsSection() {
  return (
    <SectionWrapper id="programs">
      <AnimatedSection animation="fadeUp">
        <h2 className="font-oswald uppercase text-3xl md:text-4xl text-center text-gym-text mb-12">
          Nuestros Programas
        </h2>
      </AnimatedSection>

      <AnimatedSection
        stagger
        staggerDelay={0.15}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {PROGRAMS.map((program) => (
          <div
            key={program.name}
            className="group relative overflow-hidden rounded-lg h-64 md:h-80 cursor-pointer hover:scale-[1.05] transition-transform duration-300"
          >
            <Image
              src={program.image}
              alt={program.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-oswald uppercase text-xl md:text-2xl font-bold text-gym-text">
                {program.name}
              </h3>
              <p className="text-sm text-gym-text-secondary mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {program.description}
              </p>
            </div>
          </div>
        ))}
      </AnimatedSection>
    </SectionWrapper>
  );
}
