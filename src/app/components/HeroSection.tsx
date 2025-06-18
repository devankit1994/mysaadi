export default function HeroSection() {
  return (
    <section
      className="relative w-full flex items-center justify-start overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        minHeight: "calc(100vh - 4rem)",
        backgroundImage: "url('/banner.png')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative z-10 max-w-2xl w-full py-16 flex flex-col items-start text-left animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-700 drop-shadow-lg mb-4">
            Where Traditions Meet{" "}
            <span className="bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Lifelong Love
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700/90 font-medium mb-8 max-w-xl">
            Discover curated matches, verified profiles, and premium wedding
            planning support, crafted for the modern Indian family.
          </p>
          <button className="bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 hover:from-pink-700 hover:via-red-600 hover:to-yellow-600 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 mb-8">
            Find Your Match
          </button>
        </div>
      </div>
    </section>
  );
}
