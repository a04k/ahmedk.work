import { t as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-BgtarmgB.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region app/blog/index.jsx
var $$splitComponentImporter = () => import("./blog-g3NqdDkE.js");
var fetchPosts = createServerFn().handler(createSsrRpc("47ecb0a1f702bcbdf79d7275733f53352338b066e5c2ebc8f160272d651c4b68"));
var Route = createFileRoute("/blog/")({
	loader: () => fetchPosts(),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
