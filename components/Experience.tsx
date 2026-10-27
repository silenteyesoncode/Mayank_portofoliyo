"use client";

import { experiences } from "@/lib/data/experience";
import { ChevronRight, Award } from "lucide-react";
import { motion } from "framer-motion";
import {
  ClinikallyIllustration,
  MeradocIllustration,
  AsterideIllustration,
} from "@/components/ExperienceIllustrations";

const companyBadgeColors: Record<string, string> = {
  clinikally: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  meradoc: "bg-blue-500/10 text-blue-300 border-blue-500/30",
  asteride: "bg-purple-500/10 text-purple-300 border-purple-500/30",
};

export default function Experience() {
  const featured = experiences.slice(0, 3);
  const earlier = experiences.slice(3);

  const renderIllustration = (id: string) => {
    switch (id) {
      case "clinikally":
        return <ClinikallyIllustration />;
      case "meradoc":
        return <MeradocIllustration />;
      case "asteride":
        return <AsterideIllustration />;
      default:
        return null;
    }
  };

  return (
    <section id="experience" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[11px] sm:text-xs font-mono uppercase tracking-widest mb-3">
            <Award size={13} />
            Priority 1 · Engineering Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Production Track Record
          </h2>
          <p className="mt-3 sm:mt-4 text-zinc-400 max-w-2xl text-sm sm:text-lg">
            Proven engineering impact in YC-backed healthcare and real-time mobility. 
            Detailed technical case studies verified against production releases.
          </p>
        </motion.div>

        {/* Featured Top 3 Experiences with Motion Timeline Cards */}
        <div className="space-y-8 sm:space-y-10 mb-16 sm:mb-20">
          {featured.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-zinc-900/50 border border-zinc-800/90 rounded-2xl p-5 sm:p-9 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)] transition-all duration-300 backdrop-blur-md"
            >
              {/* Index counter & YC badge */}
              <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                <span className="font-mono text-[11px] sm:text-xs text-indigo-400/80 tracking-widest uppercase">
                  Case Study 0{index + 1}
                </span>
                {exp.companyTag && (
                  <span className="text-[11px] sm:text-xs font-mono font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.15)]">
                    ★ {exp.companyTag}
                  </span>
                )}
              </div>

              {/* Title & Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                    {exp.company}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-indigo-400 mt-0.5">
                    {exp.role}
                  </div>
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-zinc-400 flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-0">
                  <span>{exp.period}</span>
                  <span className="text-zinc-600">·</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Interactive Technical Architectural Illustration */}
              {renderIllustration(exp.id)}

              {/* Summary */}
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 font-normal">
                {exp.summary}
              </p>

              {/* Verified Highlights */}
              <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm">
                    <ChevronRight
                      size={15}
                      className="text-indigo-400 mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform"
                    />
                    <span className="text-zinc-300 leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Key Results / Metrics */}
              {exp.impact && (
                <div className="mb-5 sm:mb-6 pt-4 border-t border-zinc-800/60">
                  <p className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-2.5">
                    Verified Outcomes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.impact.map((item, i) => (
                      <span
                        key={i}
                        className={`text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border font-medium ${
                          companyBadgeColors[exp.id] ||
                          "bg-zinc-800/60 text-zinc-300 border-zinc-700/60"
                        }`}
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 bg-zinc-800/70 text-zinc-400 rounded font-mono border border-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Earlier Work History */}
        {earlier.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
              Earlier Foundation & Internships
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {earlier.map((exp) => (
                <div
                  key={exp.id}
                  className="p-4 sm:p-5 bg-zinc-900/30 border border-zinc-800/60 rounded-xl"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-zinc-200 text-sm">
                      {exp.company}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs text-indigo-400 mb-2">{exp.role}</div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                    {exp.summary}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 bg-zinc-800/80 text-zinc-400 rounded font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
