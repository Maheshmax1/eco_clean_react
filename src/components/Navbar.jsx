import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Events", to: "/events" },
    { label: "Contact", to: "/contact" },
    { label: "Profile", to: "/profile" },
    { label: "Admin", to: "/admin" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-[#2e8b57] backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-bold text-emerald-100"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-emerald-200 text-lg shadow-sm">
              🌿
            </span>
            EcoClean
          </Link>

          {/* Navigation Items */}
          <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`px-3 py-2 rounded-md transition ${
                    path === item.to
                      ? "bg-emerald-700 text-white"
                      : "text-white hover:text-emerald-200"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;