"use client";

import { useState } from "react";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [stars, setStars] = useState(5);
  const [quote, setQuote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, service, stars, quote }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        setSuccess(true);
        setName("");
        setService("");
        setStars(5);
        setQuote("");
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
        setSuccess(false);
      }
    } catch {
      setMessage("Failed to submit. Please try again.");
      setSuccess(false);
    }
    setSubmitting(false);
  }

  const fieldClass =
    "w-full px-4 py-3 rounded-xl border border-sand-dark bg-ivory text-ink placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-clay/50 focus:border-clay";

  return (
    <div className="bg-sand text-ink rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-xs tracking-[0.25em] uppercase text-clay-dark mb-3">
          Share Your Experience
        </p>
        <h3 className="font-display text-3xl md:text-4xl font-medium text-forest">
          Leave a review
        </h3>
        <p className="text-stone mt-2">
          Had a session with Ali? Share your experience below.
        </p>
      </div>

      {message && (
        <div
          className={`mb-6 p-4 rounded-xl text-sm font-medium text-center ${
            success
              ? "bg-moss-light/60 text-forest"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="review-name" className="block text-sm font-medium text-forest mb-1.5">
              Your Name
            </label>
            <input
              id="review-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Marcus J."
              required
              maxLength={100}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="review-service" className="block text-sm font-medium text-forest mb-1.5">
              Service Used
            </label>
            <select
              id="review-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className={fieldClass}
            >
              <option value="">Select a service</option>
              <option value="Personal Training">Personal Training</option>
              <option value="Recovery & Mobility Training">Recovery & Mobility Training</option>
              <option value="Personalized Workout Plan">Personalized Workout Plan</option>
              <option value="Massage & Recovery">Massage & Recovery</option>
            </select>
          </div>
        </div>

        <div>
          <p className="block text-sm font-medium text-forest mb-1.5">Rating</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setStars(n)}
                aria-label={`${n} star${n > 1 ? "s" : ""}`}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-clay rounded"
              >
                <svg
                  className={`w-8 h-8 transition-colors ${
                    n <= stars ? "text-clay" : "text-sand-dark"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="review-quote" className="block text-sm font-medium text-forest mb-1.5">
            Your Review
          </label>
          <textarea
            id="review-quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            placeholder="Tell us about your experience..."
            required
            maxLength={1000}
            rows={4}
            className={`${fieldClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-forest px-8 py-4 text-sm font-medium tracking-wide text-ivory hover:bg-forest-light transition-colors disabled:opacity-50"
        >
          {submitting ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
}
