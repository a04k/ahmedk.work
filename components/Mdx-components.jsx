"use client";

import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

import { Pill } from "@/components/ui/Pill";
import { Prose } from "@/components/ui/Prose";

const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={`mt-2 scroll-m-20 text-4xl font-bold tracking-tight ${className || ""}`}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={`mt-10 scroll-m-20 border-b border-b-zinc-800/10 pb-1 text-3xl font-semibold tracking-tight first:mt-0 dark:border-b-zinc-700/10 ${className || ""}`}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={`mt-8 scroll-m-20 text-2xl font-semibold tracking-tight ${className || ""}`}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={`mt-8 scroll-m-20 text-xl font-semibold tracking-tight ${className || ""}`}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={`mt-8 scroll-m-20 text-lg font-semibold tracking-tight ${className || ""}`}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={`mt-8 scroll-m-20 text-base font-semibold tracking-tight ${className || ""}`}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <Link
      className={`font-medium text-zinc-900 underline underline-offset-4 dark:text-white ${className || ""}`}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={`leading-7 [&:not(:first-child)]:mt-6 ${className || ""}`}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul className={`my-6 ml-6 list-disc ${className || ""}`} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={`my-6 ml-6 list-decimal ${className || ""}`} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={`mt-2 ${className || ""}`} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={`mt-6 border-l-2 border-zinc-300 pl-6 italic text-zinc-800 dark:border-zinc-700 dark:text-zinc-200 [&>*]:text-zinc-600 dark:[&>*]:text-zinc-300 ${className || ""}`}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`rounded-md border border-zinc-200 dark:border-zinc-700 ${className || ""}`}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-4 border-zinc-200 dark:border-zinc-700" {...props} />
  ),
  table: ({ className, ...props }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={`w-full ${className || ""}`} {...props} />
    </div>
  ),
  tr: ({ className, ...props }) => (
    <tr
      className={`m-0 border-t border-zinc-300 p-0 even:bg-zinc-100 dark:border-zinc-700 dark:even:bg-zinc-800 ${className || ""}`}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={`border border-zinc-200 px-4 py-2 text-left font-bold dark:border-zinc-700 [&[align=center]]:text-center [&[align=right]]:text-right ${className || ""}`}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={`border border-zinc-200 px-4 py-2 text-left dark:border-zinc-700 [&[align=center]]:text-center [&[align=right]]:text-right ${className || ""}`}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={`mt-6 mb-4 overflow-x-auto rounded-lg bg-zinc-900 py-4 dark:bg-zinc-800 ${className || ""}`}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={`relative rounded bg-zinc-300/30 px-[0.3rem] py-[0.2rem] font-mono text-sm text-zinc-900 dark:bg-zinc-700/30 dark:text-zinc-200 ${className || ""}`}
      {...props}
    />
  ),
  Image,
  Pill,
};

export function Mdx({ source }) {
  if (!source) {
    return (
      <Prose>
        <p>No content available.</p>
      </Prose>
    );
  }

  return (
    <Prose>
      <MDXRemote {...source} components={components} />
    </Prose>
  );
}
