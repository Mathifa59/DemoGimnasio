import { MapPin, Phone, Mail } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: TwitterIcon, label: "Twitter", href: "#" },
  { icon: YoutubeIcon, label: "Youtube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gym-dark border-t border-white/5 py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <span className="font-oswald uppercase font-bold text-xl text-gym-text">
              <span className="text-gym-red">PREMIUM</span> GYM
            </span>
            <p className="text-sm text-gym-text-secondary mt-3 leading-relaxed">
              Transforma tu cuerpo, transforma tu vida. Desde 2018 ayudando a más de 2,500 personas a alcanzar sus metas.
            </p>
          </div>

          <div>
            <h3 className="font-oswald uppercase text-sm font-bold text-gym-text mb-4">Navegación</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gym-text-secondary hover:text-gym-red transition">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-oswald uppercase text-sm font-bold text-gym-text mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 justify-center md:justify-start text-sm text-gym-text-secondary">
                <MapPin size={16} className="shrink-0 text-gym-red" /><span>Calle Fitness 123, Madrid</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start text-sm text-gym-text-secondary">
                <Phone size={16} className="shrink-0 text-gym-red" /><span>+34 912 345 678</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start text-sm text-gym-text-secondary">
                <Mail size={16} className="shrink-0 text-gym-red" /><span>info@premiumgym.es</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-oswald uppercase text-sm font-bold text-gym-text mb-4">Síguenos</h3>
            <div className="flex gap-3 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-gym-card border border-white/5 hover:bg-gym-red hover:border-gym-red transition-all duration-300"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-8 text-center text-xs text-gym-text-secondary">
          © 2024 Premium Gym. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
