"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#massage", label: "Massage & Recovery" },
  { href: "#policies", label: "Policies" },
  { href: "#faq", label: "FAQ" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-off-white/90 backdrop-blur-md border-b border-cream-dark/40">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-brown-dark tracking-wide">
            Healing by Ali
          </span>
          <span className="text-xs text-warm-brown-light tracking-widest uppercase">
            Training & Recovery
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-warm-brown hover:text-warm-brown-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-warm-brown-dark px-5 py-2 text-sm font-semibold text-cream-light hover:bg-warm-brown transition-colors"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-warm-brown-dark transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-warm-brown-dark transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-warm-brown-dark transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-off-white border-t border-cream-dark/30 px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-warm-brown hover:text-warm-brown-dark font-medium border-b border-cream-dark/20 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block text-center rounded-full bg-warm-brown-dark px-5 py-3 text-sm font-semibold text-cream-light"
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
}
