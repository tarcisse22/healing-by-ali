export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-cream-light via-cream to-cream-dark pt-20">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold-light/20 blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-sage-light/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-gold-dark font-semibold tracking-widest uppercase text-sm">
              Strength & Conditioning Specialist
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-bold text-warm-brown-dark leading-tight">
              Move Better.
              <br />
              Feel Better.
              <br />
              <span className="text-gold-dark">Perform Better.</span>
            </h1>
          </div>
          <p className="text-lg text-warm-brown leading-relaxed max-w-lg">
            Professional training sessions designed to help improve strength,
            flexibility, mobility, and overall physical performance. Paired with
            recovery treatments to relieve pain, soreness, and tightness.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-full bg-warm-brown-dark px-8 py-3.5 text-base font-semibold text-cream-light hover:bg-warm-brown transition-colors shadow-lg shadow-warm-brown-dark/20"
            >
              View Services
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-warm-brown-dark px-8 py-3.5 text-base font-semibold text-warm-brown-dark hover:bg-warm-brown-dark hover:text-cream-light transition-colors"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex items-center gap-2 text-warm-brown-light">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <a
              href="https://instagram.com/healingbyali_coach"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-warm-brown-dark transition-colors"
            >
              @healingbyali_coach
            </a>
          </div>
        </div>

        {/* Right side: decorative card */}
        <div className="hidden md:flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-light/40 to-sage-light/40 rounded-3xl rotate-3 scale-105" />
            <div className="relative bg-cream-light rounded-3xl p-10 shadow-2xl shadow-warm-brown/10 space-y-6 max-w-sm">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gold-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-warm-brown-dark">
                Healing by Ali
              </h3>
              <p className="text-warm-brown leading-relaxed">
                Helping your body move, recover, and perform better.
              </p>
              <div className="space-y-3 text-sm text-warm-brown-light">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sage" />
                  Personal Training
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  Recovery & Mobility
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-warm-brown-light" />
                  Therapeutic Massage
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
