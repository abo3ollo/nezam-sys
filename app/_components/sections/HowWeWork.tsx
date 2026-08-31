// components/sections/HowWeWork.tsx
"use client";
import { motion } from "framer-motion";
import { Search, ClipboardList, Palette, Code, Rocket } from "lucide-react";

const steps = [
  { 
    num: "01", 
    title: "Discover", 
    desc: "Understand your business, goals and requirements.",
    icon: Search,
  },
  { 
    num: "02", 
    title: "Plan", 
    desc: "Define features, architecture, UX and development roadmap.",
    icon: ClipboardList,
  },
  { 
    num: "03", 
    title: "Design", 
    desc: "Create a modern and intuitive product experience.",
    icon: Palette,
  },
  { 
    num: "04", 
    title: "Build", 
    desc: "Develop, test and optimize the system.",
    icon: Code,
  },
  { 
    num: "05", 
    title: "Launch & Support", 
    desc: "Deploy the product and continue improving it after launch.",
    icon: Rocket,
  },
];

export const HowWeWork = () => {
  return (
    <section id="about" className="py-24 bg-[#07152E]/80 border-y border-[#0B5CFF]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#F5A623] text-xs tracking-[0.2em] font-semibold mb-2">OUR PROCESS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">A Simple Process. Powerful Results.</h2>
          <p className="text-gray-300 mt-4">From concept to launch, we follow a proven methodology to deliver excellence.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4.75 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#0B5CFF]/20 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start gap-6 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step number with icon */}
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#0B5CFF]/10 border border-[#0B5CFF]/30 flex items-center justify-center relative z-10">
                  <step.icon className="w-5 h-5 text-[#0B5CFF]" />
                  <span className="absolute -top-1 -right-1 text-[8px] font-bold text-[#F5A623] bg-[#07152E] px-1 rounded">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className={`flex-1 bg-[#07152E] rounded-2xl p-6 border border-[#0B5CFF]/10 hover:border-[#0B5CFF]/30 transition-all ${
                  idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};