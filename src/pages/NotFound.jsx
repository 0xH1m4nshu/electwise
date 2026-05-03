import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function NotFound() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* 🌈 Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-indigo-900 via-purple-900 to-black animate-gradient"></div>

      <Navbar />

      {/* 🚨 Content */}
      <div className="flex flex-col items-center justify-center text-center px-6 mt-24">

        <h1 className="text-7xl font-extrabold bg-linear-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-2xl mt-4 font-semibold">
          Page Not Found
        </h2>

        <p className="mt-3 opacity-70 max-w-md">
          Oops! The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* 🔥 Button */}
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-lg shadow-lg hover:scale-105 transition"
        >
          Go Back Home
        </Link>

      </div>

      {/* ✨ Footer */}
      <footer className="absolute bottom-4 w-full text-center text-sm opacity-60">
        © 2026 ElectWise • Page Not Found
      </footer>

    </div>
  );
}