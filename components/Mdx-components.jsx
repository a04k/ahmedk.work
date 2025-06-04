"use client";

import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

import { Pill } from "@/components/ui/Pill";
import { Prose } from "@/components/ui/Prose";

const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={`mt-2 scroll-m-20 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white ${className || ""}`}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={`mt-10 scroll-m-20 border-b border-b-neutral-300/40 dark:border-b-zinc-700/10 pb-1 text-3xl font-semibold tracking-tight first:mt-0 text-neutral-900 dark:text-white ${className || ""}`}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={`mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white ${className || ""}`}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={`mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-neutral-900 dark:text-white ${className || ""}`}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={`mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-neutral-900 dark:text-white ${className || ""}`}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={`mt-8 scroll-m-20 text-base font-semibold tracking-tight text-neutral-900 dark:text-white ${className || ""}`}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <Link
      className={`font-medium text-neutral-900 dark:text-white underline underline-offset-4 hover:text-neutral-700 dark:hover:text-neutral-200 ${className || ""}`}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={`leading-7 [&:not(:first-child)]:mt-6 !text-neutral-900 dark:!text-neutral-100 ${className || ""}`}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={`ml-3 list-disc !text-neutral-900 dark:!text-neutral-100 [&>li]:mb-px [&>li:last-child]:mb-0 ${className || ""}`}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={`ml-6 list-decimal !text-neutral-900 dark:!text-neutral-100 [&>li]:mb-px [&>li:last-child]:mb-0 ${className || ""}`}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li
      className={`!text-neutral-900 dark:!text-neutral-100 leading-relaxed m-[4px] ${className || ""}`}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={`mt-6 border-l-2 border-neutral-400 dark:border-zinc-700 pl-6 italic text-neutral-700 dark:text-zinc-200 [&>*]:text-neutral-600 dark:[&>*]:text-zinc-300 ${className || ""}`}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }) => (
    <img
      className={`rounded-md border border-neutral-300 dark:border-zinc-700 ${className || ""}`}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-4 border-neutral-300 dark:border-zinc-700" {...props} />
  ),
  table: ({ className, ...props }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={`w-full ${className || ""}`} {...props} />
    </div>
  ),
  tr: ({ className, ...props }) => (
    <tr
      className={`m-0 border-t border-neutral-300 dark:border-zinc-700 p-0 even:bg-neutral-100/50 dark:even:bg-zinc-800 ${className || ""}`}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={`border border-neutral-300 dark:border-zinc-700 px-4 py-2 text-left font-bold text-neutral-900 dark:text-white [&[align=center]]:text-center [&[align=right]]:text-right ${className || ""}`}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={`border border-neutral-300 dark:border-zinc-700 px-4 py-2 text-left text-neutral-800 dark:text-neutral-200 [&[align=center]]:text-center [&[align=right]]:text-right ${className || ""}`}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={`mt-6 mb-4 overflow-x-auto rounded-lg bg-neutral-900 dark:bg-zinc-800 py-4 ${className || ""}`}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={`relative rounded bg-neutral-200/60 dark:bg-zinc-700/30 px-[0.3rem] py-[0.2rem] font-mono text-sm text-neutral-900 dark:text-zinc-200 ${className || ""}`}
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
        <p className="text-neutral-800 dark:text-neutral-200">
          No content available.
        </p>
      </Prose>
    );
  }

  return (
    <Prose>
      <MDXRemote {...source} components={components} />
    </Prose>
  );
}
