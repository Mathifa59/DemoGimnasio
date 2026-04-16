"use client";

import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WHATSAPP_URL } from "@/lib/data";

export default function CTAFinalSection() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/pexels-amar-13965347.jpg"
        alt="Interior del gimnasio"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F10]/50 via-transparent to-[#0F0F10]/50" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gym-red/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gym-red/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8 max-w-4xl mx-auto">
        <AnimatedSection animation="fadeUp">
          <div className="flex flex-col items-center text-center">
            <span className="text-gym-accent text-sm font-bold uppercase tracking-widest mb-4">
              ¿Listo para el cambio?
            </span>

            <h2 className="font-oswald uppercase text-4xl md:text-6xl lg:text-7xl font-bold text-gym-text leading-[0.95]">
              Tu mejor versión
              <br />
              <span className="text-gradient-red">te está esperando</span>
            </h2>

            <p className="text-lg md:text-xl text-gym-detail max-w-2xl mx-auto mt-6 leading-relaxed">
              Primera clase gratis. Sin compromiso. Sin excusas.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="#pricing" size="lg" pulse>
                Ver planes y precios
                <ArrowRight size={18} />
              </Button>
              <Button variant="whatsapp" href={WHATSAPP_URL} size="lg">
                <MessageCircle size={18} />
                Escribir por WhatsApp
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
