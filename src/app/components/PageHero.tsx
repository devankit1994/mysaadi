import React from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => (
  <section
    className="w-full py-16 flex flex-col items-center justify-center text-center"
    style={{
      background: "linear-gradient(180deg, #f8c6e6 0%, #fdf6e3 100%)",
    }}
  >
    <h1 className="text-5xl md:text-6xl font-extrabold text-[#23272f] mb-4 drop-shadow-lg">
      {title}
    </h1>
    {subtitle && (
      <p className="text-xl md:text-2xl text-[#23272f] max-w-2xl font-medium mx-auto">
        {subtitle}
      </p>
    )}
  </section>
);

export default PageHero;
