export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-gold-dark font-semibold tracking-widest uppercase text-sm">
            Get Started
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-warm-brown-dark">
            Ready to Train?
          </h2>
          <p className="text-warm-brown max-w-2xl mx-auto text-lg">
            Reach out to book a session, ask questions, or learn more about how
            we can help you reach your goals.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <a
              href="tel:+16784047184"
              className="bg-cream rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                <svg
                  className="w-6 h-6 text-gold-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <p className="font-semibold text-warm-brown-dark">Call</p>
              <p className="text-sm text-warm-brown mt-1">(678) 404-7184</p>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/healingbyali_coach"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cream rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                <svg
                  className="w-6 h-6 text-gold-dark"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <p className="font-semibold text-warm-brown-dark">Instagram</p>
              <p className="text-sm text-warm-brown mt-1">
                @healingbyali_coach
              </p>
            </a>

            {/* Location */}
            <a
              href="#location"
              className="bg-cream rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                <svg
                  className="w-6 h-6 text-gold-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <p className="font-semibold text-warm-brown-dark">Visit</p>
              <p className="text-sm text-warm-brown mt-1">
                Stone Mountain, GA
              </p>
            </a>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-warm-brown-dark to-warm-brown rounded-2xl p-10 text-center text-cream-light space-y-4">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold">
              Start Your Journey Today
            </h3>
            <p className="text-cream-dark max-w-md mx-auto">
              Whether you&apos;re a beginner or an athlete, I&apos;ll create a
              personalized plan to help you reach your goals safely and
              effectively.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href="tel:+16784047184"
                className="rounded-full bg-cream-light px-8 py-3 font-semibold text-warm-brown-dark hover:bg-off-white transition-colors"
              >
                Call (678) 404-7184
              </a>
              <a
                href="https://instagram.com/healingbyali_coach"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-cream-light px-8 py-3 font-semibold text-cream-light hover:bg-cream-light hover:text-warm-brown-dark transition-colors"
              >
                DM on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
