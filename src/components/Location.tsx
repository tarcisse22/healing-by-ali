import { type ContactInfo } from "@/lib/defaults";
import { Icon, SectionHeading } from "./ui";

interface LocationProps {
  hours?: Record<string, string>;
  contact?: ContactInfo;
}

const dayOrder = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export default function Location({ hours, contact }: LocationProps) {
  const phone = contact?.phone || "(470) 399-3351";
  const phoneDigits = phone.replace(/\D/g, "");
  const instagram = contact?.instagram || "@healingbyali_coach";
  const instagramUrl =
    contact?.instagram_url || "https://instagram.com/healingbyali_coach";

  const hourEntries = hours
    ? dayOrder
        .filter((day) => hours[day])
        .map((day) => ({
          day: day.charAt(0).toUpperCase() + day.slice(1),
          time: hours[day],
        }))
    : dayOrder.map((day) => ({
        day: day.charAt(0).toUpperCase() + day.slice(1),
        time: "By Appointment",
      }));

  const details = [
    {
      icon: "pin" as const,
      title: "Flexible Appointment Location",
      body: "Appointments are available at a private location or through mobile service. The exact appointment location is provided after your booking is confirmed.",
    },
    {
      icon: "car" as const,
      title: "Mobile Service Available",
      body: "Prefer to receive your session at your location? Mobile appointments are available. Travel fees may apply depending on distance.",
    },
  ];

  return (
    <section id="location" className="py-28 bg-sand">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Appointments"
          title="Book your session"
          intro="All services are available by appointment Monday through Sunday. Sessions are designed to provide a private, personalized experience tailored to your needs."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Hours */}
          <div className="bg-ivory rounded-3xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="clock" className="w-5 h-5 text-clay" />
              <h3 className="font-display text-2xl font-medium text-forest">
                Availability
              </h3>
            </div>
            <dl className="divide-y divide-sand-dark">
              {hourEntries.map((entry) => (
                <div
                  key={entry.day}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <dt className="text-forest font-medium">{entry.day}</dt>
                  <dd className="text-stone">{entry.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-stone">
              By appointment only &mdash; please book in advance so your time
              can be reserved.
            </p>
          </div>

          {/* Details */}
          <div className="bg-ivory rounded-3xl p-8 lg:p-10 space-y-8">
            {details.map((d) => (
              <div key={d.title} className="flex gap-4">
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-sand text-clay-dark flex items-center justify-center">
                  <Icon name={d.icon} />
                </span>
                <div>
                  <p className="font-display text-xl font-medium text-forest">
                    {d.title}
                  </p>
                  <p className="text-stone text-sm leading-relaxed mt-1">
                    {d.body}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-11 h-11 rounded-full bg-sand text-clay-dark flex items-center justify-center">
                <Icon name="phone" />
              </span>
              <div>
                <p className="font-display text-xl font-medium text-forest">
                  Phone &amp; Instagram
                </p>
                <a
                  href={`tel:+1${phoneDigits}`}
                  className="block text-sm text-stone hover:text-clay-dark transition-colors mt-1"
                >
                  {phone}
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-stone hover:text-clay-dark transition-colors"
                >
                  {instagram}
                </a>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-forest text-ivory rounded-3xl p-8 lg:p-10 flex flex-col">
            <p className="text-xs tracking-[0.25em] uppercase text-moss-light mb-4">
              Your Experience
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-6">
              Personalized care, wherever you need it
            </h3>
            <p className="text-ivory/75 leading-relaxed mb-4">
              Every appointment is designed around your individual goals and
              wellness needs. Choose a private appointment setting or request
              mobile service for added convenience.
            </p>
            <p className="text-ivory/75 leading-relaxed">
              Once your appointment is booked, you will receive the information
              needed to prepare for your session, including the exact
              appointment location when applicable.
            </p>
            <div className="mt-auto pt-8">
              <a
                href={`tel:+1${phoneDigits}`}
                className="flex items-center justify-center gap-2 rounded-full bg-clay px-6 py-4 text-sm font-medium tracking-wide hover:bg-clay-dark transition-colors"
              >
                <Icon name="phone" className="w-4 h-4" />
                Call {phone}
              </a>
              <p className="text-xs text-ivory/50 text-center mt-4">
                Booking required &middot; Private appointments &middot; Mobile
                service available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
