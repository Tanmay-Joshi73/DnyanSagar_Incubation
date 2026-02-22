"use client";

import { motion } from "framer-motion";

export default function CTAButtons() {
    return (
        <motion.a
            href="#apply"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            whileHover={{ filter: "brightness(1.08)" }}
            className="relative flex items-end w-full h-full bg-[#E01010] text-white cursor-pointer no-underline group"
        >
            <div className="flex items-end justify-between w-full p-8">
                <span
                    className="text-[18px] font-[900] uppercase tracking-tighter text-white leading-none"
                    style={{ fontFamily: '"Arial Black", "Helvetica Neue", sans-serif' }}
                >
                    Apply
                </span>
                <motion.span
                    className="text-white"
                    whileHover={{ x: 3, y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </motion.span>
            </div>
        </motion.a>
    );
}