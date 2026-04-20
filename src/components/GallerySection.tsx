"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";

const galleryImages = [
  { src: "/images/pexels-amar-13965335.jpg", alt: "Zona de pesas", className: "sm:col-span-1 sm:row-span-2" },
  { src: "/images/pexels-amar-13965336.jpg", alt: "Entrenamiento funcional", className: "sm:col-span-1 sm:row-span-1" },
  { src: "/images/pexels-amar-13965337.jpg", alt: "Área de cardio", className: "sm:col-span-1 sm:row-span-1" },
  { src: "/images/pexels-amar-13965338.jpg", alt: "Zona de cross training", className: "sm:col-span-1 sm:row-span-2" },
  { src: "/images/pexels-amar-13965343.jpg", alt: "Equipamiento premium", className: "sm:col-span-1 sm:row-span-1" },
  { src: "/images/pexels-amar-14673249.jpg", alt: "Ambiente del gimnasio", className: "sm:col-span-1 sm:row-span-1" },
];

function GalleryImage({ image, index }: { image: typeof galleryImages[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-xl group ${image.className}`}
    >
      {failed ? (
        <div className="w-full h-full bg-gym-dark flex items-center justify-center">
          <span className="text-gym-text-secondary text-xs">Imagen no disponible</span>
        </div>
      ) : (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, 33vw"
            onError={() => setFailed(true)}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-gym-red/10 transition-colors duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-sm font-medium">{image.alt}</p>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default function GallerySection() {
  return (
    <SectionWrapper id="gallery" background="card">
      <AnimatedSection animation="fadeUp">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-gym-accent text-sm font-bold uppercase tracking-widest">
            Conoce nuestro espacio
          </span>
          <h2 className="font-oswald uppercase text-2xl sm:text-3xl md:text-5xl font-bold text-gym-text mt-3">
            Donde ocurre la magia
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[10rem] sm:auto-rows-[12rem] md:auto-rows-[14rem] lg:auto-rows-[16rem] gap-3 md:gap-4">
        {galleryImages.map((image, index) => (
          <GalleryImage key={image.src} image={image} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
