# Plan de Implementación: Premium Gym Landing Page

## Visión General

Implementación incremental de una landing page premium para gimnasio usando Next.js 14+ (App Router), Tailwind CSS, Framer Motion, next/image y Lucide React. Cada tarea construye sobre la anterior, comenzando por la configuración base y componentes UI reutilizables, luego las secciones individuales, y finalmente la integración completa.

## Tareas

- [x] 1. Configurar proyecto Next.js y sistema de diseño base
  - [x] 1.1 Inicializar proyecto Next.js con App Router, instalar dependencias (tailwindcss, framer-motion, lucide-react) y configurar Tailwind con la Paleta_Visual completa (#0F0F10, #1C1C1F, #D62828, #9E1B1B, #F5F5F5, #8A8F98, #C7CCD1, #FF6B00)
    - Configurar `tailwind.config.ts` con colores personalizados del tema
    - _Requisitos: 1.1, 1.2, 1.5_
  - [x] 1.2 Configurar `src/app/layout.tsx` con fuentes Oswald (headings) e Inter (body) usando `next/font/google`, metadata SEO y estilos globales en `globals.css`
    - Aplicar fondo #0F0F10 y texto #F5F5F5 como defaults globales
    - _Requisitos: 1.1, 1.3, 1.4_
  - [x] 1.3 Crear tipos TypeScript en `src/types/index.ts` (Feature, Program, PricingPlan, Testimonial, NavLink)
    - _Requisitos: 1.1_
  - [x] 1.4 Crear archivo de datos estáticos `src/lib/data.ts` con NAV_LINKS, FEATURES, PROGRAMS, PRICING_PLANS y TESTIMONIALS
    - _Requisitos: 4.1, 5.1, 6.1, 6.3, 7.1_
  - [x] 1.5 Copiar las imágenes `pexels-amar-*.jpg` al directorio `public/images/` para uso con next/image
    - _Requisitos: 8.1_

- [x] 2. Crear componentes UI reutilizables
  - [x] 2.1 Crear `src/components/ui/Button.tsx` con variantes `primary` (fondo #D62828, hover #9E1B1B) y `outline` (borde #D62828, hover fondo #D62828), área de toque mínima 44x44px
    - _Requisitos: 1.5, 3.6, 3.9, 12.5_
  - [x] 2.2 Crear `src/components/ui/SectionWrapper.tsx` con max-w-7xl, padding horizontal 16px (mobile) / 32px (desktop), variantes de fondo `default` (#0F0F10) y `card` (#1C1C1F)
    - _Requisitos: 12.4_
  - [x] 2.3 Crear `src/components/ui/AnimatedSection.tsx` como Client Component con Framer Motion `useInView` (once: true), animaciones fadeUp/fadeIn/slideLeft/slideRight, duración máxima 0.8s, soporte para stagger
    - _Requisitos: 11.1, 11.2, 11.5, 11.6_

- [x] 3. Implementar Navbar
  - [x] 3.1 Crear `src/components/Navbar.tsx` como Client Component con logo, enlaces de navegación, botón CTA "Únete ahora", scroll suave con `scrollIntoView`, estado `isScrolled` (fondo semi-transparente + blur al scroll > 50px), menú hamburguesa responsive con iconos Lucide Menu/X
    - _Requisitos: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8_

- [x] 4. Implementar Hero Section
  - [x] 4.1 Crear `src/components/HeroSection.tsx` como Client Component con imagen de fondo full-viewport usando next/image (fill, priority, object-cover), overlay oscuro 60%, headline Oswald uppercase (≥48px desktop, ≥32px mobile), subtítulo en #8A8F98, botón CTA "Comienza tu transformación", animaciones secuenciales fade-in desde abajo
    - _Requisitos: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9_

- [x] 5. Checkpoint - Verificar base y componentes principales
  - Asegurar que el proyecto compila, las fuentes cargan correctamente, el Navbar y Hero se renderizan. Preguntar al usuario si hay dudas.

- [x] 6. Implementar Features Section
  - [x] 6.1 Crear `src/components/FeaturesSection.tsx` como Client Component con grid de 4 tarjetas (1 col mobile → 2 col tablet → 4 col desktop), fondo #1C1C1F por tarjeta, iconos Lucide (Dumbbell, Heart, Users, Trophy), títulos Oswald uppercase, Stagger_Animation fade-in, hover con scale(1.02) y borde #D62828
    - _Requisitos: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7_

- [x] 7. Implementar Programs Section
  - [x] 7.1 Crear `src/components/ProgramsSection.tsx` como Client Component con grid de 4 tarjetas (1 col mobile → 2 col desktop), imagen de fondo con next/image por tarjeta, overlay gradiente, nombre Oswald uppercase, hover scale(1.05) con overlay informativo, Stagger_Animation
    - _Requisitos: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7_

- [x] 8. Implementar Pricing Section
  - [x] 8.1 Crear `src/components/PricingSection.tsx` como Client Component con 3 planes (Básico, Pro, Elite), grid 1 col mobile (Pro primero) → 3 col desktop, plan Pro con badge "Más Popular" (#FF6B00) y borde diferenciado, lista de características con icono Check (#D62828), botón primary para Pro y outline para otros, Stagger_Animation, hover con elevación
    - _Requisitos: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9_

- [x] 9. Checkpoint - Verificar secciones de contenido
  - Asegurar que Features, Programs y Pricing se renderizan correctamente con datos, animaciones y responsive. Preguntar al usuario si hay dudas.

- [x] 10. Implementar Transformation Section
  - [x] 10.1 Crear `src/components/TransformationSection.tsx` como Client Component con grid de 3+ testimonios (1 col mobile → 3 col desktop), comillas estilizadas, texto en Inter italic, nombre en Oswald, resultado logrado, valoración con estrellas, Animación_Entrada fade-in
    - _Requisitos: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

- [x] 11. Implementar Gallery Section
  - [x] 11.1 Crear `src/components/GallerySection.tsx` como Client Component con grid asimétrico (1-2 col mobile → 3-4 col desktop) usando row-span variado, imágenes pexels-amar-*.jpg con next/image lazy loading, hover zoom scale(1.1) con overflow-hidden, fade-in al entrar en viewport
    - _Requisitos: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7_

- [x] 12. Implementar CTA Final Section
  - [x] 12.1 Crear `src/components/CTAFinalSection.tsx` como Client Component con fondo gradiente/imagen con overlay, headline Oswald uppercase prominente, subtítulo motivacional, botón CTA primary (#D62828, hover #9E1B1B), Animación_Entrada fade-in
    - _Requisitos: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_

- [x] 13. Implementar Footer
  - [x] 13.1 Crear `src/components/Footer.tsx` como Server Component con grid (1 col centrada mobile → 3-4 col desktop), logo, contacto (dirección, teléfono, email), enlaces a secciones, iconos redes sociales Lucide (Instagram, Facebook, Twitter, Youtube), borde superior border-white/10
    - _Requisitos: 10.1, 10.2, 10.3, 10.4, 10.5_

- [x] 14. Integrar todas las secciones en la página principal
  - [x] 14.1 Componer `src/app/page.tsx` importando y renderizando todas las secciones en orden: Navbar, HeroSection, FeaturesSection, ProgramsSection, PricingSection, TransformationSection, GallerySection, CTAFinalSection, Footer
    - Verificar que el scroll suave funciona entre secciones
    - Verificar responsive en breakpoints clave (375px, 768px, 1024px)
    - _Requisitos: 1.1, 12.1, 12.2, 12.3_

- [x] 15. Checkpoint final - Verificar integración completa
  - Asegurar que todas las secciones se renderizan, las animaciones se activan al scroll, el responsive funciona en todos los breakpoints, y la navegación es fluida. Preguntar al usuario si hay dudas.

- [ ]* 16. Escribir tests unitarios
  - [ ]* 16.1 Escribir tests para Navbar: verificar renderizado de enlaces, botón CTA, toggle menú móvil
    - _Requisitos: 2.1, 2.3, 2.4, 2.6, 2.7_
  - [ ]* 16.2 Escribir tests para PricingSection: verificar 3 planes, badge "Más Popular" en Pro, botones correctos
    - _Requisitos: 6.1, 6.2, 6.3, 6.9_
  - [ ]* 16.3 Escribir tests para FeaturesSection: verificar 4 tarjetas con iconos y títulos
    - _Requisitos: 4.1, 4.2_
  - [ ]* 16.4 Escribir tests para Footer: verificar información de contacto e iconos de redes sociales
    - _Requisitos: 10.1, 10.3_

## Notas

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido
- Cada tarea referencia requisitos específicos para trazabilidad
- Los checkpoints aseguran validación incremental
- No se incluyen property-based tests ya que esta feature es UI pura sin lógica de transformación de datos
- Las imágenes del workspace (pexels-amar-*.jpg) se usan para Gallery, Programs y Hero
