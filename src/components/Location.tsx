import { type ContactInfo } from "@/lib/defaults";

interface LocationProps {
  hours?: Record<string, string>;
  contact?: ContactInfo;
}

export default function Location({ hours, contact }: LocationProps) {
  const phone = contact?.phone || "(470) 399-3351";
  const phoneDigits = phone.replace(/\D/g, "");
  const instagram = contact?.instagram || "@healingbyali_coach";
  const instagramUrl =
    contact?.instagram_url || "https://instagram.com/healingbyali_coach";

  const dayOrder = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  const hourEntries = hours
    ? dayOrder
        .filter((day) => hours[day])
        .map(
          (day) =>
            `${day.charAt(0).toUpperCase() + day.slice(1)}: ${hours[day]}`
        )
    : null;

  return (
    <section id="location" className="py-24 bg-cream">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-gold-dark font-semibold tracking-widest uppercase text-sm">
            Appointments
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-warm-brown-dark">
            Book Your Session
          </h2>

          <p className="max-w-2xl mx-auto text-warm-brown-light leading-relaxed">
            All services are available by appointment Monday through Sunday.
            Sessions are designed to provide a private, personalized
            experience tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Appointment Information */}
          <div className="bg-off-white rounded-2xl p-8 shadow-lg space-y-7">
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-warm-brown-dark">
                By Appointment Only
              </h3>

              <p className="text-warm-brown-light text-sm mt-2 leading-relaxed">
                Appointments are available throughout the week. Please book
                your session in advance so your time can be reserved.
              </p>
            </div>

            {/* Appointment Location */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gold-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z"
                  />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
              </div>

              <div>
                <p className="font-semibold text-warm-brown-dark">
                  Flexible Appointment Location
                </p>

                <p className="text-warm-brown text-sm leading-relaxed mt-1">
                  Appointments are available at a private location or through
                  mobile service. The exact appointment location is provided
                  after your booking is confirmed.
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gold-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <p className="font-semibold text-warm-brown-dark">
                  Availability
                </p>

                <div className="text-warm-brown text-sm space-y-1 mt-1">
                  {hourEntries ? (
                    hourEntries.map((entry) => (
                      <p key={entry}>{entry}</p>
                    ))
                  ) : (
                    <>
                      <p>Monday: By Appointment</p>
                      <p>Tuesday: By Appointment</p>
                      <p>Wednesday: By Appointment</p>
                      <p>Thursday: By Appointment</p>
                      <p>Friday: By Appointment</p>
                      <p>Saturday: By Appointment</p>
                      <p>Sunday: By Appointment</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Service */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gold-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12h18M5 12l2-7h10l2 7M6 12v6m12-6v6M8 18h8"
                  />
                </svg>
              </div>

              <div>
                <p className="font-semibold text-warm-brown-dark">
                  Mobile Service Available
                </p>

                <p className="text-warm-brown text-sm leading-relaxed mt-1">
                  Prefer to receive your session at your location? Mobile
                  appointments are available. Travel fees may apply depending
                  on distance.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gold-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>

              <div>
                <p className="font-semibold text-warm-brown-dark">Phone</p>

                <a
                  href={`tel:+1${phoneDigits}`}
                  className="text-warm-brown hover:text-gold-dark transition-colors"
                >
                  {phone}
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gold-dark"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
              </div>

              <div>
                <p className="font-semibold text-warm-brown-dark">
                  Instagram
                </p>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-brown hover:text-gold-dark transition-colors"
                >
                  {instagram}
                </a>
              </div>
            </div>
          </div>

          {/* Booking message */}
          <div className="bg-warm-brown-dark text-off-white rounded-2xl p-8 md:p-10 shadow-lg">
            <p className="text-gold tracking-widest uppercase text-sm font-semibold mb-4">
              Your Experience
            </p>

            <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-6">
              Personalized Care, Wherever You Need It
            </h3>

            <p className="text-off-white/80 leading-relaxed mb-6">
              Every appointment is designed around your individual goals and
              wellness needs. Choose a private appointment setting or request
              mobile service for added convenience.
            </p>

            <p className="text-off-white/80 leading-relaxed mb-8">
              Once your appointment is booked, you will receive the information
              needed to prepare for your session, including the exact
              appointment location when applicable.
            </p>

            <div className="border-t border-off-white/20 pt-6">
              <p className="text-sm text-off-white/60">
                Appointments available Monday through Sunday
              </p>

              <p className="text-sm text-off-white/60 mt-2">
                Booking required • Private appointments • Mobile service
                available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
