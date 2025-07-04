import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { serialize } from "next-mdx-remote/serialize";

import { Mdx } from "@/components/Mdx-components";
import { Container } from "@/components/ui/Container";
import { getProjectBySlug, getAllProjects } from "@/lib/content";

// Add this option to disable static generation for this route
export const dynamic = "force-dynamic";

async function getProjectFromParams(params) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.join("/");
  const project = getProjectBySlug(slug);

  if (!project) {
    return null;
  }

  // Serialize the MDX content
  const mdxSource = await serialize(project.content || "");

  return {
    ...project,
    source: mdxSource,
  };
}

export async function generateMetadata({ params }) {
  const project = await getProjectFromParams(params);
  if (!project) {
    return {};
  }

  const {
    title,
    keywords = [],
    publishedAt: publishedTime,
    description,
    image,
    cover,
    slug,
  } = project;

  const ogImage =
    image || cover
      ? `https://ahmedk.work${image || cover}`
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
      url: `https://ahmedk.work/projects/${slug}`,
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
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slugAsParams.split("/"),
  }));
}

export default async function ProjectPage({ params }) {
  const project = await getProjectFromParams(params);

  if (!project) {
    notFound();
  }

  const sortedTags = (project.tags || []).sort((a, b) => a.localeCompare(b));

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/projects"
            className="items-center justify-center lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-5 xl:mt-0 mb-8 flex h-10 w-10 rounded-full box-gen"
          >
            <ArrowLeft className="w-4 h-4 " />
          </Link>
          <article className="pb-6 prose dark:prose-invert">
            <header className="flex flex-col">
              <h1 className="mt-6 title-primary">
                <Balancer>{project.title}</Balancer>
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
                <span className="ml-3">{project.publishedAt}</span>
              </div>
            </header>
            {project.cover && (
              <Image
                src={project.cover || "/placeholder.svg"}
                alt={project.title}
                width={720}
                height={405}
                className="my-8 transition-colors border rounded-md bg-muted"
                priority
              />
            )}
            <Suspense fallback={<div>Loading content...</div>}>
              <Mdx source={project.source} />
            </Suspense>
          </article>
        </div>
      </div>
    </Container>
  );
}
