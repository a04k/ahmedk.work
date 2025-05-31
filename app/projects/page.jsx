import { getAllProjects } from "@/lib/content"

import { ProjectCardGal } from "@/components/cards/project/ProjectCard"
import { SimpleLayout } from "@/components/ui/SimpleLayout"

export const metadata = {
  title: "Projects",
  description: "Projects I've built during on my journey.",
  keywords: ["software projects, web development, AI projects, hackathon projects, open source, portfolio"],
}

export default function Projects() {
  const allProjects = getAllProjects()

  return (
    <>
      <SimpleLayout
        title="Projects I've built on my journey"
        intro="I've worked on many small and large projects over the years, but these are the ones I'm most proud of. From AI-powered applications at hackathons to Personal and University Projects, each project represents a unique challenge and learning experience."
      >
        <h2 className="mb-10 text-2xl font-bold tracking-tight body-primary sm:text-2xl">Featured Projects</h2>

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
