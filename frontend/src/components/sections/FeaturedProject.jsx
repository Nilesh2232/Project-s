import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/portfolio'

export default function FeaturedProject() {
  const project = projects.find((p) => p.featured)
  if (!project) return null

  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-28">
      <div className="blob blob-lg left-0 top-20" />
      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <h2 className="section-title font-display text-3xl font-bold sm:text-4xl">
          View My <span>Work</span>
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Featured backend project — architecture, APIs, auth, and database design.
        </p>

        <article className="card-dark mt-10 overflow-hidden rounded-[1.75rem]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-64 bg-body">
              <img
                src={project.cover}
                alt={project.title}
                className="h-64 w-full object-cover object-center lg:absolute lg:inset-0 lg:h-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-soft/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-soft/40" />
              <span className="absolute left-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-black">
                {project.order}
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 text-accent">{project.stackLine}</p>
              <p className="mt-4 leading-relaxed text-muted">{project.shortDescription}</p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-line bg-body/60 px-4 py-4">
                    <div className="font-display text-2xl font-bold text-accent">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-sm text-muted">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-pill btn-pill-ghost !py-3 !px-5 text-sm"
                  >
                    <ExternalLink size={16} />
                    {project.githubLabel || 'GitHub'}
                  </a>
                ) : null}
                <Link
                  to={`/projects/${project.id}`}
                  className="btn-pill btn-pill-primary !py-3 !px-5 text-sm"
                >
                  View Architecture
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
