import { Award, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { certificates } from '../../data/portfolio'

export default function Certificates() {
  const [preview, setPreview] = useState(null)

  return (
    <section id="certificates" className="relative overflow-hidden py-20 sm:py-28">
      <div className="blob blob-lg left-0 top-24" />
      <div className="blob blob-sm right-10 bottom-20" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <h2 className="section-title font-display text-3xl font-bold sm:text-4xl">
          My <span>Certificates</span>
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Verified professional training that strengthens my Python and data fundamentals.
        </p>

        {certificates.map((cert) => (
          <article key={cert.id} className="card-dark mt-10 overflow-hidden rounded-[1.75rem]">
            {/* Top: partial certificate preview only */}
            <button
              type="button"
              onClick={() => setPreview(cert)}
              className="group relative block w-full overflow-hidden border-b border-line bg-body/60 text-left"
              aria-label={`Open full ${cert.title} certificate`}
            >
              <div className="relative h-44 overflow-hidden sm:h-56 md:h-64">
                <img
                  src={cert.image}
                  alt={`${cert.title} preview`}
                  className="h-[140%] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-soft via-soft/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                  <span className="rounded-full border border-accent/30 bg-body/80 px-3 py-1 text-xs font-semibold text-accent backdrop-blur">
                    Preview · click to view full
                  </span>
                </div>
              </div>
            </button>

            {/* Bottom: certificate content */}
            <div className="p-6 sm:p-8">
              <div className="mb-3 inline-flex items-center gap-2 text-accent">
                <Award size={18} />
                <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                  Professional Certificate
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                {cert.title}
              </h3>
              <p className="mt-2 text-accent">{cert.issuer}</p>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted">{cert.summary}</p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-line bg-body/50 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-muted">Duration</p>
                  <p className="mt-2 font-display text-lg font-bold text-ink">{cert.duration}</p>
                </div>
                <div className="rounded-2xl border border-line bg-body/50 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-muted">Issued</p>
                  <p className="mt-2 font-display text-lg font-bold text-ink">{cert.date}</p>
                </div>
                <div className="rounded-2xl border border-line bg-body/50 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-muted">Cert No.</p>
                  <p className="mt-2 font-display text-lg font-bold text-ink">{cert.certificateNo}</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-display text-lg font-bold text-ink">Topics Covered</h4>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {cert.topics.map((topic) => (
                    <div key={topic.group} className="rounded-2xl border border-line bg-body/40 p-4">
                      <p className="text-sm font-semibold text-accent">{topic.group}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink">
                        {topic.items.join(' · ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setPreview(cert)}
                className="btn-pill btn-pill-primary mt-8"
              >
                View certificate
                <ExternalLink size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {preview ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Full certificate"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[1.5rem] border border-line bg-soft p-4 sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-xl font-bold text-ink">{preview.title}</p>
                <p className="text-sm text-muted">
                  {preview.issuer} · {preview.duration}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="rounded-full border border-line bg-body px-4 py-2 text-sm font-semibold text-ink"
              >
                Close
              </button>
            </div>
            <img
              src={preview.image}
              alt={`${preview.title} full certificate`}
              className="w-full rounded-xl object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  )
}
