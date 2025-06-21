import React from "react";
import Link from "next/link";
import {
  FaUserTie,
  FaGavel,
  FaPlane,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaHeart,
  FaGem,
  FaUtensils,
  FaBed,
  FaHotel,
  FaSpa,
  FaCamera,
  FaPlaneDeparture,
  FaBalanceScale,
  FaFileSignature,
  FaPassport,
  FaUserSlash,
  FaHandHoldingUsd,
  FaBaby,
  FaShieldAlt,
  FaExclamationTriangle,
  FaBan,
  FaShip,
  FaTrain,
  FaBus,
  FaTaxi,
  FaMotorcycle,
  FaHorse,
  FaMapMarkedAlt,
  FaUsers,
  FaCalendarCheck,
  FaBrain,
  FaStarOfDavid,
  FaUserSecret,
  FaSyringe,
} from "react-icons/fa";
import PageHero from "../components/PageHero";

const services = [
  {
    icon: <FaUserTie className="text-3xl" />,
    title: "Marriage Planner",
    description:
      "Complete wedding planning from engagement to honeymoon with premium services",
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50 to-pink-50",
    iconBg: "from-rose-100 to-pink-100",
    details: [
      {
        icon: <FaHeart className="text-rose-400" />,
        text: "Complete theme marriage planning from Dikhai to Vidai",
      },
      {
        icon: <FaGem className="text-pink-400" />,
        text: "Premium decoration services for all occasions",
      },
      {
        icon: <FaUtensils className="text-rose-400" />,
        text: "Catering and food management",
      },
      {
        icon: <FaBed className="text-pink-400" />,
        text: "Accommodation arrangements",
      },
      {
        icon: <FaHotel className="text-rose-400" />,
        text: "Venue booking (Hotels, Guest Houses, Lawns)",
      },
      {
        icon: <FaSpa className="text-pink-400" />,
        text: "Beauty and salon services",
      },
      {
        icon: <FaCamera className="text-rose-400" />,
        text: "Professional photography and videography",
      },
      {
        icon: <FaPlaneDeparture className="text-pink-400" />,
        text: "Exclusive honeymoon packages",
      },
    ],
  },
  {
    icon: <FaGavel className="text-3xl" />,
    title: "Legal Services",
    description:
      "Expert legal consultation by certified advocates for all matrimonial matters",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    iconBg: "from-blue-100 to-indigo-100",
    details: [
      {
        icon: <FaBalanceScale className="text-blue-500" />,
        text: "Court marriage procedures",
      },
      {
        icon: <FaFileSignature className="text-indigo-500" />,
        text: "Marriage registration services",
      },
      {
        icon: <FaPassport className="text-blue-500" />,
        text: "Passport and visa assistance",
      },
      {
        icon: <FaUserSlash className="text-indigo-500" />,
        text: "Divorce proceedings",
      },
      {
        icon: <FaHandHoldingUsd className="text-blue-500" />,
        text: "Maintenance and alimony cases",
      },
      {
        icon: <FaGavel className="text-indigo-500" />,
        text: "Succession and inheritance matters",
      },
      {
        icon: <FaBaby className="text-blue-500" />,
        text: "Adoption legal procedures",
      },
      {
        icon: <FaShieldAlt className="text-indigo-500" />,
        text: "Domestic violence protection",
      },
      {
        icon: <FaExclamationTriangle className="text-blue-500" />,
        text: "Cruelty case handling",
      },
      {
        icon: <FaBan className="text-indigo-500" />,
        text: "Dowry prohibition legal support",
      },
    ],
  },
  {
    icon: <FaPlane className="text-3xl" />,
    title: "Travel Management",
    description:
      "Comprehensive travel solutions for all your transportation needs",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    iconBg: "from-emerald-100 to-teal-100",
    details: [
      {
        icon: <FaPlane className="text-emerald-500" />,
        text: "Air travel booking and management",
      },
      {
        icon: <FaShip className="text-teal-500" />,
        text: "Cruise and ship travel arrangements",
      },
      {
        icon: <FaTrain className="text-emerald-500" />,
        text: "Train reservation services",
      },
      {
        icon: <FaBus className="text-teal-500" />,
        text: "Bus transportation coordination",
      },
      {
        icon: <FaTaxi className="text-emerald-500" />,
        text: "Taxi and cab services",
      },
      {
        icon: <FaMotorcycle className="text-teal-500" />,
        text: "Auto-rickshaw arrangements",
      },
      {
        icon: <FaHorse className="text-emerald-500" />,
        text: "Traditional transport options",
      },
      {
        icon: <FaMapMarkedAlt className="text-teal-500" />,
        text: "Custom travel itineraries",
      },
    ],
  },
  {
    icon: <FaStar className="text-4xl" />,
    title: "Specialized Services",
    description:
      "Additional premium services to complement your special occasions",
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50",
    iconBg: "from-amber-100 to-orange-100",
    details: [
      {
        icon: <FaUsers className="text-amber-500" />,
        text: "Professional marriage bureau services",
      },
      {
        icon: <FaCalendarCheck className="text-orange-500" />,
        text: "Complete event management",
      },
      {
        icon: <FaBrain className="text-amber-500" />,
        text: "Family psychological consultation",
      },
      {
        icon: <FaStarOfDavid className="text-orange-500" />,
        text: "Expert astrological and Kundali services",
      },
      {
        icon: <FaUserSecret className="text-amber-500" />,
        text: "Confidential investigation services",
      },
      {
        icon: <FaSyringe className="text-orange-500" />,
        text: "Cosmetic surgery consultations",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <PageHero
          title="Our Services"
          subtitle="Discover our comprehensive range of professional services designed to make your special moments extraordinary and stress-free."
        />

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
              {services.map((service, idx) => (
                <div
                  key={service.title}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.bgGradient} p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${service.iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div
                          className={`bg-gradient-to-r ${service.gradient} bg-clip-text`}
                        >
                          {service.icon}
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <FaArrowRight
                          className={`text-xl bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                        />
                      </div>
                    </div>

                    {/* Title and Description */}
                    <div className="mb-8">
                      <h3
                        className={`text-2xl xl:text-3xl font-bold mb-3 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <span
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}
                        ></span>
                        What's Included
                      </h4>
                      <div className="grid grid-cols-1 gap-3 max-h-64 overflow-y-auto">
                        {service.details.map((detail, i) => (
                          <div
                            key={i}
                            className="flex items-start space-x-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-colors duration-200"
                          >
                            <span className="mt-1 flex-shrink-0">
                              {detail.icon}
                            </span>
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {detail.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8 pt-6 border-t border-white/30">
                      <Link
                        href="/contact"
                        className={`w-full inline-block text-center py-4 px-6 rounded-2xl bg-gradient-to-r ${service.gradient} text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30`}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
