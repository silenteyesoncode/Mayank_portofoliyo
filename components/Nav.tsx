"use client";

import Link from "next/link";
import { meta } from "@/lib/data/meta";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Nav() {
  const navLinks = [
    { href: "#experience", label: "Experience" },
    { href: "#ai-projects", label: "AI Projects" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-800/50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <span className="text-indigo-400">mk</span>
          <span className="text-zinc-600">.</span>
          <span>portfolio</span>
        </Link>

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

        <div className="flex items-center gap-3">
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors p-1"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors p-1"
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
        </div>
      </nav>
    </header>
  );
}
