import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Mail, Loader2 } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { SocialIcon } from './icons'

export default function Contact({ data }) {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')

  const accessKey = data.contact?.web3formsAccessKey
  const keyMissing = !accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY'

  async function handleSubmit(e) {
    e.preventDefault()
    if (keyMissing) return
    setStatus('sending')
    setError('')

    const form = e.target
    const formData = new FormData(form)
    formData.append('access_key', accessKey)
    formData.append('subject', `New portfolio message from ${formData.get('name') || 'a visitor'}`)
    formData.append('from_name', `${data.name} — Portfolio`)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setError(json.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setError('Network error — please check your connection and try again.')
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={data.contact?.heading || "Let's get in touch"}
          subtitle={data.contact?.subheading}
        />

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Left: direct contact */}
          <Reveal>
            <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-br from-accent/10 to-accent-3/5 p-6">
              <div>
                <h3 className="text-lg font-bold text-white">Prefer email?</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Reach me directly and I'll reply as soon as I can.
                </p>
                {data.email && (
                  <a
                    href={`mailto:${data.email}`}
                    className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    <Mail size={16} className="text-accent" />
                    {data.email}
                  </a>
                )}
              </div>

              {data.social?.length > 0 && (
                <div>
                  <p className="mb-2 text-sm font-semibold text-slate-400">Find me online</p>
                  <div className="flex gap-3">
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
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-10 text-center">
                <CheckCircle2 className="text-emerald-400" size={44} />
                <h3 className="mt-4 text-xl font-bold text-white">Message sent!</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Thanks for reaching out — I'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-5 text-sm font-semibold text-accent hover:text-accent-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6">
                {/* Honeypot for spam bots */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" type="text" placeholder="Jane Doe" required />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    required
                  />
                </div>

                <div className="mt-4">
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project, role, or just say hi…"
                    className="w-full resize-none rounded-xl border border-white/10 bg-base/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                {keyMissing && (
                  <p className="mt-4 flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-300">
                    <AlertCircle size={15} className="mt-0.5 shrink-0" />
                    Set your Web3Forms access key in <code className="mx-1">src/data/portfolio.json</code>
                    to enable sending. Get a free key at web3forms.com.
                  </p>
                )}

                {status === 'error' && (
                  <p className="mt-4 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
                    <AlertCircle size={15} className="mt-0.5 shrink-0" />
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending' || keyMissing}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-3 px-5 py-3 text-sm font-semibold text-base shadow-lg shadow-accent/20 transition-all hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type, placeholder, required }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-300">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-base/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
      />
    </div>
  )
}
