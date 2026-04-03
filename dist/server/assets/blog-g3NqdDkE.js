import "./Container-CQroIhkq.js";
import "./Card-ChJo_Enu.js";
import { t as ArticleCard } from "./ArticleCard-BVj6Pmlg.js";
import "./BlurTitle-DQRygA23.js";
import { t as SimpleLayout } from "./SimpleLayout-CRl528pk.js";
import { t as Route } from "./blog-CS7LyH3T.js";
import { Suspense, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { Search } from "lucide-react";
//#region components/SearchPost.jsx
function SearchPost({ posts = [] }) {
	const [searchValue, setSearchValue] = useState("");
	const filteredBlogPosts = posts.filter((post) => post.title?.toLowerCase().includes(searchValue.toLowerCase()) || post.tags?.some((tag) => tag.toLowerCase().includes(searchValue.toLowerCase())));
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col max-w-3xl space-y-8",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative w-full mb-4",
			children: [/* @__PURE__ */ jsx("input", {
				"aria-label": "Search articles by title or topic",
				type: "text",
				onChange: (e) => setSearchValue(e.target.value),
				placeholder: "Search articles by title or topic",
				className: "block w-full px-4 py-2 rounded-full text-neutral-700 backdrop-blur-sm placeholder:text-neutral-700 hover:text-neutral-900 dark:text-zinc-400 placeholder:dark:text-zinc-300 dark:hover:text-white box-gen"
			}), /* @__PURE__ */ jsx(Search, { className: "absolute w-5 h-5 right-3 top-3 body-primary" })]
		}), /* @__PURE__ */ jsxs(Suspense, {
			fallback: null,
			children: [!filteredBlogPosts.length && searchValue && /* @__PURE__ */ jsx("p", {
				className: "mb-4 body-secondary",
				children: "No articles found."
			}), filteredBlogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).map((post) => /* @__PURE__ */ jsx(ArticleCard, {
				post,
				home: false
			}, post.slug))]
		})]
	});
}
//#endregion
//#region app/blog/index.jsx?tsr-split=component
function ArticlesIndex() {
	return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(SimpleLayout, {
		title: "Blog.",
		intro: `When I'm not coding or studying, you can find me writing and ranting about anything really.`,
		children: /* @__PURE__ */ jsx("div", {
			className: "md:border-l md:border-zinc-400/40 md:pl-6 md:dark:border-white/10",
			children: /* @__PURE__ */ jsx(SearchPost, { posts: Route.useLoaderData() })
		})
	}) });
}
//#endregion
export { ArticlesIndex as component };
