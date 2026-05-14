import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const role = localStorage.getItem("role");

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Events", to: "/events" },
    { label: "Contact", to: "/contact" },
    ...(role === "volunteer" ? [{ label: "Profile", to: "/profile" }] : []),
    ...(role === "admin" ? [{ label: "Admin", to: "/admin" }] : []),
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1e5d3d]/95 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-black tracking-tighter text-white group relative z-50"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400 text-lg shadow-inner group-hover:scale-110 transition duration-300">
              🌿
            </span>
            Eco<span className="text-emerald-400">Clean</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    path === item.to
                      ? "bg-white text-emerald-900 shadow-xl scale-105"
                      : "text-emerald-50/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-white hover:bg-white/10 rounded-xl transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Overlay Menu */}
          <div
            className={`fixed inset-0 bg-[#1e5d3d] z-40 transition-transform duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-black tracking-tighter transition-all ${
                  path === item.to ? "text-emerald-400 scale-110" : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;