"use client";

import { meta } from "@/lib/data/meta";
import { ArrowDown, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full z-20">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Eyebrow Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <Sparkles size={13} className="text-indigo-400" />
            Software Engineer — AI Applications & Full-Stack
          </motion.div>

          {/* Name with Gradient Text */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 tracking-tight mb-6"
          >
            Mayank Kumar
          </motion.h1>

          {/* Intro Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl font-normal"
          >
            I build production software and AI-powered products. Strong foundation
            in mobile engineering, real-time distributed systems, and geospatial APIs — 
            bridging full-stack engineering discipline with practical LLM application development.
          </motion.p>

          {/* Dynamic Stats Row with Hover Physics */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { value: "3+", label: "Production Apps Shipped", detail: "Clinikally, Meradoc, Asteride" },
              { value: "2,000+", label: "Daily Active Users", detail: "Real-time production load" },
              { value: "120+", label: "Bugs Solved In Prod", detail: "Zero-regression fixes" },
              { value: "18%", label: "Wait Time Reduced", detail: "Haversine geospatial matching" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all"
              >
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">{stat.value}</div>
                <div className="text-xs font-medium text-zinc-300 mt-1">{stat.label}</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">{stat.detail}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs with Magnetic Springs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <motion.a
              href="#ai-projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(99,102,241,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 text-white text-sm font-semibold rounded-lg shadow-lg shadow-indigo-600/30 transition-all"
            >
              <Sparkles size={15} />
              Explore AI Projects
            </motion.a>
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-900/80 hover:bg-zinc-800 text-white text-sm font-medium rounded-lg border border-zinc-700/80 backdrop-blur-sm transition-all"
            >
              Engineering Experience
            </motion.a>
            <motion.a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-zinc-400 hover:text-white text-sm font-medium rounded-lg border border-zinc-800/80 hover:border-zinc-600 backdrop-blur-sm transition-all"
            >
              <GitHubIcon size={16} />
              GitHub
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 text-sm text-zinc-500">
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-zinc-300 transition-colors"
            >
              <LinkedInIcon size={15} />
              linkedin/imonk
            </a>
            <span className="text-zinc-700">·</span>
            <a
              href={`mailto:${meta.email}`}
              className="flex items-center gap-2 hover:text-zinc-300 transition-colors"
            >
              <span>✉</span>
              {meta.email}
            </a>
          </motion.div>
        </motion.div>

        {/* Floating scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 pointer-events-none"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
          <ArrowDown size={14} className="text-indigo-400" />
        </motion.div>
      </div>
    </section>
  );
}
