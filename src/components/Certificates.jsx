import { Award, ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Certificates({ items = [] }) {
  if (!items.length) return null

  return (
    <section id="certificates" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="Certificates"
        title="Certifications & credentials"
        subtitle="Courses and certifications that back up the skills."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c, i) => {
          const Wrapper = c.url ? 'a' : 'div'
          const linkProps = c.url
            ? { href: c.url, target: '_blank', rel: 'noreferrer' }
            : {}
          return (
            <Reveal key={`${c.title}-${i}`} delay={(i % 3) * 0.08}>
              <Wrapper
                {...linkProps}
                className="glass card-hover group flex h-full items-start gap-4 rounded-2xl p-5"
              >
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.issuer}
                    className="h-12 w-12 shrink-0 rounded-lg object-cover"
                  />
                ) : (
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-accent/30 to-accent-3/20 text-accent">
                    <Award size={22} />
                  </span>
                )}

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold leading-snug text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{c.issuer}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    {c.date && <span>{c.date}</span>}
                    {c.url && (
                      <span className="inline-flex items-center gap-1 font-medium text-accent transition-colors group-hover:text-accent-2">
                        <ExternalLink size={13} /> Verify
                      </span>
                    )}
                  </div>
                </div>
              </Wrapper>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
