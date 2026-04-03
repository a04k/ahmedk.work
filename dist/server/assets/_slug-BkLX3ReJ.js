import { t as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-BgtarmgB.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region app/projects/$slug.jsx
var $$splitComponentImporter = () => import("./_slug-D9juisXQ.js");
var fetchProject = createServerFn({ method: "GET" }).handler(createSsrRpc("73a81e84d7c8f1950ffee578332b33c6d04fdfb18f2a32bd37b499037314f95e"));
var Route = createFileRoute("/projects/$slug")({
	loader: ({ params }) => fetchProject({ data: params.slug }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
