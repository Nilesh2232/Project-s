import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../../data/portfolio'

const INITIAL = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('')

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('Opening your email client...')
    setForm(INITIAL)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="blob blob-lg left-0 bottom-0" />
      <div className="blob blob-sm right-10 top-10" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <h2 className="section-title text-center font-display text-3xl font-bold sm:text-4xl">
          Contact <span>Me</span>
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={onSubmit} className="card-dark rounded-[1.75rem] p-6 sm:p-8">
            <label className="mb-4 block">
              <span className="mb-2 block text-sm font-medium text-ink">Name</span>
              <input
                className="input-dark"
                name="name"
                required
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
              />
            </label>
            <label className="mb-4 block">
              <span className="mb-2 block text-sm font-medium text-ink">Email</span>
              <input
                className="input-dark"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
              />
            </label>
            <label className="mb-6 block">
              <span className="mb-2 block text-sm font-medium text-ink">Message</span>
              <textarea
                className="input-dark min-h-36 resize-y"
                name="message"
                required
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about the role or project..."
              />
            </label>
            <button type="submit" className="btn-pill btn-pill-primary w-full sm:w-auto">
              Send Message
            </button>
            {status ? <p className="mt-4 text-sm text-accent">{status}</p> : null}
          </form>

          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="card-dark flex items-center gap-4 rounded-full px-5 py-4 transition hover:border-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-black">
                <Mail size={18} />
              </span>
              <span>
                <span className="block text-xs text-muted">Email</span>
                <span className="font-medium text-ink">{profile.email}</span>
              </span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="card-dark flex items-center gap-4 rounded-full px-5 py-4 transition hover:border-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-black">
                <Phone size={18} />
              </span>
              <span>
                <span className="block text-xs text-muted">Phone</span>
                <span className="font-medium text-ink">{profile.phone}</span>
              </span>
            </a>
            <div className="card-dark flex items-center gap-4 rounded-full px-5 py-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-black">
                <MapPin size={18} />
              </span>
              <span>
                <span className="block text-xs text-muted">Location</span>
                <span className="font-medium text-ink">{profile.location}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
