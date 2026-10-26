"use client";

import { useState, useEffect } from "react";
import { meta } from "@/lib/data/meta";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Footer() {
  const [year, setYear] = useState(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-10 px-6 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-zinc-600">
          © {year} Mayank Kumar ·{" "}
          <span className="font-mono text-zinc-700">silenteyesoncode.com</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-300 transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon size={16} />
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-300 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={16} />
          </a>
          <a
            href={`mailto:${meta.email}`}
            className="text-zinc-600 hover:text-zinc-300 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
