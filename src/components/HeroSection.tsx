"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Flame } from "lucide-react";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL, TRUST_STATS } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/pexels-amar-13965343.jpg"
        alt="Interior de gimnasio premium"
        fill
        priority
        className="object-cover scale-105"
        sizes="100vw"
      />

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F0F10] to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-12">
        <div className="max-w-3xl">
          {/* Promo Badge */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="inline-flex items-center gap-2 bg-gym-accent/15 border border-gym-accent/30 text-gym-accent text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Flame size={14} className="animate-pulse" />
              Primera clase gratis — Matrícula 0€ este mes
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-oswald uppercase font-bold text-gym-text text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            Deja de pensarlo.
            <br />
            <span className="text-gradient-red">Empieza hoy.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 text-lg md:text-xl text-gym-detail max-w-xl leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
          >
            Entrenamiento personalizado, coaches expertos y una comunidad que te empuja a ser mejor. Resultados desde la semana 1.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            <Button variant="primary" href="#pricing" size="lg" pulse>
              Empieza hoy
              <ArrowRight size={18} />
            </Button>
            <Button variant="whatsapp" href={WHATSAPP_URL} size="lg">
              <MessageCircle size={18} />
              Hablar por WhatsApp
            </Button>
          </motion.div>

          {/* Social proof micro-stats */}
          <motion.div
            className="mt-10 flex flex-wrap gap-6 md:gap-10"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.55}
          >
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-oswald text-2xl md:text-3xl font-bold text-gym-text">
                  {stat.value}
                </span>
                <span className="text-xs text-gym-text-secondary uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
