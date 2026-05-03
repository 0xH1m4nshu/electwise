import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Search } from "lucide-react";

const faqData = [
  {
    question: "Who can vote?",
    answer: "Any citizen of India who is 18 years or older can vote."
  },
  {
    question: "How to register for voting?",
    answer: "You can register online through the Election Commission website or local office."
  },
  {
    question: "What documents are required?",
    answer: "You need valid ID proof such as Aadhaar card, PAN card, or Voter ID."
  },
  {
    question: "How to check voter list?",
    answer: "You can check your name in the voter list on the official election portal."
  },
  {
    question: "What is EVM?",
    answer: "Electronic Voting Machine (EVM) is used to record votes electronically."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const filteredFAQ = faqData.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* Background */}
     <div className="absolute inset-0 -z-10 bg-linear-to-br from-indigo-900 via-purple-900 to-black animate-gradient"></div>

      <Navbar />

      {/* 🔥 Header */}
      <div className="text-center mt-12 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Frequently Asked Questions ❓
        </h1>
        <p className="opacity-70">
          Find answers to common questions about elections
        </p>
      </div>

      {/* 🔍 Search */}
      <div className="mt-8 flex justify-center px-6">
        <div className="flex items-center bg-white/10 px-4 py-2 rounded-xl border border-white/10 w-full max-w-md">
          <Search size={18} className="opacity-70" />
          <input
            type="text"
            placeholder="Search questions..."
            className="bg-transparent outline-none px-2 w-full text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* 📚 FAQ List */}
      <div className="mt-10 max-w-3xl mx-auto px-6 space-y-4">

        {filteredFAQ.map((item, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 cursor-pointer transition hover:bg-white/10"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{item.question}</h3>
              <span className="text-lg">
                {openIndex === i ? "−" : "+"}
              </span>
            </div>

            {openIndex === i && (
              <p className="mt-3 text-sm opacity-80">
                {item.answer}
              </p>
            )}
          </div>
        ))}

        {/* No Result */}
        {filteredFAQ.length === 0 && (
          <p className="text-center opacity-60 mt-10">
            No matching questions found
          </p>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm opacity-60 pb-6">
        © 2026 ElectWise • FAQ Section
      </footer>

    </div>
  );
}