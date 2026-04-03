import { n as cn, t as Container } from "./Container-CQroIhkq.js";
import { t as Route$6 } from "./_slug-CwxkUKLL.js";
import { t as Route$7 } from "./blog-CS7LyH3T.js";
import { t as config } from "./config-BXGUvF3i.js";
import { n as generalLinks, t as Route$8 } from "./app-CMWLvRns.js";
import { t as Route$9 } from "./_slug-BkLX3ReJ.js";
import { t as Route$10 } from "./projects-eOomrYhf.js";
import * as React from "react";
import { useEffect, useRef } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent } from "@tanstack/react-router";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { ExternalLink, Github, Linkedin, Mail, Menu } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Toaster } from "sonner";
import { ThemeProvider, useTheme } from "next-themes";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import Lenis from "@studio-freight/lenis";
import { Resend } from "resend";
//#region components/ThemeProvider.jsx
function ThemeProvider$1({ children, ...props }) {
	return /* @__PURE__ */ jsx(ThemeProvider, {
		...props,
		children
	});
}
//#endregion
//#region lib/constants.js
var FADE_IN_ANIMATION_CARD = {
	initial: {
		opacity: 0,
		y: -10
	},
	whileInView: {
		opacity: 1,
		y: 0
	},
	transition: { duration: .5 },
	viewport: { once: true }
};
//#endregion
//#region components/nav/MobileNav.jsx
function MobileNavigation(props) {
	return /* @__PURE__ */ jsx("div", {
		...props,
		children: /* @__PURE__ */ jsxs(DropdownMenu.Root, {
			...props,
			children: [/* @__PURE__ */ jsx(DropdownMenu.Trigger, {
				asChild: true,
				children: /* @__PURE__ */ jsxs("button", {
					className: "inline-flex px-3 py-3 transition rounded-full md:px-2 md:py-2 group text-neutral-700 dark:text-white box-gen",
					children: [/* @__PURE__ */ jsx(Menu, { className: "w-4 h-4 stroke-zinc-900 dark:stroke-white" }), /* @__PURE__ */ jsx("span", {
						className: "sr-only",
						children: "Mobile menu"
					})]
				})
			}), /* @__PURE__ */ jsx(DropdownMenu.Portal, { children: /* @__PURE__ */ jsx(DropdownMenu.Content, {
				sideOffset: 5,
				className: "z-50 min-w-[8rem] overflow-hidden rounded-md border box-gen p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
				children: generalLinks.map((link, index) => {
					return /* @__PURE__ */ jsx(DropdownMenu.Item, {
						className: "flex items-center px-4 py-2 text-sm cursor-pointer body-primary group focus:bg-neutral-200/40 dark:focus:bg-black/30 focus:outline-indigo-700/50",
						children: /* @__PURE__ */ jsx(Link, {
							to: link.href,
							target: link.target,
							rel: link.target === "_blank" ? "noopener noreferrer" : "",
							children: /* @__PURE__ */ jsx("span", {
								className: "dark:drop-shadow ",
								children: link.label
							})
						})
					}, index);
				})
			}) })]
		})
	});
}
//#endregion
//#region components/ui/Tooltip.jsx
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(TooltipPrimitive.Content, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md border dark:border-neutral-700 border-neutral-300 dark:bg-neutral-900 bg-neutral-100 px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
	...props
}));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
//#endregion
//#region components/nav/Dock.jsx
function Dock({ className }) {
	const mouseX = useMotionValue(Number.POSITIVE_INFINITY);
	return /* @__PURE__ */ jsx("div", {
		className: cn("fixed z-10 flex flex-col bottom-8 left-1/2 -translate-x-1/2", className),
		children: /* @__PURE__ */ jsx(motion.div, {
			onMouseMove: (e) => mouseX.set(e.pageX),
			onMouseLeave: () => mouseX.set(Number.POSITIVE_INFINITY),
			className: "flex items-end h-16 gap-4 px-4 pb-2.5 mx-auto outline-0 rounded-2xl box-gen ring-1 ring-zinc-200 dark:ring-[#1a1a1a]",
			children: generalLinks.map((link, i) => {
				return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, {
					delayDuration: 0,
					children: [/* @__PURE__ */ jsx(TooltipTrigger, { children: /* @__PURE__ */ jsx(AppIcon, {
						href: link.href,
						rel: link.target === "_blank" ? "noopener noreferrer" : "",
						target: link.target,
						"aria-label": link.label,
						icon: link.icon,
						outline: link.outline,
						mouseX
					}) }), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: link.label }) })]
				}) }, i);
			})
		})
	});
}
function AppIcon({ icon: Icon, outline, href, children, target, rel, mouseX, ...props }) {
	const ref = useRef();
	const width = useSpring(useTransform(useTransform(mouseX, (val) => {
		const bounds = ref.current?.getBoundingClientRect() ?? {
			x: 0,
			width: 0
		};
		return val - bounds.x - bounds.width / 2;
	}), [
		-150,
		0,
		150
	], [
		40,
		100,
		40
	]), {
		mass: .1,
		stiffness: 150,
		damping: 12
	});
	return /* @__PURE__ */ jsx(Link, {
		to: href,
		rel,
		target,
		...props,
		children: /* @__PURE__ */ jsx(motion.div, {
			ref,
			style: { width },
			className: "z-30 flex items-center justify-center w-10 rounded-full bg-neutral-200/70 dark:bg-neutral-900/70 aspect-square box-gen ",
			children: /* @__PURE__ */ jsx(Icon, {
				size: 40,
				className: "w-6/12 transition fill-white dark:fill-neutral-600 dark:stroke-neutral-300 stroke-neutral-900"
			})
		})
	});
}
//#endregion
//#region components/nav/FloatNav.jsx
function FloatNav() {
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Dock, { className: "hidden pointer-events-auto md:flex" }), /* @__PURE__ */ jsx(motion.header, {
		className: "fixed z-10 flex flex-col w-full bottom-8 md:hidden",
		...FADE_IN_ANIMATION_CARD,
		children: /* @__PURE__ */ jsx("div", {
			className: "h-16",
			children: /* @__PURE__ */ jsx(Container, {
				className: "w-full",
				children: /* @__PURE__ */ jsx("div", {
					className: "relative flex gap-4",
					children: /* @__PURE__ */ jsx("div", {
						className: "flex justify-end flex-1 md:justify-center",
						children: /* @__PURE__ */ jsx(MobileNavigation, { className: "pointer-events-auto" })
					})
				})
			})
		})
	})] });
}
//#endregion
//#region components/sections/Footer.jsx
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "bg-white/20 backdrop-blur-sm dark:bg-black/20 border-y border-neutral-300/30 dark:border-neutral-800 text-neutral-900 dark:text-white py-8 md:py-16",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto px-4 md:px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col lg:flex-row lg:justify-between gap-6 md:gap-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:flex-shrink-0",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "text-lg font-medium mb-2 text-neutral-900 dark:text-white",
							children: config.name
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-neutral-600 dark:text-neutral-400 text-sm mb-4 md:mb-6",
							children: "swe."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex space-x-4 mb-6 md:mb-8",
							children: [
								/* @__PURE__ */ jsx(Link, {
									to: config.socialLinks.github,
									className: "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors",
									"aria-label": "GitHub",
									children: /* @__PURE__ */ jsx(Github, { size: 20 })
								}),
								/* @__PURE__ */ jsx(Link, {
									to: config.socialLinks.linkedin,
									className: "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors",
									"aria-label": "LinkedIn",
									children: /* @__PURE__ */ jsx(Linkedin, { size: 20 })
								}),
								/* @__PURE__ */ jsx(Link, {
									to: config.links.email,
									className: "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors",
									"aria-label": "Email",
									children: /* @__PURE__ */ jsx(Mail, { size: 20 })
								})
							]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-neutral-500 dark:text-neutral-500 text-xs",
							children: [
								"© 2025 ",
								config.name,
								". All rights reserved."
							]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 lg:ml-auto lg:max-w-2xl",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "text-neutral-700 dark:text-neutral-300 font-medium mb-3 md:mb-4",
								children: "Me"
							}), /* @__PURE__ */ jsxs("ul", {
								className: "space-y-1.5 md:space-y-2",
								children: [
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
										to: "/projects",
										className: "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm block py-1",
										children: "Projects"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
										to: "/blog",
										className: "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm block py-1",
										children: "Blog"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
										to: "/stack",
										className: "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm block py-1",
										children: "Stack"
									}) })
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "text-neutral-700 dark:text-neutral-300 font-medium mb-3 md:mb-4",
								children: "This site"
							}), /* @__PURE__ */ jsx("ul", {
								className: "space-y-1.5 md:space-y-2",
								children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "https://github.com/a04k/ahmedk.work",
									className: "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm block py-1",
									children: "Source code"
								}) })
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "min-w-0 lg:text-right",
							children: /* @__PURE__ */ jsxs("div", {
								className: "lg:max-w-xs lg:w-full lg:ml-auto",
								children: [/* @__PURE__ */ jsx("h4", {
									className: "text-neutral-700 dark:text-neutral-300 font-medium mb-3 md:mb-4",
									children: "Elsewhere"
								}), /* @__PURE__ */ jsx("ul", {
									className: "space-y-1.5 md:space-y-2",
									children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
										to: config.socialLinks.linkedin,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm inline-flex items-center gap-1 py-1",
										children: ["LinkedIn ", /* @__PURE__ */ jsx(ExternalLink, { size: 12 })]
									}) })
								})]
							})
						})
					]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-8 md:mt-12 pt-6 md:pt-8 border-t border-neutral-300/30 dark:border-neutral-800",
				children: /* @__PURE__ */ jsxs("p", {
					className: "text-neutral-700 dark:text-neutral-300 text-xs text-center md:text-right",
					children: [
						"Cairo:",
						" ",
						(/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
							timeZone: "Africa/Cairo",
							hour: "numeric",
							minute: "2-digit",
							hour12: true
						})
					]
				})
			})]
		})
	});
}
//#endregion
//#region components/SmoothScroll.jsx
function SmoothScroll() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			wheelMultiplier: 1.2,
			touchMultiplier: 2
		});
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
		return () => {
			lenis.destroy();
		};
	}, []);
	return null;
}
//#endregion
//#region components/ui/sonner.tsx
var Toaster$1 = ({ ...props }) => {
	const { theme = "system" } = useTheme();
	return /* @__PURE__ */ jsx(Toaster, {
		theme,
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
//#endregion
//#region app/__root.jsx
var Route$5 = createRootRoute({
	head: () => ({ meta: [
		{ charSet: "utf-8" },
		{
			name: "viewport",
			content: "width=device-width, initial-scale=1"
		},
		{ title: "Ahmed Khaled - swe & cs student" },
		{
			name: "description",
			content: "Computer Science student, chronically online. Building innovative solutions."
		}
	] }),
	component: RootLayout,
	notFoundComponent: () => /* @__PURE__ */ jsx("div", { children: "Not Found" }),
	errorComponent: ({ error }) => /* @__PURE__ */ jsxs("div", { children: ["Error: ", error.message] })
});
function RootLayout() {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		className: "dark",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", {
			className: "grid-overlay flex flex-col min-h-screen antialiased bg-top bg-no-repeat bg-cover bg-bg bg-neutral-50 dark:bg-neutral-900 font-fustat",
			suppressHydrationWarning: true,
			children: [/* @__PURE__ */ jsxs(ThemeProvider$1, {
				attribute: "class",
				defaultTheme: "dark",
				enableSystem: false,
				disableTransitionOnChange: true,
				children: [
					/* @__PURE__ */ jsx(SmoothScroll, {}),
					/* @__PURE__ */ jsx("div", {
						className: "flex-1",
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative mb-16 sm:mb-32",
							children: [/* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) }), /* @__PURE__ */ jsx(FloatNav, {})]
						})
					}),
					/* @__PURE__ */ jsx(Footer, {}),
					/* @__PURE__ */ jsx(Toaster$1, {})
				]
			}), /* @__PURE__ */ jsx(Scripts, {})]
		})]
	});
}
//#endregion
//#region app/stack.jsx
var $$splitComponentImporter$2 = () => import("./stack-B6Q-2s4-.js");
var Route$4 = createFileRoute("/stack")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
//#endregion
//#region app/resume.jsx
var $$splitComponentImporter$1 = () => import("./resume-PTtfE4tX.js");
var Route$3 = createFileRoute("/resume")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
//#endregion
//#region app/contact.jsx
var $$splitComponentImporter = () => import("./contact-C5daJOLb.js");
var Route$2 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
//#endregion
//#region app/api/github.jsx
var Route$1 = createFileRoute("/api/github")({ server: { handlers: { GET: async ({ request }) => {
	const { searchParams } = new URL(request.url);
	const username = searchParams.get("username");
	if (!username) return Response.json({ error: "Username is required" }, { status: 400 });
	const to = /* @__PURE__ */ new Date();
	const from = new Date(to);
	from.setFullYear(to.getFullYear() - 1);
	try {
		const query = `
            query ($username: String!, $from: DateTime!, $to: DateTime!) {
              user(login: $username) {
                contributionsCollection(from: $from, to: $to) {
                  totalCommitContributions
                  totalIssueContributions
                  totalPullRequestContributions
                  totalPullRequestReviewContributions
                  totalRepositoryContributions
                  contributionCalendar {
                    weeks {
                      contributionDays {
                        contributionCount
                        date
                        weekday
                      }
                    }
                  }
                }
                repositories(first: 1, orderBy: {field: PUSHED_AT, direction: DESC}) {
                  nodes {
                    pushedAt
                  }
                }
              }
            }
          `;
		const response = await fetch("https://api.github.com/graphql", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				query,
				variables: {
					username,
					from: from.toISOString(),
					to: to.toISOString()
				}
			})
		});
		const data = await response.json();
		if (!response.ok) return Response.json({ error: `GitHub API error: ${response.status}` }, { status: response.status });
		if (data.errors) return Response.json({ error: data.errors[0].message }, { status: 500 });
		const user = data.data.user;
		if (!user) return Response.json({ error: "User not found" }, { status: 404 });
		const totalContributions = user.contributionsCollection.totalCommitContributions + user.contributionsCollection.totalIssueContributions + user.contributionsCollection.totalPullRequestContributions + user.contributionsCollection.totalPullRequestReviewContributions + user.contributionsCollection.totalRepositoryContributions;
		const allDaysSorted = user.contributionsCollection.contributionCalendar.weeks.flatMap((week) => week.contributionDays).sort((a, b) => new Date(a.date) - new Date(b.date));
		const groupedWeeks = [];
		for (let i = 0; i < allDaysSorted.length; i += 7) groupedWeeks.push({ contributionDays: allDaysSorted.slice(i, i + 7) });
		return Response.json({
			totalContributions,
			weeks: groupedWeeks,
			lastPushDate: user.repositories.nodes[0]?.pushedAt || (/* @__PURE__ */ new Date()).toISOString()
		});
	} catch (error) {
		console.error("GitHub API Exception:", error);
		return Response.json({ error: "Failed to fetch GitHub activity: " + error.message }, { status: 500 });
	}
} } } });
//#endregion
//#region app/api/contact.jsx
var resend = new Resend(process.env.RESEND_API_KEY);
var Route = createFileRoute("/api/contact")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const { name, email, message } = await request.json();
		if (!name || !email || !message) return Response.json({ error: "Missing required fields" }, { status: 400 });
		config.links.email.replace("mailto:", "");
		const data = await resend.emails.send({
			from: `"${name} (${email})" <onboarding@resend.dev>`,
			to: ["63ahmedkhaled@gmail.com"],
			reply_to: email,
			subject: `New message from ${name} — ahmedk.dev`,
			html: `
              <!DOCTYPE html>
              <html>
              <body style="margin:0;padding:0;background:#0f0f0f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f0f;padding:40px 20px;">
                  <tr>
                    <td align="center">
                      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background:#1a1a1a;border-radius:16px;overflow:hidden;border:1px solid #2a2a2a;">
                        <tr>
                          <td style="padding:32px 36px 24px;border-bottom:1px solid #2a2a2a;">
                            <p style="margin:0 0 6px 0;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#666;">ahmedk.dev — contact form</p>
                            <h1 style="margin:0;font-size:22px;font-weight:600;color:#fff;">New message from ${name}</h1>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:24px 36px;border-bottom:1px solid #2a2a2a;">
                            <p style="margin:0 0 8px 0;font-size:13px;font-weight:600;color:#e0e0e0;">${name}</p>
                            <a href="mailto:${email}" style="font-size:13px;color:#888;text-decoration:none;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:24px 36px 32px;">
                            <p style="margin:0 0 12px 0;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#555;">Message</p>
                            <p style="margin:0;font-size:15px;line-height:1.7;color:#bbb;white-space:pre-wrap;">${message}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:16px 36px;background:#141414;border-top:1px solid #2a2a2a;">
                            <p style="margin:0;font-size:12px;color:#444;">Reply to this email to respond directly to ${name}.</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </body>
              </html>
            `
		});
		if (data.error) return Response.json({ error: data.error.message }, { status: 400 });
		return Response.json({
			success: true,
			data
		});
	} catch (error) {
		console.error("Email sending error:", error);
		return Response.json({ error: "An error occurred while sending the email. Check your Resend API Key." }, { status: 500 });
	}
} } } });
//#endregion
//#region routeTree.gen.ts
var StackRoute = Route$4.update({
	id: "/stack",
	path: "/stack",
	getParentRoute: () => Route$5
});
var ResumeRoute = Route$3.update({
	id: "/resume",
	path: "/resume",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var ProjectsIndexRoute = Route$10.update({
	id: "/projects/",
	path: "/projects/",
	getParentRoute: () => Route$5
});
var BlogIndexRoute = Route$7.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$5
});
var ProjectsSlugRoute = Route$9.update({
	id: "/projects/$slug",
	path: "/projects/$slug",
	getParentRoute: () => Route$5
});
var BlogSlugRoute = Route$6.update({
	id: "/blog/$slug",
	path: "/blog/$slug",
	getParentRoute: () => Route$5
});
var ApiGithubRoute = Route$1.update({
	id: "/api/github",
	path: "/api/github",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute,
	ContactRoute,
	ResumeRoute,
	StackRoute,
	ApiContactRoute: Route.update({
		id: "/api/contact",
		path: "/api/contact",
		getParentRoute: () => Route$5
	}),
	ApiGithubRoute,
	BlogSlugRoute,
	ProjectsSlugRoute,
	BlogIndexRoute,
	ProjectsIndexRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region router.jsx
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true
	});
}
//#endregion
export { getRouter };
