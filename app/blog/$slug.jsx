import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { BackButton } from '@/components/ui/BackButton'
import { Container } from '@/components/ui/Container'

const fetchPost = createServerFn({ method: 'GET' })
  .handler(async ({ data: slug }) => {
    const { getPostBySlug } = await import('@/lib/server/content')
    return getPostBySlug(slug)
  })

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => fetchPost({ data: params.slug }),
  component: Post,
})

function Post() {
  const post = Route.useLoaderData()

  if (!post) {
    return <div>Post not found</div>
  }

  const sortedTags = (post.tags || []).sort((a, b) => a.localeCompare(b))

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="max-w-2xl mx-auto">
          <BackButton />
          <article className="pb-6 prose dark:prose-invert">
            <header className="flex flex-col">
              <div className="flex items-center order-first text-base text-neutral-700 dark:text-zinc-400">
                <span className="h-4 w-0.5 rounded-full bg-zinc-900 dark:bg-zinc-500" />
                <span className="ml-3">{post.publishedAt}</span>
              </div>
              <h1 className="mt-6 text-5xl font-normal tracking-tight text-zinc-800 dark:text-zinc-100 font-InstrumentSerif sm:text-6xl">
                {post.title}
              </h1>
              {sortedTags.length > 0 && (
                <div className="inline-flex flex-wrap gap-2 mt-4">
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
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.content }} className='mt-10'/>
          </article>
        </div>
      </div>
    </Container>
  )
}
