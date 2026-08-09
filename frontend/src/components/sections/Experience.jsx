import { experience } from '../../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-20 sm:py-28">
      <div className="blob blob-lg right-0 top-10" />
      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <h2 className="section-title font-display text-3xl font-bold sm:text-4xl">
          My <span>Experience</span>
        </h2>

        <div className="card-dark mt-10 rounded-[1.75rem] p-6 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-ink">{experience.role}</h3>
              <p className="mt-1 text-accent">
                {experience.company} · {experience.type}
              </p>
            </div>
            <p className="text-sm font-medium text-muted">{experience.period}</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {experience.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-line bg-body/50 px-4 py-4">
                <div className="font-display text-2xl font-bold text-accent">{metric.value}</div>
                <div className="mt-1 text-sm text-muted">{metric.label}</div>
              </div>
            ))}
          </div>

          <ul className="mt-8 list-disc space-y-2 pl-5 text-muted">
            {experience.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {experience.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-ink"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
