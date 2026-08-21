import { createFileRoute } from '@tanstack/react-router'
import SearchPost from "@/components/SearchPost"
import { SimpleLayout } from "@/components/ui/SimpleLayout"
import { BackButton } from '@/components/ui/BackButton'

import { createServerFn } from '@tanstack/react-start'

const fetchPosts = createServerFn().handler(async () => {
  const { getAllPosts } = await import('@/lib/server/content')
  return getAllPosts()
})

export const Route = createFileRoute('/blog/')({
  loader: () => fetchPosts(),
  component: ArticlesIndex,
})

function ArticlesIndex() {
  const allPosts = Route.useLoaderData()

  return (
    <>
      <SimpleLayout
        title="Blog."
        intro={`When I'm not coding or studying, you can find me writing and ranting about anything really.`}
        lead={<BackButton to="/" />}
      >
        <div className="md:border-l md:border-white/10 md:pl-8">
          <SearchPost posts={allPosts} />
        </div>
      </SimpleLayout>
    </>
  )
}
