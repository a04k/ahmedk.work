import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region lib/utils.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region components/ui/Container.jsx
var OuterContainer = forwardRef(function OuterContainer({ className, children, ...props }, ref) {
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: cn("sm:px-8", className),
		...props,
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl lg:px-8",
			children
		})
	});
});
var InnerContainer = forwardRef(function InnerContainer({ className, children, ...props }, ref) {
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: cn("relative px-4 sm:px-8 lg:px-12", className),
		...props,
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-full mx-auto",
			children
		})
	});
});
var Container = forwardRef(function Container({ children, ...props }, ref) {
	return /* @__PURE__ */ jsx(OuterContainer, {
		ref,
		...props,
		children: /* @__PURE__ */ jsx(InnerContainer, { children })
	});
});
Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
//#endregion
export { cn as n, Container as t };
