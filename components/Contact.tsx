import { meta } from "@/lib/data/meta";
import { Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s talk
          </h2>
          <p className="text-zinc-400 mb-10">
            Open to AI engineering, full-stack, and mobile engineering roles.
            Feel free to reach out via email or connect on LinkedIn.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <a
              href={`mailto:${meta.email}`}
              className="group flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <Mail size={16} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-0.5">Email</p>
                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors break-all">
                  {meta.email}
                </p>
              </div>
            </a>

            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <LinkedInIcon size={16} className="text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-0.5">LinkedIn</p>
                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                  linkedin.com/in/imonk
                </p>
              </div>
            </a>

            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-700/30 border border-zinc-700/50 flex items-center justify-center shrink-0">
                <GitHubIcon size={16} className="text-zinc-400" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-0.5">GitHub</p>
                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                  github.com/silenteyesoncode
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-zinc-700/30 border border-zinc-700/50 flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-zinc-400" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-0.5">Location</p>
                <p className="text-sm text-zinc-300">Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
