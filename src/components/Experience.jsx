import { Briefcase, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience({ items = [] }) {
  if (!items.length) return null

  return (
    <section id="experience" className="scroll-mt-20 bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative mx-auto max-w-3xl">
          {/* vertical line */}
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent sm:left-[22px]" />

          <div className="space-y-8">
            {items.map((job, i) => (
              <Reveal key={`${job.company}-${i}`} delay={i * 0.05}>
                <div className="relative pl-12 sm:pl-16">
                  <span className="absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-surface text-accent sm:h-11 sm:w-11">
                    <Briefcase size={16} />
                  </span>

                  <div className="glass card-hover rounded-2xl p-5 sm:p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-lg font-bold text-white">{job.role}</h3>
                      <span className="text-sm font-medium text-accent">{job.period}</span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400">
                      <span className="font-semibold text-slate-200">{job.company}</span>
                      {job.location && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={13} /> {job.location}
                        </span>
                      )}
                    </div>

                    {job.summary && <p className="mt-3 text-sm text-slate-400">{job.summary}</p>}

                    {job.highlights?.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {job.highlights.map((h, hi) => (
                          <li key={hi} className="flex gap-2.5 text-sm leading-relaxed text-slate-300">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
