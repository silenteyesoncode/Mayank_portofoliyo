import { otherProjects } from "@/lib/data/projects";
import { ExternalLink, Gamepad2, Globe, Smartphone, Server } from "lucide-react";
import { GitHubIcon } from "@/components/icons";

const categoryIcons: Record<string, React.ReactNode> = {
  game: <Gamepad2 size={14} />,
  frontend: <Globe size={14} />,
  mobile: <Smartphone size={14} />,
  backend: <Server size={14} />,
  fullstack: <Globe size={14} />,
};

const categoryLabels: Record<string, string> = {
  game: "Game",
  frontend: "Frontend",
  mobile: "Mobile",
  backend: "Backend",
  fullstack: "Full-Stack",
};

const statusColors: Record<string, string> = {
  complete: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  working: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  prototype: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  experimental: "text-zinc-400 bg-zinc-800/50 border-zinc-700/50",
};

export default function Projects() {
  const featured = otherProjects.filter((p) => p.featured);
  const rest = otherProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
            Software Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Selected projects
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl">
            Mobile apps, full-stack tools, and open source work — beyond the AI
            projects.
          </p>
        </div>

        {/* Featured */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {featured.map((project) => (
            <article
              key={project.id}
              className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 text-zinc-500 mb-1">
                    {categoryIcons[project.category]}
                    <span className="text-xs font-mono uppercase tracking-wider">
                      {categoryLabels[project.category]}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-zinc-200 transition-colors">
                    {project.name}
                  </h3>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded border ${
                    statusColors[project.status]
                  }`}
                >
                  {project.statusLabel}
                </span>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                {project.description}
              </p>

              {project.highlights.length > 0 && (
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="text-xs text-zinc-500 flex items-start gap-2">
                      <span className="text-zinc-600 mt-0.5">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 bg-zinc-800/80 text-zinc-400 rounded font-mono border border-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-zinc-800/50">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  <GitHubIcon size={14} />
                  View Code
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {rest.length > 0 && (
          <div>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
              More work
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((project) => (
                <div
                  key={project.id}
                  className="p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-medium text-zinc-300">
                      {project.name}
                    </h4>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 hover:text-zinc-300 transition-colors ml-2 shrink-0"
                      aria-label={`GitHub - ${project.name}`}
                    >
                      <GitHubIcon size={14} />
                    </a>
                  </div>
                  <p className="text-xs text-zinc-500 mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-1.5 py-0.5 bg-zinc-800/60 text-zinc-500 rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
