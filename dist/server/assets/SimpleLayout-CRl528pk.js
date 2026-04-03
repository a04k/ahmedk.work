import { t as Container } from "./Container-CQroIhkq.js";
import { t as BlurTitle } from "./BlurTitle-DQRygA23.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region components/ui/SimpleLayout.jsx
function SimpleLayout({ title, intro, children }) {
	return /* @__PURE__ */ jsxs(Container, {
		className: "mt-16 sm:mt-24",
		children: [/* @__PURE__ */ jsx(BlurTitle, {
			delay: 50,
			children: /* @__PURE__ */ jsxs("header", {
				className: "max-w-full",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "title-primary text-7xl font-InstrumentSerifItalic text-balance",
					children: title
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-6 text-base font-mono body-secondary text-balance",
					children: intro
				})]
			})
		}), /* @__PURE__ */ jsx(BlurTitle, {
			delay: 150,
			children: /* @__PURE__ */ jsx("div", {
				className: "mt-16 sm:mt-20",
				children
			})
		})]
	});
}
//#endregion
export { SimpleLayout as t };
