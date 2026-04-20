import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "default" | "card";
}

const bgVariants = {
  default: "bg-gym-dark",
  card: "bg-gym-card",
};

export default function SectionWrapper({
  children,
  id,
  className = "",
  background = "default",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`${bgVariants[background]} py-14 sm:py-20`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-8 ${className}`.trim()}>
        {children}
      </div>
    </section>
  );
}
