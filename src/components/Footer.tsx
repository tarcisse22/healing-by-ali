import { type ContactInfo } from "@/lib/defaults";

interface FooterProps {
  contact?: ContactInfo;
}

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Training" },
  { href: "#massage", label: "Massage & Recovery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#policies", label: "Policies" },
  { href: "#faq", label: "FAQ" },
  { href: "#location", label: "Book" },
  { href: "#contact", label: "Contact" },
];

export default function Footer({ contact }: FooterProps) {
  const phone = contact?.phone || "(470) 399-3351";
  const phoneDigits = phone.replace(/\D/g, "");
  const instagram = contact?.instagram || "@healingbyali_coach";
  const instagramUrl =
    contact?.instagram_url || "https://instagram.com/healingbyali_coach";

  return (
    <footer className="bg-forest text-ivory/70 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-12">
          <div>
            <p className="font-display text-4xl font-medium text-ivory">
              Healing by Ali
            </p>
            <p className="mt-4 max-w-sm leading-relaxed">
              Helping your body move, recover, and perform better. Personal
              training, recovery, and therapeutic massage by Ali Diakite.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-moss-light mb-5">
              Explore
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-ivory transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-moss-light mb-5">
              Contact
            </p>
            <div className="space-y-2.5 text-sm">
              <a
                href={`tel:+1${phoneDigits}`}
                className="block hover:text-ivory transition-colors"
              >
                {phone}
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-ivory transition-colors"
              >
                {instagram}
              </a>
              <p>Based in Stone Mountain, GA &mdash; by appointment</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/50">
          <span>&copy; {new Date().getFullYear()} Healing by Ali. All rights reserved.</span>
          <a href="/admin" className="text-ivory/40 hover:text-ivory transition-colors">
            Owner Login
          </a>
        </div>
      </div>
    </footer>
  );
}
