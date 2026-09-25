import { ArrowUpRight } from 'lucide-react'
import { profile } from '../../data/portfolio'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="blob blob-lg -right-16 top-10" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="section-title font-display text-3xl font-bold sm:text-4xl">
            About <span>Me</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m a{' '}
            <span className="font-semibold text-accent">Python Developer</span> with
            hands-on experience building production-grade healthcare applications using{' '}
            <span className="font-semibold text-ink">FastAPI</span>,{' '}
            <span className="font-semibold text-ink">SQLAlchemy</span>,{' '}
            <span className="font-semibold text-ink">PostgreSQL</span>, JWT authentication, and
            RBAC.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Focused on scalable REST APIs, relational database design, secure authentication
            systems, and maintainable backend services.
          </p>
        </div>

        <div className="card-dark relative overflow-hidden rounded-[1.75rem] p-6 sm:p-8">
          <div className="blob blob-sm right-4 top-4 opacity-40" />
          <div className="photo-circle-wrap relative z-10 mx-auto mb-8">
            <img
              src={profile.photo}
              alt={profile.name}
              className="relative z-10 h-64 w-64 rounded-full object-cover object-top photo-glow sm:h-80 sm:w-80"
            />
          </div>
          <p className="relative z-10 text-center text-lg leading-relaxed text-ink">
            Let&apos;s build secure, scalable backend systems that power real products.
          </p>
          <div className="relative z-10 mt-8 flex justify-center">
            <a href="#contact" className="btn-pill btn-pill-primary">
              Contact me
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
