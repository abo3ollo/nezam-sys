// components/sections/Products.tsx (مع تحديث الألوان)
"use client";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ShoppingCart, LayoutDashboard } from "lucide-react";

const products = [
  {
    icon: BookOpen,
    title: "Nezam LMS",
    category: "Education Platform",
    desc: "A complete online learning management platform for academies, schools, teachers and online educators.",
    features: ["Student Management", "Teacher Management", "Online Courses", "Video Lessons", "Assignments", "Online Tests", "Automatic Grading", "Parent Accounts", "Admin Dashboard"],
    cta: "View Product",
  },
  {
    icon: ShoppingCart,
    title: "Nezam POS",
    category: "Restaurant Management",
    desc: "An all-in-one restaurant management system designed to simplify orders, tables, cashier operations and reporting.",
    features: ["Orders", "Tables", "Cashier", "Employees", "Reports", "Role Management"],
    cta: "View Product",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Business Systems",
    category: "Custom Software",
    desc: "Custom-built digital systems designed around your company's exact workflow and requirements.",
    features: ["Tailored Workflow", "Integration Ready", "Scalable", "Secure", "Dedicated Support"],
    cta: "Build Your System",
  },
];

export const Products = () => {
  return (
    <section id="solutions" className="py-24 bg-[#07152E]/80 border-y border-[#0B5CFF]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#F5A623] text-xs tracking-[0.2em] font-semibold mb-2">OUR PRODUCTS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Digital Products</h2>
          <p className="text-gray-300 mt-4">Powerful systems designed to simplify operations and improve business performance.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#07152E] rounded-3xl border border-[#0B5CFF]/20 p-8 hover:border-[#0B5CFF]/60 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0B5CFF]/5"
            >
              <product.icon className="text-[#0B5CFF] w-10 h-10 mb-4" />
              <span className="text-xs font-semibold text-[#F5A623] uppercase tracking-wider">{product.category}</span>
              <h3 className="text-2xl font-bold text-white mt-2">{product.title}</h3>
              <p className="text-gray-400 text-sm mt-3">{product.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.features.slice(0, 4).map((f, i) => (
                  <span key={i} className="text-xs bg-[#0B5CFF]/10 px-3 py-1 rounded-full text-gray-300 border border-[#0B5CFF]/10">
                    {f}
                  </span>
                ))}
                {product.features.length > 4 && (
                  <span className="text-xs bg-[#0B5CFF]/10 px-3 py-1 rounded-full text-gray-300">+{product.features.length - 4}</span>
                )}
              </div>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-[#0B5CFF] font-medium hover:gap-3 transition-all"
              >
                {product.cta} <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};