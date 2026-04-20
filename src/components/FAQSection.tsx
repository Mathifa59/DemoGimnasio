"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq">
      <AnimatedSection animation="fadeUp">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-gym-accent text-sm font-bold uppercase tracking-widest">
            Resolvemos tus dudas
          </span>
          <h2 className="font-oswald uppercase text-2xl sm:text-3xl md:text-5xl font-bold text-gym-text mt-3">
            Preguntas frecuentes
          </h2>
        </div>
      </AnimatedSection>

      <div className="max-w-3xl mx-auto">
        <AnimatedSection stagger staggerDelay={0.08}>
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={item.question}
              className={`border-b border-white/5 transition-colors ${
                openIndex === index ? "border-gym-red/20" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
                aria-expanded={openIndex === index}
              >
                <span className={`font-medium text-sm md:text-base transition-colors ${
                  openIndex === index ? "text-gym-text" : "text-gym-detail group-hover:text-gym-text"
                }`}>
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 ml-4 transition-all duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-gym-red"
                      : "text-gym-text-secondary"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gym-text-secondary leading-relaxed pr-8">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
