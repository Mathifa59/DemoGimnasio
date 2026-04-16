"use client";

import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";
  delay?: number;
  stagger?: boolean;
  staggerDelay?: number;
  className?: string;
}

const animationVariants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
};

const defaultTransition = {
  duration: 0.6,
  ease: "easeOut" as const,
};

export default function AnimatedSection({
  children,
  animation = "fadeUp",
  delay = 0,
  stagger = false,
  staggerDelay = 0.15,
  className,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = animationVariants[animation];

  if (stagger) {
    const containerVariants: Variants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    };

    const childVariants: Variants = {
      hidden: variants.hidden,
      visible: {
        ...variants.visible,
        transition: defaultTransition,
      },
    };

    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
      >
        {React.Children.map(children, (child) => (
          <motion.div variants={childVariants}>{child}</motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
