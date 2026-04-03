import { n as cn } from "./Container-CQroIhkq.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ChevronsRight } from "lucide-react";
//#region components/ui/Pill.jsx
function Pill({ className, children, icon }) {
	const IconComponent = icon;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("inline-flex items-center h-8 gap-2 px-3 text-sm leading-5 whitespace-nowrap box-gen rounded-2xl", className),
		children: [IconComponent && /* @__PURE__ */ jsx(IconComponent, { className: "flex-shrink-0 w-4 h-4" }), /* @__PURE__ */ jsx("span", {
			className: "truncate",
			children
		})]
	});
}
//#endregion
//#region components/cards/Card.jsx
function Card({ as: Component = "div", className, children }) {
	return /* @__PURE__ */ jsxs(Component, {
		className: cn("group relative flex flex-col items-start rounded-2xl box-gen p-4 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60", className),
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent dark:from-white/5 dark:via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100/50 to-transparent dark:via-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full pointer-events-none" }),
			children
		]
	});
}
Card.Link = function CardLink({ children, ...props }) {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Link, {
		...props,
		children: [/* @__PURE__ */ jsx("span", { className: "absolute z-20 block -inset-y-1 -inset-x-1" }), /* @__PURE__ */ jsx("span", {
			className: "relative z-10",
			children
		})]
	}) });
};
Card.Pill = function CardPill({ children, icon, className, ...props }) {
	return /* @__PURE__ */ jsx(Pill, {
		icon,
		className: cn("mb-3", className),
		children
	});
};
Card.Title = function CardTitle({ as: Component = "h2", href, target, children, rel, className, ...props }) {
	return /* @__PURE__ */ jsx(Component, {
		className: cn("text-base font-semibold tracking-tight body-primary", className),
		...props,
		children: href ? /* @__PURE__ */ jsx(Card.Link, {
			href,
			target,
			rel,
			children
		}) : children
	});
};
Card.Description = function CardDescription({ children, className, ...props }) {
	return /* @__PURE__ */ jsx("p", {
		className: cn("relative z-10 text-sm leading-relaxed body-secondary", className),
		...props,
		children
	});
};
Card.Cta = function CardCta({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		"aria-hidden": "true",
		className: "relative z-10 flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400",
		children: [children, /* @__PURE__ */ jsx(ChevronsRight, { className: "w-3 h-3 ml-1 stroke-current" })]
	});
};
Card.Eyebrow = function CardEyebrow({ as: Component = "p", decorate = false, className, children, ...props }) {
	return /* @__PURE__ */ jsxs(Component, {
		className: cn(className, "relative z-10 flex items-center text-sm body-secondary", decorate && "pl-3.5"),
		...props,
		children: [decorate && /* @__PURE__ */ jsx("span", {
			className: "absolute inset-y-0 left-0 flex items-center",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsx("span", { className: "h-4 w-0.5 rounded-full bg-neutral-900 dark:bg-white " })
		}), children]
	});
};
//#endregion
export { Card as t };
