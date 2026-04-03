import { t as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-BgtarmgB.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region app/projects/index.jsx
var $$splitComponentImporter = () => import("./projects-CjJXui5v.js");
var fetchProjects = createServerFn().handler(createSsrRpc("8887bae6a16969c8ac42e0e037a1f04d60dd0655163d9facbc1ee1333950f74d"));
var Route = createFileRoute("/projects/")({
	loader: () => fetchProjects(),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
