"use client";

import { useState, useEffect } from "react";
import { ArrowRight, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
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
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-sm font-medium text-black bg-white/90 dark:bg-black/60 dark:text-white rounded-full box-gen">
            <FileText className="w-4 h-4" />
            Blog
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">
            Learning, Building, and
            <br />
            Documenting
          </h2>
          <p className="text-base text-black font-mono tracking-tighter  dark:text-neutral-400 max-w-2xl">
            Insights and experiences from my journey as a developer exploring
            ideas, overcoming challenges, or just ranting.
          </p>
        </div>
        <Link
          href="/blog"
          className="hidden sm:flex items-center gap-2 px-6 py-3 text-sm font-medium text-neutral-900 dark:text-white  rounded-full bg-white/30 dark:bg-black/20 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-black/30 box-gen transition-all duration-300"
        >
          View all articles
          <ArrowRight size={16} />
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
      <Link
        href="/blog"
        className="flex sm:hidden items-center gap-2 px-6 py-3 mt-6 text-sm font-medium text-neutral-900 dark:text-white border border-neutral-300/50 dark:border-neutral-700/50 rounded-full bg-white/30 dark:bg-black/20 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-black/30 transition-all duration-300 w-full justify-center"
      >
        View all articles
        <ArrowRight size={16} />
      </Link>
    </section>
  );
}
