import { t as createServerFn } from "../server.js";
import { t as createServerRpc } from "./createServerRpc-CxC3nd9i.js";
//#region app/index.jsx?tss-serverfn-split
var fetchPosts_createServerFn_handler = createServerRpc({
	id: "397ff6fd383601b7deff884b89773044f3feaa7fe68cd9eb99c567072632b435",
	name: "fetchPosts",
	filename: "app/index.jsx"
}, (opts) => fetchPosts.__executeServer(opts));
var fetchPosts = createServerFn().handler(fetchPosts_createServerFn_handler, async () => {
	const { getAllPosts } = await import("./content-Bk-wM57k.js");
	return getAllPosts();
});
//#endregion
export { fetchPosts_createServerFn_handler };
