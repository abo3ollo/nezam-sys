// components/sections/Hero.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#07152E] pt-20"
      style={{
        backgroundImage: "radial-gradient(rgba(11,92,255,0.08) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#07152E] via-transparent to-[#07152E] pointer-events-none" />
      
      {/* Gold accent glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#0B5CFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="inline-block text-[#0B5CFF] text-xs tracking-[0.2em] font-semibold bg-[#0B5CFF]/10 px-4 py-1.5 rounded-full border border-[#0B5CFF]/20">
            DIGITAL SOLUTIONS FOR MODERN BUSINESSES
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
            We Build Digital <br />
            Systems That Grow <br />
            Your Business.
          </h1>
          <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
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
              className="border border-[#0B5CFF]/30 text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#0B5CFF]/10 transition"
            >
              Start a Project
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md">
            {/* Main card */}
            <div className="rounded-2xl bg-[#07152E]/80 border border-[#0B5CFF]/30 p-5 shadow-2xl shadow-[#0B5CFF]/10 animate-float backdrop-blur-sm">
              <div className="flex justify-between items-center border-b border-[#0B5CFF]/20 pb-3">
                <span className="text-xs font-semibold text-white">Nezam LMS</span>
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="h-8 bg-white/5 rounded"></div>
                <div className="h-8 bg-white/5 rounded"></div>
                <div className="h-8 bg-white/5 rounded col-span-2"></div>
                <div className="h-4 bg-[#0B5CFF]/20 rounded col-span-2"></div>
              </div>
              {/* Gold accent line */}
              <div className="mt-3 w-12 h-0.5 bg-[#F5A623] rounded-full"></div>
            </div>

            {/* Floating card */}
            <div
              className="rounded-2xl bg-[#07152E]/80 border border-[#0B5CFF]/30 p-4 absolute -bottom-6 -right-6 w-3/4 shadow-2xl shadow-[#0B5CFF]/10 animate-float backdrop-blur-sm"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-white">POS · Orders</span>
                <span className="text-[10px] text-green-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
                  Live
                </span>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="w-1/3 h-6 bg-white/5 rounded"></div>
                <div className="w-1/3 h-6 bg-white/5 rounded"></div>
              </div>
              {/* Gold accent line */}
              <div className="mt-2 w-8 h-0.5 bg-[#F5A623]/60 rounded-full"></div>
            </div>

            {/* Glow effects */}
            <div className="absolute -top-4 -left-6 w-20 h-20 bg-[#0B5CFF]/10 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};