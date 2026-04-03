import { t as createServerFn } from "../server.js";
import { t as createServerRpc } from "./createServerRpc-CxC3nd9i.js";
//#region app/projects/$slug.jsx?tss-serverfn-split
var fetchProject_createServerFn_handler = createServerRpc({
	id: "73a81e84d7c8f1950ffee578332b33c6d04fdfb18f2a32bd37b499037314f95e",
	name: "fetchProject",
	filename: "app/projects/$slug.jsx"
}, (opts) => fetchProject.__executeServer(opts));
var fetchProject = createServerFn({ method: "GET" }).handler(fetchProject_createServerFn_handler, async ({ data: slug }) => {
	const { getProjectBySlug } = await import("./content-Bk-wM57k.js");
	return getProjectBySlug(slug);
});
//#endregion
export { fetchProject_createServerFn_handler };
