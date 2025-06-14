import { FaUserPlus, FaRobot, FaComments, FaHeart } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus className="text-2xl text-blue-500" />,
    title: "Sign Up",
    description: "Create your profile in minutes with easy onboarding.",
  },
  {
    icon: <FaRobot className="text-2xl text-green-500" />,
    title: "Get Matches",
    description: "Receive personalized match suggestions powered by AI.",
  },
  {
    icon: <FaComments className="text-2xl text-purple-500" />,
    title: "Connect",
    description: "Start conversations and get to know your matches.",
  },
  {
    icon: <FaHeart className="text-2xl text-pink-500" />,
    title: "Success",
    description: "Find your perfect partner and begin your journey together.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-12 flex flex-col items-center bg-gray-50">
      <h2 className="text-2xl font-semibold mb-8">How It Works</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-8 w-full max-w-5xl">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="flex flex-col items-center text-center bg-white rounded-xl shadow p-6 gap-3 border border-gray-100 flex-1"
          >
            <div>{step.icon}</div>
            <h3 className="text-lg font-bold">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
            {idx < steps.length - 1 && (
              <div className="hidden sm:block h-6 border-r-2 border-dashed border-gray-300 mx-4"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
