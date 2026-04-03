import { t as createServerFn } from "../server.js";
import { t as createServerRpc } from "./createServerRpc-CxC3nd9i.js";
//#region app/blog/$slug.jsx?tss-serverfn-split
var fetchPost_createServerFn_handler = createServerRpc({
	id: "fc82fa4cdb8daf96ba96aa5f07db8ae17ad57f137286f61690136459b2eaa96d",
	name: "fetchPost",
	filename: "app/blog/$slug.jsx"
}, (opts) => fetchPost.__executeServer(opts));
var fetchPost = createServerFn({ method: "GET" }).handler(fetchPost_createServerFn_handler, async ({ data: slug }) => {
	const { getPostBySlug } = await import("./content-Bk-wM57k.js");
	return getPostBySlug(slug);
});
//#endregion
export { fetchPost_createServerFn_handler };
