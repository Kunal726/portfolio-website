import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About({ data }) {
  const paragraphs = (data.about || '').split('\n').filter(Boolean)

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow="About" title="A little about me" />

      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <div className="space-y-4 text-base leading-relaxed text-slate-300">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {data.skills?.length > 0 && (
            <div className="mt-8">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-500">
                Tech I work with
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-200 transition-colors hover:border-accent/40 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Reveal>

        {data.stats?.length > 0 && (
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              {data.stats.map((s) => (
                <div
                  key={s.label}
                  className="glass card-hover rounded-2xl p-6"
                >
                  <div className="font-display text-3xl font-extrabold text-gradient">{s.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
