"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CTAFinalSection() {
  return (
    <section id="cta" className="relative w-full py-24 md:py-32">
      {/* Background image */}
      <Image
        src="/images/pexels-amar-13965347.jpg"
        alt="Interior del gimnasio"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gym-dark/90 via-gym-dark/70 to-gym-dark/90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8">
        <AnimatedSection animation="fadeUp">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-oswald uppercase text-3xl md:text-5xl lg:text-6xl font-bold text-gym-text">
              Tu transformación empieza hoy
            </h2>

            <p className="text-lg md:text-xl text-gym-text-secondary max-w-2xl mx-auto mt-6">
              No esperes más. Únete a la comunidad que está cambiando vidas.
            </p>

            <div className="mt-8">
              <Button variant="primary" href="#pricing">
                Únete ahora
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
