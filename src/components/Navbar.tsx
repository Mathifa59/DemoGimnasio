"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gym-dark/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-oswald font-bold text-xl uppercase text-gym-text tracking-wider">
          <span className="text-gym-red">PREMIUM</span> GYM
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-xs uppercase tracking-widest text-gym-text-secondary hover:text-gym-text transition-colors cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gym-red hover:after:w-full after:transition-all"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" href={WHATSAPP_URL} size="sm">
            <MessageCircle size={16} />
            WhatsApp
          </Button>
          <Button variant="primary" href="#pricing" size="sm">
            Empieza hoy
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-gym-text cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gym-dark/98 backdrop-blur-xl border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm uppercase tracking-wider text-gym-text-secondary hover:text-gym-text transition text-left py-2 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/5">
              <Button variant="primary" fullWidth href="#pricing">
                Empieza hoy
              </Button>
              <Button variant="whatsapp" fullWidth href={WHATSAPP_URL}>
                <MessageCircle size={16} />
                Hablar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
