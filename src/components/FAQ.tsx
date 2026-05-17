"use client";

import { useState } from "react";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-cream">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-gold-dark font-semibold tracking-widest uppercase text-sm">
            Common Questions
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-warm-brown-dark">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-off-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left hover:bg-cream-light/50 transition-colors"
              >
                <span className="font-semibold text-warm-brown-dark pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gold-dark flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-warm-brown leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
