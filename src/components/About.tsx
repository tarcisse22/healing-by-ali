export default function About() {
  return (
    <section id="about" className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: About content */}
          <div className="space-y-6">
            <p className="text-gold-dark font-semibold tracking-widest uppercase text-sm">
              About Ali
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-warm-brown-dark">
              Passionate About Your Performance
            </h2>
            <div className="space-y-4 text-warm-brown leading-relaxed">
              <p>
                Hi, I&apos;m Ali Diakite — a Strength &amp; Conditioning
                Specialist dedicated to helping athletes and everyday clients
                improve performance, prevent injuries, and recover smarter.
              </p>
              <p>
                Currently studying Kinesiology and Health at Georgia State
                University, I bring hands-on experience from Wittenberg
                University, where I studied Exercise Science and interned in
                athlete-specific program development.
              </p>
              <p>
                My focus is on building strength, stamina, and mobility through
                personalized training plans, while also offering recovery
                treatments like Muscle Stimulation Therapy (EMS), cupping, and targeted stretching to
                relieve pain, soreness, and tightness.
              </p>
              <p className="font-semibold text-warm-brown-dark italic">
                My mission is simple: help you move better, feel better, and
                perform at your best.
              </p>
            </div>
          </div>

          {/* Right: Credentials card */}
          <div className="space-y-6">
            <div className="bg-cream rounded-2xl p-8 shadow-lg shadow-warm-brown/5">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-brown-dark mb-6">
                Education & Certifications
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-gold-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-warm-brown-dark">
                      Georgia State University
                    </p>
                    <p className="text-sm text-warm-brown-light">
                      Associate Degree in Kinesiology &amp; Health
                    </p>
                    <p className="text-xs text-gold-dark">
                      Expected Summer 2026
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-gold-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-warm-brown-dark">
                      Wittenberg University
                    </p>
                    <p className="text-sm text-warm-brown-light">
                      Exercise Science &amp; Athlete Program Development
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-sage"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-warm-brown-dark">
                      Personal Training Certification
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-sage"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-warm-brown-dark">
                      CPR / Basic Life Support (BLS)
                    </p>
                    <p className="text-sm text-warm-brown-light">
                      Georgia State University
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-sage"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-warm-brown-dark">
                      Entrepreneurship Certificate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
