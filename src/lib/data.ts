import type { NavLink, Feature, Program, PricingPlan, Testimonial, PainPoint, FAQItem } from "@/types";

export const WHATSAPP_URL = "https://wa.me/34912345678?text=Hola%2C%20quiero%20información%20sobre%20las%20membresías";

export const NAV_LINKS: NavLink[] = [
  { label: "Beneficios", href: "#features" },
  { label: "Programas", href: "#programs" },
  { label: "Precios", href: "#pricing" },
  { label: "Resultados", href: "#transformation" },
  { label: "FAQ", href: "#faq" },
];

export const FEATURES: Feature[] = [
  {
    icon: "Dumbbell",
    title: "Equipamiento de élite",
    description: "Más de 200 máquinas y equipos de última generación. Entrena con lo mejor, sin esperas.",
    stat: "+200 equipos",
  },
  {
    icon: "Clock",
    title: "Abierto 24/7",
    description: "Entrena cuando quieras. Sin horarios que te limiten. Tu ritmo, tu momento.",
    stat: "24/7",
  },
  {
    icon: "Users",
    title: "Coaches certificados",
    description: "15 entrenadores con certificaciones internacionales. Te guían desde el día uno.",
    stat: "15 coaches",
  },
  {
    icon: "Trophy",
    title: "Resultados garantizados",
    description: "El 94% de nuestros miembros ven resultados en las primeras 8 semanas.",
    stat: "94% éxito",
  },
];

export const PAIN_POINTS: PainPoint[] = [
  {
    problem: "No ves resultados",
    solution: "Plan personalizado con seguimiento semanal y ajustes constantes para que cada sesión cuente.",
    icon: "TrendingUp",
  },
  {
    problem: "No sabes por dónde empezar",
    solution: "Tu coach te diseña una rutina desde cero y te acompaña hasta que domines cada ejercicio.",
    icon: "Target",
  },
  {
    problem: "Te aburres entrenando",
    solution: "4 programas diferentes, clases grupales y retos mensuales que mantienen la motivación al máximo.",
    icon: "Zap",
  },
  {
    problem: "No tienes tiempo",
    solution: "Abierto 24/7 con sesiones de 45 minutos diseñadas para máximo impacto en mínimo tiempo.",
    icon: "Clock",
  },
];

export const PROGRAMS: Program[] = [
  {
    name: "Fuerza",
    description: "Powerlifting y periodización avanzada. Gana fuerza real, medible, semana a semana.",
    image: "/images/pexels-amar-13965335.jpg",
    ctaText: "Probar gratis",
  },
  {
    name: "Cross Training",
    description: "Fuerza + resistencia + agilidad en sesiones de alta intensidad que nunca se repiten.",
    image: "/images/pexels-amar-13965336.jpg",
    ctaText: "Probar gratis",
  },
  {
    name: "Funcional",
    description: "Mejora tu movilidad y rendimiento diario con movimientos que tu cuerpo necesita.",
    image: "/images/pexels-amar-13965337.jpg",
    ctaText: "Probar gratis",
  },
  {
    name: "HIIT",
    description: "Quema grasa y mejora tu cardio en sesiones explosivas de 45 minutos.",
    image: "/images/pexels-amar-13965338.jpg",
    ctaText: "Probar gratis",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Básico",
    price: 29,
    currency: "€",
    features: [
      "Acceso a sala de musculación",
      "Horario de lunes a viernes",
      "Vestuarios y duchas",
      "App de seguimiento básico",
    ],
    isPopular: false,
    ctaText: "Empezar ahora",
  },
  {
    name: "Pro",
    price: 49,
    currency: "€",
    features: [
      "Acceso ilimitado 24/7",
      "Todas las clases grupales",
      "Plan de nutrición personalizado",
      "1 sesión de coach al mes",
      "Zona de recuperación",
    ],
    isPopular: true,
    ctaText: "Elegir Pro — Más popular",
  },
  {
    name: "Elite",
    price: 79,
    currency: "€",
    features: [
      "Todo lo del plan Pro",
      "Coach personal ilimitado",
      "Análisis corporal mensual",
      "Eventos exclusivos",
      "Suplementación incluida",
      "Prioridad en reservas",
    ],
    isPopular: false,
    ctaText: "Ir a Elite",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos M.",
    text: "Llegué sin saber nada. En 6 meses perdí 15kg y gané confianza. Los coaches hacen la diferencia.",
    result: "-15kg en 6 meses",
    rating: 5,
  },
  {
    name: "Laura F.",
    text: "Nunca había sido constante en un gym. Aquí llevo 1 año sin faltar. El ambiente te engancha.",
    result: "+20kg press banca",
    rating: 5,
  },
  {
    name: "Miguel T.",
    text: "Mi rendimiento deportivo se disparó. La atención personalizada es de otro nivel.",
    result: "-12% grasa corporal",
    rating: 5,
  },
  {
    name: "Ana R.",
    text: "HIIT + nutrición = combo perfecto. Resultados que hablan solos. Lo recomiendo al 100%.",
    result: "-10kg en 4 meses",
    rating: 5,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "¿Puedo probar antes de inscribirme?",
    answer: "Sí. Tu primera clase es totalmente gratis y sin compromiso. Ven, entrena y decide.",
  },
  {
    question: "¿Aceptan principiantes?",
    answer: "Por supuesto. El 60% de nuestros miembros empezaron desde cero. Tu coach te guía paso a paso.",
  },
  {
    question: "¿Cuáles son los horarios?",
    answer: "Estamos abiertos 24/7 con los planes Pro y Elite. El plan Básico tiene acceso de lunes a viernes de 6:00 a 22:00.",
  },
  {
    question: "¿Tienen coaches personales?",
    answer: "Sí. 15 coaches certificados internacionalmente. Incluidos en el plan Elite, y disponibles como extra en otros planes.",
  },
  {
    question: "¿Dónde están ubicados?",
    answer: "Estamos en Calle Fitness 123, Madrid. A 2 minutos del metro. Parking gratuito para miembros.",
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer: "Sin permanencia. Cancela cuando quieras sin penalizaciones. Así de simple.",
  },
];

export const TRUST_STATS = [
  { value: "+2,500", label: "Miembros activos" },
  { value: "94%", label: "Tasa de satisfacción" },
  { value: "15", label: "Coaches expertos" },
  { value: "24/7", label: "Siempre abierto" },
];
