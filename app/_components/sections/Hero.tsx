// components/sections/Hero.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, BookOpen, LayoutDashboard, Settings } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#07152E] pt-20"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-nezamsys.png')",
        }}
      />
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-linear-to-r from-[#07152E]/20 via-[#07152E]/10 to-[#07152E]/50" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(11,92,255,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Gold accent glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#0B5CFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="inline-block text-[#0B5CFF] text-xs tracking-[0.2em] font-semibold bg-[#07152E]/80 px-4 py-1.5 rounded-full border border-[#0B5CFF]/20 backdrop-blur-sm">
            DIGITAL SOLUTIONS FOR MODERN BUSINESSES
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
            We Build Digital <br />
            Systems That Grow <br />
            Your Business.
          </h1>
          <p className="text-lg text-gray-200 max-w-lg leading-relaxed drop-shadow-lg">
            From custom business systems to powerful web platforms, NezamSys transforms ideas and
            business processes into scalable digital products.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#solutions"
              className="bg-[#0B5CFF] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#0B5CFF]/80 transition shadow-lg shadow-[#0B5CFF]/30 flex items-center gap-2"
            >
              Explore Our Solutions <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="border border-[#0B5CFF]/30 text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#0B5CFF]/10 transition backdrop-blur-sm"
            >
              Start a Project
            </a>
          </div>
        </motion.div>

        {/* right image in hero place here */}

      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#07152E] to-transparent pointer-events-none" />
    </section>
  );
};