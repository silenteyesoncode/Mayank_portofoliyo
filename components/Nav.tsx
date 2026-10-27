"use client";

import { useState } from "react";
import Link from "next/link";
import { meta } from "@/lib/data/meta";
import { Mail, Menu, X } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#experience", label: "Experience" },
    { href: "#ai-projects", label: "AI Projects" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm text-zinc-300 hover:text-white transition-colors"
          onClick={handleLinkClick}
        >
          <span className="text-indigo-400 font-bold">mk</span>
          <span className="text-zinc-600">.</span>
          <span>portfolio</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors p-2"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors p-2"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href={`mailto:${meta.email}`}
            className="hidden sm:flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md transition-colors"
          >
            <Mail size={13} />
            Get in touch
          </a>

          {/* Hamburger Button for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-300 hover:text-white p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-zinc-800/80 bg-zinc-950/98 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-base font-medium text-zinc-300 hover:text-indigo-400 transition-colors py-1 border-b border-zinc-900/60"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href={`mailto:${meta.email}`}
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 text-sm font-semibold px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors w-full"
                >
                  <Mail size={16} />
                  Get in touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
