
import { Suspense, useState } from "react"
import { Search } from "lucide-react"

import Article from "@/components/cards/ArticleCard"

export default function SearchPost({ posts = [] }) {
  const [searchValue, setSearchValue] = useState("")

  const filteredBlogPosts = posts.filter(
    (post) =>
      post.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(searchValue.toLowerCase())),
  )

  return (
    <div className="flex flex-col max-w-3xl space-y-8">
      <div className="relative w-full mb-4">
        <input
          aria-label="Search articles by title or topic"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles by title or topic"
          className="block w-full px-5 py-3 rounded-full text-zinc-200 placeholder:text-zinc-500 hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-white/20 box-gen"
        />
        <Search className="absolute w-4 h-4 right-5 top-3.5 text-zinc-400" />
      </div>
      <Suspense fallback={null}>
        {!filteredBlogPosts.length && searchValue && <p className="mb-4 body-secondary">No articles found.</p>}
        {filteredBlogPosts
          .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
          .map((post) => (
            <Article key={post.slug} post={post} home={false} />
          ))}
      </Suspense>
    </div>
  )
}
