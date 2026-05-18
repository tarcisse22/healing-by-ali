"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

interface Hours {
  [key: string]: string;
}

interface ServiceItem {
  title: string;
  price: string;
  items: string[];
  note: string;
}

interface TestimonialItem {
  name: string;
  service: string;
  stars: number;
  quote: string;
}

interface ContactInfo {
  phone: string;
  instagram: string;
  instagram_url: string;
  cashapp: string;
}

type Tab = "hours" | "services" | "testimonials" | "contact";

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("hours");
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [hours, setHours] = useState<Hours>({
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  });
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [contact, setContact] = useState<ContactInfo>({
    phone: "",
    instagram: "",
    instagram_url: "",
    cashapp: "",
  });

  const fetchContent = useCallback(async (authToken: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/content", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (res.ok) {
        const data = await res.json();
        setHours(data.hours);
        setServices(data.services);
        setTestimonials(data.testimonials);
        setContact(data.contact);
      }
    } catch {
      /* use defaults */
    }
    setLoading(false);
  }, []);

  const initialized = useRef(false);
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const saved = sessionStorage.getItem("admin_token");
    if (!saved) return;
    (async () => {
      setToken(saved);
      await fetchContent(saved);
    })();
  }, [fetchContent]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        setLoginError("Invalid email or password");
        return;
      }
      const data = await res.json();
      setToken(data.token);
      sessionStorage.setItem("admin_token", data.token);
      fetchContent(data.token);
    } catch {
      setLoginError("Login failed. Please try again.");
    }
  }

  function handleLogout() {
    setToken("");
    sessionStorage.removeItem("admin_token");
  }

  async function save(endpoint: string, body: unknown) {
    setSaving(true);
    setSaveMsg("");
    try {
      const res = await fetch(`/api/${endpoint}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setSaveMsg("Saved successfully!");
      } else {
        const err = await res.json();
        setSaveMsg(err.error || "Failed to save.");
      }
    } catch {
      setSaveMsg("Failed to save. Please try again.");
    }
    setSaving(false);
    setTimeout(() => setSaveMsg(""), 3000);
  }

  if (!token) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-6">
        <div className="bg-off-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-warm-brown-dark text-center mb-2">
            Admin Login
          </h1>
          <p className="text-warm-brown text-center mb-8 text-sm">
            Healing by Ali Dashboard
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-cream text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-cream text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
            </div>
            {loginError && (
              <p className="text-red-600 text-sm">{loginError}</p>
            )}
            <button
              type="submit"
              className="w-full bg-warm-brown-dark text-cream-light py-3 rounded-lg font-semibold hover:bg-warm-brown transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-warm-brown-dark text-cream-light">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-[family-name:var(--font-playfair)] text-xl font-bold">
            Healing by Ali — Admin
          </h1>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-cream-dark hover:text-cream-light text-sm transition-colors"
            >
              View Site
            </Link>
            <button
              onClick={handleLogout}
              className="text-cream-dark hover:text-cream-light text-sm transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>

      {/* Save notification */}
      {saveMsg && (
        <div
          className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-sm font-semibold ${
            saveMsg.includes("success")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {saveMsg}
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {(
            [
              { key: "hours", label: "Hours" },
              { key: "services", label: "Services" },
              { key: "testimonials", label: "Testimonials" },
              { key: "contact", label: "Contact" },
            ] as { key: Tab; label: string }[]
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                activeTab === tab.key
                  ? "bg-warm-brown-dark text-cream-light"
                  : "bg-off-white text-warm-brown hover:bg-warm-brown/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20 text-warm-brown">
            Loading content...
          </div>
        ) : (
          <>
            {/* Hours Tab */}
            {activeTab === "hours" && (
              <div className="bg-off-white rounded-2xl p-8 shadow-md">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-warm-brown-dark mb-6">
                  Business Hours
                </h2>
                <p className="text-warm-brown text-sm mb-6">
                  Leave a day blank to mark it as closed.
                </p>
                <div className="space-y-4">
                  {days.map((day) => (
                    <div
                      key={day}
                      className="flex items-center gap-4"
                    >
                      <label className="w-28 font-semibold text-warm-brown-dark capitalize">
                        {day}
                      </label>
                      <input
                        type="text"
                        value={hours[day] || ""}
                        onChange={(e) =>
                          setHours({ ...hours, [day]: e.target.value })
                        }
                        placeholder="e.g. 5:30 PM – 10:00 PM"
                        className="flex-1 px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-cream text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => save("hours", hours)}
                  disabled={saving}
                  className="mt-6 bg-warm-brown-dark text-cream-light px-8 py-3 rounded-lg font-semibold hover:bg-warm-brown transition-colors disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save Hours"}
                </button>
              </div>
            )}

            {/* Services Tab */}
            {activeTab === "services" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-warm-brown-dark">
                    Services
                  </h2>
                  <button
                    onClick={() =>
                      setServices([
                        ...services,
                        { title: "", price: "", items: [""], note: "" },
                      ])
                    }
                    className="bg-gold/20 text-gold-dark px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gold/30 transition-colors"
                  >
                    + Add Service
                  </button>
                </div>
                {services.map((service, si) => (
                  <div
                    key={si}
                    className="bg-off-white rounded-2xl p-6 shadow-md"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-warm-brown-dark">
                        Service {si + 1}
                      </h3>
                      <button
                        onClick={() =>
                          setServices(services.filter((_, i) => i !== si))
                        }
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          value={service.title}
                          onChange={(e) => {
                            const updated = [...services];
                            updated[si] = {
                              ...updated[si],
                              title: e.target.value,
                            };
                            setServices(updated);
                          }}
                          className="w-full px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-cream text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
                          Price
                        </label>
                        <input
                          type="text"
                          value={service.price}
                          onChange={(e) => {
                            const updated = [...services];
                            updated[si] = {
                              ...updated[si],
                              price: e.target.value,
                            };
                            setServices(updated);
                          }}
                          className="w-full px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-cream text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
                        Items (one per line)
                      </label>
                      <textarea
                        value={service.items.join("\n")}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[si] = {
                            ...updated[si],
                            items: e.target.value.split("\n"),
                          };
                          setServices(updated);
                        }}
                        rows={4}
                        className="w-full px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-cream text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold resize-y"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
                        Note (optional)
                      </label>
                      <input
                        type="text"
                        value={service.note}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[si] = {
                            ...updated[si],
                            note: e.target.value,
                          };
                          setServices(updated);
                        }}
                        className="w-full px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-cream text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => save("services", services)}
                  disabled={saving}
                  className="bg-warm-brown-dark text-cream-light px-8 py-3 rounded-lg font-semibold hover:bg-warm-brown transition-colors disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save Services"}
                </button>
              </div>
            )}

            {/* Testimonials Tab */}
            {activeTab === "testimonials" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-warm-brown-dark">
                    Testimonials
                  </h2>
                  <button
                    onClick={() =>
                      setTestimonials([
                        ...testimonials,
                        { name: "", service: "", stars: 5, quote: "" },
                      ])
                    }
                    className="bg-gold/20 text-gold-dark px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gold/30 transition-colors"
                  >
                    + Add Testimonial
                  </button>
                </div>
                {testimonials.map((t, ti) => (
                  <div
                    key={ti}
                    className="bg-off-white rounded-2xl p-6 shadow-md"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-warm-brown-dark">
                        Review {ti + 1}
                      </h3>
                      <button
                        onClick={() =>
                          setTestimonials(
                            testimonials.filter((_, i) => i !== ti)
                          )
                        }
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          value={t.name}
                          onChange={(e) => {
                            const updated = [...testimonials];
                            updated[ti] = {
                              ...updated[ti],
                              name: e.target.value,
                            };
                            setTestimonials(updated);
                          }}
                          className="w-full px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-cream text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
                          Service
                        </label>
                        <input
                          type="text"
                          value={t.service}
                          onChange={(e) => {
                            const updated = [...testimonials];
                            updated[ti] = {
                              ...updated[ti],
                              service: e.target.value,
                            };
                            setTestimonials(updated);
                          }}
                          className="w-full px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-cream text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
                          Stars (1-5)
                        </label>
                        <select
                          value={t.stars}
                          onChange={(e) => {
                            const updated = [...testimonials];
                            updated[ti] = {
                              ...updated[ti],
                              stars: parseInt(e.target.value),
                            };
                            setTestimonials(updated);
                          }}
                          className="w-full px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-cream text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold"
                        >
                          {[1, 2, 3, 4, 5].map((n) => (
                            <option key={n} value={n}>
                              {"★".repeat(n)}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
                        Quote
                      </label>
                      <textarea
                        value={t.quote}
                        onChange={(e) => {
                          const updated = [...testimonials];
                          updated[ti] = {
                            ...updated[ti],
                            quote: e.target.value,
                          };
                          setTestimonials(updated);
                        }}
                        rows={3}
                        className="w-full px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-cream text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold resize-y"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => save("testimonials", testimonials)}
                  disabled={saving}
                  className="bg-warm-brown-dark text-cream-light px-8 py-3 rounded-lg font-semibold hover:bg-warm-brown transition-colors disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save Testimonials"}
                </button>
              </div>
            )}

            {/* Contact Tab */}
            {activeTab === "contact" && (
              <div className="bg-off-white rounded-2xl p-8 shadow-md">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-warm-brown-dark mb-6">
                  Contact Info
                </h2>
                <div className="space-y-4 max-w-lg">
                  <div>
                    <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={contact.phone}
                      onChange={(e) =>
                        setContact({ ...contact, phone: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-cream text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
                      Instagram Handle
                    </label>
                    <input
                      type="text"
                      value={contact.instagram}
                      onChange={(e) =>
                        setContact({ ...contact, instagram: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-cream text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
                      Instagram URL
                    </label>
                    <input
                      type="text"
                      value={contact.instagram_url}
                      onChange={(e) =>
                        setContact({
                          ...contact,
                          instagram_url: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-cream text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-warm-brown-dark mb-1">
                      Cash App
                    </label>
                    <input
                      type="text"
                      value={contact.cashapp}
                      onChange={(e) =>
                        setContact({ ...contact, cashapp: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-warm-brown/20 bg-cream text-warm-brown-dark focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                </div>
                <button
                  onClick={() => save("contact", contact)}
                  disabled={saving}
                  className="mt-6 bg-warm-brown-dark text-cream-light px-8 py-3 rounded-lg font-semibold hover:bg-warm-brown transition-colors disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save Contact"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
