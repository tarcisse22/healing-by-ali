import { type TestimonialItem, DEFAULT_TESTIMONIALS } from "@/lib/defaults";

interface TestimonialsProps {
  testimonials?: TestimonialItem[];
}

export default function Testimonials({ testimonials: testimonialsData }: TestimonialsProps) {
  const testimonials = testimonialsData || DEFAULT_TESTIMONIALS;
  return (
    <section id="testimonials" className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-gold-dark font-semibold tracking-widest uppercase text-sm">
            What Clients Say
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-warm-brown-dark">
            Testimonials
          </h2>
          <p className="text-warm-brown max-w-2xl mx-auto text-lg">
            Hear from people who have trained and recovered with Healing by Ali.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-cream rounded-2xl p-8 shadow-md space-y-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-warm-brown italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
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
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-warm-brown-dark text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-warm-brown-light">{t.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-warm-brown mb-4">
            Had a session with Ali? We&apos;d love to hear about your
            experience!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeGZu0xABve698WuCk2dw6WGs8knCT1NZgQkiga5jPVHMf6CQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-warm-brown-dark px-8 py-3 text-sm font-semibold text-cream-light hover:bg-warm-brown transition-colors"
            >
              Leave a Review
            </a>
            <a
              href="https://instagram.com/healingbyali_coach"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-warm-brown-dark px-8 py-3 text-sm font-semibold text-warm-brown-dark hover:bg-warm-brown-dark hover:text-cream-light transition-colors"
            >
              DM on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
