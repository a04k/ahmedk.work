import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
//#region lib/server/content.js
var postsDirectory = path.join(process.cwd(), "content/blog");
var projectsDirectory = path.join(process.cwd(), "content/projects");
function getAllPosts() {
	if (typeof window !== "undefined") return [];
	if (!fs.existsSync(postsDirectory)) return [];
	return fs.readdirSync(postsDirectory).filter((fileName) => fileName.endsWith(".mdx")).map((fileName) => {
		const id = fileName.replace(/\.mdx$/, "");
		const fullPath = path.join(postsDirectory, fileName);
		const matterResult = matter(fs.readFileSync(fullPath, "utf8"));
		return {
			id,
			slug: `/blog/${id}`,
			slugAsParams: id,
			content: matterResult.content,
			title: matterResult.data.title || "",
			description: matterResult.data.description || "",
			publishedAt: matterResult.data.publishedAt || "",
			tags: matterResult.data.tags || [],
			keywords: matterResult.data.keywords || "",
			image: matterResult.data.image || "",
			...matterResult.data
		};
	}).sort((a, b) => {
		if (a.publishedAt < b.publishedAt) return 1;
		else return -1;
	});
}
function getPostBySlug(slug) {
	const fullPath = path.join(postsDirectory, `${slug}.mdx`);
	console.log("getPostBySlug fullPath:", fullPath);
	if (!fs.existsSync(fullPath)) {
		console.log("File does NOT exist:", fullPath);
		return null;
	}
	const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
	return {
		slug: `/blog/${slug}`,
		slugAsParams: slug,
		content: marked(content),
		title: data.title || "",
		description: data.description || "",
		publishedAt: data.publishedAt || "",
		tags: data.tags || [],
		keywords: data.keywords || "",
		image: data.image || "",
		...data
	};
}
function getAllProjects() {
	if (typeof window !== "undefined") return [];
	if (!fs.existsSync(projectsDirectory)) return [];
	return fs.readdirSync(projectsDirectory).filter((fileName) => fileName.endsWith(".mdx")).map((fileName) => {
		const id = fileName.replace(/\.mdx$/, "");
		const fullPath = path.join(projectsDirectory, fileName);
		const matterResult = matter(fs.readFileSync(fullPath, "utf8"));
		return {
			id,
			slug: `/projects/${id}`,
			slugAsParams: id,
			content: marked(matterResult.content),
			title: matterResult.data.title || "",
			description: matterResult.data.description || "",
			publishedAt: matterResult.data.publishedAt || "",
			tags: matterResult.data.tags || [],
			keywords: matterResult.data.keywords || "",
			image: matterResult.data.image || "",
			cover: matterResult.data.cover || "",
			link: matterResult.data.link || "",
			...matterResult.data
		};
	}).sort((a, b) => {
		if (a.publishedAt < b.publishedAt) return 1;
		else return -1;
	});
}
function getProjectBySlug(slug) {
	if (!fs.existsSync(projectsDirectory)) return null;
	const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
	if (!fs.existsSync(fullPath)) return null;
	const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
	return {
		slug: `/projects/${slug}`,
		slugAsParams: slug,
		content: marked(content),
		title: data.title || "",
		description: data.description || "",
		publishedAt: data.publishedAt || "",
		tags: data.tags || [],
		keywords: data.keywords || "",
		image: data.image || "",
		cover: data.cover || "",
		link: data.link || "",
		...data
	};
}
//#endregion
export { getAllPosts, getAllProjects, getPostBySlug, getProjectBySlug };
