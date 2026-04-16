"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? "bg-gym-dark/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-oswald font-bold text-xl uppercase text-gym-text tracking-wider"
        >
          PREMIUM GYM
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm uppercase tracking-wider text-gym-text-secondary hover:text-gym-text transition cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary">Únete ahora</Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-gym-text cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gym-dark/95 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm uppercase tracking-wider text-gym-text-secondary hover:text-gym-text transition text-left py-2 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <Button variant="primary" fullWidth>
              Únete ahora
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
