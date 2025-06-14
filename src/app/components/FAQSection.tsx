"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How does the AI match suggestion work?",
    answer:
      "Our AI analyzes your preferences and profile details to suggest the most compatible matches for you.",
  },
  {
    question: "Are all profiles verified?",
    answer:
      "Yes, every profile goes through a strict verification process to ensure authenticity and safety.",
  },
  {
    question: "Is my data safe and private?",
    answer:
      "Absolutely. We use advanced security measures to protect your data and privacy at all times.",
  },
  {
    question: "Can I get legal advice through the platform?",
    answer:
      "Yes, we offer access to expert advocates for legal services related to marriage and relationships.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-12 flex flex-col items-center bg-gray-50">
      <h2 className="text-2xl font-semibold mb-8">FAQs</h2>
      <div className="w-full max-w-3xl">
        {faqs.map((faq, idx) => (
          <div key={faq.question} className="mb-4 border-b border-gray-200">
            <button
              className="w-full text-left flex justify-between items-center py-4 px-2 font-medium text-gray-800 focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              {faq.question}
              <span className="ml-2 text-xl">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            {openIndex === idx && (
              <div
                id={`faq-answer-${idx}`}
                className="px-2 pb-4 text-gray-600 text-sm"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
