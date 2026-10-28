"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Training" },
  { href: "#massage", label: "Massage & Recovery" },
  { href: "#policies", label: "Policies" },
  { href: "#faq", label: "FAQ" },
  { href: "#location", label: "Book" },
];

interface HeaderProps {
  phone?: string;
}

export default function Header({ phone = "(470) 399-3351" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const phoneDigits = phone.replace(/\D/g, "");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || mobileOpen;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement bar */}
      <div
        className={`bg-forest text-ivory/80 text-xs tracking-wide transition-all duration-300 overflow-hidden ${scrolled ? "max-h-0" : "max-h-10"}`}
      >
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-center sm:justify-between gap-4">
          <span>By appointment only &middot; Mobile services available</span>
          <a
            href={`tel:+1${phoneDigits}`}
            className="hidden sm:inline hover:text-ivory transition-colors"
          >
            Call to book: {phone}
          </a>
        </div>
      </div>

      <div
        className={`transition-colors duration-300 ${solid ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"}`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex flex-col leading-none">
            <span
              className={`font-display text-2xl md:text-[1.7rem] font-semibold tracking-wide transition-colors ${solid ? "text-forest" : "text-ivory"}`}
            >
              Healing by Ali
            </span>
            <span
              className={`text-[0.65rem] tracking-[0.3em] uppercase mt-1 transition-colors ${solid ? "text-clay-dark" : "text-moss-light"}`}
            >
              Training &middot; Recovery &middot; Massage
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors ${solid ? "text-ink/80 hover:text-clay-dark" : "text-ivory/85 hover:text-ivory"}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#location"
              className={`rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-colors ${solid ? "bg-forest text-ivory hover:bg-forest-light" : "bg-ivory text-forest hover:bg-sand"}`}
            >
              Book a Session
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-0.5 w-6 transition-all ${solid ? "bg-forest" : "bg-ivory"} ${
                  mobileOpen
                    ? i === 0
                      ? "rotate-45 translate-y-2"
                      : i === 1
                        ? "opacity-0"
                        : "-rotate-45 -translate-y-2"
                    : ""
                }`}
              />
            ))}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden bg-ivory border-t border-sand-dark px-6 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3.5 text-ink/80 hover:text-clay-dark border-b border-sand-dark/60 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:+1${phoneDigits}`}
              onClick={() => setMobileOpen(false)}
              className="mt-5 block text-center rounded-full bg-forest px-5 py-3 text-sm font-medium text-ivory"
            >
              Call {phone}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
