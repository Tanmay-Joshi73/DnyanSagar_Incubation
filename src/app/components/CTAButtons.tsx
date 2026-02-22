"use client";

import { motion } from "framer-motion";

export default function CTAButtons() {
    return (
        <motion.a
            href="#apply"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="group flex flex-col justify-end p-8 bg-red-600 text-white h-full w-full min-h-[250px] transition-all relative overflow-hidden"
        >
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-red-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

            <div className="flex items-end justify-between w-full relative z-10">
                <span className="font-[900] text-2xl md:text-3xl uppercase tracking-tighter">Apply</span>
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </span>
            </div>
        </motion.a>
    );
}
