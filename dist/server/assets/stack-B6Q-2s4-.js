import { n as cn } from "./Container-CQroIhkq.js";
import { t as Card } from "./Card-ChJo_Enu.js";
import "./BlurTitle-DQRygA23.js";
import { t as SimpleLayout } from "./SimpleLayout-CRl528pk.js";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@unpic/react";
import { cva } from "class-variance-authority";
//#region data/stacks.js
var stacks = [
	{
		type: "development",
		title: "Next.js",
		link: "https://nextjs.org/",
		info: "My go-to framework for building modern web applications. Used in multiple projects including my portfolio and OSC website.",
		img: "/images/logos/nextjs.png"
	},
	{
		type: "development",
		title: "React",
		link: "https://react.dev/",
		info: "My go-to framework for building modern web applications. Used in multiple projects including my portfolio and OSC website.",
		img: "/images/logos/react.png"
	},
	{
		type: "development",
		title: "Angular",
		link: "https://angular.dev/",
		info: "",
		img: "/images/logos/angular.png"
	},
	{
		type: "development",
		title: "TypeScript",
		link: "https://www.typescriptlang.org/",
		info: "Primary programming languages for web development. TypeScript helps catch errors early and improves code quality.",
		img: "/images/logos/ts.png"
	},
	{
		type: "development",
		title: "JavaScript",
		link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		info: "Primary programming languages for web development. TypeScript helps catch errors early and improves code quality.",
		img: "/images/logos/js.png"
	},
	{
		type: "development",
		title: "Go",
		link: "https://go.dev",
		info: "Primary language of choice for any server side application",
		img: "/images/logos/golang.png"
	},
	{
		type: "development",
		title: "Node.js",
		link: "https://nodejs.org/",
		info: "Backend development stack for building robust APIs and server-side applications.",
		img: "/images/logos/node.png"
	},
	{
		type: "development",
		title: "Flutter",
		link: "https://flutter.dev/",
		info: "Used for mobile app development, particularly for WiseWallet - my AI-powered personal finance assistant.",
		img: "/images/logos/flutter.png"
	},
	{
		type: "development",
		title: "MySQL",
		link: "https://mysql.com",
		info: "Used lots for Uni projects, nice to learn with",
		img: "/images/logos/mysql.png"
	},
	{
		type: "development",
		title: "PostgreSQL",
		link: "https://postgresql.org",
		info: "My go-to DB for most projects that require an SQL DB",
		img: "/images/logos/pg.png"
	},
	{
		type: "development",
		title: "Firebase",
		link: "https://postgresql.org",
		info: "My go-to DB for most projects that require an SQL DB",
		img: "/images/logos/firebase.svg"
	},
	{
		type: "development",
		title: "Three.js",
		link: "https://threejs.org/",
		info: "Essential for 3D web development. Used extensively in Orbit, my NASA Space Apps 2024 solar system orrery project.",
		img: "/images/logos/three.png"
	},
	{
		type: "development",
		title: "Python",
		link: "https://www.python.org/",
		info: "Primary language for AI/ML projects including Naveris disaster prediction system and other data science work.",
		img: "/images/logos/py.webp"
	},
	{
		type: "tools",
		title: "Git",
		link: "https://git-scm.com/",
		info: "THE version control system.",
		img: "/images/logos/git.png"
	},
	{
		type: "tools",
		title: "GitHub",
		link: "https://github.com/",
		info: "Essential for version control and collaboration. All my projects are hosted on GitHub.",
		img: "/images/logos/github.webp"
	},
	{
		type: "tools",
		title: "Zed",
		link: "https://zed.dev/",
		info: "My primary code editor, Lightning fast, built in Rust",
		img: "/images/logos/zed.png"
	},
	{
		type: "tools",
		title: "VS Code",
		link: "https://code.visualstudio.com/",
		info: "GOAT editor with extensions for various languages and frameworks.",
		img: "/images/logos/vscode.png"
	},
	{
		type: "tools",
		title: "Vercel",
		link: "https://vercel.com/",
		info: "Hosting platform for web applications. Fast deployment and excellent developer experience.",
		img: "/images/logos/vercel.png"
	},
	{
		type: "development",
		title: "Tailwind CSS",
		link: "https://tailwindcss.com/",
		info: "Utility-first CSS framework for rapid UI development. Used in portfolio and various web projects.",
		img: "/images/logos/tailwind.png"
	},
	{
		type: "tools",
		title: "Figma",
		link: "https://www.figma.com/",
		info: "Design tool for creating user interfaces and prototypes before development.",
		img: "/images/logos/figma.png"
	}
];
//#endregion
//#region components/ui/LinkArrow.jsx
var variantStyles = {
	list: "right-2 top-2 ",
	grid: "top-2 right-2"
};
function LinkArrow({ variant = "list", className, ...props }) {
	className = cn("absolute z-20 flex items-center justify-center w-6 h-6 transition-colors rounded-full ring-1 ring-black/10 group-hover:ring-0 group-hover:drop-shadow-md group-hover:bg-neutral-100 group-hover:text-neutral-900 text-black/60 dark:ring-white/30 dark:text-white/30", variantStyles[variant], className);
	return /* @__PURE__ */ jsx("div", {
		className,
		...props,
		children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
	});
}
//#endregion
//#region components/stack/ToolItem.jsx
function Tool({ title, href, img, children, grid, index }) {
	return /* @__PURE__ */ jsxs(Card, {
		as: "li",
		className: "relative z-10",
		children: [
			/* @__PURE__ */ jsx(LinkArrow, { variant: "grid" }),
			grid && /* @__PURE__ */ jsx("div", {
				className: "w-[70px] h-[70px] mx-auto flex items-center justify-center overflow-hidden",
				children: /* @__PURE__ */ jsx(Image, {
					src: img,
					alt: title,
					width: 70,
					height: 70,
					className: "object-contain transition-transform duration-700 pointer-events-none rounded-lg",
					priority: index <= 1
				})
			}),
			/* @__PURE__ */ jsx(Card.Title, {
				as: "div",
				href,
				rel: "noopener noreferrer",
				target: "_blank",
				className: grid && "text-xs, text-center w-full",
				children: title
			}),
			!grid && /* @__PURE__ */ jsx(Card.Description, { children })
		]
	});
}
//#endregion
//#region components/stack/ToolsSections.jsx
var gridVariants = cva("grid grid-cols-3 mt-5 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 xl:gap-x-8", {
	variants: { size: {
		default: "lg:grid-cols-5 grid-cols-2",
		two: "lg:grid-cols-2 grid-cols-2",
		three: "lg:grid-cols-3 grid-cols-2"
	} },
	defaultVariants: { size: "default" }
});
function ToolsSectionGrid({ children, title, size, className }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "md:border-l md:border-zinc-400/40 md:pl-6 md:dark:border-white/10",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "text-sm font-semibold body-primary",
			children: title
		}), /* @__PURE__ */ jsx("ul", {
			role: "list",
			className: cn(gridVariants({
				size,
				className
			})),
			children
		})]
	});
}
//#endregion
//#region components/stack/SwitchTool.jsx
function filterStacks(stacks, type) {
	return stacks.filter((stack) => stack.type === type);
}
function SwitchTool() {
	const development = filterStacks(stacks, "development");
	const tools = filterStacks(stacks, "tools");
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-20",
		children: [/* @__PURE__ */ jsx(ToolsSectionGrid, {
			title: "Development",
			children: development.map((stack, index) => /* @__PURE__ */ jsx(Tool, {
				grid: true,
				title: stack.title,
				href: stack.link,
				img: stack.img,
				index,
				children: stack.title
			}, stack.title))
		}), /* @__PURE__ */ jsx(ToolsSectionGrid, {
			title: "Tools",
			children: tools.map((stack, index) => /* @__PURE__ */ jsx(Tool, {
				grid: true,
				title: stack.title,
				href: stack.link,
				img: stack.img,
				index,
				children: stack.title
			}, stack.title))
		})]
	});
}
//#endregion
//#region app/stack.jsx?tsr-split=component
function Uses() {
	return /* @__PURE__ */ jsx(SimpleLayout, {
		title: "The technologies I use, tools I love, and other things I recommend.",
		intro: "The tools and technologies I use to build applications, stay productive, and create amazing user experiences. Here's a comprehensive list of my favorite development tools and frameworks.",
		children: /* @__PURE__ */ jsx(SwitchTool, {})
	});
}
//#endregion
export { Uses as component };
