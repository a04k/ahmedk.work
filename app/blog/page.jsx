import SearchPost from "@/components/SearchPost"
import { SimpleLayout } from "@/components/ui/SimpleLayout"
import { getAllPosts } from "@/lib/content"

export const metadata = {
  title: "Blog",
  description: "Writing about software development, technology, and my learning journey.",
  keywords: ["software development, programming, technology, AI, machine learning, web development, computer science"],
}

export default function ArticlesIndex() {
  const allPosts = getAllPosts()

  return (
    <>
      <SimpleLayout
        title="Blog."
        intro={`When I'm not coding or studying, you can find me writing and ranting about anything really.`}
      >
        <div className="md:border-l md:border-zinc-400/40 md:pl-6 md:dark:border-white/10">
          <SearchPost posts={allPosts} />
        </div>
      </SimpleLayout>
    </>
  )
}
