"use client";

import { useState } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";

const galleryImages = [
  { src: "/images/pexels-amar-13965335.jpg", alt: "Zona de pesas", tall: true },
  { src: "/images/pexels-amar-13965336.jpg", alt: "Entrenamiento funcional", tall: false },
  { src: "/images/pexels-amar-13965337.jpg", alt: "Área de cardio", tall: false },
  { src: "/images/pexels-amar-13965338.jpg", alt: "Zona de cross training", tall: true },
  { src: "/images/pexels-amar-13965343.jpg", alt: "Equipamiento premium", tall: false },
  { src: "/images/pexels-amar-14673249.jpg", alt: "Ambiente del gimnasio", tall: false },
];

export default function GallerySection() {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  return (
    <SectionWrapper id="gallery" background="card">
      <AnimatedSection animation="fadeUp">
        <div className="text-center mb-16">
          <span className="text-gym-accent text-sm font-bold uppercase tracking-widest">
            Conoce nuestro espacio
          </span>
          <h2 className="font-oswald uppercase text-3xl md:text-5xl font-bold text-gym-text mt-3">
            Donde ocurre la magia
          </h2>
        </div>
      </AnimatedSection>

      <AnimatedSection
        stagger
        staggerDelay={0.08}
        className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[14rem] md:auto-rows-[18rem] gap-3 md:gap-4"
      >
        {galleryImages.map((image, index) => (
          <div
            key={image.src}
            className={`relative overflow-hidden rounded-xl group ${
              image.tall ? "row-span-2" : ""
            }`}
          >
            {failedImages.has(index) ? (
              <div className="w-full h-full bg-gym-dark" />
            ) : (
              <>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  onError={() => setFailedImages((prev) => new Set(prev).add(index))}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gym-red/0 group-hover:bg-gym-red/10 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </>
            )}
          </div>
        ))}
      </AnimatedSection>
    </SectionWrapper>
  );
}
