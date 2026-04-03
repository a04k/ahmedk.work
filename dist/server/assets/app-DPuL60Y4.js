import { n as cn, t as Container } from "./Container-CQroIhkq.js";
import { t as Card } from "./Card-ChJo_Enu.js";
import { t as ArticleCard } from "./ArticleCard-BVj6Pmlg.js";
import { t as BlurTitle } from "./BlurTitle-DQRygA23.js";
import { t as config } from "./config-BXGUvF3i.js";
import { r as linksSocial, t as Route } from "./app-CMWLvRns.js";
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ArrowUpRight, Briefcase, CheckCircle2, Download, FileText, Github, Loader2, MessageCircle, Scroll, Send } from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { siAngular, siBun, siDocker, siFirebase, siFlutter, siGithub, siGo, siNextdotjs, siNodedotjs, siPostgresql, siPrisma, siReact, siTailwindcss, siTypescript, siVercel } from "simple-icons";
import { Image } from "@unpic/react";
import { cva } from "class-variance-authority";
//#region data/nowPlaying.js
var nowPlayingData = {
	songName: "New Person, Same Old Mistakes",
	author: "Tame Impala",
	cover: "https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79",
	songUrl: "https://open.spotify.com/track/52ojopYMUzeNcudsoz7O9D"
};
//#endregion
//#region components/cards/NowPlaying.jsx
function SpotifyPlayer({ className }) {
	return /* @__PURE__ */ jsx("div", {
		className: `rounded-2xl box-gen flex p-4 ${className || ""}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between w-full max-w-full space-x-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ jsx("div", { className: "absolute top-0 bottom-0 left-0 right-0 z-20 w-8 h-8 m-auto bg-transparent border rounded-full border-white/20 dark:border-white/10 outline outline-1 outline-offset-4 dark:outline-white/10 outline-white/20" }),
						/* @__PURE__ */ jsx("div", { className: "absolute top-0 bottom-0 left-0 right-0 z-20 w-1 h-1 m-auto bg-white rounded-full dark:bg-neutral-900" }),
						/* @__PURE__ */ jsx("img", {
							width: "64",
							height: "64",
							alt: "Album cover",
							src: nowPlayingData.cover,
							className: "absolute top-0 bottom-0 left-0 right-0 z-10 object-cover w-14 h-14 m-auto rounded-full aspect-square"
						}),
						/* @__PURE__ */ jsx("div", { className: "bg-black border border-white rounded-full shadow-md h-14 w-14 dark:border-white/10 ring-1 ring-white/10 outline outline-1 outline-offset-0 outline-zinc-200 dark:outline-[#1a1a1a]" })
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "inline-flex flex-col w-full max-w-full",
					children: [/* @__PURE__ */ jsx("a", {
						href: nowPlayingData.songUrl,
						className: "font-semibold capsize max-w-max body-primary line-clamp-1",
						target: "_blank",
						rel: "noopener noreferrer",
						children: nowPlayingData.songName
					}), /* @__PURE__ */ jsx("p", {
						className: "capsize max-w-max body-secondary line-clamp-1",
						children: nowPlayingData.author
					})]
				}),
				/* @__PURE__ */ jsx("a", {
					className: "px-2 boxgen",
					href: nowPlayingData.songUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					children: /* @__PURE__ */ jsxs("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						className: "lucide lucide-play-circle",
						children: [/* @__PURE__ */ jsx("circle", {
							cx: "12",
							cy: "12",
							r: "10"
						}), /* @__PURE__ */ jsx("polygon", { points: "10 8 16 12 10 16 10 8" })]
					})
				})
			]
		})
	});
}
//#endregion
//#region components/cards/GitHubCard.jsx
function GitHubActivity({ className, username = "a04k" }) {
	const [activityData, setActivityData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const containerRef = useRef(null);
	const [squareSize, setSquareSize] = useState(11);
	const MAX_DESKTOP_DAYS = 140;
	const MAX_MOBILE_DAYS = 203;
	const ROWS = 7;
	const GAP = 5;
	const MOBILE_BREAKPOINT = 768;
	const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	useLayoutEffect(() => {
		if (!containerRef.current || !activityData) return;
		activityData.weeks.flatMap((week) => week.contributionDays);
		const containerWidth = containerRef.current.offsetWidth;
		const containerHeight = containerRef.current.offsetHeight;
		const cols = Math.ceil((windowWidth < MOBILE_BREAKPOINT ? MAX_MOBILE_DAYS : MAX_DESKTOP_DAYS) / ROWS);
		const maxWidthSize = (containerWidth - (cols - 1) * GAP) / cols;
		const maxHeightSize = (containerHeight - (ROWS - 1) * GAP) / ROWS;
		let size = Math.min(maxWidthSize, maxHeightSize) * 1.1 * 1.03;
		if (size > 16.5) size = 16.5;
		if (size < 8) size = 8;
		setSquareSize(size);
	}, [activityData, windowWidth]);
	useEffect(() => {
		setLoading(true);
		setError(null);
		fetch(`/api/github?username=${username}`).then((res) => res.json()).then((data) => {
			if (data.error) {
				setError(data.error);
				setActivityData(null);
			} else setActivityData(data);
			setLoading(false);
		}).catch(() => {
			setError("Failed to fetch GitHub activity");
			setActivityData(null);
			setLoading(false);
		});
	}, [username]);
	const getContributionLevel = (count) => {
		if (count === 0) return 0;
		if (count <= 3) return 1;
		if (count <= 6) return 2;
		if (count <= 9) return 3;
		return 4;
	};
	const getColorClass = (level) => {
		const colors = [
			"bg-neutral-200 dark:bg-neutral-800",
			"bg-emerald-200 dark:bg-emerald-900",
			"bg-emerald-300 dark:bg-emerald-700",
			"bg-emerald-400 dark:bg-emerald-600",
			"bg-emerald-500 dark:bg-emerald-500"
		];
		return colors[level] || colors[0];
	};
	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric"
		});
	};
	if (loading) return /* @__PURE__ */ jsx(Card, {
		as: "div",
		className: `p-6 ${className}`,
		children: /* @__PURE__ */ jsx("div", { className: "animate-pulse h-24 bg-neutral-100 dark:bg-neutral-800 rounded-md" })
	});
	if (error || !activityData) return /* @__PURE__ */ jsx(Card, {
		as: "div",
		className: `p-6 ${className}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-3 text-neutral-600 dark:text-neutral-400",
			children: [/* @__PURE__ */ jsx(Github, { className: "w-6 h-6" }), /* @__PURE__ */ jsx("span", { children: "Unable to load GitHub activity" })]
		})
	});
	const sortedDays = [...activityData.weeks.flatMap((week) => week.contributionDays)].sort((a, b) => new Date(a.date) - new Date(b.date));
	const displayDays = windowWidth < MOBILE_BREAKPOINT ? MAX_MOBILE_DAYS : MAX_DESKTOP_DAYS;
	const lastDays = sortedDays.slice(-displayDays);
	const cols = Math.ceil(lastDays.length / ROWS);
	const weeks = [];
	for (let i = 0; i < cols; i++) weeks.push(lastDays.slice(i * ROWS, i * ROWS + ROWS));
	if (weeks.length > 0) {
		const firstWeek = weeks[0];
		if (firstWeek.length < ROWS) {
			const firstWeekday = new Date(firstWeek[0]?.date).getDay();
			weeks[0] = Array(firstWeekday).fill(null).concat(firstWeek);
		}
	}
	return /* @__PURE__ */ jsxs(Card, {
		as: "div",
		className: `py-6 ${className}`,
		style: {
			height: squareSize * ROWS + (ROWS - 1) * GAP,
			width: "100%",
			maxWidth: "100%"
		},
		ref: containerRef,
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-between mb-4",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsx("a", {
					href: config.socialLinks.github,
					children: /* @__PURE__ */ jsx(Github, { className: "w-5 h-5 text-neutral-600 dark:text-neutral-400" })
				}), /* @__PURE__ */ jsxs("span", {
					className: "text-sm text-neutral-600 dark:text-neutral-300",
					children: [activityData.totalContributions.toLocaleString(), " contributions in the past year"]
				})]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "xl:ml-2",
			style: {
				display: "grid",
				gridTemplateRows: `repeat(${ROWS}, ${squareSize}px)`,
				gridTemplateColumns: `repeat(${weeks.length}, ${squareSize}px)`,
				gap: `${GAP}px`,
				userSelect: "none",
				overflow: "hidden",
				maxWidth: "100%",
				height: squareSize * ROWS + GAP * (ROWS - 1)
			},
			children: Array.from({ length: ROWS }).map((_, dayIndex) => weeks.map((week, weekIndex) => {
				const day = week[dayIndex];
				if (!day) return /* @__PURE__ */ jsx("div", { style: {
					width: squareSize,
					height: squareSize,
					borderRadius: 2,
					backgroundColor: "transparent"
				} }, `empty-${weekIndex}-${dayIndex}`);
				return /* @__PURE__ */ jsx("div", {
					className: getColorClass(getContributionLevel(day.contributionCount)),
					style: {
						width: squareSize,
						height: squareSize,
						borderRadius: 2
					},
					title: `${day.contributionCount} contributions on ${formatDate(day.date)}`
				}, `${weekIndex}-${dayIndex}`);
			}))
		})]
	});
}
//#endregion
//#region components/cards/SvgLogos.jsx
var iconBase = "w-7 h-7 opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110";
var makeIcon = (icon, className = "") => /* @__PURE__ */ jsx("svg", {
	viewBox: "0 0 24 24",
	className: cn(iconBase, className),
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ jsx("path", { d: icon.path })
});
var logoSet = {
	react: makeIcon(siReact, "text-[#61DAFB]"),
	tailwind: makeIcon(siTailwindcss, "text-[#06B6D4]"),
	go: makeIcon(siGo, "text-[#00ADD8]"),
	next: makeIcon(siNextdotjs, "text-black dark:text-white"),
	docker: makeIcon(siDocker, "text-[#2496ED]"),
	postgres: makeIcon(siPostgresql, "text-[#4169E1]"),
	prisma: makeIcon(siPrisma, "text-[#2D3748] dark:text-white"),
	bun: makeIcon(siBun, "text-[#FBF0DF]"),
	angular: makeIcon(siAngular, "text-[#DD0031]"),
	firebase: makeIcon(siFirebase, "text-[#FFCA28]"),
	github: makeIcon(siGithub, "text-black dark:text-white"),
	flutter: makeIcon(siFlutter, "text-[#02569B]"),
	typescript: makeIcon(siTypescript, "text-[#3178C6]"),
	node: makeIcon(siNodedotjs, "text-[#339933]"),
	vercel: makeIcon(siVercel, "text-black dark:text-white")
};
var reel1 = [
	{
		key: "react",
		icon: logoSet.react,
		label: "React"
	},
	{
		key: "next",
		icon: logoSet.next,
		label: "Next.js"
	},
	{
		key: "typescript",
		icon: logoSet.typescript,
		label: "TypeScript"
	},
	{
		key: "tailwind",
		icon: logoSet.tailwind,
		label: "Tailwind"
	},
	{
		key: "vercel",
		icon: logoSet.vercel,
		label: "Vercel"
	}
];
var reel2 = [
	{
		key: "node",
		icon: logoSet.node,
		label: "Node.js"
	},
	{
		key: "bun",
		icon: logoSet.bun,
		label: "Bun"
	},
	{
		key: "go",
		icon: logoSet.go,
		label: "Go"
	},
	{
		key: "docker",
		icon: logoSet.docker,
		label: "Docker"
	},
	{
		key: "postgres",
		icon: logoSet.postgres,
		label: "Postgres"
	}
];
var reel3 = [
	{
		key: "angular",
		icon: logoSet.angular,
		label: "Angular"
	},
	{
		key: "firebase",
		icon: logoSet.firebase,
		label: "Firebase"
	},
	{
		key: "prisma",
		icon: logoSet.prisma,
		label: "Prisma"
	},
	{
		key: "flutter",
		icon: logoSet.flutter,
		label: "Flutter"
	},
	{
		key: "github",
		icon: logoSet.github,
		label: "GitHub"
	}
];
function Reel({ items, duration = 20, reverse = false }) {
	const content = [...items, ...items];
	return /* @__PURE__ */ jsx("div", {
		className: "relative h-full w-full overflow-hidden z-10",
		children: /* @__PURE__ */ jsx(motion.div, {
			className: "flex flex-col gap-3 pb-3",
			initial: { y: reverse ? "-50%" : "0%" },
			animate: { y: reverse ? "0%" : "-50%" },
			transition: {
				duration,
				ease: "linear",
				repeat: Infinity
			},
			children: content.map((item, i) => /* @__PURE__ */ jsx(Link, {
				to: "/stack",
				"aria-label": item.label,
				className: "block w-full",
				children: /* @__PURE__ */ jsx("div", {
					className: "group flex h-14 w-full items-center justify-center rounded-xl border border-neutral-200/80 bg-white dark:border-[#2f2f2f] dark:bg-[#18171C] hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors",
					children: item.icon
				})
			}, `${item.key}-${i}`))
		})
	});
}
function SvgLogos({ className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative grid h-[222px] w-full grid-cols-3 gap-6 px-4 overflow-hidden", "hidden dark:grid", className),
		style: {
			maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
			WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
		},
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none",
				children: /* @__PURE__ */ jsxs("svg", {
					className: "h-full w-full",
					xmlns: "http://www.w3.org/2000/svg",
					width: "100%",
					height: "100%",
					children: [/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("pattern", {
						id: "stack-grid-pattern",
						width: "24",
						height: "24",
						patternUnits: "userSpaceOnUse",
						children: /* @__PURE__ */ jsx("path", {
							d: "M 24 0 L 0 0 0 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "0.5",
							className: "text-neutral-900 dark:text-neutral-100"
						})
					}) }), /* @__PURE__ */ jsx("rect", {
						width: "100%",
						height: "100%",
						fill: "url(#stack-grid-pattern)"
					})]
				})
			}),
			/* @__PURE__ */ jsx(Reel, {
				items: reel1,
				duration: 25
			}),
			/* @__PURE__ */ jsx(Reel, {
				items: reel2,
				duration: 35,
				reverse: true
			}),
			/* @__PURE__ */ jsx(Reel, {
				items: reel3,
				duration: 30
			})
		]
	});
}
//#endregion
//#region components/cards/StackCard.jsx
function StackCard({ className }) {
	return /* @__PURE__ */ jsxs(Card, {
		className: cn(className, "overflow-hidden"),
		children: [/* @__PURE__ */ jsx(Card.Pill, {
			icon: Briefcase,
			className: "mb-3",
			children: "Stack"
		}), /* @__PURE__ */ jsx("div", {
			className: "flex w-full flex-row",
			children: /* @__PURE__ */ jsx(SvgLogos, { className: "w-full" })
		})]
	});
}
//#endregion
//#region components/cards/project/UseMouse.jsx
function useMouse() {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	useEffect(() => {
		function handleMouseMove(event) {
			event.preventDefault();
			mouseX.set(event.pageX);
			mouseY.set(event.pageY);
		}
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [mouseX, mouseY]);
	return {
		mouseX,
		mouseY
	};
}
//#endregion
//#region components/cards/project/Media.jsx
function clamp(input, min, max) {
	return input < min ? min : input > max ? max : input;
}
function modulate(current, from, to) {
	return clamp((current - from[0]) * (to[1] - to[0]) / (from[1] - from[0]) + to[0], to[0], to[1]);
}
function Media({ cover, title, index, length }) {
	const { mouseX, mouseY } = useMouse();
	const opacity = modulate(index, [0, length - 1], [1 - length / 10, 1]);
	const min = index * 10 * -1;
	const max = index * 10;
	const widthContainer = 360;
	const heightContainer = 320;
	const transformX = useTransform(mouseX, [0, widthContainer * 6], [min, max]);
	const transformY = useTransform(mouseY, [0, heightContainer * 6], [min, max]);
	const x = useSpring(transformX, {
		stiffness: 300,
		damping: 50
	});
	const y = useSpring(transformY, {
		stiffness: 300,
		damping: 50
	});
	return /* @__PURE__ */ jsx(motion.div, {
		style: {
			x,
			y
		},
		className: "bg-black shadow-xl rounded-3xl will-change-transform",
		children: /* @__PURE__ */ jsx(Image, {
			alt: title,
			width: 800,
			height: 600,
			draggable: false,
			style: { opacity },
			src: cover || "/placeholder.svg",
			className: "select-none rounded-xl",
			unoptimized: true
		})
	});
}
//#endregion
//#region components/ui/Button.jsx
var buttonVariants = cva("object-cover", {
	variants: { styleBtn: {
		primary: "bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 after:bg-gradient-to-t after:from-black/5 after:opacity-50 after:transition-opacity hover:after:opacity-100 ",
		secondary: "bg-white/10 dark:bg-zinc-900/20 font-medium text-neutral-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-neutral-900/60 dark:text-zinc-300 border border-zinc-400/40 dark:border-white/10 dark:hover:bg-zinc-900 dark:hover:text-neutral-50 dark:active:bg-zinc-900/50 dark:active:text-zinc-50/70",
		solid: "p-1 py-2 px-3  transform-gpu touch-none select-none border border-none border-transparent bg-white dark:bg-zinc-800 font-semibold leading-none text-neutral-700 hover:text-neutral-900 dark:text-zinc-300 dark:hover:text-zinc-100 shadow-button-light dark:shadow-button-dark after:absolute after:-inset-[1px] after:block  after:bg-gradient-to-t after:from-black/5 after:opacity-50 after:transition-opacity hover:after:opacity-100 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-50 dark:after:from-black/[0.15] dark:focus-visible:ring-blue-600",
		card: "h-[40px] bg-neutral-300 dark:bg-neutral-800 border-sm items-center	justify-center text-md font-regular flex",
		boxgen: "box-gen outline-0 ring-1 ring-zinc-200 dark:ring-[#1a1a1a] p-1 hover:bg-white dark:hover:bg-neutral-900/90 dark:hover:ring-neutral-800"
	} },
	defaultVariants: { styleBtn: "solid" }
});
function Button({ styleBtn, className, href, ...props }) {
	className = cn(buttonVariants({
		styleBtn,
		className
	}), "inline-flex items-center gap-2 justify-center overflow-hidden rounded-md text-sm outline-offset-2 transition active:transition-none", className);
	return href ? /* @__PURE__ */ jsx(Link, {
		to: href,
		className,
		...props
	}) : /* @__PURE__ */ jsx("button", {
		className,
		...props
	});
}
//#endregion
//#region components/cards/project/CardHome.jsx
var TRANSITION = {
	type: "spring",
	stiffness: 300,
	damping: 50
};
var parantVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: .15 } }
};
var variants = {
	hidden: {
		y: 1500,
		opacity: 0,
		scale: 1.5,
		rotateY: 0,
		rotateZ: 0
	},
	visible: () => {
		const rotate = -10 + Math.random() * 20;
		return {
			y: 0,
			scale: 1,
			opacity: 1,
			rotateZ: rotate,
			rotateY: rotate / 10,
			transition: TRANSITION
		};
	}
};
var projectList = [
	{
		title: "Current Portfolio Website",
		cover: "/images/projects/portfolio.png",
		publishedAt: "2025-06-01"
	},
	{
		title: "Old portfolio",
		cover: "/images/projects/oldfolio.png",
		publishedAt: "2024-06-01"
	},
	{
		title: "repAI",
		cover: "/images/projects/repai1.png",
		publishedAt: "2025-02-29"
	},
	{
		title: "Orbit",
		cover: "/images/projects/orbit2.png",
		publishedAt: "2024-10-05"
	}
];
function CardHome({ className, projects = projectList }) {
	const items = projects.slice(0, 5);
	return /* @__PURE__ */ jsxs(Card, {
		as: "div",
		className: cn("group gap-2 relative overflow-hidden", className),
		children: [/* @__PURE__ */ jsx(Card.Pill, {
			icon: MessageCircle,
			className: "z-10 mb-0",
			children: "Projects"
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-center w-full h-[220px]",
			children: [/* @__PURE__ */ jsx(motion.div, {
				initial: "hidden",
				animate: "visible",
				variants: parantVariants,
				className: "relative flex items-center justify-center transition group-hover:blur-sm group-hover:scale-95",
				style: {
					width: 260,
					height: 160
				},
				children: items.map((project, i) => {
					return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(motion.div, {
						variants,
						className: "absolute",
						style: { z: i * 200 },
						children: /* @__PURE__ */ jsx(Media, {
							index: i,
							length: items.length,
							...project
						})
					}) }, i);
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40",
				children: /* @__PURE__ */ jsxs(Button, {
					href: "/projects",
					styleBtn: "boxgen",
					className: "px-4 py-2 text-sm font-medium shadow-lg backdrop-blur-sm",
					children: ["Explore More", /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-1" })]
				})
			})]
		})]
	});
}
//#endregion
//#region data/resume.js
var resume = [
	{
		index: 1,
		company: "Banque Misr",
		title: "Software QA/QC Engineer Intern",
		logo: "/images/companies/bm.png",
		start: "Aug '24",
		end: "Oct '24"
	},
	{
		index: 2,
		company: "Open Source Community",
		title: "Web Development Team Member",
		logo: "/images/companies/osc.png",
		start: "2023",
		end: {
			label: "Present",
			dateTime: (/* @__PURE__ */ new Date()).getFullYear()
		}
	},
	{
		index: 3,
		company: "Commercial International Bank",
		title: "Trainee",
		logo: "/images/companies/cib.png",
		start: "Sep '24",
		end: "Oct '24"
	}
];
//#endregion
//#region components/cards/resume/JobItem.jsx
function JobItem({ role, scrollPosition, heightItem, roleIndex }) {
	const ref = useRef(null);
	scrollPosition - role.index * heightItem;
	return /* @__PURE__ */ jsxs(motion.div, {
		className: `flex gap-4 pb-4 snap-start work-item last:mb-[128px]`,
		style: {},
		ref,
		children: [/* @__PURE__ */ jsx("div", {
			className: "relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0",
			children: role.logo ? /* @__PURE__ */ jsx(Image, {
				width: 20,
				height: 20,
				src: role.logo || "/placeholder.svg",
				alt: role.title,
				className: "w-10 h-10 rounded-md",
				priority: roleIndex <= 1
			}) : /* @__PURE__ */ jsx("div", {
				className: "w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold",
				children: role.company.charAt(0)
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-wrap flex-auto gap-x-2",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "sr-only",
					children: "Company and Date"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex-none w-full text-sm font-medium body-primary",
					children: [
						role.company,
						"\xA0-\xA0",
						/* @__PURE__ */ jsxs("div", {
							className: "inline text-xs body-secondary",
							"aria-label": `${role.start.label ?? role.start} until ${role.end.label ?? role.end}`,
							children: [
								/* @__PURE__ */ jsx("time", {
									dateTime: role.start.dateTime ?? role.start,
									children: role.start.label ?? role.start
								}),
								" ",
								/* @__PURE__ */ jsx("span", {
									"aria-hidden": "true",
									children: "—"
								}),
								" ",
								/* @__PURE__ */ jsx("time", {
									dateTime: role.end.dateTime ?? role.end,
									children: role.end.label ?? role.end
								})
							]
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "sr-only",
					children: "Role"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "text-xs body-secondary",
					children: role.title
				})
			]
		})]
	});
}
//#endregion
//#region components/cards/resume/JobList.jsx
function JobsList() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = (e) => {
		setScrollPosition(e.target.scrollTop);
	};
	const heightItem = 64;
	const containerref = useRef(null);
	return /* @__PURE__ */ jsx(motion.div, {
		className: "relative w-full",
		children: /* @__PURE__ */ jsx("section", {
			className: "relative overflow-auto h-[192px] snap-y snap-proximity",
			onScroll: handleScroll,
			ref: containerref,
			children: resume.map((role, roleIndex) => /* @__PURE__ */ jsx(JobItem, {
				role,
				containerref,
				scrollPosition,
				heightItem,
				roleIndex
			}, roleIndex))
		})
	});
}
//#endregion
//#region components/cards/resume/ResumeCard.jsx
function ResumeCard({ className }) {
	return /* @__PURE__ */ jsxs(Card, {
		className: cn(className),
		children: [
			/* @__PURE__ */ jsx(Card.Pill, {
				icon: Briefcase,
				children: "Experience"
			}),
			/* @__PURE__ */ jsx(JobsList, {}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-row gap-2 justify-between w-full",
				children: [/* @__PURE__ */ jsxs(Button, {
					href: "/resume",
					styleBtn: "boxgen",
					className: "w-1/2",
					rel: "noopener noreferrer",
					children: [/* @__PURE__ */ jsx(Scroll, { className: "w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" }), "Resume Page"]
				}), /* @__PURE__ */ jsxs(Button, {
					href: "/doc/ahmed_khaled.pdf",
					download: "ahmed_khaled.pdf",
					styleBtn: "boxgen",
					className: "w-1/2",
					target: "_blank",
					children: [/* @__PURE__ */ jsx(Download, { className: "w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" }), "Download Resume"]
				})]
			})
		]
	});
}
//#endregion
//#region components/sections/StatusWork.jsx
var Status = [{
	Available: {
		name: "Open To Work",
		color: "lime"
	},
	NotAvailable: {
		name: "Not currently available for new projects",
		color: "red"
	}
}];
function StatusWork({ isAvailable = true, className }) {
	const [status, setStatus] = useState(isAvailable ? Status[0].Available : Status[0].NotAvailable);
	const bgColorClass = status === Status[0].Available ? "bg-lime-400" : "bg-red-600";
	return /* @__PURE__ */ jsx("p", {
		className,
		children: /* @__PURE__ */ jsxs("span", {
			className: "inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full pointer-events-auto body-primary box-gen font-switzer tracking-tight",
			children: [/* @__PURE__ */ jsxs("span", {
				className: "mr-1.5 flex h-3 w-3 items-center",
				children: [/* @__PURE__ */ jsx("span", { className: `absolute inline-flex w-2 h-2 rounded-full opacity-75 animate-ping ${bgColorClass}` }), /* @__PURE__ */ jsx("span", { className: `relative inline-flex w-2 h-2 rounded-full ${bgColorClass}` })]
			}), status.name]
		})
	});
}
//#endregion
//#region components/sections/BlogSection.jsx
function BlogSection({ posts = [] }) {
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		setIsVisible(true);
	}, []);
	const featuredPosts = posts.slice(0, 2);
	return /* @__PURE__ */ jsxs("section", {
		className: cn("transition-all duration-1000 ease-out", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between mb-8",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2 px-3 py-1 mb-4 text-sm font-medium text-black bg-white/90 dark:bg-black/60 dark:text-white rounded-full box-gen",
						children: [/* @__PURE__ */ jsx(FileText, { className: "w-4 h-4" }), "Blog"]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-5xl lg:text-6xl font-InstrumentSerif text-black dark:text-white mb-4",
						children: "Learning, Building & Documenting"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm md:text-base text-black font-mono tracking-tighter  dark:text-neutral-300 max-w-2xl",
						children: "Insights and experiences from my journey as a developer exploring ideas, overcoming challenges, or just ranting."
					})
				] }), /* @__PURE__ */ jsxs(Link, {
					to: "/blog",
					className: "hidden sm:flex items-center gap-2 px-6 py-3 text-sm font-medium text-neutral-900 dark:text-white  rounded-full bg-white/30 dark:bg-black/20 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-black/30 box-gen transition-all duration-300",
					children: ["View all articles", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 gap-6",
				children: featuredPosts.map((post, index) => /* @__PURE__ */ jsx(ArticleCard, {
					post,
					home: index === 0,
					className: cn("transition-all duration-300 ease-out", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"),
					style: { transitionDelay: `${200 + index * 100}ms` }
				}, post.slug))
			}),
			/* @__PURE__ */ jsxs(Link, {
				to: "/blog",
				className: "flex sm:hidden items-center gap-2 px-6 py-3 mt-6 text-sm font-medium text-neutral-900 dark:text-white border border-neutral-300/50 dark:border-neutral-700/50 rounded-full bg-white/30 dark:bg-black/20 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-black/30 transition-all duration-300 w-full justify-center",
				children: ["View all articles", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
			})
		]
	});
}
//#endregion
//#region components/sections/ContactSection.jsx
var formSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Please enter a valid email address"),
	message: z.string().min(10, "Message must be at least 10 characters")
});
function ContactSection() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(formSchema) });
	const onSubmit = async (data) => {
		setIsSubmitting(true);
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data)
			});
			const result = await response.json();
			if (!response.ok) throw new Error(result.error || "Failed to send message");
			setIsSubmitting(false);
			setIsSuccess(true);
			reset();
			setTimeout(() => setIsSuccess(false), 5e3);
		} catch (error) {
			setIsSubmitting(false);
			toast.error(error.message || "Something went wrong. Please try again later.");
		}
	};
	return /* @__PURE__ */ jsx("section", {
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .5 },
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-5xl lg:text-6xl font-InstrumentSerif text-black dark:text-white mb-4",
						children: "Let's work together"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400",
						children: "I'm currently available for freelance projects and open to new opportunities. If you have a project in mind or just want to say hi, feel free to reach out."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-10 mx-auto max-w-lg",
						children: /* @__PURE__ */ jsx(AnimatePresence, {
							mode: "wait",
							children: isSuccess ? /* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									scale: .95
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								exit: {
									opacity: 0,
									scale: .95
								},
								className: "flex flex-col items-center justify-center py-8 text-center",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4",
										children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-green-500" })
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-xl font-InstrumentSerif text-black dark:text-white mb-2",
										children: "Message Sent!"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-neutral-600 dark:text-neutral-400 text-sm",
										children: "Thanks for reaching out! I'll get back to you soon."
									}),
									/* @__PURE__ */ jsx("button", {
										onClick: () => setIsSuccess(false),
										className: "mt-6 px-5 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-full text-xs font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors",
										children: "Send another message"
									})
								]
							}, "success") : /* @__PURE__ */ jsxs(motion.form, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								onSubmit: handleSubmit(onSubmit),
								className: "text-left relative flex flex-col gap-4",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("input", {
											...register("name"),
											type: "text",
											placeholder: "Name",
											className: "w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-all text-neutral-900 dark:text-white text-sm"
										}), errors.name && /* @__PURE__ */ jsx("p", {
											className: "mt-1 text-xs text-red-500",
											children: errors.name.message
										})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("input", {
											...register("email"),
											type: "email",
											placeholder: "Email",
											className: "w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-all text-neutral-900 dark:text-white text-sm"
										}), errors.email && /* @__PURE__ */ jsx("p", {
											className: "mt-1 text-xs text-red-500",
											children: errors.email.message
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("textarea", {
										...register("message"),
										rows: 3,
										placeholder: "Message",
										className: "w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-all text-neutral-900 dark:text-white resize-none text-sm"
									}), errors.message && /* @__PURE__ */ jsx("p", {
										className: "mt-1 text-xs text-red-500",
										children: errors.message.message
									})] }),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between mt-2",
										children: [/* @__PURE__ */ jsxs(Link, {
											to: "/contact",
											className: "text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1",
											children: [/* @__PURE__ */ jsx("span", { children: "Full form" }), /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3 h-3" })]
										}), /* @__PURE__ */ jsx("button", {
											type: "submit",
											disabled: isSubmitting,
											className: "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-zinc-900 px-6 py-2.5 text-white transition-all hover:scale-[1.02] active:scale-[0.98] dark:bg-zinc-100 dark:text-zinc-900 disabled:opacity-70 disabled:hover:scale-100 text-sm font-medium",
											children: isSubmitting ? /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Send, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Send" })] })
										})]
									})
								]
							}, "form")
						})
					})
				]
			})
		})
	});
}
//#endregion
//#region components/ui/SocialLinks.jsx
function SocialLink({ icon: Icon, outline, ...props }) {
	return /* @__PURE__ */ jsx(Link, {
		className: "p-1 -m-1 group",
		...props,
		children: outline ? /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 stroke-[1.5px] transition text-neutral-900 group-hover:text-neutral-900 dark:text-zinc-400 dark:group-hover:text-outline-300 outline-zinc-900 group-hover:outline-zinc-900 dark:outline-zinc-400 dark:group-hover:text-zinc-300" }) : /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 transition fill-neutral-900 group-hover:fill-neutral-900 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" })
	});
}
function SocialLinks({}) {
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-start gap-6 mt-6",
		children: linksSocial.map((link, index) => /* @__PURE__ */ jsxs("div", {
			className: "relative group",
			children: [/* @__PURE__ */ jsx("div", {
				className: "transition-all translate-y-5 opacity-0 group-hover:translate-y-3 group-hover:opacity-100",
				children: /* @__PURE__ */ jsx("div", {
					className: "relative flex items-center group",
					children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "absolute w-4 h-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100" })
				})
			}), /* @__PURE__ */ jsx(SocialLink, {
				href: link.href,
				rel: "noopener noreferrer",
				target: "_blank",
				"aria-label": link.label,
				className: "transition-all group-hover:opacity-20 group-hover:blur-sm sm:h-7 blur-0 grayscale-0",
				icon: link.icon,
				outline: link.outline
			})]
		}, index))
	});
}
//#endregion
//#region components/ui/DecryptedText.jsx
var styles = {
	wrapper: {
		display: "inline-block",
		whiteSpace: "pre-wrap"
	},
	srOnly: {
		position: "absolute",
		width: "1px",
		height: "1px",
		padding: 0,
		margin: "-1px",
		overflow: "hidden",
		clip: "rect(0,0,0,0)",
		border: 0
	}
};
/**
* DecryptedText
*
* Props:
* - text: string
* - speed?: number
* - maxIterations?: number
* - sequential?: boolean
* - revealDirection?: "start" | "end" | "center"
* - useOriginalCharsOnly?: boolean
* - characters?: string
* - className?: string          (applied to revealed/normal letters)
* - parentClassName?: string    (applied to parent span)
* - encryptedClassName?: string (applied to encrypted letters)
* - animateOn?: "view" | "hover"  (default: "hover")
*/
function DecryptedText({ text, speed = 50, maxIterations = 10, sequential = false, revealDirection = "start", useOriginalCharsOnly = false, characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+", className = "", parentClassName = "", encryptedClassName = "", animateOn = "hover", ...props }) {
	const [displayText, setDisplayText] = useState(text);
	const [isHovering, setIsHovering] = useState(false);
	const [isScrambling, setIsScrambling] = useState(false);
	const [revealedIndices, setRevealedIndices] = useState(/* @__PURE__ */ new Set());
	const [hasAnimated, setHasAnimated] = useState(false);
	const containerRef = useRef(null);
	useEffect(() => {
		let interval;
		let currentIteration = 0;
		const getNextIndex = (revealedSet) => {
			const textLength = text.length;
			switch (revealDirection) {
				case "start": return revealedSet.size;
				case "end": return textLength - 1 - revealedSet.size;
				case "center": {
					const middle = Math.floor(textLength / 2);
					const offset = Math.floor(revealedSet.size / 2);
					const nextIndex = revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;
					if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) return nextIndex;
					for (let i = 0; i < textLength; i++) if (!revealedSet.has(i)) return i;
					return 0;
				}
				default: return revealedSet.size;
			}
		};
		const availableChars = useOriginalCharsOnly ? Array.from(new Set(text.split(""))).filter((char) => char !== " ") : characters.split("");
		const shuffleText = (originalText, currentRevealed) => {
			if (useOriginalCharsOnly) {
				const positions = originalText.split("").map((char, i) => ({
					char,
					isSpace: char === " ",
					index: i,
					isRevealed: currentRevealed.has(i)
				}));
				const nonSpaceChars = positions.filter((p) => !p.isSpace && !p.isRevealed).map((p) => p.char);
				for (let i = nonSpaceChars.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]];
				}
				let charIndex = 0;
				return positions.map((p) => {
					if (p.isSpace) return " ";
					if (p.isRevealed) return originalText[p.index];
					return nonSpaceChars[charIndex++];
				}).join("");
			} else return originalText.split("").map((char, i) => {
				if (char === " ") return " ";
				if (currentRevealed.has(i)) return originalText[i];
				return availableChars[Math.floor(Math.random() * availableChars.length)];
			}).join("");
		};
		if (isHovering) {
			setIsScrambling(true);
			interval = setInterval(() => {
				setRevealedIndices((prevRevealed) => {
					if (sequential) if (prevRevealed.size < text.length) {
						const nextIndex = getNextIndex(prevRevealed);
						const newRevealed = new Set(prevRevealed);
						newRevealed.add(nextIndex);
						setDisplayText(shuffleText(text, newRevealed));
						return newRevealed;
					} else {
						clearInterval(interval);
						setIsScrambling(false);
						return prevRevealed;
					}
					else {
						setDisplayText(shuffleText(text, prevRevealed));
						currentIteration++;
						if (currentIteration >= maxIterations) {
							clearInterval(interval);
							setIsScrambling(false);
							setDisplayText(text);
						}
						return prevRevealed;
					}
				});
			}, speed);
		} else {
			setDisplayText(text);
			setRevealedIndices(/* @__PURE__ */ new Set());
			setIsScrambling(false);
		}
		return () => {
			if (interval) clearInterval(interval);
		};
	}, [
		isHovering,
		text,
		speed,
		maxIterations,
		sequential,
		revealDirection,
		characters,
		useOriginalCharsOnly
	]);
	useEffect(() => {
		if (animateOn !== "view") return;
		const observerCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasAnimated) {
					setIsHovering(true);
					setHasAnimated(true);
				}
			});
		};
		const observer = new IntersectionObserver(observerCallback, {
			root: null,
			rootMargin: "0px",
			threshold: .1
		});
		const currentRef = containerRef.current;
		if (currentRef) observer.observe(currentRef);
		return () => {
			if (currentRef) observer.unobserve(currentRef);
		};
	}, [animateOn, hasAnimated]);
	const hoverProps = animateOn === "hover" ? {
		onMouseEnter: () => setIsHovering(true),
		onMouseLeave: () => setIsHovering(false)
	} : {};
	return /* @__PURE__ */ jsxs(motion.span, {
		className: parentClassName,
		ref: containerRef,
		style: styles.wrapper,
		...hoverProps,
		...props,
		children: [/* @__PURE__ */ jsx("span", {
			style: styles.srOnly,
			children: displayText
		}), /* @__PURE__ */ jsx("span", {
			"aria-hidden": "true",
			children: displayText.split("").map((char, index) => {
				return /* @__PURE__ */ jsx("span", {
					className: revealedIndices.has(index) || !isScrambling || !isHovering ? className : encryptedClassName,
					children: char
				}, index);
			})
		})]
	});
}
//#endregion
//#region app/index.jsx?tsr-split=component
function Home() {
	const allPosts = Route.useLoaderData();
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Container, {
		className: "mt-16 sm:mt-16",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-3xl",
			children: [
				/* @__PURE__ */ jsx(StatusWork, {
					isAvailable: true,
					className: "mb-4"
				}),
				/* @__PURE__ */ jsx(BlurTitle, {
					delay: 75,
					children: /* @__PURE__ */ jsx(DecryptedText, {
						text: config.name,
						className: "text-6xl md:text-8xl lg:text-9xl text-neutral-900 font-InstrumentSerif dark:text-white leading-tight",
						encryptedClassName: "text-6xl md:text-8xl lg:text-9xl text-neutral-500 font-InstrumentSerif dark:text-neutral-700 font-bold",
						parentClassName: "",
						animateOn: "view",
						sequential: true,
						speed: 60
					})
				}),
				/* @__PURE__ */ jsx(BlurTitle, {
					delay: 100,
					className: "-mt-2",
					children: /* @__PURE__ */ jsx(DecryptedText, {
						text: config.description,
						className: "text-[0.875rem] md:text-base dark:text-neutral-300 font-mono m-0",
						encryptedClassName: "text-[0.875rem] md:text-base text-neutral-500 font-mono m-0",
						parentClassName: "",
						animateOn: "view",
						sequential: true,
						speed: 20,
						revealDirection: "start"
					})
				}),
				/* @__PURE__ */ jsx(BlurTitle, {
					delay: 300,
					className: "mt-3",
					children: /* @__PURE__ */ jsx(SocialLinks, {})
				})
			]
		})
	}), /* @__PURE__ */ jsxs(BlurTitle, {
		delay: 50,
		children: [
			/* @__PURE__ */ jsx(Container, {
				className: "mt-16",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-6 gap-4 mb-2 text-left",
					children: [
						/* @__PURE__ */ jsx(ResumeCard, { className: "relative col-span-6 gap-2 h-80 sm:col-span-3 md:col-span-3 lg:col-span-3" }),
						allPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 1).map((post) => /* @__PURE__ */ jsx(ArticleCard, {
							post,
							home: true,
							className: "overflow-hidden relative col-span-6 h-80 sm:col-span-3 md:col-span-3 lg:col-span-3"
						}, post.slug)),
						/* @__PURE__ */ jsx(CardHome, { className: "overflow-hidden relative col-span-6 h-80 sm:col-span-3 md:col-span-3 lg:col-span-2" }),
						/* @__PURE__ */ jsxs("div", {
							className: "grid relative col-span-6 grid-rows-3 gap-4 h-80 sm:col-span-3 md:col-span-3 lg:col-span-2",
							children: [/* @__PURE__ */ jsx(SpotifyPlayer, {}), /* @__PURE__ */ jsx(GitHubActivity, {
								username: "a04k",
								className: "row-span-2"
							})]
						}),
						/* @__PURE__ */ jsx(StackCard, { className: "relative col-span-6 h-80 sm:col-span-3 md:col-span-3 lg:col-span-2" })
					]
				})
			}),
			/* @__PURE__ */ jsx(Container, {
				className: "mt-24",
				children: /* @__PURE__ */ jsx(BlogSection, { posts: allPosts })
			}),
			/* @__PURE__ */ jsx(ContactSection, {})
		]
	})] });
}
//#endregion
export { Home as component };
