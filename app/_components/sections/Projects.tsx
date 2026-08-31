// components/sections/Projects.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Learning Management System",
    category: "EdTech",
    desc: "Complete LMS for online academies with student management, course delivery, and automated grading.",
    tags: ["Next.js", "Convex", "Tailwind"],
    image: "LMS",
  },
  {
    title: "Restaurant POS System",
    category: "Hospitality",
    desc: "All-in-one POS with table management, order tracking, and real-time analytics.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "POS",
  },
  {
    title: "E-Commerce Platform",
    category: "Retail",
    desc: "Modern custom e-commerce solution with seamless checkout and inventory management.",
    tags: ["Next.js", "Stripe", "AWS"],
    image: "E-Commerce",
  },
  {
    title: "Healthcare Management",
    category: "Health",
    desc: "Clinic management & patient portal with appointment scheduling and medical records.",
    tags: ["TypeScript", "Cloudflare", "React"],
    image: "Healthcare",
  },
  {
    title: "Real Estate Platform",
    category: "Property",
    desc: "Property listing & management system with advanced search and virtual tours.",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    image: "Real Estate",
  },
  {
    title: "Business Intelligence Dashboard",
    category: "Analytics",
    desc: "Real-time BI dashboard with customizable reports and data visualization.",
    tags: ["React", "D3.js", "Node.js"],
    image: "BI",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#07152E]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#F5A623] text-xs tracking-[0.2em] font-semibold mb-2">PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">What We've Built</h2>
          <p className="text-gray-300 mt-4">Real projects delivering real value to businesses across industries.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group bg-[#07152E]/80 rounded-2xl border border-[#0B5CFF]/20 p-6 hover:border-[#0B5CFF]/60 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0B5CFF]/5"
            >
              {/* Mockup preview */}
              <div className="h-40 bg-linear-to-br from-[#0B5CFF]/10 to-[#07152E] rounded-xl mb-4 flex items-center justify-center border border-[#0B5CFF]/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#07152E]/50 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-[#0B5CFF]/20 flex items-center justify-center mx-auto mb-2">
                      <ExternalLink size={20} className="text-[#0B5CFF]" />
                    </div>
                    <span className="text-xs text-gray-400">{p.image} Dashboard</span>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-2 left-2 w-16 h-2 bg-[#0B5CFF]/20 rounded-full"></div>
                <div className="absolute top-2 right-2 w-8 h-2 bg-[#F5A623]/20 rounded-full"></div>
              </div>
              
              <span className="text-xs font-semibold text-[#F5A623]">{p.category}</span>
              <h3 className="text-xl font-bold text-white mt-1">{p.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{p.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs bg-[#0B5CFF]/10 px-2.5 py-1 rounded-full text-gray-300 border border-[#0B5CFF]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href="#" 
                className="mt-4 inline-flex items-center gap-2 text-[#0B5CFF] text-sm font-medium group-hover:gap-3 transition-all"
              >
                View Project <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};