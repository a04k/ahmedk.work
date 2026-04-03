import { t as BackButton } from "./BackButton-DIiUVoJs.js";
import { t as Container } from "./Container-CQroIhkq.js";
import { t as Route } from "./_slug-CwxkUKLL.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region app/blog/$slug.jsx?tsr-split=component
function Post() {
	const post = Route.useLoaderData();
	if (!post) return /* @__PURE__ */ jsx("div", { children: "Post not found" });
	const sortedTags = (post.tags || []).sort((a, b) => a.localeCompare(b));
	return /* @__PURE__ */ jsx(Container, {
		className: "mt-16 lg:mt-32",
		children: /* @__PURE__ */ jsx("div", {
			className: "xl:relative",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-2xl mx-auto",
				children: [/* @__PURE__ */ jsx(BackButton, {}), /* @__PURE__ */ jsxs("article", {
					className: "pb-6 prose dark:prose-invert",
					children: [/* @__PURE__ */ jsxs("header", {
						className: "flex flex-col",
						children: [sortedTags.length > 0 && /* @__PURE__ */ jsx("div", {
							className: "inline-flex gap-2 mt-4",
							children: sortedTags.map((tag) => /* @__PURE__ */ jsx("div", {
								className: "px-2 py-1 text-xs rounded-md box-gen before:content-['#']",
								children: tag
							}, tag))
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center order-first text-base text-neutral-700 dark:text-zinc-400",
							children: [/* @__PURE__ */ jsx("span", { className: "h-4 w-0.5 rounded-full bg-zinc-900 dark:bg-zinc-500" }), /* @__PURE__ */ jsx("span", {
								className: "ml-3",
								children: post.publishedAt
							})]
						})]
					}), /* @__PURE__ */ jsx("div", {
						dangerouslySetInnerHTML: { __html: post.content },
						className: "mt-10"
					})]
				})]
			})
		})
	});
}
//#endregion
export { Post as component };
