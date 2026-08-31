// components/sections/Cta.tsx (مع تحديث الألوان)
"use client";
import { motion } from "framer-motion";

export const Cta = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#07152E]">
      <div className="absolute inset-0 bg-linear-to-r from-[#0B5CFF]/10 via-transparent to-[#F5A623]/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-[#F5A623] text-xs tracking-[0.2em] font-semibold mb-2">GET STARTED</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Have an Idea? Let's Build It.</h2>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
            Whether you need a custom business system, an online platform or a complete digital product,
            NezamSys can turn your idea into reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="#contact"
              className="bg-[#0B5CFF] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#0B5CFF]/80 transition shadow-lg shadow-[#0B5CFF]/30"
            >
              Start Your Project
            </a>
            <a
              href="#contact"
              className="border border-[#0B5CFF]/30 text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#0B5CFF]/10 transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};