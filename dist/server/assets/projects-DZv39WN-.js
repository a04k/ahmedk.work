import { t as createServerFn } from "../server.js";
import { t as createServerRpc } from "./createServerRpc-CxC3nd9i.js";
//#region app/projects/index.jsx?tss-serverfn-split
var fetchProjects_createServerFn_handler = createServerRpc({
	id: "8887bae6a16969c8ac42e0e037a1f04d60dd0655163d9facbc1ee1333950f74d",
	name: "fetchProjects",
	filename: "app/projects/index.jsx"
}, (opts) => fetchProjects.__executeServer(opts));
var fetchProjects = createServerFn().handler(fetchProjects_createServerFn_handler, async () => {
	const { getAllProjects } = await import("./content-Bk-wM57k.js");
	return getAllProjects();
});
//#endregion
export { fetchProjects_createServerFn_handler };
