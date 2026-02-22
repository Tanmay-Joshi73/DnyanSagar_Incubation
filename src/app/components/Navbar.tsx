"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex items-start justify-between py-6 md:py-8"
      >
        {/* ── Logo ── */}
        <div className="flex items-center">
          <span
            className="font-black text-[28px] tracking-tight text-[#000]"
            style={{ fontFamily: '"Arial Black", "Helvetica Neue", sans-serif' }}
          >
            SBX
          </span>
          <span
            className="font-black text-[28px] text-[#e01010]"
            style={{ fontFamily: '"Arial Black", "Helvetica Neue", sans-serif' }}
          >
            i
          </span>
        </div>

        {/* ── Nav links — two-column group ── */}
        <div className="flex items-start gap-12 text-[14px] font-bold">
          <div className="flex flex-col gap-1.5">
            <a href="#about" className="text-black/60 hover:text-black transition-colors duration-150">
              About
            </a>
            <a href="#team" className="text-black/60 hover:text-black transition-colors duration-150">
              Team
            </a>
          </div>
          <div className="flex flex-col gap-1.5">
            <a href="#portfolio" className="text-black/60 hover:text-black transition-colors duration-150">
              Portfolio
            </a>
            <a
              href="#apply"
              className="text-[#e01010] font-black hover:text-red-700 transition-colors duration-150 flex items-center gap-0.5"
            >
              Apply
              <span className="text-[12px] leading-none">↗</span>
            </a>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}