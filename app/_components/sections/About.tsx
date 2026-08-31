// components/sections/About.tsx
"use client";
import { motion } from "framer-motion";
import { Network, Zap, Shield, Globe } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-24 bg-[#07152E] relative overflow-hidden">
            {/* Gold accent glow */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0B5CFF]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block text-[#F5A623] text-xs tracking-[0.2em] font-semibold mb-2">ABOUT US</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        Technology With a <span className="text-[#0B5CFF]">Purpose</span>.
                    </h2>
                    <p className="text-gray-300 text-lg mt-4 leading-relaxed">
                        NezamSys is a software company focused on building digital products that solve real business problems.
                        We combine modern technology, thoughtful design and business understanding to create systems that are
                        reliable, scalable and easy to use.
                    </p>

                    {/* Tagline with Gold accent */}
                    <div className="mt-6 flex items-center gap-3">
                        <div className="w-1 h-10 bg-[#F5A623] rounded-full"></div>
                        <p className="text-2xl font-semibold text-white">
                            Smart Systems. <span className="text-[#F5A623]">Better Business.</span>
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#0B5CFF]/10">
                        <div>
                            <p className="text-2xl font-bold text-white">50+</p>
                            <p className="text-xs text-gray-400">Projects Delivered</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">30+</p>
                            <p className="text-xs text-gray-400">Happy Clients</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">4+</p>
                            <p className="text-xs text-gray-400">Years Experience</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center"
                >
                    <div className="w-full max-w-sm h-72 bg-[#07152E]/80 rounded-3xl border border-[#0B5CFF]/20 p-6 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#0B5CFF]/50 transition-all">
                        {/* Animated network nodes */}
                        <div className="absolute inset-0 bg-linear-to-br from-[#0B5CFF]/5 to-transparent" />

                        {/* Connected nodes visual */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            <div className="grid grid-cols-3 gap-6">
                                {[Network, Zap, Shield, Globe, Network, Zap].map((Icon, i) => (
                                    <div
                                        key={i}
                                        className="w-12 h-12 rounded-full bg-[#0B5CFF]/10 border border-[#0B5CFF]/20 flex items-center justify-center group-hover:border-[#0B5CFF]/50 transition-all animate-float"
                                        style={{ animationDelay: `${i * 0.3}s` }}
                                    >
                                        <Icon size={20} className="text-[#0B5CFF] group-hover:text-[#F5A623] transition-colors" />
                                    </div>
                                ))}
                            </div>
                            {/* Connecting lines */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <svg className="w-full h-full opacity-20">
                                    <line x1="20%" y1="30%" x2="50%" y2="70%" stroke="#0B5CFF" strokeWidth="1" />
                                    <line x1="80%" y1="30%" x2="50%" y2="70%" stroke="#0B5CFF" strokeWidth="1" />
                                    <line x1="20%" y1="70%" x2="50%" y2="30%" stroke="#F5A623" strokeWidth="1" />
                                    <line x1="80%" y1="70%" x2="50%" y2="30%" stroke="#F5A623" strokeWidth="1" />
                                    <circle cx="50%" cy="50%" r="2" fill="#F5A623" />
                                </svg>
                            </div>
                        </div>

                        {/* Gold accent dot */}
                        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#F5A623]/60 animate-pulse" />

                        {/* Label */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 tracking-widest uppercase">
                            Connected Systems
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};