import React from "react";
import Link from "next/link";
import PageHero from "../components/PageHero";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      {/* Hero Section */}
      <PageHero
        title="About Us"
        subtitle="Empowering meaningful connections with trust, care, and innovation."
      />

      {/* Mission Section */}
      <section className="w-full max-w-3xl px-4 py-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 rounded-full mb-6" />
        <p className="text-lg text-gray-600 text-center font-normal">
          At MySaadi, our mission is to create a safe, inclusive, and inspiring
          platform where individuals can find genuine connections and lifelong
          companionship. We are dedicated to upholding the highest standards of
          trust, privacy, and innovation, ensuring every journey is unique and
          meaningful.
        </p>
        <p className="text-lg text-pink-600 text-center font-medium mt-6">
          We serve a large network across major states and cities including
          Delhi, Mumbai, Pune, Bangalore, Vadodara, Ahmedabad, Solapur, and
          more.
        </p>
      </section>

      {/* Values Section */}
      <section className="w-full max-w-5xl px-4 py-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 rounded-full mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {/* Value Card 1 */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 gap-4 border-0 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <svg
              className="w-12 h-12 text-pink-400 mb-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Trust
            </h3>
            <p className="text-gray-500 text-base text-center font-normal">
              We prioritize safety, privacy, and authenticity in every
              interaction.
            </p>
          </div>
          {/* Value Card 2 */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 gap-4 border-0 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <svg
              className="w-12 h-12 text-blue-400 mb-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Innovation
            </h3>
            <p className="text-gray-500 text-base text-center font-normal">
              We embrace technology to enhance experiences and foster meaningful
              connections.
            </p>
          </div>
          {/* Value Card 3 */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 gap-4 border-0 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <svg
              className="w-12 h-12 text-yellow-400 mb-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Community
            </h3>
            <p className="text-gray-500 text-base text-center font-normal">
              We nurture a supportive, respectful, and diverse community for
              all.
            </p>
          </div>
          {/* Value Card 4 */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 gap-4 border-0 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <svg
              className="w-12 h-12 text-purple-400 mb-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 8v4l3 3" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Care
            </h3>
            <p className="text-gray-500 text-base text-center font-normal">
              We are committed to guiding and supporting every step of your
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full flex flex-col items-center py-12">
        <Link
          href="/contact"
          className="bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 hover:from-pink-700 hover:via-red-600 hover:to-yellow-600 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
