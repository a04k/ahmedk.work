import { t as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-BgtarmgB.js";
import { t as config } from "./config-BXGUvF3i.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { BookOpen, Codepen, FileText, Github, HomeIcon, Layers, Linkedin, Mail } from "lucide-react";
//#region data/links.js
var generalLinks = [
	{
		href: config.links.home,
		label: "Home",
		icon: HomeIcon
	},
	{
		href: config.links.resume,
		label: "Resume",
		icon: FileText
	},
	{
		href: config.links.contact,
		label: "Contact",
		icon: Mail
	},
	{
		href: config.links.blog,
		label: "Blog",
		icon: BookOpen
	},
	{
		href: config.links.projects,
		label: "Projects",
		icon: Codepen
	},
	{
		href: config.links.stack,
		label: "Stack",
		icon: Layers
	}
];
var linksSocial = [
	{
		href: config.socialLinks.github,
		icon: Github,
		label: "GitHub",
		outline: true
	},
	{
		href: config.socialLinks.linkedin,
		icon: Linkedin,
		label: "LinkedIn",
		outline: true
	},
	{
		href: config.links.email,
		icon: Mail,
		label: "Email",
		outline: true
	}
];
//#endregion
//#region app/index.jsx
var $$splitComponentImporter = () => import("./app-DPuL60Y4.js");
var fetchPosts = createServerFn().handler(createSsrRpc("397ff6fd383601b7deff884b89773044f3feaa7fe68cd9eb99c567072632b435"));
var Route = createFileRoute("/")({
	loader: () => fetchPosts(),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { generalLinks as n, linksSocial as r, Route as t };
