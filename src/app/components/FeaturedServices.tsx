import React from "react";
import {
  FaRobot,
  FaComments,
  FaUserCheck,
  FaBalanceScale,
} from "react-icons/fa";

const services = [
  {
    icon: <FaRobot />,
    iconBg: "from-blue-400 via-purple-400 to-pink-400",
    title: "AI Match Suggestions",
    description:
      "Smart, personalized matches powered by advanced AI algorithms.",
  },
  {
    icon: <FaComments />,
    iconBg: "from-green-400 via-blue-400 to-purple-400",
    title: "Premium Messaging",
    description: "Connect and chat securely with premium messaging features.",
  },
  {
    icon: <FaUserCheck />,
    iconBg: "from-purple-400 via-pink-400 to-yellow-400",
    title: "Verified Profiles",
    description: "All profiles are verified for authenticity and safety.",
  },
  {
    icon: <FaBalanceScale />,
    iconBg: "from-yellow-400 via-orange-400 to-pink-400",
    title: "Legal Services",
    description: "Expert legal advice and services by professional advocates.",
  },
];

export default function FeaturedServices() {
  return (
    <section className="w-full py-16 px-4 flex flex-col items-center bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
        Featured Services
      </h2>
      <p className="text-lg md:text-xl text-gray-500 mb-10 text-center max-w-2xl font-medium">
        Everything you need for a safe and successful experience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="group relative flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 gap-4 transition-all duration-300 border-0 hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-blue-200/40"
            style={{
              boxShadow:
                "0 4px 24px 0 rgba(0,0,0,0.08), 0 1.5px 6px 0 rgba(80,120,255,0.06)",
            }}
          >
            <div
              className={`mb-3 flex items-center justify-center rounded-full bg-gradient-to-tr ${service.iconBg} w-16 h-16 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
            >
              {React.cloneElement(service.icon, {
                className:
                  "text-white text-3xl drop-shadow-md transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6",
              })}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              {service.title}
            </h3>
            <p className="text-gray-500 text-base text-center font-normal">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
