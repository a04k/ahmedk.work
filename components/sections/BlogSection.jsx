
import { useState, useEffect } from "react";
import { ArrowRight, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import Article from "@/components/cards/ArticleCard";

export default function BlogSection({ posts = [] }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredPosts = posts.slice(0, 2);

  return (
    <section
      className={cn(
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-sm text-zinc-300 uppercase tracking-widest bg-white/5 rounded-full box-gen font-pixel">
            <FileText className="w-3 h-3" />
            Writing
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-InstrumentSerif text-white leading-tight mb-4">
            Learning, Building &amp; Documenting
          </h2>
          <p className="text-sm md:text-base text-zinc-300 font-pixel leading-relaxed max-w-2xl tracking-wide">
            Insights and experiences from my journey as a developer exploring
            ideas, overcoming challenges, or just ranting.
          </p>
        </div>
        <Link to="/blog"
          className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-zinc-200 rounded-full bg-white/5 hover:bg-white/10 box-gen transition-all duration-300 shrink-0 mt-2"
        >
          View all
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 gap-6">
        {featuredPosts.map((post, index) => (
          <Article
            key={post.slug}
            post={post}
            home={index === 0}
            className={cn(
              "transition-all duration-300 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
            style={{ transitionDelay: `${200 + index * 100}ms` }}
          />
        ))}
      </div>

      {/* Mobile View All Button */}
      <Link to="/blog"
        className="flex sm:hidden items-center gap-2 px-6 py-3 mt-6 text-sm font-medium text-neutral-900 dark:text-white border border-neutral-300/50 dark:border-neutral-700/50 rounded-full bg-white/30 dark:bg-black/20 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-black/30 transition-all duration-300 w-full justify-center"
      >
        View all articles
        <ArrowRight size={16} />
      </Link>
    </section>
  );
}
