import { type ServiceItem } from "@/lib/defaults";

interface ServicesProps {
  services?: ServiceItem[];
}

const serviceIcons = [
  <svg
    key="icon-0"
    className="w-8 h-8"
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
  </svg>,
  <svg
    key="icon-1"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>,
  <svg
    key="icon-2"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
    />
  </svg>,
];

const accents = [
  { accent: "bg-gold/20", textAccent: "text-gold-dark" },
  { accent: "bg-sage/20", textAccent: "text-sage" },
  { accent: "bg-warm-brown/10", textAccent: "text-warm-brown" },
];

const benefits = [
  "Improves strength and endurance",
  "Increases flexibility and mobility",
  "Helps prevent injuries",
  "Supports muscle recovery and rehabilitation",
  "Promotes overall physical health and wellness",
];

const perfectFor = [
  "Strength building",
  "Injury prevention",
  "Muscle recovery",
  "Flexibility improvement",
  "Fitness beginners or athletes",
];

export default function Services({ services: serviceData }: ServicesProps) {
  const displayServices = (serviceData || []).map((s, i) => ({
    ...s,
    icon: serviceIcons[i % serviceIcons.length],
    ...(accents[i % accents.length]),
  }));

  return (
    <section id="services" className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-gold-dark font-semibold tracking-widest uppercase text-sm">
            What We Offer
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-warm-brown-dark">
            Personal Training &amp; Recovery Services
          </h2>
          <p className="text-warm-brown max-w-2xl mx-auto text-lg">
            Sessions focus on building strength, improving movement, and
            supporting recovery.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {displayServices.map((service) => (
            <div
              key={service.title}
              className="bg-off-white rounded-2xl p-8 shadow-lg shadow-warm-brown/5 hover:shadow-xl hover:shadow-warm-brown/10 transition-shadow"
            >
              <div
                className={`w-14 h-14 rounded-xl ${service.accent} flex items-center justify-center ${service.textAccent} mb-6`}
              >
                {service.icon}
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-brown-dark mb-2">
                {service.title}
              </h3>
              <p className="text-lg font-bold text-gold-dark mb-4">
                {service.price}
              </p>
              <ul className="space-y-2 text-warm-brown">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold-dark mt-1 flex-shrink-0">
                      &bull;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              {service.note && (
                <p className="mt-4 text-sm italic text-warm-brown-light">
                  {service.note}
                </p>
              )}
            </div>
          ))}
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
            Please call before coming. All sessions must be scheduled in advance before arrival.
          </p>
          <a href="tel:+14703993351" className="inline-block mt-3 font-semibold text-gold-dark hover:text-warm-brown-dark transition-colors">
            Call (470) 399-3351 to book
          </a>
        </div>

        {/* Free Consultation */}
        <div className="bg-sage-light/20 rounded-2xl p-8 mb-12 text-center">
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-brown-dark mb-2">
            Free 10-Minute Phone Consultation
          </h3>
          <p className="text-warm-brown mb-4">
            Not sure where to start? Call for a free consultation to discuss your goals and find the right plan for you.
          </p>
          <a href="tel:+14703993351" className="rounded-full bg-warm-brown-dark px-6 py-2.5 text-sm font-semibold text-cream-light hover:bg-warm-brown transition-colors">
            Call Now
          </a>
        </div>

        {/* Training-Specific Rules */}
        <div className="bg-off-white rounded-2xl p-8 shadow-md mb-12">
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-brown-dark mb-4">
            Training Guidelines
          </h3>
          <ul className="check-list space-y-3 text-warm-brown">
            <li>Come ready to train (proper clothing, hydration)</li>
            <li>Be on time — your session starts at your scheduled time</li>
            <li>Communicate any injuries or limitations beforehand</li>
            <li>Mobile training available upon request</li>
          </ul>
        </div>

        {/* Benefits and Perfect For */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-off-white rounded-2xl p-8 shadow-md">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-warm-brown-dark mb-6">
              Benefits of Training
            </h3>
            <ul className="check-list space-y-3 text-warm-brown">
              {benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="bg-off-white rounded-2xl p-8 shadow-md">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-warm-brown-dark mb-6">
              Perfect For
            </h3>
            <ul className="check-list space-y-3 text-warm-brown">
              {perfectFor.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
