// components/sections/Technology.tsx
"use client";
import { motion } from "framer-motion";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiPostgresql, 
  SiCloudflare, 
} from "react-icons/si";
import { Database } from "lucide-react";
import { FaAws } from "react-icons/fa6";

const technologies = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Convex", icon: Database, color: "#0B5CFF" },
  { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
];

export const Technology = () => {
  return (
    <section className="py-20 bg-[#07152E]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[#F5A623] text-xs tracking-[0.2em] font-semibold mb-2">TECH STACK</span>
          <h3 className="text-2xl md:text-3xl font-bold text-white">Powered by Modern Technology</h3>
          <p className="text-gray-400 text-sm mt-2">We leverage cutting-edge tools to build reliable, scalable systems.</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              viewport={{ once: true }}
              className="group flex items-center gap-2.5 bg-[#07152E]/80 border border-[#0B5CFF]/10 rounded-full px-4 py-2.5 hover:border-[#0B5CFF]/40 transition-all hover:shadow-lg hover:shadow-[#0B5CFF]/5"
            >
              <tech.icon 
                className="w-5 h-5" 
                style={{ color: tech.color }} 
              />
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Gold accent divider */}
        <div className="mt-8 flex justify-center">
          <div className="w-16 h-0.5 bg-linear-to-r from-transparent via-[#F5A623] to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};