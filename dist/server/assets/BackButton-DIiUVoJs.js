import { useRouter } from "@tanstack/react-router";
import { jsx } from "react/jsx-runtime";
import { ArrowLeft } from "lucide-react";
//#region components/ui/BackButton.jsx
function BackButton() {
	const router = useRouter();
	return /* @__PURE__ */ jsx("button", {
		onClick: () => router.history.back(),
		type: "button",
		"aria-label": "Go back",
		className: "items-center justify-center lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-5 xl:mt-0 mb-8 flex h-10 w-10 rounded-full box-gen transition-colors hover:text-neutral-900 dark:hover:text-white",
		children: /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" })
	});
}
//#endregion
export { BackButton as t };
