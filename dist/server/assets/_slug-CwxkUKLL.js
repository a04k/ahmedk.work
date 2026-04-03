import { t as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-BgtarmgB.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region app/blog/$slug.jsx
var $$splitComponentImporter = () => import("./_slug-BIPWjzmY.js");
var fetchPost = createServerFn({ method: "GET" }).handler(createSsrRpc("fc82fa4cdb8daf96ba96aa5f07db8ae17ad57f137286f61690136459b2eaa96d"));
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => fetchPost({ data: params.slug }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
