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
    <Container className="mt-16 lg:mt-24">
      <div className="xl:relative">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <div className="box-gen rounded-2xl p-6 md:p-8 md:px-10 min-h-[calc(100dvh-16rem)]">
            <article>
              <header className="flex flex-col mb-12">
                <div className="flex items-center text-sm text-zinc-400 mb-4">
                  <span className="h-3 w-0.5 rounded-full bg-zinc-500 mr-3" />
                  <span>{post.publishedAt}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-InstrumentSerif text-white leading-tight">
                  {post.title}
                </h1>
                {sortedTags.length > 0 && (
                  <div className="inline-flex flex-wrap gap-2 mt-6">
                    {sortedTags.map((tag) => (
                      <div
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full text-zinc-300 bg-white/5"
                      >
                        #{tag}
                      </div>
                    ))}
                  </div>
                )}
              </header>
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="prose dark:prose-invert max-w-none"
              />
            </article>
          </div>
        </div>
      </div>
    </Container>
  )
}
