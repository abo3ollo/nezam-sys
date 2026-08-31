// components/sections/WhyNezamSys.tsx (مع تحديث الألوان)
"use client";
import { motion } from "framer-motion";
import { CheckCircle, Cpu, BarChart, Shield, Users, Headphones } from "lucide-react";

const features = [
  { icon: Users, title: "Built for Your Business", desc: "We don't force your business into a generic system. We build around your workflow." },
  { icon: Cpu, title: "Modern Technology", desc: "We use modern technologies and scalable architectures to build reliable digital products." },
  { icon: BarChart, title: "Scalable", desc: "Your system is designed to grow with your business." },
  { icon: Shield, title: "Secure", desc: "Security, authentication, permissions and data protection are built into the architecture." },
  { icon: CheckCircle, title: "Great User Experience", desc: "We focus on intuitive interfaces that employees and customers can use easily." },
  { icon: Headphones, title: "Long-Term Support", desc: "We don't disappear after launch. We provide maintenance, improvements and ongoing support." },
];

export const WhyNezamSys = () => {
  return (
    <section className="py-24 bg-[#07152E]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#F5A623] text-xs tracking-[0.2em] font-semibold mb-2">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Businesses Choose NezamSys</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-[#07152E]/80 rounded-2xl p-6 border border-[#0B5CFF]/20 hover:border-[#0B5CFF]/50 transition-all hover:-translate-y-1"
            >
              <f.icon className="text-[#0B5CFF] w-8 h-8 mb-4" />
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};