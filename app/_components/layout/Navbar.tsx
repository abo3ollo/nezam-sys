// components/layout/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Solutions", "Services", "Projects", "About", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#07152E]/90 backdrop-blur-xl border-b border-[#0B5CFF]/20" : "bg-[#07152E]" // :bg-transparent
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-semibold tracking-tight text-white">
            Nezam<span className="text-[#F5A623]">Sys</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition">
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#0B5CFF] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0B5CFF]/80 transition shadow-lg shadow-[#0B5CFF]/25"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#07152E]/95 backdrop-blur-xl border-b border-[#0B5CFF]/20 px-6 py-6 flex flex-col gap-5 text-sm font-medium text-gray-200">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#0B5CFF] text-white px-5 py-2.5 rounded-full text-center font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};