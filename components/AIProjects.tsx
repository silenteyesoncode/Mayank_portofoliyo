"use client";

import { aiProjects } from "@/lib/data/projects";
import { ExternalLink, Cpu, ChevronRight, Sparkles } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { motion } from "framer-motion";
import { useState } from "react";

const statusColors = {
  complete: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  working: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  prototype: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  experimental: "text-zinc-400 bg-zinc-800/60 border-zinc-700/60",
};

export default function AIProjects() {
  const featured = aiProjects.filter((p) => p.featured);
  const rest = aiProjects.filter((p) => !p.featured);

  return (
    <section id="ai-projects" className="relative py-28 px-6 bg-zinc-950/70 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu size={14} className="text-indigo-400" />
            Priority 2 · AI Projects
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            AI Application Engineering
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl text-base sm:text-lg">
            Production-grade integration of LLMs, prompt management, and NLP pipelines.
            Built with strict client-side reliability, session persistence, and real-time synchronization.
          </p>
        </motion.div>

        {/* 3D Tilt Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {featured.map((project, idx) => (
            <AICard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Supplementary AI Prototypes */}
        {rest.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
              Additional AI Experiments
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rest.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 bg-zinc-900/40 border border-zinc-800/80 rounded-xl hover:border-zinc-700 transition-all backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-base font-semibold text-zinc-200">
                      {project.name}
                    </h4>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full border ${
                        statusColors[project.status]
                      }`}
                    >
                      {project.statusLabel}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2 py-0.5 bg-zinc-800/80 text-zinc-400 rounded font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors p-1"
                      aria-label={`GitHub - ${project.name}`}
                    >
                      <GitHubIcon size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function AICard({ project, index }: { project: (typeof aiProjects)[0]; index: number }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -7;
    const rY = ((x - centerX) / centerX) * 7;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        perspective: 1000,
      }}
    >
      <motion.article
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative bg-zinc-900/60 border border-zinc-800/90 rounded-2xl p-7 hover:border-indigo-500/60 hover:shadow-[0_0_35px_rgba(99,102,241,0.2)] transition-colors duration-300 flex flex-col h-full backdrop-blur-md"
      >
        {/* Glow border gradient overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Card Header */}
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-semibold">
                AI System
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
              {project.name}
            </h3>
          </div>
          <span
            className={`text-xs px-3 py-1 rounded-full font-mono border font-medium ${
              statusColors[project.status]
            }`}
          >
            {project.statusLabel}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-300 leading-relaxed mb-6 relative z-10">
          {project.description}
        </p>

        {/* AI Components Checklist */}
        {project.aiComponents && (
          <div className="mb-6 relative z-10">
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2.5">
              Verified AI Implementation
            </p>
            <ul className="space-y-2">
              {project.aiComponents.map((comp, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-xs text-zinc-300"
                >
                  <Sparkles
                    size={13}
                    className="text-indigo-400 mt-0.5 shrink-0"
                  />
                  <span>{comp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Architecture Flow Box */}
        {project.architecture && (
          <div className="mb-6 p-3.5 bg-zinc-950/80 rounded-xl border border-zinc-800/80 relative z-10">
            <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
              Data Architecture
            </p>
            <p className="text-xs text-zinc-300 leading-relaxed font-mono">
              {project.architecture}
            </p>
          </div>
        )}

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 bg-zinc-800/80 text-zinc-300 rounded-md font-mono border border-zinc-700/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link Footer */}
        <div className="mt-auto flex items-center gap-4 pt-5 border-t border-zinc-800/80 relative z-10">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors"
          >
            <GitHubIcon size={16} />
            Source Code
          </motion.a>
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <ExternalLink size={15} />
              Interactive Demo
            </motion.a>
          )}
        </div>
      </motion.article>
    </motion.div>
  );
}
