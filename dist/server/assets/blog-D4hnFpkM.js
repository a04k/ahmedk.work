import { t as createServerFn } from "../server.js";
import { t as createServerRpc } from "./createServerRpc-CxC3nd9i.js";
//#region app/blog/index.jsx?tss-serverfn-split
var fetchPosts_createServerFn_handler = createServerRpc({
	id: "47ecb0a1f702bcbdf79d7275733f53352338b066e5c2ebc8f160272d651c4b68",
	name: "fetchPosts",
	filename: "app/blog/index.jsx"
}, (opts) => fetchPosts.__executeServer(opts));
var fetchPosts = createServerFn().handler(fetchPosts_createServerFn_handler, async () => {
	const { getAllPosts } = await import("./content-Bk-wM57k.js");
	return getAllPosts();
});
//#endregion
export { fetchPosts_createServerFn_handler };
