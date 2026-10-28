import { type ContactInfo } from "@/lib/defaults";
import { SectionHeading } from "./ui";

interface PoliciesProps {
  contact?: ContactInfo;
}

export default function Policies({ contact }: PoliciesProps) {
  const phone = contact?.phone || "(470) 399-3351";
  const phoneDigits = phone.replace(/\D/g, "");
  const cashapp = contact?.cashapp || "$healingbyali";
  const zelle = phoneDigits.length === 10
    ? `${phoneDigits.slice(0, 3)}-${phoneDigits.slice(3, 6)}-${phoneDigits.slice(6)}`
    : phone;

  return (
    <section id="policies" className="py-28 bg-sand">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Before You Book"
          title="Booking & service policies"
          intro={
            <>
              Please review our policies before booking. Communication is key
              &mdash; if anything comes up, just give us a call.
            </>
          }
        />

        <div className="grid md:grid-cols-2 gap-6">
          {/* General */}
          <div className="bg-ivory rounded-3xl p-8 lg:p-10">
            <PolicyTitle number="01" title="General Policies" />
            <ul className="check-list space-y-3 text-stone">
              <li>All sales are final</li>
              <li>A deposit (50% of service total) is required before booking</li>
              <li>
                Your first appointment does not require a deposit &mdash;
                deposits are required for all sessions after your first visit
              </li>
              <li>
                Deposits can be sent via Cash App ({cashapp}) or Zelle ({zelle})
              </li>
              <li>Communication is key &mdash; please call if anything comes up</li>
            </ul>
          </div>

          {/* Time */}
          <div className="bg-ivory rounded-3xl p-8 lg:p-10">
            <PolicyTitle number="02" title="Time Policy" />
            <ul className="check-list space-y-3 text-stone">
              <li>You have up to a 10-minute grace period</li>
              <li>
                After 15 minutes late for <strong className="text-forest font-medium">massage</strong>:
                your spot may be given to another client
              </li>
              <li>
                After 15 minutes late for <strong className="text-forest font-medium">training</strong>:
                your time is still reserved, but your session is shortened
              </li>
              <li>
                Example: If your session is 9:00&ndash;10:00 and you arrive at
                9:30, you only get the remaining 30 minutes
              </li>
            </ul>
            <p className="mt-6 font-display text-xl italic text-clay-dark">
              &ldquo;The time you book is the time reserved and paid for.&rdquo;
            </p>
          </div>

          {/* Rescheduling */}
          <div className="bg-ivory rounded-3xl p-8 lg:p-10">
            <PolicyTitle number="03" title="Rescheduling Policy" />
            <ul className="check-list space-y-3 text-stone">
              <li>Rescheduling must be done at least 48 hours in advance</li>
              <li>
                Please call{" "}
                <a
                  href={`tel:+1${phoneDigits}`}
                  className="text-clay-dark font-medium underline underline-offset-4 decoration-clay/40 hover:decoration-clay"
                >
                  {phone}
                </a>{" "}
                to reschedule
              </li>
            </ul>
          </div>

          {/* Cancellation */}
          <div className="bg-ivory rounded-3xl p-8 lg:p-10">
            <PolicyTitle number="04" title="Cancellation / No Show" />
            <ul className="check-list space-y-3 text-stone">
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

function PolicyTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-6 pb-4 border-b border-sand-dark">
      <span className="font-display text-lg text-clay">{number}</span>
      <h3 className="font-display text-2xl md:text-3xl font-medium text-forest">
        {title}
      </h3>
    </div>
  );
}
