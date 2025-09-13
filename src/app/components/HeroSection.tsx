"use client";

import { useState } from "react";

export default function HeroSection() {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      heading: "Where Traditions Meet",
      highlight: "Lifelong Love",
      highlightClass:
        "bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 bg-clip-text text-transparent",
      subheading:
        "Discover curated matches, verified profiles, and premium wedding planning support, crafted for the modern Indian family.",
      buttonText: "Find Your Match",
      buttonLink: "#find-match",
      buttonClass:
        "bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 hover:from-pink-700 hover:via-red-600 hover:to-yellow-600 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 mb-8",
    },
    {
      heading: "",
      highlight: "Spy Services",
      highlightClass:
        "bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 bg-clip-text text-transparent",
      subheading:
        "Ensure peace of mind with our discreet pre-matrimonial investigation services. We help you verify backgrounds, check credentials, and uncover hidden details—so you can make informed decisions for your family’s future.",
      buttonText: "Learn More",
      buttonLink: "/contact",
      buttonClass:
        "bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 hover:from-pink-700 hover:via-red-600 hover:to-yellow-600 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 mb-8",
      backgroundImage: "/banner-1.png",
    },
  ];

  const goToPrev = () =>
    setSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const goToNext = () =>
    setSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="hero-section relative w-full flex md:items-center justify-start overflow-hidden bg-cover bg-center bg-no-repeat">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent pointer-events-none" />

      {/* Slides */}
      {slides.map((slideData, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
            slide === idx
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={slide !== idx}
          style={
            slideData.backgroundImage
              ? {
                  backgroundImage: `url('${slideData.backgroundImage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }
              : undefined
          }
        >
          <div className="max-w-7xl px-4 mx-auto w-full">
            <div className="relative z-10 max-w-2xl w-full py-16 flex flex-col items-center md:items-start text-center md:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-700 drop-shadow-lg mb-4">
                {slideData.heading && <>{slideData.heading} </>}
                <span className={slideData.highlightClass}>
                  {slideData.highlight}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700/90 font-medium mb-8 max-w-xl">
                {slideData.subheading}
              </p>
              <a
                href={slideData.buttonLink}
                className={slideData.buttonClass}
                role="button"
              >
                {slideData.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        aria-label="Previous Slide"
        onClick={goToPrev}
        className="cursor-pointer absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full shadow p-2 z-20 transition-all"
        style={{ display: slides.length > 1 ? "block" : "none" }}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        aria-label="Next Slide"
        onClick={goToNext}
        className="cursor-pointer absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full shadow p-2 z-20 transition-all"
        style={{ display: slides.length > 1 ? "block" : "none" }}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots - fixed at the bottom of the hero section */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex gap-2 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={`cursor-pointer w-3 h-3 rounded-full border-2 ${
              slide === idx
                ? "bg-pink-600 border-pink-600"
                : "bg-white border-gray-400"
            } transition-all`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
