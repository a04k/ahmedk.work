"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { formatDate } from "@/lib/formatDate";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            Blog
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Learning, Building, and
            <br />
            Documenting
          </h2>
          <p className="text-lg text-gray-700 dark:text-neutral-400 max-w-2xl">
            Insights and experiences from my journey as a developer—exploring
            ideas, overcoming challenges, or just ranting.
          </p>
        </div>
        <Link
          href="/blog"
          className="hidden sm:flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-900 dark:text-white border border-neutral-200 dark:border-neutral-800 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
        >
          View all articles
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Blog Posts */}
      <div className="space-y-8">
        {featuredPosts.map((post, index) => (
          <BlogPostCard key={post.slug} post={post} index={index} />
        ))}
      </div>

      {/* Mobile View All Button */}
      <Link
        href="/blog"
        className="flex sm:hidden items-center gap-2 px-6 py-3 mt-6 text-sm font-medium text-gray-900 dark:text-white border border-neutral-200 dark:border-neutral-800 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors w-full justify-center"
      >
        View all articles
        <ArrowRight size={16} />
      </Link>
    </section>
  );
}

function BlogPostCard({ post, index }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200 + index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <article
      className={cn(
        "flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-300 group cursor-pointer",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      )}
      onClick={() => (window.location.href = `${post.slug}`)}
    >
      {/* Image */}
      <div className="flex-shrink-0">
        <div className="w-full sm:w-48 h-32 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl overflow-hidden">
          <img
            src={`/placeholder.svg?height=128&width=192`}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400 mb-2">
          <time>{formatDate(post.publishedAt)}</time>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>5 min read</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 dark:text-neutral-400 mb-4 line-clamp-2">
          {post.description}
        </p>

        <div className="flex items-center justify-end">
          {/* Tags */}
          <div className="flex gap-2">
            {post.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium text-gray-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
