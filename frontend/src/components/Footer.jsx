import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="blob blob-sm left-10 top-0" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Let&apos;s build something <span className="text-accent">solid</span>.
          </h3>
          <p className="mt-2 text-sm text-muted">
            © {new Date().getFullYear()} {profile.name}. Python Backend Engineer.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-accent hover:opacity-80">
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:opacity-80"
          >
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="text-accent hover:opacity-80">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
