import { defineDocumentType, makeSource } from "contentlayer/source-files"
import readingTime from "reading-time"

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    publishedAt: {
      type: "date",
      description: "The date the post was published",
      required: true,
    },
    summary: {
      type: "string",
      description: "A short summary of the post",
      required: true,
    },
    image: {
      type: "string",
      description: "The image for the post",
      required: false,
    },
  },
  computedFields: {
    readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
    wordCount: {
      type: "number",
      resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}))

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the project",
      required: true,
    },
    publishedAt: {
      type: "date",
      description: "The date the project was published",
      required: true,
    },
    summary: {
      type: "string",
      description: "A short summary of the project",
      required: true,
    },
    image: {
      type: "string",
      description: "The image for the project",
      required: false,
    },
    repository: {
      type: "string",
      description: "The repository URL",
      required: false,
    },
    url: {
      type: "string",
      description: "The live URL",
      required: false,
    },
  },
  computedFields: {
    readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}))

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Project],
})
