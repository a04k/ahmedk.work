import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { serialize } from "next-mdx-remote/serialize";
import { Suspense } from "react";

import { Mdx } from "@/components/Mdx-components";
import { Container } from "@/components/ui/Container";
import { getPostBySlug, getAllPosts } from "@/lib/content";

// Add this option to disable static generation for this route
export const dynamic = "force-dynamic";

async function getPostFromParams(params) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.join("/");
  const post = getPostBySlug(slug);

  if (!post) {
    return null;
  }

  // Serialize the MDX content
  const mdxSource = await serialize(post.content || "");

  return {
    ...post,
    source: mdxSource,
  };
}

export async function generateMetadata({ params }) {
  const post = await getPostFromParams(params);
  if (!post) {
    return {};
  }

  const {
    title,
    keywords = [],
    publishedAt: publishedTime,
    description,
    image,
    slug,
  } = post;

  const ogImage = image
    ? `https://ahmedk.work${image}`
    : `https://ahmedk.work/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    keywords: keywords,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://ahmedk.work/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const sortedTags = (post.tags || []).sort((a, b) => a.localeCompare(b));

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/blog"
            className="items-center justify-center lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-5 xl:mt-0 mb-8 flex h-10 w-10 rounded-full box-gen"
          >
            <ArrowLeft className="w-4 h-4 " />
          </Link>
          <article className="pb-6 prose dark:prose-invert">
            <header className="flex flex-col">
              <h1 className="mt-6 title-primary">
                <Balancer>{post.title}</Balancer>
              </h1>
              {sortedTags.length > 0 && (
                <div className="inline-flex gap-2 mt-4">
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
              <div className="flex items-center order-first text-base text-neutral-700 dark:text-zinc-400">
                <span className="h-4 w-0.5 rounded-full bg-zinc-900 dark:bg-zinc-500" />
                <span className="ml-3">{post.publishedAt}</span>
              </div>
            </header>
            <Suspense fallback={<div>Loading content...</div>}>
              <Mdx source={post.source} />
            </Suspense>
          </article>
        </div>
      </div>
    </Container>
  );
}
