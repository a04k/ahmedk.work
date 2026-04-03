import { n as cn } from "./Container-CQroIhkq.js";
import { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region components/ui/BlurTitle.jsx
function BlurTitle({ children, className, delay = 0 }) {
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoaded(true);
		}, delay);
		return () => clearTimeout(timer);
	}, [delay]);
	return /* @__PURE__ */ jsx("div", {
		className: cn("transition-all duration-1000 ease-out", isLoaded ? "blur-none opacity-100 translate-y-0" : "blur-sm opacity-0 translate-y-4", className),
		children
	});
}
//#endregion
export { BlurTitle as t };
