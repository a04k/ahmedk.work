import { getAllPosts, getAllProjects } from "@/lib/content";

export default async function sitemap() {
  const allPosts = getAllPosts();
  const allProjects = getAllProjects();

  const blogs = (allPosts || []).map((post) => ({
    url: `https://ahmedk.work${post.slug}`,
    lastModified: post.publishedAt || new Date().toISOString().split("T")[0],
  }));

  const projects = (allProjects || []).map((project) => ({
    url: `https://ahmedk.work${project.slug}`,
    lastModified: project.publishedAt || new Date().toISOString().split("T")[0],
  }));

  const routes = ["", "/blog", "/stack", "/projects"].map((route) => ({
    url: `https://ahmedk.work${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...projects];
}
