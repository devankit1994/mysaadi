import {
  FaRobot,
  FaComments,
  FaUserCheck,
  FaBalanceScale,
} from "react-icons/fa";

const services = [
  {
    icon: <FaRobot className="text-3xl text-blue-600" />,
    title: "AI Match Suggestions",
    description:
      "Smart, personalized matches powered by advanced AI algorithms.",
  },
  {
    icon: <FaComments className="text-3xl text-green-600" />,
    title: "Premium Messaging",
    description: "Connect and chat securely with premium messaging features.",
  },
  {
    icon: <FaUserCheck className="text-3xl text-purple-600" />,
    title: "Verified Profiles",
    description: "All profiles are verified for authenticity and safety.",
  },
  {
    icon: <FaBalanceScale className="text-3xl text-yellow-600" />,
    title: "Legal Services",
    description: "Expert legal advice and services by professional advocates.",
  },
];

export default function FeaturedServices() {
  return (
    <section className="w-full py-12 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-8">Featured Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="flex flex-col items-center bg-white rounded-xl shadow p-6 gap-3 border border-gray-100"
          >
            <div>{service.icon}</div>
            <h3 className="text-lg font-bold">{service.title}</h3>
            <p className="text-gray-600 text-center text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
