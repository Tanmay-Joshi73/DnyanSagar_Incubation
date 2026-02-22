"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./Navbar";
import CTAButtons from "./CTAButtons";

const headlineVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Portfolio", href: "#portfolio" },
];

export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-black font-sans selection:bg-red-200">
            {/* ── Navbar ── */}
            <Navbar />

            {/* 
        ── 4 Column Bento Grid ──
        The layout is a 4-column grid that fills the remaining viewport.
        Borders are thick black (2.5px).
      */}
            <div
                className="flex-1 grid grid-cols-4"
                style={{ borderTop: "2.5px solid black" }}
            >
                {/* ROW 1 */}

                {/* Cell 1-1, 1-2, 1-3: "We back" */}
                <div className="col-span-3 border-r-[2.5px] border-black border-b-[2.5px] flex items-center px-8 md:px-16 py-12">
                    <motion.div
                        variants={headlineVariants}
                        initial="hidden"
                        animate="show"
                        className="overflow-hidden"
                    >
                        <motion.h1
                            variants={wordVariants}
                            className="font-[900] tracking-tighter leading-[0.85]"
                            style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
                        >
                            We back
                        </motion.h1>
                    </motion.div>
                </div>

                {/* Cell 1-4: Person Photo */}
                <div className="col-span-1 border-b-[2.5px] border-black relative overflow-hidden bg-[#FBCFE8]">
                    <Image
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                        alt="Founder"
                        fill
                        className="object-cover object-top filter grayscale-[0.2]"
                        unoptimized
                    />
                    <div className="absolute top-4 left-4 z-10">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-black/60 bg-white/40 backdrop-blur-sm px-2 py-0.5">
                            Anna Sun, Nowadays
                        </p>
                    </div>
                </div>

                {/* ROW 2 */}

                {/* Cells 2-1, 2-2, 2-3: Three Link Cards */}
                <div className="col-span-3 grid grid-cols-3 border-r-[2.5px] border-black">
                    {navLinks.map((link, idx) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            className={`group flex flex-col justify-end p-6 border-b-[2.5px] border-black h-[30vh] md:h-auto min-h-[200px] hover:bg-zinc-100 transition-colors ${idx < 2 ? 'border-r-[2.5px]' : ''}`}
                        >
                            <div className="flex items-center justify-between w-full mt-auto">
                                <span className="font-extrabold text-lg uppercase tracking-tight">{link.label}</span>
                                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Cell 2-4: "MIT" Large Text */}
                <div className="col-span-1 border-b-[2.5px] border-black flex items-center justify-center bg-white">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="font-[1000] tracking-tighter leading-none select-none"
                        style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
                    >
                        MIT
                    </motion.span>
                </div>

                {/* ROW 3 */}

                {/* Cell 3-1, 3-2, 3-3: "founders." */}
                <div className="col-span-3 border-r-[2.5px] border-black flex items-center px-8 md:px-16 py-12">
                    <motion.div
                        variants={headlineVariants}
                        initial="hidden"
                        animate="show"
                        className="overflow-hidden"
                    >
                        <motion.span
                            variants={wordVariants}
                            className="font-[900] tracking-tighter leading-[0.85] block"
                            style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
                        >
                            founders.
                        </motion.span>
                    </motion.div>
                </div>

                {/* Cell 3-4: Apply Button */}
                <div className="col-span-1">
                    <CTAButtons />
                </div>
            </div>

            {/* Bottom Border line to match the reference look if needed */}
            <div className="border-t-[2.5px] border-black w-full" />
        </div>
    );
}
