# Documento de Requisitos

## Introducción

Landing page premium para un gimnasio moderno de alto rendimiento. El objetivo es transmitir fuerza, disciplina, transformación física y comunidad, con una identidad visual comparable a marcas fitness premium como Nike Training o Gymshark. La página debe estar lista para vender membresías a un cliente real, construida con Next.js (App Router), Tailwind CSS, Framer Motion, next/image y Lucide React.

## Glosario

- **Landing_Page**: Página web de una sola página compuesta por múltiples secciones verticales (Navbar, Hero, Features, Programs, Pricing, Transformation, Gallery, CTA Final, Footer) diseñada para convertir visitantes en miembros del gimnasio.
- **Navbar**: Barra de navegación fija en la parte superior de la Landing_Page que contiene el logotipo, enlaces de navegación y un botón CTA.
- **Hero_Section**: Primera sección visible de la Landing_Page que ocupa el viewport completo, con imagen de fondo, overlay oscuro, headline principal y botón CTA.
- **Features_Section**: Sección que muestra los beneficios clave del gimnasio (fuerza, resistencia, coaches, comunidad) mediante tarjetas con iconos.
- **Programs_Section**: Sección que presenta los tipos de entrenamiento disponibles (fuerza, cross training, funcional, HIIT) mediante tarjetas interactivas.
- **Pricing_Section**: Sección que muestra los planes de membresía (Básico, Pro, Elite) con precios, características y un plan destacado como recomendado.
- **Transformation_Section**: Sección que presenta testimonios de miembros enfocados en resultados y transformación física.
- **Gallery_Section**: Sección que muestra fotografías del gimnasio en una cuadrícula con estética aspiracional.
- **CTA_Final_Section**: Sección de cierre enfocada en conversión con un llamado a la acción fuerte.
- **Footer**: Sección inferior de la Landing_Page con información de contacto, enlaces y redes sociales.
- **Paleta_Visual**: Conjunto de colores definidos: fondo principal (#0F0F10), secciones/cards (#1C1C1F), botones principales (#D62828), hover (#9E1B1B), texto principal (#F5F5F5), texto secundario (#8A8F98), detalles técnicos (#C7CCD1), acentos promocionales (#FF6B00).
- **Animación_Entrada**: Efecto visual de aparición de elementos al hacer scroll, usando combinaciones de fade y slide con Framer Motion.
- **Hover_Dinámico**: Efecto visual interactivo que se activa cuando el cursor se posiciona sobre un elemento, incluyendo cambios de escala, color o elevación.
- **Stagger_Animation**: Patrón de animación donde los elementos de una cuadrícula aparecen secuencialmente con un retraso entre cada uno.
- **CTA**: Call to Action, botón o elemento diseñado para provocar una acción del usuario (ej. "Únete ahora").
- **Viewport**: Área visible del navegador del usuario.
- **Breakpoint_Mobile**: Ancho de pantalla menor o igual a 768px.
- **Breakpoint_Tablet**: Ancho de pantalla entre 769px y 1024px.
- **Breakpoint_Desktop**: Ancho de pantalla mayor a 1024px.

## Requisitos

### Requisito 1: Configuración del Proyecto y Sistema de Diseño

**User Story:** Como desarrollador, quiero que el proyecto esté configurado con Next.js App Router, Tailwind CSS, Framer Motion, next/image y Lucide React con la Paleta_Visual y tipografía definidas, para que todos los componentes compartan una identidad visual consistente.

#### Criterios de Aceptación

1. THE Landing_Page SHALL utilizar Next.js con App Router como framework principal.
2. THE Landing_Page SHALL utilizar Tailwind CSS configurado con la Paleta_Visual completa como colores personalizados del tema.
3. THE Landing_Page SHALL utilizar la fuente Oswald en uppercase para todos los headings y la fuente Inter para body y elementos de UI.
4. THE Landing_Page SHALL mantener un ratio de contraste mínimo de 4.5:1 entre texto principal (#F5F5F5) y fondo principal (#0F0F10).
5. THE Landing_Page SHALL utilizar el color rojo (#D62828) exclusivamente en botones CTA principales y acentos clave, limitando su uso a un máximo de 3 elementos por sección visible.

### Requisito 2: Navbar Minimalista

**User Story:** Como visitante, quiero una barra de navegación clara y minimalista, para que pueda acceder rápidamente a cualquier sección de la página.

#### Criterios de Aceptación

1. THE Navbar SHALL permanecer fija en la parte superior del Viewport durante el scroll.
2. THE Navbar SHALL mostrar el logotipo del gimnasio en el lado izquierdo.
3. THE Navbar SHALL mostrar enlaces de navegación a las secciones Features_Section, Programs_Section, Pricing_Section y Transformation_Section.
4. THE Navbar SHALL mostrar un botón CTA con el texto "Únete ahora" con fondo color #D62828 en el lado derecho.
5. WHEN el usuario hace click en un enlace de navegación, THE Navbar SHALL desplazar la página suavemente hasta la sección correspondiente.
6. WHEN el ancho de pantalla es menor o igual al Breakpoint_Mobile, THE Navbar SHALL colapsar los enlaces de navegación en un menú hamburguesa.
7. WHEN el usuario hace click en el icono hamburguesa, THE Navbar SHALL mostrar un menú desplegable con todos los enlaces de navegación y el botón CTA.
8. WHEN el usuario hace scroll hacia abajo más de 50px, THE Navbar SHALL aplicar un fondo semi-transparente con efecto blur para mejorar la legibilidad.

### Requisito 3: Hero Section Impactante

**User Story:** Como visitante, quiero ver una sección hero potente y aspiracional al llegar a la página, para que sienta inmediatamente la energía y el nivel premium del gimnasio.

#### Criterios de Aceptación

1. THE Hero_Section SHALL ocupar el 100% del alto del Viewport.
2. THE Hero_Section SHALL mostrar una imagen de fondo a pantalla completa optimizada con next/image.
3. THE Hero_Section SHALL aplicar un overlay oscuro con opacidad mínima de 60% sobre la imagen de fondo.
4. THE Hero_Section SHALL mostrar un headline principal en fuente Oswald, uppercase, con tamaño mínimo de 48px en desktop y 32px en mobile.
5. THE Hero_Section SHALL mostrar un subtítulo descriptivo debajo del headline en color texto secundario (#8A8F98).
6. THE Hero_Section SHALL mostrar un botón CTA principal con fondo #D62828 y texto "Comienza tu transformación".
7. WHEN la Hero_Section se carga, THE Hero_Section SHALL animar el headline con un efecto fade-in desde abajo con una duración máxima de 0.8 segundos.
8. WHEN la Hero_Section se carga, THE Hero_Section SHALL animar el subtítulo y el botón CTA con un efecto fade-in secuencial después del headline.
9. WHEN el usuario posiciona el cursor sobre el botón CTA, THE Hero_Section SHALL cambiar el color de fondo del botón a #9E1B1B.

### Requisito 4: Sección de Beneficios (Features)

**User Story:** Como visitante, quiero conocer los beneficios clave del gimnasio de forma visual y clara, para que entienda qué lo diferencia de otros gimnasios.

#### Criterios de Aceptación

1. THE Features_Section SHALL mostrar un mínimo de 4 tarjetas de beneficios: fuerza, resistencia, coaches expertos y comunidad.
2. THE Features_Section SHALL mostrar cada tarjeta con un icono de Lucide React, un título en Oswald uppercase y una descripción breve.
3. THE Features_Section SHALL utilizar el color de fondo #1C1C1F para cada tarjeta de beneficio.
4. WHEN las tarjetas de beneficios entran en el Viewport durante el scroll, THE Features_Section SHALL animar cada tarjeta con una Stagger_Animation de fade-in desde abajo.
5. WHEN el usuario posiciona el cursor sobre una tarjeta de beneficio, THE Features_Section SHALL aplicar un Hover_Dinámico con elevación sutil y borde de acento.
6. WHEN el ancho de pantalla es menor o igual al Breakpoint_Mobile, THE Features_Section SHALL mostrar las tarjetas en una columna única.
7. WHEN el ancho de pantalla corresponde al Breakpoint_Desktop, THE Features_Section SHALL mostrar las tarjetas en una cuadrícula de 2 o 4 columnas.

### Requisito 5: Sección de Programas de Entrenamiento

**User Story:** Como visitante, quiero ver los tipos de entrenamiento disponibles con detalle visual, para que pueda identificar el programa que mejor se adapta a mis objetivos.

#### Criterios de Aceptación

1. THE Programs_Section SHALL mostrar tarjetas para los programas: Fuerza, Cross Training, Funcional y HIIT.
2. THE Programs_Section SHALL mostrar cada tarjeta de programa con una imagen de fondo, nombre del programa en Oswald uppercase y una descripción breve.
3. THE Programs_Section SHALL utilizar imágenes optimizadas con next/image para cada tarjeta de programa.
4. WHEN el usuario posiciona el cursor sobre una tarjeta de programa, THE Programs_Section SHALL aplicar un efecto de escala sutil (máximo 1.05) y un overlay con información adicional.
5. WHEN las tarjetas de programa entran en el Viewport durante el scroll, THE Programs_Section SHALL animar cada tarjeta con una Stagger_Animation.
6. WHEN el ancho de pantalla es menor o igual al Breakpoint_Mobile, THE Programs_Section SHALL mostrar las tarjetas en una columna única con altura reducida.
7. WHEN el ancho de pantalla corresponde al Breakpoint_Desktop, THE Programs_Section SHALL mostrar las tarjetas en una cuadrícula de 2 columnas.

### Requisito 6: Sección de Precios (Pricing)

**User Story:** Como visitante, quiero ver los planes de membresía con precios claros y características diferenciadas, para que pueda elegir el plan que mejor se ajuste a mis necesidades y presupuesto.

#### Criterios de Aceptación

1. THE Pricing_Section SHALL mostrar 3 planes de membresía: Básico, Pro y Elite.
2. THE Pricing_Section SHALL mostrar cada plan con nombre, precio mensual, lista de características incluidas y un botón CTA.
3. THE Pricing_Section SHALL destacar visualmente el plan Pro como "Más Popular" mediante un badge con color de acento #FF6B00 y un borde diferenciado.
4. THE Pricing_Section SHALL utilizar el color de fondo #1C1C1F para las tarjetas de precio y #0F0F10 como fondo de sección.
5. THE Pricing_Section SHALL mostrar las características incluidas con iconos de check de Lucide React en color #D62828.
6. WHEN el usuario posiciona el cursor sobre una tarjeta de precio, THE Pricing_Section SHALL aplicar un Hover_Dinámico con elevación y cambio de borde.
7. WHEN las tarjetas de precio entran en el Viewport durante el scroll, THE Pricing_Section SHALL animar cada tarjeta con una Stagger_Animation.
8. WHEN el ancho de pantalla es menor o igual al Breakpoint_Mobile, THE Pricing_Section SHALL mostrar las tarjetas de precio en una columna única con el plan Pro visible primero.
9. THE Pricing_Section SHALL mostrar el botón CTA del plan Pro con fondo #D62828 y los botones de los otros planes con estilo outline.

### Requisito 7: Sección de Transformación y Testimonios

**User Story:** Como visitante, quiero ver testimonios reales de miembros que han logrado resultados, para que confíe en la efectividad del gimnasio y me motive a unirme.

#### Criterios de Aceptación

1. THE Transformation_Section SHALL mostrar un mínimo de 3 testimonios de miembros.
2. THE Transformation_Section SHALL mostrar cada testimonio con nombre del miembro, texto del testimonio, resultado logrado y una valoración visual.
3. THE Transformation_Section SHALL utilizar comillas estilizadas y tipografía diferenciada para el texto del testimonio.
4. WHEN los testimonios entran en el Viewport durante el scroll, THE Transformation_Section SHALL animar cada testimonio con una Animación_Entrada de fade-in.
5. WHEN el ancho de pantalla es menor o igual al Breakpoint_Mobile, THE Transformation_Section SHALL mostrar los testimonios en una columna única.
6. WHEN el ancho de pantalla corresponde al Breakpoint_Desktop, THE Transformation_Section SHALL mostrar los testimonios en una cuadrícula de 3 columnas.

### Requisito 8: Galería de Imágenes

**User Story:** Como visitante, quiero ver fotografías del gimnasio con estética aspiracional, para que pueda visualizar el ambiente y las instalaciones antes de visitarlo.

#### Criterios de Aceptación

1. THE Gallery_Section SHALL mostrar las imágenes disponibles del gimnasio (archivos pexels-amar-*.jpg) en una cuadrícula.
2. THE Gallery_Section SHALL optimizar todas las imágenes con next/image utilizando lazy loading.
3. THE Gallery_Section SHALL mostrar las imágenes en una cuadrícula de estilo masonry o grid asimétrico para crear dinamismo visual.
4. WHEN una imagen de la galería entra en el Viewport durante el scroll, THE Gallery_Section SHALL animar la imagen con un efecto fade-in.
5. WHEN el usuario posiciona el cursor sobre una imagen, THE Gallery_Section SHALL aplicar un efecto de zoom sutil (máximo 1.1) con transición suave.
6. WHEN el ancho de pantalla es menor o igual al Breakpoint_Mobile, THE Gallery_Section SHALL mostrar las imágenes en una cuadrícula de 1 o 2 columnas.
7. WHEN el ancho de pantalla corresponde al Breakpoint_Desktop, THE Gallery_Section SHALL mostrar las imágenes en una cuadrícula de 3 o 4 columnas.

### Requisito 9: CTA Final de Conversión

**User Story:** Como visitante que ha recorrido toda la página, quiero ver un llamado a la acción final convincente, para que tome la decisión de unirme al gimnasio.

#### Criterios de Aceptación

1. THE CTA_Final_Section SHALL mostrar un headline motivacional en Oswald uppercase con tamaño prominente.
2. THE CTA_Final_Section SHALL mostrar un subtítulo que refuerce el mensaje de transformación.
3. THE CTA_Final_Section SHALL mostrar un botón CTA principal con fondo #D62828 y texto orientado a la conversión.
4. THE CTA_Final_Section SHALL utilizar un fondo con imagen o gradiente que genere contraste y urgencia visual.
5. WHEN el CTA_Final_Section entra en el Viewport, THE CTA_Final_Section SHALL animar el headline y el botón con una Animación_Entrada.
6. WHEN el usuario posiciona el cursor sobre el botón CTA, THE CTA_Final_Section SHALL cambiar el color de fondo del botón a #9E1B1B.

### Requisito 10: Footer

**User Story:** Como visitante, quiero encontrar información de contacto y enlaces relevantes en el pie de página, para que pueda comunicarme con el gimnasio o acceder a información adicional.

#### Criterios de Aceptación

1. THE Footer SHALL mostrar el logotipo del gimnasio, información de contacto (dirección, teléfono, email), enlaces a secciones de la página y enlaces a redes sociales.
2. THE Footer SHALL utilizar el color de fondo #0F0F10 con un borde superior sutil para separación visual.
3. THE Footer SHALL mostrar los iconos de redes sociales utilizando Lucide React.
4. WHEN el ancho de pantalla es menor o igual al Breakpoint_Mobile, THE Footer SHALL reorganizar el contenido en una columna única centrada.
5. WHEN el ancho de pantalla corresponde al Breakpoint_Desktop, THE Footer SHALL mostrar el contenido en una cuadrícula de 3 o 4 columnas.

### Requisito 11: Animaciones y Rendimiento

**User Story:** Como visitante, quiero que las animaciones sean rápidas, elegantes y no afecten el rendimiento de la página, para que la experiencia de navegación sea fluida en cualquier dispositivo.

#### Criterios de Aceptación

1. THE Landing_Page SHALL utilizar Framer Motion para todas las animaciones de entrada y transiciones.
2. THE Landing_Page SHALL limitar la duración de cada Animación_Entrada a un máximo de 0.8 segundos.
3. THE Landing_Page SHALL utilizar la propiedad CSS will-change únicamente durante las animaciones activas.
4. THE Landing_Page SHALL implementar lazy loading para todas las imágenes fuera del Viewport inicial mediante next/image.
5. WHEN un elemento con Animación_Entrada entra en el Viewport, THE Landing_Page SHALL activar la animación una sola vez (no repetir al re-entrar).
6. THE Landing_Page SHALL utilizar Stagger_Animation con un retraso entre elementos de 0.1 a 0.2 segundos en las cuadrículas.

### Requisito 12: Diseño Responsive

**User Story:** Como visitante, quiero que la página se vea y funcione perfectamente en cualquier dispositivo, para que pueda explorar el gimnasio desde mi móvil, tablet o computadora.

#### Criterios de Aceptación

1. THE Landing_Page SHALL implementar un diseño mobile-first que se adapte a Breakpoint_Mobile, Breakpoint_Tablet y Breakpoint_Desktop.
2. WHEN el ancho de pantalla es menor o igual al Breakpoint_Mobile, THE Landing_Page SHALL ajustar todos los tamaños de fuente de headings a un mínimo de 24px y un máximo de 36px.
3. WHEN el ancho de pantalla es menor o igual al Breakpoint_Mobile, THE Landing_Page SHALL mostrar todos los botones CTA con ancho completo (100%).
4. THE Landing_Page SHALL mantener un padding horizontal mínimo de 16px en Breakpoint_Mobile y 32px en Breakpoint_Desktop.
5. THE Landing_Page SHALL asegurar que todos los elementos interactivos (botones, enlaces) tengan un área de toque mínima de 44x44 píxeles en dispositivos táctiles.
