const treatments = [
  "Therapeutic massage",
  "Cupping therapy",
  "Muscle stimulation therapy",
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
                Please inquire at the front desk for availability and session
                details.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-warm-brown-light text-sm italic">
          Massage services provided on-site at Nail Brothers.
        </div>
      </div>
    </section>
  );
}
