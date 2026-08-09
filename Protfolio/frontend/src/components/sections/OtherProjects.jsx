import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/portfolio'

export default function OtherProjects() {
  const others = projects.filter((p) => !p.featured)

  return (
    <section className="relative overflow-hidden pb-20 sm:pb-28">
      <div className="blob blob-sm right-10 top-0" />
      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
          Other <span className="text-accent">Projects</span>
        </h3>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {others.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="card-dark group relative overflow-hidden rounded-[1.5rem] transition hover:-translate-y-1"
            >
              <img
                src={project.cover}
                alt={project.title}
                className="h-48 w-full object-cover object-center transition duration-500 group-hover:scale-105"
              />
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-black transition group-hover:scale-110">
                <ArrowUpRight size={18} />
              </div>
              <div className="p-5">
                <div className="text-sm font-bold text-accent">{project.order}</div>
                <h4 className="mt-1 font-display text-xl font-bold text-ink">{project.title}</h4>
                <p className="mt-2 text-sm text-muted">{project.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
