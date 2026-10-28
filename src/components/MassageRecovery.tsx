import { Icon, SectionHeading } from "./ui";

interface MassageRecoveryProps {
  phone?: string;
}

const treatments = [
  "Therapeutic massage",
  "Cupping therapy",
  "Muscle Stimulation Therapy (EMS)",
  "Heat and cold therapy",
  "Muscle scraping (Gua Sha)",
  "Hot Stone massage",
  "Tuning forks",
  "Sound therapy",
];

const pricing = [
  { duration: "30 Minutes", price: "$35" },
  { duration: "1 Hour", price: "$75" },
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

const guidelines = [
  "Must call ahead before coming",
  "Walk-ins not guaranteed",
  "Services are by appointment; based in Stone Mountain — address shared after booking",
  "Mobile massage & recovery available upon request",
  "Mobile pricing may vary based on travel distance",
];

export default function MassageRecovery({
  phone = "(470) 399-3351",
}: MassageRecoveryProps) {
  const phoneDigits = phone.replace(/\D/g, "");

  return (
    <section id="massage" className="py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Therapeutic Bodywork & Recovery"
          title="Massage & recovery"
          intro="Professional massage services designed to relieve tension, reduce pain, and support overall body recovery."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Treatment menu */}
          <div className="rounded-3xl bg-forest text-ivory p-8 lg:p-12 relative overflow-hidden">
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-clay/20 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="car" className="w-5 h-5 text-clay" />
                <p className="text-xs tracking-[0.25em] uppercase text-moss-light">
                  Mobile Services
                </p>
              </div>
              <h3 className="font-display text-4xl font-medium mb-10">
                Massage menu
              </h3>
              <ul className="space-y-6">
                {pricing.map((p) => (
                  <li key={p.duration} className="flex items-end">
                    <span className="font-display text-2xl">
                      Therapeutic Massage
                      <span className="block text-sm font-sans text-ivory/60 mt-1">
                        {p.duration}
                      </span>
                    </span>
                    <span className="leader !border-ivory/30" />
                    <span className="font-display text-3xl text-clay">
                      {p.price}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm italic text-ivory/60">
                *Driving fee applies based on distance.
              </p>
              <a
                href={`tel:+1${phoneDigits}`}
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-ivory text-forest px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-sand transition-colors"
              >
                <Icon name="phone" className="w-4 h-4" />
                Book with Ali: {phone}
              </a>
            </div>
          </div>

          {/* Treatments */}
          <div className="rounded-3xl bg-sand p-8 lg:p-12">
            <p className="text-xs tracking-[0.25em] uppercase text-clay-dark mb-2">
              What&apos;s offered
            </p>
            <h3 className="font-display text-4xl font-medium text-forest mb-8">
              Available treatments
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {treatments.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 bg-ivory rounded-2xl px-5 py-4 text-forest"
                >
                  <Icon name="leaf" className="w-4 h-4 text-clay flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits / Perfect for / Guidelines */}
        <div className="mt-20 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl font-medium text-forest mb-6 pb-4 border-b border-sand-dark">
              Benefits of Massage Therapy
            </h3>
            <ul className="check-list space-y-3 text-stone">
              {massageBenefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl font-medium text-forest mb-6 pb-4 border-b border-sand-dark">
              Perfect For
            </h3>
            <ul className="check-list space-y-3 text-stone">
              {perfectFor.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl font-medium text-forest mb-6 pb-4 border-b border-sand-dark">
              Massage Guidelines
            </h3>
            <ul className="check-list space-y-3 text-stone">
              {guidelines.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Appointment notice */}
        <div className="mt-16 rounded-3xl border border-sand-dark p-8 flex flex-col md:flex-row md:items-center gap-6">
          <span className="w-12 h-12 rounded-full bg-clay/15 text-clay-dark flex items-center justify-center flex-shrink-0">
            <Icon name="clock" className="w-6 h-6" />
          </span>
          <div className="flex-1">
            <p className="font-display text-2xl text-forest font-medium">
              Appointment required
            </p>
            <p className="text-stone mt-1">
              Please call before coming. All massage sessions must be scheduled
              in advance before arrival. Walk-ins are not guaranteed.
            </p>
          </div>
          <p className="text-sm italic text-stone md:max-w-xs md:text-right">
            Based in Stone Mountain. By appointment Monday through Sunday.
            Mobile services also available.
          </p>
        </div>
      </div>
    </section>
  );
}
