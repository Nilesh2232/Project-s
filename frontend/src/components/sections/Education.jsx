import { awards, education } from '../../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-20 sm:py-28">
      <div className="blob blob-sm left-1/2 top-0" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
        <div>
          <h2 className="section-title font-display text-3xl font-bold sm:text-4xl">
            Education
          </h2>
          <div className="mt-8 space-y-4">
            {education.map((item) => (
              <article key={`${item.degree}-${item.institution}`} className="card-dark rounded-2xl p-5">
                <h3 className="font-display text-lg font-bold text-ink">{item.degree}</h3>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
                <p className="text-sm text-muted">
                  {item.location} · {item.period}
                </p>
                <p className="mt-2 text-sm font-semibold text-accent">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="section-title font-display text-3xl font-bold sm:text-4xl">
            Achievements
          </h2>
          <div className="card-dark mt-8 rounded-2xl p-6">
            <ul className="space-y-4">
              {awards.map((award) => (
                <li key={award} className="flex gap-3 text-muted">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{award}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
