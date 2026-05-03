import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import StepsGuide from "../components/Steps/StepsGuide";
import Timeline from "../components/TimeLine/TimeLine";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* 🌈 Animated Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-indigo-900 via-purple-900 to-black animate-gradient"></div>

      {/* 🔹 Navbar */}
      <Navbar />

      {/* 🚀 HERO SECTION */}
      <section className="text-center px-6 mt-10">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Understand Elections <br />
          <span className="bg-linear-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            The Smart Way 
          </span>🗳️
        </h1>

        <p className="mt-4 text-lg opacity-80 max-w-xl mx-auto">
          Learn the complete election process, register easily, and get guided step-by-step using our smart assistant.
        </p>

        {/* 🔥 Button */}
        <button
          onClick={() => setShowContent(true)}
          className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-lg shadow-lg hover:scale-105 transition"
        >
          Get Started
        </button>
      </section>

      {/* 📊 MAIN CONTENT (HIDDEN INITIALLY) */}
      {showContent && (
        <div className="mt-16 px-6 max-w-7xl mx-auto animate-fadeIn">
          <div className="grid lg:grid-cols-2 gap-8">
            <StepsGuide />
            <Timeline />
          </div>
        </div>
      )}

      {/* ✨ FOOTER */}
      <footer className="mt-20 text-center text-sm opacity-60 pb-6">
        © 2026 ElectWise • Empowering Smart Voting 
      </footer>
    </div>
  );
}