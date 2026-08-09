import { ArrowLeft, ExternalLink } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/portfolio'

function MethodBadge({ method }) {
  const colors = {
    GET: 'bg-accent/15 text-accent border-accent/40',
    POST: 'bg-sky-500/15 text-sky-300 border-sky-500/40',
    PUT: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
    DELETE: 'bg-rose-500/15 text-rose-300 border-rose-500/40',
  }
  return (
    <span
      className={`inline-flex min-w-16 justify-center rounded border px-2 py-0.5 font-mono text-xs font-semibold ${colors[method] || 'border-line text-ink'}`}
    >
      {method}
    </span>
  )
}

function OverviewTab({ project }) {
  return (
    <div className="space-y-6">
      <p className="leading-relaxed text-muted">{project.overview.summary}</p>
      {project.caseStudyNote ? (
        <div className="rounded-2xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm leading-relaxed text-ink">
          {project.caseStudyNote}
        </div>
      ) : null}
      <ul className="list-disc space-y-2 pl-5 text-muted">
        {project.overview.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-ink"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

function ArchitectureTab({ project }) {
  return (
    <div className="space-y-8">
      <div className="mx-auto flex max-w-md flex-col items-center gap-2">
        {project.architecture.diagram.map((layer, index) => (
          <div key={layer} className="flex w-full flex-col items-center gap-2">
            <div className="w-full rounded-md border border-line bg-soft px-4 py-3 text-center text-sm font-semibold text-ink">
              {layer}
            </div>
            {index < project.architecture.diagram.length - 1 ? (
              <div className="h-4 w-px bg-line" />
            ) : null}
          </div>
        ))}
      </div>
      <ul className="list-disc space-y-2 pl-5 text-muted">
        {project.architecture.layers.map((layer) => (
          <li key={layer}>{layer}</li>
        ))}
      </ul>
    </div>
  )
}

function ApiDesignTab({ project }) {
  if (!project.apiDesign) {
    return <p className="text-muted">API design details are not listed for this project.</p>
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-line text-muted">
            <th className="px-2 py-2 font-semibold">Method</th>
            <th className="px-2 py-2 font-semibold">Endpoint</th>
            <th className="px-2 py-2 font-semibold">Purpose</th>
          </tr>
        </thead>
        <tbody>
          {project.apiDesign.map((row) => (
            <tr key={`${row.method}-${row.path}`} className="border-b border-line">
              <td className="px-2 py-3">
                <MethodBadge method={row.method} />
              </td>
              <td className="px-2 py-3 font-mono text-ink">{row.path}</td>
              <td className="px-2 py-3 text-muted">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-sm text-muted">
        Representative endpoints from a 40+ API surface covering patients, appointments, lab
        workflows, prescriptions, and auth.
      </p>
    </div>
  )
}

function DatabaseTab({ project }) {
  if (!project.database) {
    return <p className="text-muted">Database details are not listed for this project.</p>
  }
  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {project.database.entities.map((entity) => (
          <div key={entity.name} className="rounded-md border border-line p-4">
            <h4 className="font-semibold text-ink">{entity.name}</h4>
            <ul className="mt-3 space-y-1 border-l border-line pl-4 text-sm text-muted">
              {entity.children.map((child) => (
                <li key={child}>{child}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <ul className="list-disc space-y-2 pl-5 text-muted">
        {project.database.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </div>
  )
}

function AuthenticationTab({ project }) {
  if (!project.authentication) {
    return <p className="text-muted">Authentication details are not listed for this project.</p>
  }
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center gap-2">
      {project.authentication.map((step, index) => (
        <div key={step} className="flex w-full flex-col items-center gap-2">
          <div className="w-full rounded-md border border-line px-4 py-3 text-center text-sm font-medium text-ink">
            {step}
          </div>
          {index < project.authentication.length - 1 ? (
            <div className="text-xs font-semibold text-muted">↓</div>
          ) : null}
        </div>
      ))}
    </div>
  )
}

function RbacTab({ project }) {
  if (!project.rbac) {
    return <p className="text-muted">RBAC details are not listed for this project.</p>
  }
  return (
    <div className="space-y-6">
      <p className="leading-relaxed text-muted">{project.rbac.summary}</p>
      <div className="flex flex-wrap gap-2">
        {project.rbac.roles.map((role) => (
          <span
            key={role}
            className="rounded-md bg-soft px-3 py-1.5 text-sm font-semibold text-ink"
          >
            {role}
          </span>
        ))}
      </div>
      <ul className="list-disc space-y-2 pl-5 text-muted">
        {project.rbac.examples.map((example) => (
          <li key={example}>{example}</li>
        ))}
      </ul>
    </div>
  )
}

function ChallengesTab({ project }) {
  if (!project.challenges) {
    return <p className="text-muted">Challenges are not listed for this project.</p>
  }
  return (
    <ul className="list-disc space-y-3 pl-5 text-muted">
      {project.challenges.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function ResultsTab({ project }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="rounded-md border border-line px-4 py-4">
            <div className="text-2xl font-semibold text-ink">{metric.value}</div>
            <div className="mt-1 text-sm text-muted">{metric.label}</div>
          </div>
        ))}
      </div>
      {project.results ? (
        <ul className="list-disc space-y-2 pl-5 text-muted">
          {project.results.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

const TAB_RENDERERS = {
  Overview: OverviewTab,
  Architecture: ArchitectureTab,
  'API Design': ApiDesignTab,
  Database: DatabaseTab,
  Authentication: AuthenticationTab,
  RBAC: RbacTab,
  Challenges: ChallengesTab,
  Results: ResultsTab,
}

export default function ProjectDetail() {
  const { projectId } = useParams()
  const project = useMemo(
    () => projects.find((item) => item.id === projectId),
    [projectId],
  )
  const [activeTab, setActiveTab] = useState('Overview')

  useEffect(() => {
    if (project?.tabs?.[0]) {
      setActiveTab(project.tabs[0])
    }
  }, [project])

  if (!project) {
    return <Navigate to="/" replace />
  }

  const ActiveContent = TAB_RENDERERS[activeTab] || OverviewTab

  return (
    <div className="relative overflow-hidden pt-24 pb-16">
      <div className="blob blob-lg left-0 top-20" />
      <div className="blob blob-sm right-10 top-40" />
      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="card-dark mt-6 overflow-hidden rounded-[1.75rem]">
          {project.cover ? (
            <img
              src={project.cover}
              alt=""
              className="h-44 w-full object-cover sm:h-56"
            />
          ) : null}
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {project.order} {project.featured ? '· Featured' : ''}
              </p>
              <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {project.title}
              </h1>
              <p className="mt-2 text-muted">{project.subtitle}</p>
            </div>
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
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-soft px-3 py-1 text-xs font-semibold text-ink"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 border-b border-line">
          <div className="-mb-px flex gap-1 overflow-x-auto">
            {project.tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap border-b-2 px-3 py-2.5 text-sm font-medium transition ${
                  activeTab === tab
                    ? 'border-accent text-accent'
                    : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="card-dark mt-6 rounded-[1.5rem] p-6 sm:p-8">
          <ActiveContent project={project} />
        </div>
      </div>
    </div>
  )
}
