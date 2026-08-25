import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExternalLink, Github } from 'lucide-react'

import { Footer } from '@/components/footer'
import { getProject, projects } from '../data'

type ProjectPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.slug)

  if (!project) {
    return {
      title: 'Project',
    }
  }

  return {
    title: project.name,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#010101] text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-4 py-10 sm:px-8 sm:py-12">
        <nav className="mb-10 sm:mb-12">
          <Link href="/" className="text-sm text-zinc-400 transition hover:text-white">
            zuyux / projects
          </Link>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 sm:text-sm sm:tracking-[0.28em]">{project.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black leading-none text-white sm:text-7xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-7 text-zinc-300 sm:text-xl sm:leading-8">
              {project.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Site
              </Link>
              <Link
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-zinc-300"
              >
                <Github size={16} aria-hidden="true" />
                Repository
              </Link>
            </div>

            {project.alternateSites ? (
              <p className="mt-4 text-sm text-zinc-500">
                Also listed: {' '}
                {project.alternateSites.map((site, index) => (
                  <span key={site}>
                    <Link
                      href={site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 underline underline-offset-4 hover:text-white"
                    >
                      {site.replace('https://', '')}
                    </Link>
                    {index < project.alternateSites!.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            ) : null}
          </div>

          <aside className="border-t border-zinc-800 pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <dl className="space-y-6 text-sm">
              <div>
                <dt className="text-zinc-500">Language</dt>
                <dd className="mt-1 text-zinc-200">{project.language}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Status</dt>
                <dd className="mt-1 text-zinc-200">{project.status}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Topics</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.topics.map((topic) => (
                    <span key={topic} className="border border-zinc-800 px-2 py-1 text-xs text-zinc-300">
                      {topic}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <section className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-5 text-base leading-7 text-zinc-300">
            <h2 className="text-2xl font-bold text-white">What it is</h2>
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Project notes</h2>
            <ul className="mt-5 space-y-3 text-base leading-7 text-zinc-300">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="border-t border-zinc-900 pt-3">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  )
}
