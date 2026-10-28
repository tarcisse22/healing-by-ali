"use client";

import { useState } from "react";
import { SectionHeading } from "./ui";

const faqs = [
  {
    question: "Do you train beginners?",
    answer:
      "Absolutely! Whether you're just starting your fitness journey or getting back into it, I create programs tailored to your current fitness level and goals. Everyone starts somewhere.",
  },
  {
    question: "Do you offer athlete training?",
    answer:
      "Yes! I specialize in strength and conditioning for athletes. I work with athletes of all levels to improve performance, prevent injuries, and build sport-specific strength and endurance.",
  },
  {
    question: "Do you travel for sessions?",
    answer:
      "Yes, mobile training and mobile massage/recovery services are both available. Pricing may vary depending on travel distance. Just call to discuss your location and we'll work something out.",
  },
  {
    question: "What should I bring to a training session?",
    answer:
      "Come ready to work! Wear comfortable workout clothing, bring a water bottle, and a towel if you'd like. Most importantly, bring a positive attitude and be ready to push yourself.",
  },
  {
    question: "How long are sessions?",
    answer:
      "Training sessions and recovery sessions are typically 1 hour. Massage sessions vary depending on the treatment. Contact me to discuss what works best for your needs.",
  },
  {
    question: "Do I need a deposit to book?",
    answer:
      "Your first appointment does not require a deposit. After your first visit, a 50% deposit is required to secure your booking. Deposits can be sent via Cash App ($healingbyali) or Zelle (470-399-3351).",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Rescheduling must be done at least 48 hours in advance. Deposits are non-refundable, and missed time is your responsibility. Please call if anything comes up — communication is key.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
        <div className="lg:sticky lg:top-32 self-start">
          <SectionHeading
            align="left"
            eyebrow="Common Questions"
            title="Frequently asked questions"
            intro="Can’t find what you’re looking for? Call for a free 10-minute consultation."
          />
        </div>

        <div className="border-t border-sand-dark">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={index} className="border-b border-sand-dark">
                <button
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-display text-xl md:text-2xl text-forest group-hover:text-clay-dark transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all ${open ? "bg-forest border-forest text-ivory rotate-45" : "border-sand-dark text-forest"}`}
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {open && (
                  <p className="pb-7 pr-14 text-stone leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
