import { type ServiceItem } from "@/lib/defaults";
import { Icon, SectionHeading } from "./ui";

interface ServicesProps {
  services?: ServiceItem[];
  phone?: string;
}

const serviceIcons = ["spark", "leaf", "clipboard"] as const;

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

const guidelines = [
  "Come ready to train (proper clothing, hydration)",
  "Be on time — your session starts at your scheduled time",
  "Communicate any injuries or limitations beforehand",
  "Mobile training available upon request",
];

export default function Services({
  services: serviceData,
  phone = "(470) 399-3351",
}: ServicesProps) {
  const services = serviceData || [];
  const phoneDigits = phone.replace(/\D/g, "");

  return (
    <section id="services" className="py-28 bg-sand">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Personal Training"
          title="Training & recovery services"
          intro="Sessions focus on building strength, improving movement, and supporting recovery — tailored to beginners and athletes alike."
        />

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="group bg-ivory rounded-3xl p-8 lg:p-10 flex flex-col hover:-translate-y-1 hover:shadow-2xl hover:shadow-forest/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="w-14 h-14 rounded-full bg-forest text-ivory flex items-center justify-center group-hover:bg-clay transition-colors">
                  <Icon
                    name={serviceIcons[i % serviceIcons.length]}
                    className="w-6 h-6"
                  />
                </span>
                <span className="font-display text-5xl text-sand-dark leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-3xl font-medium text-forest leading-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-clay-dark font-medium tracking-wide">
                {service.price}
              </p>
              <ul className="check-list mt-6 space-y-3 text-stone flex-1">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {service.note && (
                <p className="mt-6 pt-5 border-t border-sand-dark text-sm italic text-stone">
                  {service.note}
                </p>
              )}
            </article>
          ))}
        </div>

        {/* Consultation + appointment band */}
        <div className="mt-6 rounded-3xl bg-forest text-ivory p-8 lg:p-12 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div className="space-y-3">
            <p className="text-xs tracking-[0.25em] uppercase text-moss-light">
              Not sure where to start?
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-medium">
              Free 10-minute phone consultation
            </h3>
            <p className="text-ivory/75 leading-relaxed max-w-xl">
              Call to discuss your goals and find the right plan for you.
              Appointment required &mdash; please call before coming. All
              sessions must be scheduled in advance before arrival.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
            <a
              href={`tel:+1${phoneDigits}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-clay px-8 py-4 text-sm font-medium tracking-wide hover:bg-clay-dark transition-colors"
            >
              <Icon name="phone" className="w-4 h-4" />
              Call {phone} to book
            </a>
          </div>
        </div>

        {/* Benefits / Perfect for / Guidelines */}
        <div className="mt-20 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl font-medium text-forest mb-6 pb-4 border-b border-sand-dark">
              Benefits of Training
            </h3>
            <ul className="check-list space-y-3 text-stone">
              {benefits.map((b) => (
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
              Training Guidelines
            </h3>
            <ul className="check-list space-y-3 text-stone">
              {guidelines.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
