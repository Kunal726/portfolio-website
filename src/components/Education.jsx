import { GraduationCap } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education({ items = [] }) {
  if (!items.length) return null

  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
        {items.map((edu, i) => (
          <Reveal key={`${edu.institution}-${i}`} delay={i * 0.05}>
            <div className="glass card-hover h-full rounded-2xl p-6">
              <span className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/30 to-accent-3/20 text-accent">
                <GraduationCap size={20} />
              </span>
              <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
              <p className="mt-1 font-semibold text-slate-200">{edu.institution}</p>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400">
                <span>{edu.period}</span>
                {edu.score && (
                  <>
                    <span className="text-slate-600">•</span>
                    <span className="font-medium text-accent">{edu.score}</span>
                  </>
                )}
              </div>
              {edu.description && (
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{edu.description}</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
