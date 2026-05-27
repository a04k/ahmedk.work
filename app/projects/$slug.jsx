import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { BackButton } from '@/components/ui/BackButton'
import { Container } from '@/components/ui/Container'
import { Image } from '@unpic/react'

const fetchProject = createServerFn({ method: 'GET' })
  .handler(async ({ data: slug }) => {
    const { getProjectBySlug } = await import('@/lib/server/content')
    return getProjectBySlug(slug)
  })

export const Route = createFileRoute('/projects/$slug')({
  loader: ({ params }) => fetchProject({ data: params.slug }),
  component: Project,
})

function Project() {
  const project = Route.useLoaderData()

  if (!project) {
    return <div>Project not found</div>
  }

  const sortedTags = (project.tags || []).sort((a, b) => a.localeCompare(b))

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <div className="box-gen rounded-2xl p-6 md:p-8 md:px-10 min-h-[calc(100dvh-16rem)]">
            <article className="prose dark:prose-invert max-w-none">
              <header className="flex flex-col">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-InstrumentSerif text-white leading-tight mb-8">
                  {project.title}
                </h1>
                {sortedTags.length > 0 && (
                  <div className="inline-flex gap-2 mb-4">
                    {sortedTags.map((tag) => (
                      <div
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md box-gen before:content-['#']"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex items-center text-base text-neutral-700 dark:text-zinc-400 mb-6">
                  <span className="h-4 w-0.5 rounded-full bg-zinc-900 dark:bg-zinc-500" />
                  <span className="ml-3">{project.publishedAt}</span>
                </div>
              </header>
              {project.cover && (
                <Image
                  src={project.cover}
                  alt={project.title}
                  width={720}
                  height={405}
                  className="my-8 transition-colors border rounded-md bg-muted mx-auto"
                />
              )}
              <div dangerouslySetInnerHTML={{ __html: project.content }} />
              {project.link && (
                <div className="mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium"
                  >
                    Visit Project →
                  </a>
                </div>
              )}
            </article>
          </div>
        </div>
      </div>
    </Container>
  )
}
