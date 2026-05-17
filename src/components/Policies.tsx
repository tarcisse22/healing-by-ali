export default function Policies() {
  return (
    <section id="policies" className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-gold-dark font-semibold tracking-widest uppercase text-sm">
            Important Information
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-warm-brown-dark">
            Booking &amp; Service Policies
          </h2>
          <p className="text-warm-brown max-w-2xl mx-auto text-lg">
            Please review our policies before booking. Communication is key
            &mdash; if anything comes up, just give us a call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* General Policies */}
          <div className="bg-off-white rounded-2xl p-8 shadow-md">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-brown-dark mb-4">
              General Policies
            </h3>
            <ul className="check-list space-y-3 text-warm-brown">
              <li>All sales are final</li>
              <li>
                A deposit (50% of service total) is required before booking
              </li>
              <li>
                Your first appointment does not require a deposit &mdash; deposits
                are required for all sessions after your first visit
              </li>
              <li>
                Deposits can be sent via Cash App ($healingbyali) or Zelle
                (470-399-3351)
              </li>
              <li>
                Communication is key &mdash; please call if anything comes up
              </li>
            </ul>
          </div>

          {/* Time Policy */}
          <div className="bg-off-white rounded-2xl p-8 shadow-md">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-brown-dark mb-4">
              Time Policy
            </h3>
            <ul className="space-y-3 text-warm-brown">
              <li className="flex items-start gap-2">
                <span className="text-gold-dark mt-1 flex-shrink-0">
                  &bull;
                </span>
                <span>You have up to a 10-minute grace period</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-dark mt-1 flex-shrink-0">
                  &bull;
                </span>
                <span>
                  After 15 minutes late for <strong>massage</strong>: your spot
                  may be given to another client
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-dark mt-1 flex-shrink-0">
                  &bull;
                </span>
                <span>
                  After 15 minutes late for <strong>training</strong>: your time
                  is still reserved, but your session is shortened
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-dark mt-1 flex-shrink-0">
                  &bull;
                </span>
                <span>
                  Example: If your session is 9:00&ndash;10:00 and you arrive at
                  9:30, you only get the remaining 30 minutes
                </span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-gold-light/30 rounded-xl">
              <p className="text-sm font-semibold text-warm-brown-dark italic">
                &ldquo;The time you book is the time reserved and paid
                for.&rdquo;
              </p>
            </div>
          </div>

          {/* Rescheduling Policy */}
          <div className="bg-off-white rounded-2xl p-8 shadow-md">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-brown-dark mb-4">
              Rescheduling Policy
            </h3>
            <ul className="check-list space-y-3 text-warm-brown">
              <li>
                Rescheduling must be done at least 48 hours in advance
              </li>
              <li>
                Please call{" "}
                <a
                  href="tel:+14703993351"
                  className="text-gold-dark hover:text-warm-brown-dark transition-colors font-semibold"
                >
                  (470) 399-3351
                </a>{" "}
                to reschedule
              </li>
            </ul>
          </div>

          {/* Cancellation / No Show */}
          <div className="bg-off-white rounded-2xl p-8 shadow-md">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-warm-brown-dark mb-4">
              Cancellation / No Show
            </h3>
            <ul className="check-list space-y-3 text-warm-brown">
              <li>Deposits are non-refundable</li>
              <li>Missed time is your responsibility</li>
              <li>No-shows forfeit their deposit</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
