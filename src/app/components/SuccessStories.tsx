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
      "Verified profiles gave us confidence. Our journey together started here and it’s been wonderful.",
  },
];

export default function SuccessStories() {
  return (
    <section className="w-full py-12 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-8">Success Stories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {stories.map((s, idx) => (
          <div
            key={s.name}
            className="flex flex-col items-center bg-white rounded-xl shadow p-6 gap-3 border border-gray-100"
          >
            <img
              src={s.image}
              alt={s.name}
              className="w-20 h-20 rounded-full object-cover mb-2 border-4 border-blue-100"
              loading="lazy"
            />
            <h3 className="text-lg font-bold">{s.name}</h3>
            <p className="text-gray-600 text-center text-sm">{s.story}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
