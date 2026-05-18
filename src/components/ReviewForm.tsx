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

  return (
    <div className="bg-cream rounded-2xl p-8 shadow-md max-w-2xl mx-auto">
      <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-warm-brown-dark text-center mb-2">
        Leave a Review
      </h3>
      <p className="text-warm-brown text-center text-sm mb-6">
        Had a session with Ali? Share your experience below.
      </p>

      {message && (
        <div
          className={`mb-6 p-4 rounded-lg text-sm font-semibold text-center ${
            success
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Marcus J."
              required
              maxLength={100}
              className="w-full px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-off-white text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
              Service Used
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-off-white text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold"
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
          <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
            Rating
          </label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setStars(n)}
                className="focus:outline-none"
              >
                <svg
                  className={`w-8 h-8 transition-colors ${
                    n <= stars ? "text-gold" : "text-warm-brown/20"
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
          <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
            Your Review
          </label>
          <textarea
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            placeholder="Tell us about your experience..."
            required
            maxLength={1000}
            rows={4}
            className="w-full px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-off-white text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-warm-brown-dark px-8 py-3 text-sm font-semibold text-cream-light hover:bg-warm-brown transition-colors disabled:opacity-50"
        >
          {submitting ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
}
