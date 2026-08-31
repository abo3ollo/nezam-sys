// components/sections/Services.tsx
"use client";
import { motion } from "framer-motion";
import { Code, Globe, Cloud, Database, Palette, LifeBuoy, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Code,
        title: "Custom Software Development",
        desc: "Build a complete digital system specifically for your business.",
        gradient: "from-[#0B5CFF]/20 to-transparent"
    },
    {
        icon: Globe,
        title: "Web Development",
        desc: "Modern, fast and responsive websites and web applications.",
        gradient: "from-[#F5A623]/20 to-transparent"
    },
    {
        icon: Cloud,
        title: "SaaS Development",
        desc: "Build scalable SaaS products from concept to production.",
        gradient: "from-[#0B5CFF]/20 to-transparent"
    },
    {
        icon: Database,
        title: "Business Management Systems",
        desc: "Automate and manage your company's daily operations.",
        gradient: "from-[#F5A623]/20 to-transparent"
    },
    {
        icon: Palette,
        title: "UI/UX Development",
        desc: "Modern interfaces focused on usability and conversion.",
        gradient: "from-[#0B5CFF]/20 to-transparent"
    },
    {
        icon: LifeBuoy,
        title: "Maintenance & Support",
        desc: "Continuous improvements, bug fixes and technical support.",
        gradient: "from-[#F5A623]/20 to-transparent"
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-[#07152E] relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B5CFF]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-[#F5A623] text-xs tracking-[0.2em] font-semibold mb-2">WHAT WE OFFER</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">From Idea to <span className="text-[#0B5CFF]">Production</span></h2>
                    <p className="text-gray-300 mt-4">End-to-end development services to bring your vision to life.</p>

                    {/* Gold accent line */}
                    <div className="w-12 h-0.5 bg-[#F5A623] mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="group relative bg-[#07152E]/80 rounded-2xl p-6 border border-[#0B5CFF]/10 hover:border-[#0B5CFF]/40 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0B5CFF]/5 overflow-hidden"
                        >
                            {/* Gradient background on hover */}
                            <div className={`absolute inset-0 bg-linear-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-[#0B5CFF]/10 border border-[#0B5CFF]/20 flex items-center justify-center mb-4 group-hover:border-[#0B5CFF]/40 transition-all">
                                    <s.icon className="text-[#0B5CFF] w-6 h-6 group-hover:text-[#F5A623] transition-colors" />
                                </div>

                                <h3 className="text-lg font-semibold text-white group-hover:text-[#0B5CFF] transition-colors">
                                    {s.title}
                                </h3>
                                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{s.desc}</p>

                                <div className="mt-4 flex items-center text-[#0B5CFF] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all group-hover:gap-2">
                                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>

                            {/* Gold accent corner */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#F5A623]/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 text-sm mb-4">Need a custom solution for your business?</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-[#0B5CFF] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0B5CFF]/80 transition shadow-lg shadow-[#0B5CFF]/25"
                    >
                        Let's Talk <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};