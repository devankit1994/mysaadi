import React from "react";
import {
  FaUserTie,
  FaGavel,
  FaPlane,
  FaBuilding,
  FaCalendarAlt,
  FaUserMd,
  FaStar,
  FaUserSecret,
  FaHeart,
} from "react-icons/fa";
import PageHero from "../components/PageHero";

const services = [
  {
    icon: <FaUserTie className="text-3xl text-pink-600" />,
    title: "Marriage Planner",
    details: [
      "Plan all type of the theme marriage from Dikhai to Vidai",
      "Decoration all types",
      "Fooding, Catering",
      "Lodging",
      "Hotel, Guest House, Lawn, Home",
      "Beautician, Salon",
      "Photography and videography",
      "Honey moon package",
    ],
  },
  {
    icon: <FaGavel className="text-3xl text-blue-600" />,
    title: "Legal services by expert Advocates",
    details: [
      "Court Marriage",
      "Marriage Registration",
      "Passport",
      "Visa",
      "Divorce",
      "Maintenance",
      "Succession",
      "Adoption",
      "Domestic violence",
      "Cruelty",
      "Dowry prohibition",
    ],
  },
  {
    icon: <FaPlane className="text-3xl text-yellow-500" />,
    title: "Travel Management",
    details: [
      "By Air",
      "By Ship",
      "By Train",
      "By Bus",
      "By Taxi",
      "By Auto",
      "By Rickshaw",
      "By Tanga",
    ],
  },
  {
    icon: <FaBuilding className="text-3xl text-purple-600" />,
    title: "Marriage bureau services",
    details: [],
  },
  {
    icon: <FaCalendarAlt className="text-3xl text-green-600" />,
    title: "Event management",
    details: [
      "Manage all types of events at lowest cost and best in the market",
    ],
  },
  {
    icon: <FaUserMd className="text-3xl text-red-500" />,
    title:
      "Family related Psychological consultation by expert doctors and psychiatric",
    details: [],
  },
  {
    icon: <FaStar className="text-3xl text-yellow-400" />,
    title: "Astrological and Kundali services",
    details: [],
  },
  {
    icon: <FaUserSecret className="text-3xl text-gray-700" />,
    title: "Investigation and spy services",
    details: [],
  },
  {
    icon: <FaHeart className="text-3xl text-pink-500" />,
    title: "Beauty and cosmetic surgery by expert doctors",
    details: [],
  },
];

export default function ServicesPage() {
  return (
    <>
      <main className="flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 pb-12">
        <PageHero
          title="Our Services"
          subtitle="Explore our wide range of professional services designed to make your special moments seamless and memorable."
        />
        <section className="w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 border-0 hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-pink-200/40"
                style={{
                  boxShadow:
                    "0 4px 24px 0 rgba(0,0,0,0.08), 0 1.5px 6px 0 rgba(80,120,255,0.06)",
                }}
              >
                <div className="mb-4 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-200 via-blue-100 to-purple-100 w-16 h-16 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  {service.title}
                </h2>
                {service.details.length > 0 ? (
                  <ul className="text-gray-600 text-sm list-disc list-inside text-left space-y-1">
                    {service.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
