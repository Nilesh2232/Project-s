import { skills } from '../../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-20 sm:py-28">
      <div className="blob blob-lg left-10 top-20" />
      <div className="blob blob-sm right-20 bottom-10" />
      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <h2 className="section-title text-center font-display text-3xl font-bold sm:text-4xl">
          My <span>Skills</span>
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="card-dark relative overflow-hidden rounded-[1.5rem] p-6">
              <div className="blob blob-sm -right-6 -top-6 opacity-30" />
              <h3 className="relative z-10 font-display text-lg font-bold text-accent">{group}</h3>
              <ul className="relative z-10 mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-body/40 px-3 py-1.5 text-sm text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
