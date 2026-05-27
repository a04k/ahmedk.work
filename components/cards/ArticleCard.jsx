import { Sparkles } from "lucide-react"

import { formatDate } from "@/lib/formatDate"
import { cn } from "@/lib/utils"
import { Card } from "@/components/cards/Card"

function ArticleCard({ post, home, className }) {
  const sortedTags = post.tags.sort((a, b) => a.localeCompare(b))
  return (
    <Card className={cn("gap-2", className)}>
      {home && <Card.Pill icon={Sparkles}>Latest Post</Card.Pill>}
      <Card.Eyebrow as="time" decorate>
        {formatDate(post.publishedAt)}
      </Card.Eyebrow>
      <Card.Title as="h2" href={post.slug} className="text-lg md:text-xl font-InstrumentSerif leading-snug">
        {post.title}
      </Card.Title>
      <div className="inline-flex flex-wrap gap-2">
        {sortedTags.map((tag) => (
          <div key={tag} className="px-2 py-0.5 text-[11px] rounded-full text-zinc-300 bg-white/5 box-gen">
            #{tag}
          </div>
        ))}
      </div>

      <Card.Description className="line-clamp-3 md:line-clamp-4 text-zinc-400">{post.description}</Card.Description>
    </Card>
  )
}

export default ArticleCard
export { ArticleCard }
