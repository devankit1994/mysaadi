const stories = [
  {
    name: "Amit & Priya",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    story:
      "We met through this platform and instantly connected. Now, we’re happily married and grateful for the experience!",
  },
  {
    name: "Rahul & Sneha",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    story:
      "The AI match suggestions were spot on! We found each other and couldn’t be happier.",
  },
  {
    name: "Vikram & Anjali",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    story:
      "Verified profiles gave us confidence. Our journey together started here and it's been wonderful.",
  },
];

export default function SuccessStories() {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-pink-50 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-200 opacity-30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl pointer-events-none" />

      <h2 className="text-4xl font-extrabold mb-2 text-gray-800 tracking-tight drop-shadow-lg">
        Success Stories
      </h2>
      <div className="h-1 w-24 bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 rounded-full mb-6" />
      <p className="text-lg text-gray-500 mb-10 text-center max-w-2xl">
        Real couples who found love and happiness on our platform.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-7xl">
        {stories.map((s, idx) => (
          <div
            key={s.name}
            className="flex flex-col items-center bg-white/90 rounded-2xl shadow-xl p-8 gap-4 border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-200 relative group"
            style={{ minHeight: 320 }}
          >
            {/* Decorative quote icon */}
            <svg
              className="absolute top-6 left-6 w-8 h-8 text-blue-200 opacity-60 group-hover:text-pink-300 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.17 6.17A5.001 5.001 0 0 0 2 11v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a5 5 0 0 0-2.83-4.46zm9 0A5.001 5.001 0 0 0 11 11v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a5 5 0 0 0-2.83-4.46z" />
            </svg>
            <img
              src={s.image}
              alt={s.name}
              className="w-24 h-24 rounded-full object-cover mb-2 border-4 border-blue-200 shadow-lg group-hover:border-pink-300 transition-all"
              loading="lazy"
            />
            <h3 className="text-xl font-bold text-gray-800">{s.name}</h3>
            <p className="text-gray-600 text-center text-base italic">
              {s.story}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
