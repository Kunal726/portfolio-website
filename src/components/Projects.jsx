import { Github, ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function ProjectThumb({ title, image }) {
  if (image) {
    return <img src={image} alt={title} className="h-full w-full object-cover" />
  }
  const initial = (title || '?').charAt(0).toUpperCase()
  return (
    <div className="relative grid h-full w-full place-items-center bg-gradient-to-br from-surface-2 to-surface">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <span className="relative font-display text-5xl font-extrabold text-white/15">{initial}</span>
    </div>
  )
}

export default function Projects({ items = [] }) {
  if (!items.length) return null

  return (
    <section id="projects" className="scroll-mt-20 bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of projects I'm proud of. Click through to explore the code or live demos."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={`${p.title}-${i}`} delay={(i % 3) * 0.08}>
              <article className="glass card-hover group flex h-full flex-col overflow-hidden rounded-2xl">
                <div className="aspect-[16/10] overflow-hidden border-b border-white/5">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                    <ProjectThumb title={p.title} image={p.image} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>

                  {p.tech?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 flex items-center gap-4 border-t border-white/5 pt-4">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                      >
                        <Github size={16} /> Code
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-2"
                      >
                        <ExternalLink size={16} /> Live demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
