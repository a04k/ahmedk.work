import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog")
const projectsDirectory = path.join(process.cwd(), "content/projects")

export function getAllPosts() {
  // This function only runs on the server side
  if (typeof window !== "undefined") {
    return []
  }

  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      // Remove ".mdx" from file name to get id
      const id = fileName.replace(/\.mdx$/, "")

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Create slug from filename
      const slug = `/blog/${id}`
      const slugAsParams = id

      // Combine the data with the id
      return {
        id,
        slug,
        slugAsParams,
        content: matterResult.content,
        title: matterResult.data.title || "",
        description: matterResult.data.description || "",
        publishedAt: matterResult.data.publishedAt || "",
        tags: matterResult.data.tags || [],
        keywords: matterResult.data.keywords || "",
        image: matterResult.data.image || "",
        ...matterResult.data,
      }
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug) {
  // This function only runs on the server side
  if (typeof window !== "undefined") {
    return null
  }

  if (!fs.existsSync(postsDirectory)) {
    return null
  }

  const fullPath = path.join(postsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug: `/blog/${slug}`,
    slugAsParams: slug,
    content,
    title: data.title || "",
    description: data.description || "",
    publishedAt: data.publishedAt || "",
    tags: data.tags || [],
    keywords: data.keywords || "",
    image: data.image || "",
    ...data,
  }
}

export function getAllProjects() {
  // This function only runs on the server side
  if (typeof window !== "undefined") {
    return []
  }

  if (!fs.existsSync(projectsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(projectsDirectory)

  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      // Remove ".mdx" from file name to get id
      const id = fileName.replace(/\.mdx$/, "")

      // Read markdown file as string
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")

      // Use gray-matter to parse the project metadata section
      const matterResult = matter(fileContents)

      // Create slug from filename
      const slug = `/projects/${id}`
      const slugAsParams = id

      // Combine the data with the id
      return {
        id,
        slug,
        slugAsParams,
        content: matterResult.content,
        title: matterResult.data.title || "",
        description: matterResult.data.description || "",
        publishedAt: matterResult.data.publishedAt || "",
        tags: matterResult.data.tags || [],
        keywords: matterResult.data.keywords || "",
        image: matterResult.data.image || "",
        cover: matterResult.data.cover || "",
        link: matterResult.data.link || "",
        ...matterResult.data,
      }
    })

  // Sort projects by date
  return allProjectsData.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1
    } else {
      return -1
    }
  })
}

export function getProjectBySlug(slug) {
  // This function only runs on the server side
  if (typeof window !== "undefined") {
    return null
  }

  if (!fs.existsSync(projectsDirectory)) {
    return null
  }

  const fullPath = path.join(projectsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug: `/projects/${slug}`,
    slugAsParams: slug,
    content,
    title: data.title || "",
    description: data.description || "",
    publishedAt: data.publishedAt || "",
    tags: data.tags || [],
    keywords: data.keywords || "",
    image: data.image || "",
    cover: data.cover || "",
    link: data.link || "",
    ...data,
  }
}
