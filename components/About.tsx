import { meta } from "@/lib/data/meta";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          {/* Left: bio */}
          <div>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Engineering fundamentals,
              <br />
              <span className="text-indigo-400">AI direction</span>
            </h2>

            <div className="space-y-4 text-zinc-400 leading-relaxed">
              {meta.bio.split("\n\n").map((para, i) => (
                <p key={i} className="text-sm sm:text-base">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right: education + honors */}
          <div className="space-y-6 sm:space-y-8">
            {/* Education */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 sm:p-6">
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
                Education
              </p>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  {meta.education.institution}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300">{meta.education.degree}</p>
                <p className="text-xs text-zinc-500 mt-1">
                  {meta.education.period} · {meta.education.location}
                </p>
              </div>
            </div>

            {/* Honors */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 sm:p-6">
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
                Honors & Recognition
              </p>
              <ul className="space-y-2.5 sm:space-y-3">
                {meta.honors.map((honor, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-zinc-300"
                  >
                    <span className="text-indigo-400 mt-0.5 shrink-0">→</span>
                    <span>{honor}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What I'm building toward */}
            <div className="p-4 sm:p-5 border border-indigo-500/20 bg-indigo-950/10 rounded-xl">
              <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-2">
                Current Direction
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Targeting roles in AI engineering, AI application development,
                and full-stack engineering on AI products — where production
                engineering and AI integration overlap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
