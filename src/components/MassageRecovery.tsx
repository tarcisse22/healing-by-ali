const treatments = [
  "Therapeutic massage",
  "Cupping therapy",
  "Muscle Stimulation Therapy (EMS)",
  "Heat and cold therapy",
  "Muscle scraping (Gua Sha)",
];

const massageBenefits = [
  "Relieves muscle pain and soreness",
  "Reduces stress and tension",
  "Improves flexibility and mobility",
  "Supports injury recovery",
  "Enhances relaxation and circulation",
];

const perfectFor = [
  "Chronic muscle tension",
  "Stress relief",
  "Recovery from physical activity",
  "General wellness and self-care",
];

export default function MassageRecovery() {
  return (
    <section id="massage" className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-gold-dark font-semibold tracking-widest uppercase text-sm">
            Now Available at Nail Brothers
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-warm-brown-dark">
            Therapeutic Massage &amp; Recovery
          </h2>
          <p className="text-warm-brown max-w-2xl mx-auto text-lg">
            Professional massage services designed to relieve tension, reduce
            pain, and support overall body recovery — now offered inside{" "}
            <strong>Nail Brothers</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Available Treatments */}
          <div className="bg-cream rounded-2xl p-8 shadow-md">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-brown-dark mb-6">
              Available Treatments
            </h3>
            <ul className="check-list space-y-3 text-warm-brown">
              {treatments.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-cream rounded-2xl p-8 shadow-md">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-brown-dark mb-6">
              Benefits of Massage Therapy
            </h3>
            <ul className="check-list space-y-3 text-warm-brown">
              {massageBenefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          {/* Perfect For */}
          <div className="bg-cream rounded-2xl p-8 shadow-md">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-brown-dark mb-6">
              Perfect For
            </h3>
            <ul className="check-list space-y-3 text-warm-brown">
              {perfectFor.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-gold-light/30 rounded-xl">
              <p className="text-sm font-semibold text-warm-brown-dark">
                Booking
              </p>
              <p className="text-sm text-warm-brown mt-1">
                Nail Brothers: <a href="tel:+16784047184" className="text-gold-dark hover:text-warm-brown-dark transition-colors">(678) 404-7184</a>
              </p>
              <p className="text-sm text-warm-brown mt-1">
                Ali (direct): <a href="tel:+14703993351" className="text-gold-dark hover:text-warm-brown-dark transition-colors">(470) 399-3351</a>
              </p>
            </div>
          </div>
        </div>

        {/* Appointment Notice */}
        <div className="bg-gold-light/30 rounded-2xl p-8 mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <svg className="w-6 h-6 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-brown-dark">
              Appointment Required
            </h3>
          </div>
          <p className="text-warm-brown">
            Please call before coming. All massage sessions must be scheduled in advance before arrival.
          </p>
          <p className="text-warm-brown text-sm mt-2">
            Walk-ins are not guaranteed.
          </p>
        </div>

        {/* Massage-Specific Rules */}
        <div className="bg-cream rounded-2xl p-8 shadow-md mb-12">
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-brown-dark mb-4">
            Massage Guidelines
          </h3>
          <ul className="check-list space-y-3 text-warm-brown">
            <li>Must call ahead before coming</li>
            <li>Walk-ins not guaranteed</li>
            <li>In-studio services provided at Nail Brothers location</li>
            <li>Mobile massage &amp; recovery available upon request</li>
            <li>Mobile pricing may vary based on travel distance</li>
          </ul>
        </div>

        <div className="text-center text-warm-brown-light text-sm italic">
          Massage services provided on-site at Nail Brothers. Mobile services also available.
        </div>
      </div>
    </section>
  );
}
