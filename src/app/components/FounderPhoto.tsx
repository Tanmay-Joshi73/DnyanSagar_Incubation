"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FounderPhotoProps {
  src?: string;
  name?: string;
  company?: string;
}

export default function FounderPhoto({
  src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
  name = "Cat Li",
  company = "Simple AI",
}: FounderPhotoProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="relative overflow-hidden w-full h-full bg-[#fbdada]"
    >
      <Image
        src={src}
        alt={`${name}, ${company}`}
        fill
        className="object-cover object-center grayscale-[0.1]"
        unoptimized
        priority
      />
      {/* Name label — top-left, matching reference exactly */}
      <div
        className="absolute top-4 left-4 p-1 px-1.5 text-[11px] font-[1000] text-black/70 mix-blend-multiply"
        style={{
          fontFamily: 'sans-serif',
          background: 'transparent'
        }}
      >
        {name}, {company}
      </div>
    </motion.div>
  );
}