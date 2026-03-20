"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

const NAV_LINKS = [
  { label: "Özellikler", href: "#ozellikler" },
  { label: "Tatlar", href: "#tatlar" },
  { label: "Yaşam Tarzı", href: "#yasam-tarzi" },
  { label: "Satın Al", href: "#satin-al" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-bg/90 backdrop-blur-md border-b border-neon-green/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-2xl tracking-wider text-neon-green text-glow-green"
        >
          BLKOUT
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-text-muted hover:text-neon-green transition-colors duration-300 uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 relative z-50 min-h-[44px] min-w-[44px] items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={clsx(
              "w-6 h-0.5 bg-neon-green transition-all duration-300",
              menuOpen && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={clsx(
              "w-6 h-0.5 bg-neon-green transition-all duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={clsx(
              "w-6 h-0.5 bg-neon-green transition-all duration-300",
              menuOpen && "-rotate-45 -translate-y-2"
            )}
          />
        </button>

        {/* Mobile menu */}
        <div
          className={clsx(
            "fixed inset-0 bg-bg/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden",
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-3xl text-text hover:text-neon-green transition-colors duration-300 uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
