import { n as cn } from "./Container-CQroIhkq.js";
import { t as formatDate } from "./formatDate-CnFBTgsl.js";
import { t as Card } from "./Card-ChJo_Enu.js";
import "./BlurTitle-DQRygA23.js";
import { t as SimpleLayout } from "./SimpleLayout-CRl528pk.js";
import { t as Route } from "./projects-eOomrYhf.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Image } from "@unpic/react";
//#region components/cards/project/ProjectCard.jsx
function ProjectCardHome({ project, className, index }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative h-[240px] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200", className),
		children: [
			project.cover && /* @__PURE__ */ jsx(Image, {
				src: project.cover || "/placeholder.svg",
				alt: project.title,
				fill: true,
				className: "object-cover",
				priority: index <= 1
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" }),
			/* @__PURE__ */ jsx("a", {
				href: project.slug,
				className: "absolute inset-0 z-20",
				"aria-label": project.title
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute z-30 flex flex-row items-center justify-between w-full p-4 text-white bottom-2",
				children: [/* @__PURE__ */ jsx("p", { children: project.title }), /* @__PURE__ */ jsx("p", { children: formatDate(project.publishedAt) })]
			})
		]
	});
}
function ProjectCardGal({ project, className, index }) {
	return /* @__PURE__ */ jsx(Card, {
		as: "div",
		className: cn("p-0 h-[240px]", className),
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative w-full h-full overflow-hidden rounded-lg",
			children: [
				project.cover && /* @__PURE__ */ jsx(Image, {
					src: project.cover || "/placeholder.svg",
					alt: project.title,
					fill: true,
					className: "object-cover",
					priority: index <= 1
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute z-10 w-full h-full -bottom-[64px] bg-gradient-to-t from-neutral-900 to-transparent" }),
				/* @__PURE__ */ jsx("a", {
					href: project.slug,
					className: "absolute inset-0 z-20",
					"aria-label": `View project ${project.title}`
				}),
				/* @__PURE__ */ jsxs("span", {
					className: "absolute z-30 flex flex-row items-center justify-between w-full h-8 p-4 text-white flex-nowrap bottom-2",
					children: [/* @__PURE__ */ jsx("p", { children: project.title }), /* @__PURE__ */ jsx("p", { children: formatDate(project.publishedAt) })]
				})
			]
		})
	}, project.title);
}
function ProjectCard(props) {
	return /* @__PURE__ */ jsx(ProjectCardHome, { ...props });
}
ProjectCard.Home = ProjectCardHome;
ProjectCard.Gallery = ProjectCardGal;
//#endregion
//#region app/projects/index.jsx?tsr-split=component
function Projects() {
	const allProjects = Route.useLoaderData();
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(SimpleLayout, {
		title: "Projects I've built on my journey",
		intro: "I've worked on many small and large projects over the years, but these are the ones I'm most proud of. From AI-powered applications at hackathons to Personal and University Projects, each project represents a unique challenge and learning experience.",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "mb-10 text-2xl font-bold tracking-tight body-primary sm:text-2xl",
			children: "Featured Projects"
		}), /* @__PURE__ */ jsx("ul", {
			role: "list",
			className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: allProjects.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).map((project, index) => /* @__PURE__ */ jsx(ProjectCardGal, {
				project,
				index
			}, project.slug))
		})]
	}) });
}
//#endregion
export { Projects as component };
