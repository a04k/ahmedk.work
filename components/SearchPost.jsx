"use client"

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
          className="block w-full px-4 py-2 rounded-full text-neutral-700 backdrop-blur-sm placeholder:text-neutral-700 hover:text-neutral-900 dark:text-zinc-400 placeholder:dark:text-zinc-300 dark:hover:text-white box-gen"
        />
        <Search className="absolute w-5 h-5 right-3 top-3 body-primary" />
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
