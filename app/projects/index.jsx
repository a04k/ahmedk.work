import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { ProjectCardGal } from "@/components/cards/project/ProjectCard"
import { SimpleLayout } from "@/components/ui/SimpleLayout"
import { BackButton } from '@/components/ui/BackButton'

const fetchProjects = createServerFn().handler(async () => {
  const { getAllProjects } = await import('@/lib/server/content')
  return getAllProjects()
})

export const Route = createFileRoute('/projects/')({
  loader: () => fetchProjects(),
  component: Projects,
})

function Projects() {
  const allProjects = Route.useLoaderData()

  return (
    <>
      <SimpleLayout
        title="Projects I've built on my journey"
        intro="I've worked on many small and large projects over the years, but these are the ones I'm most proud of. From AI-powered applications at hackathons to Personal and University Projects, each project represents a unique challenge and learning experience."
        lead={<BackButton to="/" />}
      >
        <h2 className="mb-10 text-2xl md:text-3xl font-InstrumentSerif text-white">Featured Projects</h2>

        <ul role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allProjects
            .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
            .map((project, index) => (
              <ProjectCardGal key={project.slug} project={project} index={index} />
            ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
