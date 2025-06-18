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
    <main className="flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you! Reach out with your questions or feedback."
      />

      <section className="w-full max-w-7xl py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Send us a message
          </h2>
          {submitted && (
            <div className="mb-4 text-green-600 font-medium">
              Thank you for reaching out! We'll get back to you soon.
            </div>
          )}
          {error && (
            <div className="mb-4 text-red-600 font-medium">{error}</div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg px-6 py-2 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-8 justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Contact Information
            </h3>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium text-gray-700">Main Office:</span>
              <span className="text-gray-600">
                4/636, Sector-H, Jankipuram Lucknow 226021
              </span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium text-gray-700">Branch Office:</span>
              <span className="text-gray-600">
                Shop no.3, Balkeshwar Hanuman Mandir, Nirala Nagar, Lucknow Pin
                226020
              </span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium text-gray-700">Email:</span>
              <span className="text-gray-600">
                <a
                  href="mailto:mysaadi01@gmail.com"
                  className="hover:underline"
                >
                  mysaadi01@gmail.com
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium text-gray-700">Phone:</span>
              <span className="text-gray-600">+91 9876543210</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium text-gray-700">Mobile:</span>
              <span className="text-gray-600">945101300, 7007873170</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=4/636+Sector-H+Jankipuram+Lucknow+226021&output=embed"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex gap-4 items-center">
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-500 hover:text-pink-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08 4.48 4.48 0 0 0-7.64 4.08A12.7 12.7 0 0 1 3.1 4.86a4.48 4.48 0 0 0 1.39 5.98c-.7-.02-1.36-.21-1.94-.53v.05a4.48 4.48 0 0 0 3.6 4.4c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.48 4.48 0 0 0 4.18 3.11A9 9 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.2 0-.39-.01-.59a9.1 9.1 0 0 0 2.23-2.32z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-500 hover:text-pink-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-pink-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
