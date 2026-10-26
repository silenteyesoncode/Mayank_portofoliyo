import { skills } from "@/lib/data/meta";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
            Technical Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Engineering toolkit
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl">
            Skills grounded in production use — not a checklist of every
            technology I've read about.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5"
            >
              <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-zinc-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Positioning note */}
        <div className="mt-12 p-5 bg-indigo-950/20 border border-indigo-500/10 rounded-xl">
          <p className="text-sm text-zinc-400 leading-relaxed">
            <span className="text-indigo-400 font-medium">AI application focus:</span>{" "}
            My current direction is AI-powered product development — integrating
            LLMs and AI APIs into full-stack and mobile applications. My
            production engineering background provides the reliability and
            systems thinking that AI projects need in addition to model
            integration.
          </p>
        </div>
      </div>
    </section>
  );
}
