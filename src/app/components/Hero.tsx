"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";
import CTAButtons from "./CTAButtons";
import FounderPhoto from "./FounderPhoto";

const B = "5px solid #000";  // Increased from 3.5px to 5px

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08, delayChildren: 0.15 },
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

const HEADLINE_STYLE: React.CSSProperties = {
    fontFamily: '"Arial Black", "Helvetica Neue", sans-serif',
    fontWeight: 900,
    lineHeight: 0.88,
    letterSpacing: "-0.04em",
    color: "#000",
    fontSize: "clamp(3.5rem, 11.5vw, 10rem)",
};

export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col" style={{ background: "#EEF6FB" }}>
            <Navbar />

            <div className="flex-1 w-full max-w-[1400px] mx-auto px-6 pb-6 md:px-10 md:pb-10 flex flex-col">
                <div className="flex-1 grid grid-cols-4">
                    {/* ════ ROW 1 ════ */}

                    {/* Cell 1-1, 1-2, 1-3: "We back" */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="col-span-3 flex items-center px-10 md:px-14 overflow-hidden"
                        style={{ 
                            borderTop: B,
                            borderRight: B, 
                            borderBottom: B 
                        }}
                    >
                        <motion.h1 variants={wordVariants} style={HEADLINE_STYLE}>
                            We back
                        </motion.h1>
                    </motion.div>

                    {/* Cell 1-4: Founder Photo */}
                    <div 
                        className="col-span-1" 
                        style={{ 
                            borderTop: B,
                            borderBottom: B 
                        }}
                    >
                        <FounderPhoto />
                    </div>

                    {/* ════ ROW 2 ════ */}

                    {/* Cell 2-1: About link */}
                    <motion.a
                        href="#about"
                        whileHover={{ backgroundColor: "#f2faff" }}
                        className="relative flex items-end p-6 border-r-[5px] border-b-[5px] border-black group no-underline"
                    >
                        <span className="text-[15px] font-[1000] text-black uppercase" style={{ fontFamily: 'sans-serif' }}>
                            About
                        </span>
                        <span className="absolute bottom-6 right-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </span>
                    </motion.a>

                    {/* Cell 2-2: Team link */}
                    <motion.a
                        href="#team"
                        whileHover={{ backgroundColor: "#f2faff" }}
                        className="relative flex items-end p-6 border-r-[5px] border-b-[5px] border-black group no-underline"
                    >
                        <span className="text-[15px] font-[1000] text-black uppercase" style={{ fontFamily: 'sans-serif' }}>
                            Team
                        </span>
                        <span className="absolute bottom-6 right-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </span>
                    </motion.a>

                    {/* Cell 2-3: Portfolio link */}
                    <motion.a
                        href="#portfolio"
                        whileHover={{ backgroundColor: "#f2faff" }}
                        className="relative flex items-end p-6 border-r-[5px] border-b-[5px] border-black group no-underline"
                    >
                        <span className="text-[15px] font-[1000] text-black uppercase" style={{ fontFamily: 'sans-serif' }}>
                            Portfolio
                        </span>
                        <span className="absolute bottom-6 right-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </span>
                    </motion.a>

                    {/* Cell 2-4: MIT Block */}
                    <div 
                        className="flex items-center justify-center p-6 border-b-[5px] border-black overflow-hidden"
                    >
                        <span
                            style={{
                                fontFamily: '"Arial Black", "Helvetica Neue", sans-serif',
                                fontWeight: 900,
                                letterSpacing: "-0.06em",
                                lineHeight: 1,
                                color: "#111",
                                fontSize: "clamp(3.2rem, 8vw, 7.5rem)",
                            }}
                        >
                            MIT
                        </span>
                    </div>

                    {/* ════ ROW 3 ════ */}

                    {/* Cell 3-1, 3-2, 3-3: "founders." */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="col-span-3 flex items-center px-10 md:px-14 overflow-hidden"
                        style={{ 
                            borderRight: B,
                            borderBottom: B  // Add bottom border to last row
                        }}
                    >
                        <motion.span variants={wordVariants} style={HEADLINE_STYLE}>
                            founders.
                        </motion.span>
                    </motion.div>

                    {/* Cell 3-4: Apply Button */}
                    <div 
                        className="col-span-1 h-full"
                        style={{
                            borderBottom: B  // Add bottom border to last row cell
                        }}
                    >
                        <CTAButtons />
                    </div>
                </div>
            </div>
        </div>
    );
}