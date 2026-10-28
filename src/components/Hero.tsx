import { type ContactInfo } from "@/lib/defaults";
import { Icon } from "./ui";

interface HeroProps {
  contact?: ContactInfo;
}

const offerings = [
  { label: "Personal Training", icon: "spark" as const },
  { label: "Recovery & Mobility", icon: "leaf" as const },
  { label: "Therapeutic Massage", icon: "hand" as const },
];

export default function Hero({ contact }: HeroProps) {
  const phone = contact?.phone || "(470) 399-3351";
  const phoneDigits = phone.replace(/\D/g, "");
  const instagram = contact?.instagram || "@healingbyali_coach";
  const instagramUrl =
    contact?.instagram_url || "https://instagram.com/healingbyali_coach";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-forest text-ivory">
      {/* Soft background glow + botanical line art */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-clay/25 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-moss/25 blur-[120px]" />
        <svg
          className="absolute -left-24 bottom-0 w-[28rem] h-[28rem] text-ivory/[0.06]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        >
          <path d="M20 190C60 140 90 90 110 20" />
          <path d="M45 160c-20-10-30-30-28-52 20 6 30 26 28 52z" />
          <path d="M62 132c22-6 34-24 34-46-22 4-34 22-34 46z" />
          <path d="M78 104c-18-12-24-32-20-52 18 10 26 30 20 52z" />
          <path d="M94 76c20-8 30-26 28-46-20 6-30 24-28 46z" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-6 pt-36 pb-24 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div className="space-y-9">
          <p className="eyebrow !text-moss-light">
            Strength &amp; Conditioning Specialist
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.25rem] leading-[1.02] font-medium">
            Move better.
            <br />
            Feel better.
            <br />
            <em className="text-clay font-normal">Perform better.</em>
          </h1>
          <p className="text-lg text-ivory/75 leading-relaxed max-w-xl">
            Professional training sessions designed to help improve strength,
            flexibility, mobility, and overall physical performance &mdash;
            paired with recovery treatments to relieve pain, soreness, and
            tightness.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#location"
              className="inline-flex items-center gap-2 rounded-full bg-clay px-8 py-4 text-sm font-medium tracking-wide text-ivory hover:bg-clay-dark transition-colors"
            >
              Book Your Session
              <Icon name="arrow" className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="rounded-full border border-ivory/40 px-8 py-4 text-sm font-medium tracking-wide text-ivory hover:bg-ivory hover:text-forest transition-colors"
            >
              View Services
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 text-sm text-ivory/70">
            <a
              href={`tel:+1${phoneDigits}`}
              className="flex items-center gap-2 hover:text-ivory transition-colors"
            >
              <Icon name="phone" className="w-4 h-4" />
              {phone}
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-ivory transition-colors"
            >
              <Icon name="instagram" className="w-4 h-4" />
              {instagram}
            </a>
            <span className="flex items-center gap-2">
              <Icon name="pin" className="w-4 h-4" />
              Stone Mountain, GA &amp; mobile
            </span>
          </div>
        </div>

        {/* Arch card */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 arch border border-ivory/20 translate-x-5 translate-y-5" />
            <div className="relative arch bg-gradient-to-b from-sand to-ivory text-ink px-10 pt-24 pb-12 shadow-2xl shadow-black/30">
              <div className="mx-auto w-20 h-20 rounded-full bg-forest text-ivory flex items-center justify-center mb-8">
                <Icon name="leaf" className="w-9 h-9" />
              </div>
              <p className="text-center font-display text-3xl text-forest font-medium">
                Healing by Ali
              </p>
              <p className="text-center text-stone mt-3 leading-relaxed">
                Helping your body move, recover, and perform better.
              </p>
              <ul className="mt-10 space-y-4">
                {offerings.map((o) => (
                  <li
                    key={o.label}
                    className="flex items-center gap-4 border-t border-sand-dark pt-4"
                  >
                    <span className="w-9 h-9 rounded-full bg-clay/15 text-clay-dark flex items-center justify-center">
                      <Icon name={o.icon} className="w-4.5 h-4.5" />
                    </span>
                    <span className="text-forest font-medium">{o.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-ivory/10 bg-forest/60 backdrop-blur-sm hidden md:block">
        <div className="mx-auto max-w-7xl px-6 py-5 grid grid-cols-3 gap-6 text-sm text-ivory/80">
          <p className="flex items-center gap-3">
            <Icon name="phone" className="w-4 h-4 text-clay" />
            Free 10-minute phone consultation
          </p>
          <p className="flex items-center gap-3 justify-center">
            <Icon name="calendar" className="w-4 h-4 text-clay" />
            No deposit for your first visit
          </p>
          <p className="flex items-center gap-3 justify-end">
            <Icon name="car" className="w-4 h-4 text-clay" />
            Mobile sessions available
          </p>
        </div>
      </div>
    </section>
  );
}
