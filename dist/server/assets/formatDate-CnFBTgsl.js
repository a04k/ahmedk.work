//#region lib/formatDate.js
function formatDate(dateString) {
	return (/* @__PURE__ */ new Date(`${dateString}T00:00:00Z`)).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "UTC"
	});
}
//#endregion
export { formatDate as t };
