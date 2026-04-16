"use client";

import { useState } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";

const galleryImages = [
  { src: "/images/pexels-amar-13965335.jpg", alt: "Zona de pesas", span: "row-span-2" },
  { src: "/images/pexels-amar-13965336.jpg", alt: "Entrenamiento funcional", span: "" },
  { src: "/images/pexels-amar-13965337.jpg", alt: "Área de cardio", span: "" },
  { src: "/images/pexels-amar-13965338.jpg", alt: "Zona de cross training", span: "row-span-2" },
  { src: "/images/pexels-amar-13965343.jpg", alt: "Equipamiento premium", span: "" },
  { src: "/images/pexels-amar-13965347.jpg", alt: "Sala de entrenamiento", span: "" },
  { src: "/images/pexels-amar-14673249.jpg", alt: "Ambiente del gimnasio", span: "" },
];

export default function GallerySection() {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setFailedImages((prev) => new Set(prev).add(index));
  };

  return (
    <SectionWrapper id="gallery">
      <AnimatedSection animation="fadeUp">
        <h2 className="font-oswald uppercase text-3xl md:text-4xl text-gym-text font-bold text-center mb-12">
          Nuestro Gimnasio
        </h2>
      </AnimatedSection>

      <AnimatedSection
        stagger
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[16rem] gap-4"
      >
        {galleryImages.map((image, index) => (
          <div
            key={image.src}
            className={`relative overflow-hidden rounded-lg group ${
              image.span ? `${image.span} min-h-[32rem]` : "h-64"
            }`}
          >
            {failedImages.has(index) ? (
              <div className="w-full h-full bg-gym-card" />
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                onError={() => handleImageError(index)}
              />
            )}
          </div>
        ))}
      </AnimatedSection>
    </SectionWrapper>
  );
}
