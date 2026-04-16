import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "outline" | "whatsapp" | "ghost";
  href?: string;
  fullWidth?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
}

export default function Button({
  children,
  variant,
  href,
  fullWidth = false,
  className = "",
  size = "md",
  pulse = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] font-semibold uppercase tracking-wider transition-all duration-300 rounded-lg cursor-pointer";

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary: "bg-gym-red text-white hover:bg-gym-red-hover hover:shadow-lg hover:shadow-gym-red/25 hover:-translate-y-0.5",
    outline: "border-2 border-gym-red bg-transparent text-white hover:bg-gym-red hover:shadow-lg hover:shadow-gym-red/25 hover:-translate-y-0.5",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#1da851] hover:shadow-lg hover:shadow-[#25D366]/25 hover:-translate-y-0.5",
    ghost: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${pulse ? "animate-pulse-glow" : ""} ${className}`.trim();

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
