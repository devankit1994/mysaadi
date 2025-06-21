"use client";
import React, { useState } from "react";
import PageHero from "../components/PageHero";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <PageHero
        title="Get In Touch"
        subtitle="Ready to start your journey? We're here to help make your dreams come true."
      />

      <section className="w-full max-w-7xl px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-6 lg:p-8 h-full">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-3">
                  Send us a message
                </h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-emerald-700 font-medium">
                      Thank you for reaching out! We'll get back to you soon.
                    </span>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <span className="text-red-700 font-medium">{error}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      className="w-full bg-gray-50/50 border-2 border-gray-200 rounded-2xl px-4 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:bg-white transition-all duration-300 group-hover:border-gray-300"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      className="w-full bg-gray-50/50 border-2 border-gray-200 rounded-2xl px-4 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:bg-white transition-all duration-300 group-hover:border-gray-300"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your requirements, questions, or how we can help you..."
                    rows={6}
                    className="w-full bg-gray-50/50 border-2 border-gray-200 rounded-2xl px-4 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:bg-white transition-all duration-300 resize-none group-hover:border-gray-300"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-lg rounded-2xl px-8 py-4 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-200"
                >
                  Send Message
                  <svg
                    className="inline-block w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information - Takes 1 column on large screens */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-3 flex items-center gap-3">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">
                      Main Office
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      4/636, Sector-H, Jankipuram
                      <br />
                      Lucknow 226021
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">
                      Branch Office
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Shop no.3, Balkeshwar Hanuman Mandir
                      <br />
                      Nirala Nagar, Lucknow 226020
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Email</p>
                    <a
                      href="mailto:mysaadi01@gmail.com"
                      className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                    >
                      mysaadi01@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Phone</p>
                    <p className="text-gray-600">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-pink-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Mobile</p>
                    <p className="text-gray-600">945101300, 7007873170</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Card - Full Width */}
        <div className="w-full max-w-7xl mx-auto px-4 py-8 mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="p-6 pb-0">
              <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-3 flex items-center gap-3">
                Find Us
              </h2>
            </div>
            <div className="rounded-2xl overflow-hidden mx-6 mb-6">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=4/636+Sector-H+Jankipuram+Lucknow+226021&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
