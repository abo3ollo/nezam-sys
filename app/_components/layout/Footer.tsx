// components/layout/Footer.tsx
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-[#07152E] border-t border-[#0B5CFF]/20 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <span className="text-2xl font-semibold text-white">Nezam<span className="text-[#0B5CFF]">Sys</span></span>
          <p className="text-gray-400 text-sm mt-2">Smart Systems. Better Business.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Solutions</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-400">
            <li className="hover:text-[#0B5CFF] transition cursor-pointer">Nezam LMS</li>
            <li className="hover:text-[#0B5CFF] transition cursor-pointer">Nezam POS</li>
            <li className="hover:text-[#0B5CFF] transition cursor-pointer">Custom Systems</li>
            <li className="hover:text-[#0B5CFF] transition cursor-pointer">Business Solutions</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-400">
            <li className="hover:text-[#0B5CFF] transition cursor-pointer">About</li>
            <li className="hover:text-[#0B5CFF] transition cursor-pointer">Services</li>
            <li className="hover:text-[#0B5CFF] transition cursor-pointer">Projects</li>
            <li className="hover:text-[#0B5CFF] transition cursor-pointer">Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-400">
            <li>hello@nezamsys.com</li>
            <li>+20 100 000 0000</li>
            <li>Egypt · Saudi Arabia</li>
          </ul>
          <div className="flex gap-4 mt-4 text-gray-400">
            <FaInstagram size={18} className="hover:text-[#0B5CFF] transition cursor-pointer" />
            <FaLinkedin size={18} className="hover:text-[#0B5CFF] transition cursor-pointer" />
            <FaGithub size={18} className="hover:text-[#0B5CFF] transition cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-12 pt-6 border-t border-[#0B5CFF]/10 text-center text-sm text-gray-500">
        © 2026 NezamSys. All rights reserved.
      </div>
    </footer>
  );
};