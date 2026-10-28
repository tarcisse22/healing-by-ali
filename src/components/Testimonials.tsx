import { type TestimonialItem, DEFAULT_TESTIMONIALS } from "@/lib/defaults";
import ReviewForm from "./ReviewForm";
import { SectionHeading, Stars } from "./ui";

interface TestimonialsProps {
  testimonials?: TestimonialItem[];
}

export default function Testimonials({ testimonials: testimonialsData }: TestimonialsProps) {
  const testimonials = testimonialsData || DEFAULT_TESTIMONIALS;
  return (
    <section id="testimonials" className="py-28 bg-forest text-ivory relative overflow-hidden">
      <div
        className="absolute top-1/3 -left-40 w-[30rem] h-[30rem] rounded-full bg-moss/20 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          dark
          eyebrow="Kind Words"
          title="What clients say"
          intro="Hear from people who have trained and recovered with Healing by Ali."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              className="bg-ivory text-ink rounded-3xl p-8 lg:p-10 flex flex-col"
            >
              <span
                className="font-display text-7xl leading-none text-clay/40 -mb-4"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="font-display text-xl leading-relaxed text-forest flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-sand-dark flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium text-forest">{t.name}</p>
                  <p className="text-xs tracking-wider uppercase text-stone mt-1">
                    {t.service}
                  </p>
                </div>
                <Stars count={t.stars} />
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20">
          <ReviewForm />
        </div>
      </div>
    </section>
  );
}
