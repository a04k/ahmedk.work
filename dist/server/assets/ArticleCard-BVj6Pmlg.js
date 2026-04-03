import { n as cn } from "./Container-CQroIhkq.js";
import { t as formatDate } from "./formatDate-CnFBTgsl.js";
import { t as Card } from "./Card-ChJo_Enu.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Sparkles } from "lucide-react";
//#region components/cards/ArticleCard.jsx
function ArticleCard({ post, home, className }) {
	const sortedTags = post.tags.sort((a, b) => a.localeCompare(b));
	return /* @__PURE__ */ jsxs(Card, {
		className: cn("gap-2", className),
		children: [
			home && /* @__PURE__ */ jsx(Card.Pill, {
				icon: Sparkles,
				children: "Latest Post"
			}),
			/* @__PURE__ */ jsx(Card.Eyebrow, {
				as: "time",
				decorate: true,
				children: formatDate(post.publishedAt)
			}),
			/* @__PURE__ */ jsx(Card.Title, {
				href: post.slug,
				children: post.title
			}),
			/* @__PURE__ */ jsx("div", {
				className: "inline-flex gap-2",
				children: sortedTags.map((tag) => /* @__PURE__ */ jsx("div", {
					className: "px-2 py-1 text-xs rounded-md box-gen before:content-['#']",
					children: tag
				}, tag))
			}),
			/* @__PURE__ */ jsx(Card.Description, {
				className: "line-clamp-4 md:line-clamp-5 ",
				children: post.description
			})
		]
	});
}
//#endregion
export { ArticleCard as t };
