// File: src/pages/student/Support.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Support() {
  const navigate = useNavigate();

  // Mock FAQs
  const faqs = [
    {
      question: "How do I join a live class?",
      answer: "Go to the Upcoming Classes section on your dashboard and click 'Join Class'.",
    },
    {
      question: "How do I submit an assignment?",
      answer: "Navigate to the Assignments section, select the assignment, and upload your work.",
    },
    {
      question: "How can I contact my tutor?",
      answer: "Use the Messages icon in the navbar to chat with your tutor directly.",
    },
    {
      question: "How do I change my password?",
      answer: "Go to Settings > Change Password to update your login credentials.",
    },
  ];

  // Accordion state
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Support / Help</h1>
        <button
          onClick={() => navigate("/student/dashboard")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium"
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Search bar */}
      <div className="max-w-3xl mx-auto mb-8 relative">
        <input
          type="text"
          placeholder="Search FAQs..."
          className="w-full p-3 pl-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/50 backdrop-blur-xl p-5 rounded-3xl border border-white shadow-lg cursor-pointer transition hover:shadow-2xl"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <p className="text-gray-900 font-medium">{faq.question}</p>
              <span className="text-gray-500">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-700 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Contact Support */}
      <div className="max-w-3xl mx-auto mt-10 text-center">
        <p className="text-gray-700 mb-4">Still need help? Contact our support team.</p>
        <button
          onClick={() => navigate("/student/contact-support")}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium"
        >
          Contact Support
        </button>
      </div>
    </div>
  );
}
