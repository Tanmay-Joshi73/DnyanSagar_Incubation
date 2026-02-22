"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Portfolio", href: "#portfolio" },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.4,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function FloatingCards() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-3 col-span-3 border-t border-black/10"
        >
            {links.map((link, i) => (
                <motion.a
                    key={link.label}
                    href={link.href}
                    variants={cardVariants}
                    whileHover={{ backgroundColor: "#f5f5f5" }}
                    className={`flex items-end justify-between px-5 py-4 bg-white group transition-colors ${i < links.length - 1 ? "border-r border-black/10" : ""
                        }`}
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-black/70 group-hover:text-black transition-colors">
                        {link.label}
                    </span>
                    <motion.span
                        className="text-black/40 group-hover:text-black transition-colors"
                        whileHover={{ x: 3, y: -3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <ArrowUpRight size={16} strokeWidth={2} />
                    </motion.span>
                </motion.a>
            ))}
        </motion.div>
    );
}
