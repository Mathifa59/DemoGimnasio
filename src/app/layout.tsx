import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Gym | Transforma tu cuerpo, transforma tu vida",
  description:
    "Gimnasio premium con equipamiento de última generación, coaches expertos y programas de entrenamiento personalizados. Fuerza, Cross Training, Funcional y HIIT.",
  keywords: [
    "gimnasio premium",
    "entrenamiento personal",
    "crossfit",
    "HIIT",
    "fuerza",
    "fitness",
  ],
  openGraph: {
    title: "Premium Gym | Transforma tu cuerpo, transforma tu vida",
    description:
      "Gimnasio premium con equipamiento de última generación, coaches expertos y programas personalizados.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${oswald.variable} ${inter.variable}`}>
      <body className="font-inter bg-gym-dark text-gym-text antialiased">
        {children}
      </body>
    </html>
  );
}
