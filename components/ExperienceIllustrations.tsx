"use client";

import { motion } from "framer-motion";
import { Video, ShieldCheck, Calendar, Activity, MapPin, Database, Zap, Navigation, Radio } from "lucide-react";

export function ClinikallyIllustration() {
  return (
    <div className="relative w-full h-44 sm:h-52 bg-zinc-950/80 rounded-xl border border-zinc-800/80 p-4 overflow-hidden flex flex-col justify-between mb-6 group-hover:border-emerald-500/40 transition-colors">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Bar: Telehealth Status & Live Doctor Video Feed Simulation */}
      <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2.5 relative z-10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-mono text-zinc-300 font-medium flex items-center gap-1.5">
            <Video size={13} className="text-emerald-400" />
            100ms Live Consultation Room
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
          Encrypted WebRTC
        </span>
      </div>

      {/* Center Flow: Doctor/Slot Availability -> State Reconciliation -> PayU Settlement */}
      <div className="grid grid-cols-3 gap-2 my-auto relative z-10">
        <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800/80 flex flex-col items-center text-center">
          <Calendar size={15} className="text-indigo-400 mb-1" />
          <span className="text-[10px] font-mono text-zinc-300 font-semibold">Slot Engine</span>
          <span className="text-[9px] text-zinc-400">Optimistic UI</span>
        </div>

        <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800/80 flex flex-col items-center text-center relative">
          {/* Animated Flow Dot */}
          <motion.div
            animate={{ x: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute -top-1 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"
          />
          <Activity size={15} className="text-emerald-400 mb-1" />
          <span className="text-[10px] font-mono text-zinc-300 font-semibold">State Machine</span>
          <span className="text-[9px] text-zinc-400">Pending → Confirmed</span>
        </div>

        <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800/80 flex flex-col items-center text-center">
          <ShieldCheck size={15} className="text-teal-400 mb-1" />
          <span className="text-[10px] font-mono text-zinc-300 font-semibold">PayU Gateway</span>
          <span className="text-[9px] text-zinc-400">Server Verified</span>
        </div>
      </div>

      {/* Bottom Metric Bar */}
      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-zinc-800/60 relative z-10">
        <span>Race Condition Prevention</span>
        <span className="text-emerald-400">0 duplicate orders</span>
      </div>
    </div>
  );
}

export function MeradocIllustration() {
  return (
    <div className="relative w-full h-44 sm:h-52 bg-zinc-950/80 rounded-xl border border-zinc-800/80 p-4 overflow-hidden flex flex-col justify-between mb-6 group-hover:border-blue-500/40 transition-colors">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2.5 relative z-10">
        <div className="flex items-center gap-2">
          <Navigation size={13} className="text-blue-400 animate-pulse" />
          <span className="text-[11px] font-mono text-zinc-300 font-medium">
            Custom Geospatial Navigation Matrix
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30">
          +25% Accuracy
        </span>
      </div>

      {/* Center Radar / Mapping Grid Graphic */}
      <div className="relative h-20 w-full flex items-center justify-center my-auto z-10">
        {/* Animated radar rings */}
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute w-28 h-28 rounded-full border border-blue-500/30"
        />
        <div className="absolute w-16 h-16 rounded-full border border-blue-400/50 bg-blue-500/5" />

        {/* Doctor and Patient nodes */}
        <div className="flex items-center justify-between w-full max-w-xs px-6 relative z-20">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-blue-600/30 border border-blue-400 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              <MapPin size={12} className="text-blue-300" />
            </div>
            <span className="text-[9px] font-mono text-zinc-400 mt-1">Patient</span>
          </div>

          <div className="h-[2px] flex-1 mx-3 bg-gradient-to-r from-blue-500/40 via-cyan-400 to-blue-500/40 relative">
            <motion.div
              animate={{ x: [0, 80, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
              className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]"
            />
          </div>

          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-indigo-600/30 border border-indigo-400 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.5)]">
              <Activity size={12} className="text-indigo-300" />
            </div>
            <span className="text-[9px] font-mono text-zinc-400 mt-1">Clinic/Provider</span>
          </div>
        </div>
      </div>

      {/* Bottom Infrastructure Metric */}
      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-zinc-800/60 relative z-10">
        <span className="flex items-center gap-1.5">
          <Database size={11} className="text-blue-400" />
          B-Tree Query Indexing
        </span>
        <span className="text-cyan-400 font-semibold">100% Crash-Free</span>
      </div>
    </div>
  );
}

export function AsterideIllustration() {
  return (
    <div className="relative w-full h-44 sm:h-52 bg-zinc-950/80 rounded-xl border border-zinc-800/80 p-4 overflow-hidden flex flex-col justify-between mb-6 group-hover:border-purple-500/40 transition-colors">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2.5 relative z-10">
        <div className="flex items-center gap-2">
          <Radio size={13} className="text-purple-400 animate-pulse" />
          <span className="text-[11px] font-mono text-zinc-300 font-medium">
            Haversine Geospatial Matching Engine
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30">
          Latency &lt; 150ms
        </span>
      </div>

      {/* Center Real-Time Ride Matching Visualization */}
      <div className="grid grid-cols-3 gap-2 my-auto relative z-10">
        <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800/80 flex flex-col items-center text-center">
          <span className="text-xs font-mono font-bold text-white">2,000+</span>
          <span className="text-[9px] text-zinc-400">DAU Concurrency</span>
        </div>

        <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-purple-500/30 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-purple-500/5" />
          <Zap size={14} className="text-purple-400 mb-0.5 relative z-10" />
          <span className="text-[10px] font-mono text-purple-300 font-bold relative z-10">18% Faster</span>
          <span className="text-[9px] text-zinc-400 relative z-10">-2.5 min wait</span>
        </div>

        <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800/80 flex flex-col items-center text-center">
          <span className="text-xs font-mono font-bold text-white">120+</span>
          <span className="text-[9px] text-zinc-400">Prod Bugs Resolved</span>
        </div>
      </div>

      {/* Bottom Technical Spec */}
      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-zinc-800/60 relative z-10">
        <span>Spring Boot · PubNub · Redis</span>
        <span className="text-purple-400">Dynamic Radius Scoping</span>
      </div>
    </div>
  );
}
