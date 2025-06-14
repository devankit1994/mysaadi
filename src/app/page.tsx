import HeroSection from "./components/HeroSection";
import FeaturedServices from "./components/FeaturedServices";
import SuccessStories from "./components/SuccessStories";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-white">
      <HeroSection />
      <FeaturedServices />
      <SuccessStories />
      <FAQSection />
    </main>
  );
}
