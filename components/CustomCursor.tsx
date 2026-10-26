"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring physics for outer ring
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Dynamic glow coordinates
  const glowX = useSpring(mouseX, { damping: 40, stiffness: 180 });
  const glowY = useSpring(mouseY, { damping: 40, stiffness: 180 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "a, button, input, textarea, [role='button'], .clickable, article, [data-interactive='true']"
        );
        setIsPointer(!!interactive);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted) return null;

  return (
    <>
      {/* Dynamic ambient cursor spotlight following mouse */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-30 hidden md:block rounded-full bg-gradient-to-tr from-indigo-500/15 via-violet-500/10 to-transparent blur-3xl"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          width: isPointer ? 420 : 320,
          height: isPointer ? 420 : 320,
          opacity: isVisible ? 1 : 0,
          transition: "width 0.4s ease, height 0.4s ease, opacity 0.3s ease",
        }}
      />

      {/* Outer interactive ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block border border-indigo-400/80 rounded-full mix-blend-screen shadow-[0_0_15px_rgba(99,102,241,0.5)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicked ? 0.8 : isPointer ? 1.8 : 1,
          width: 32,
          height: 32,
          borderColor: isPointer
            ? "rgba(168, 85, 247, 0.9)"
            : "rgba(99, 102, 241, 0.8)",
          backgroundColor: isPointer
            ? "rgba(168, 85, 247, 0.15)"
            : "rgba(99, 102, 241, 0.05)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
      >
        {/* Pointer crosshair / radar tick indicator when hovering interactive elements */}
        {isPointer && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center text-[8px] font-mono font-bold text-violet-300"
          >
            +
          </motion.span>
        )}
      </motion.div>

      {/* Inner sharp precision dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isClicked ? 4 : isPointer ? 6 : 4,
          height: isClicked ? 4 : isPointer ? 6 : 4,
          backgroundColor: isPointer ? "#c084fc" : "#38bdf8",
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
