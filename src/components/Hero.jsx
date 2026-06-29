import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, MapPin, Download } from 'lucide-react'
import { SocialIcon } from './icons'

function Avatar({ src, name }) {
  const [failed, setFailed] = useState(false)
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

  if (!src || failed) {
    return (
      <div className="grid h-full w-full place-items-center bg-gradient-to-br from-accent/30 via-accent-3/20 to-accent-2/30">
        <span className="font-display text-6xl font-extrabold text-white/90 sm:text-7xl">
          {initials}
        </span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero({ data }) {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" />
        <div className="blob animate-float-slow left-[-10%] top-[-10%] h-72 w-72 bg-accent/40" />
        <div className="blob animate-float-slower right-[-8%] top-[6%] h-80 w-80 bg-accent-3/30" />
        <div className="blob animate-float-slow bottom-[-20%] left-[30%] h-72 w-72 bg-accent-2/25" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr]"
      >
        <div>
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl"
          >
            Hi, I'm <span className="text-gradient">{data.name}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-3 text-xl font-semibold text-slate-200 sm:text-2xl">
            {data.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {data.tagline}
          </motion.p>

          {data.location && (
            <motion.p variants={item} className="mt-4 flex items-center gap-1.5 text-sm text-slate-400">
              <MapPin size={15} className="text-accent" /> {data.location}
            </motion.p>
          )}

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-3 px-5 py-3 text-sm font-semibold text-base shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
            >
              Get in touch
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View my work
            </a>
            {data.resumeUrl && (
              <a
                href={data.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
              >
                <Download size={16} /> Resume
              </a>
            )}
          </motion.div>

          {data.social?.length > 0 && (
            <motion.div variants={item} className="mt-8 flex items-center gap-3">
              {data.social.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-white"
                >
                  <SocialIcon name={s.icon} size={18} />
                </a>
              ))}
            </motion.div>
          )}
        </div>

        {/* Portrait */}
        <motion.div variants={item} className="mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent via-accent-3 to-accent-2 opacity-40 blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-surface">
              <Avatar src={data.profileImage} name={data.name} />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <a
        href="#about"
        className="mt-16 flex flex-col items-center gap-1 text-xs font-medium text-slate-500 transition-colors hover:text-slate-300"
      >
        <span>Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
