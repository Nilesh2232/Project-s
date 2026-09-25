import { profile } from '../../data/portfolio'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div className="blob blob-lg -left-10 top-24" />
      <div className="blob blob-sm right-10 top-40" />
      <div className="blob blob-lg bottom-0 right-1/4" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <p className="text-center text-sm font-medium text-muted">
          Hi, I&apos;m <span className="text-ink">{profile.name}</span> — Based in{' '}
          <span className="text-accent">{profile.location}</span>
        </p>

        <h1 className="mx-auto mt-5 max-w-4xl text-center font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-6xl lg:text-7xl">
          Python <span className="text-accent">Developer</span>
        </h1>
      </div>
    </section>
  )
}
