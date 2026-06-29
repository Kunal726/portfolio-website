import { ArrowUp } from 'lucide-react'
import { SocialIcon } from './icons'

export default function Footer({ data }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-bold text-white">{data.name}</p>
          <p className="mt-1 text-sm text-slate-500">
            © {year} {data.name}. Built with React & Tailwind.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {data.social?.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              title={s.label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-white"
            >
              <SocialIcon name={s.icon} size={16} />
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            title="Back to top"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-white"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
