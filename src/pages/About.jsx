import Navbar from "../components/Navbar/Navbar";
import { Users, ShieldCheck, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* 🌈 Background */}
     <div className="absolute inset-0 -z-10 bg-linear-to-br from-indigo-900 via-purple-900 to-black animate-gradient"></div>

      <Navbar />

      {/* 🔥 HERO */}
      <section className="text-center px-6 mt-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-indigo-400">ElectWise</span>
        </h1>

        <p className="mt-4 opacity-80 max-w-xl mx-auto">
         ElectWise is an interactive platform designed to simplify the election process 
          and help citizens understand voting, registration, and timelines in a clear way.
        </p>
      </section>

      {/* 💡 FEATURES / PURPOSE */}
      <section className="mt-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition">
          <Users className="mx-auto mb-3 text-indigo-400" size={32} />
          <h3 className="font-semibold text-lg">User Friendly</h3>
          <p className="text-sm opacity-70 mt-2">
            Designed with simplicity so anyone can understand elections easily.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition">
          <ShieldCheck className="mx-auto mb-3 text-green-400" size={32} />
          <h3 className="font-semibold text-lg">Reliable Info</h3>
          <p className="text-sm opacity-70 mt-2">
            Provides accurate and structured information about the election process.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition">
          <Lightbulb className="mx-auto mb-3 text-yellow-400" size={32} />
          <h3 className="font-semibold text-lg">Smart Guidance</h3>
          <p className="text-sm opacity-70 mt-2">
            Step-by-step guidance helps users navigate the voting process smoothly.
          </p>
        </div>

      </section>

      {/* 🎯 MISSION */}
      <section className="mt-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Mission 🎯</h2>
        <p className="opacity-80">
          Our mission is to spread awareness about elections and make the voting 
          process easy to understand for every citizen using modern technology.
        </p>
      </section>

      {/* 👨‍💻 FOOTER */}
      <footer className="mt-20 text-center text-sm opacity-60 pb-6">
        © 2026 ElectWise • Built for Learning & Awareness
      </footer>

    </div>
  );
}