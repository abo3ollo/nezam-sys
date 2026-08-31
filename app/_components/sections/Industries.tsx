// components/sections/Industries.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Utensils, Stethoscope, ShoppingBag, Briefcase, PenTool } from "lucide-react";

const industries = [
  { icon: GraduationCap, title: "Education", desc: "Online academies, LMS platforms, student management." },
  { icon: Utensils, title: "Restaurants", desc: "POS systems, orders, tables, cashier management." },
  { icon: Stethoscope, title: "Healthcare", desc: "Clinic and healthcare management solutions." },
  { icon: ShoppingBag, title: "E-Commerce", desc: "Modern online stores and custom commerce platforms." },
  { icon: Briefcase, title: "Business", desc: "Custom management systems and internal applications." },
  { icon: PenTool, title: "Custom Solutions", desc: "Software designed around unique business requirements." },
];

export const Industries = () => {
  return (
    <section id="solutions" className="py-24 bg-[#07152E]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#F5A623] text-xs tracking-[0.2em] font-semibold mb-2">WHAT WE DO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Solutions Built Around Your Business</h2>
          <p className="text-gray-300 mt-4">We create specialized digital systems for different industries and business models.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group bg-[#07152E]/80 rounded-2xl p-6 border border-[#0B5CFF]/20 hover:border-[#0B5CFF]/60 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0B5CFF]/5"
            >
              <item.icon className="text-[#0B5CFF] w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
              <div className="mt-4 flex items-center text-[#0B5CFF] text-sm font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};