import { type ContactInfo } from "@/lib/defaults";
import { Icon } from "./ui";

interface ContactProps {
  contact?: ContactInfo;
}

export default function Contact({ contact }: ContactProps) {
  const phone = contact?.phone || "(470) 399-3351";
  const phoneDigits = phone.replace(/\D/g, "");
  const instagram = contact?.instagram || "@healingbyali_coach";
  const instagramUrl = contact?.instagram_url || "https://instagram.com/healingbyali_coach";

  const cards = [
    { icon: "phone" as const, label: "Call", value: phone, href: `tel:+1${phoneDigits}` },
    { icon: "instagram" as const, label: "Instagram", value: instagram, href: instagramUrl, external: true },
    { icon: "pin" as const, label: "Area", value: "Based in Stone Mountain", href: "#location" },
  ];

  return (
    <section id="contact" className="py-28 bg-ivory">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="eyebrow">Get Started</p>
        <h2 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl font-medium text-forest leading-[1.02]">
          Start your recovery &amp;
          <br className="hidden sm:block" />{" "}
          <em className="text-clay font-normal">performance journey</em> today
        </h2>
        <p className="mt-6 text-lg text-stone max-w-2xl mx-auto leading-relaxed">
          Whether you&apos;re a beginner or an athlete, I&apos;ll create a
          personalized plan to help you reach your goals safely and effectively.
          Reach out to book a session, ask questions, or learn more.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:+1${phoneDigits}`}
            className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-medium tracking-wide text-ivory hover:bg-forest-light transition-colors"
          >
            <Icon name="phone" className="w-4 h-4" />
            Call {phone}
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-forest/30 px-8 py-4 text-sm font-medium tracking-wide text-forest hover:bg-forest hover:text-ivory transition-colors"
          >
            <Icon name="instagram" className="w-4 h-4" />
            DM on Instagram
          </a>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-4 text-left">
          {cards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center gap-4 rounded-2xl bg-sand px-6 py-5 hover:bg-sand-dark transition-colors"
            >
              <span className="w-11 h-11 rounded-full bg-ivory text-clay-dark flex items-center justify-center flex-shrink-0">
                <Icon name={c.icon} />
              </span>
              <span>
                <span className="block text-xs tracking-[0.2em] uppercase text-stone">
                  {c.label}
                </span>
                <span className="block text-forest font-medium mt-0.5">
                  {c.value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
