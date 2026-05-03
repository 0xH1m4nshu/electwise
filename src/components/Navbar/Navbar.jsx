import { Link, useLocation } from "react-router-dom";
import { Home, HelpCircle, Info, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "FAQ", path: "/faq", icon: HelpCircle },
    { name: "About", path: "/about", icon: Info },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-linear-to-br from-indigo-500/15 via-purple-500/15 to-pink-500/15 border-b border-white/10 shadow-[0_8px_30px_rgba(99,102,241,0.15)]">

      {/* 🔹 Top Bar */}
      <div className="flex items-center justify-between px-6 md:px-8 py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
            🗳️
          </div>
          <span className="hidden sm:inline text-lg font-bold bg-linear-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent">
            ElectWise
          </span>
        </Link>

        {/* 🔥 Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={i}
                to={item.path}
                className={`group relative flex items-center gap-2 text-sm px-3 py-2 transition ${
                  isActive ? "text-white" : "hover:text-gray-300"
                }`}
              >
                <Icon size={16} />
                {item.name}

                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-full bg-linear-to-r from-indigo-400 to-pink-400 transition ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* 🔥 Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* 🔥 Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 animate-fadeIn">

          {navItems.map((item, i) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={i}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "hover:bg-white/10 hover:text-gray-300"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </div>
      )}

    </nav>
  );
}