"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-between px-8 md:px-16 py-8 md:py-10 bg-[#F8F9FA]"
    >
      {/* Logo: SBXi Style */}
      <div className="flex items-start gap-0.5">
        <span className="font-[900] text-3xl md:text-4xl tracking-tighter text-black leading-none">SBX</span>
        <span className="font-[900] text-3xl md:text-4xl tracking-tighter text-red-600 leading-none">i</span>
      </div>

      {/* Nav Links Stacked like reference */}
      <div className="flex items-start gap-12 text-sm">
        <div className="flex flex-col text-left">
          <a href="#about" className="font-bold hover:text-red-600 transition-colors">About</a>
          <a href="#team" className="font-bold hover:text-red-600 transition-colors">Team</a>
        </div>
        <div className="flex flex-col text-left">
          <a href="#portfolio" className="font-bold hover:text-red-600 transition-colors">Portfolio</a>
          <a href="#apply" className="font-bold text-red-600 hover:text-red-700 transition-colors inline-flex items-center gap-1">
            Apply <span>↗</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
