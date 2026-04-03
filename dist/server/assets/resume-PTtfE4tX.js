import { t as Container } from "./Container-CQroIhkq.js";
import { t as BlurTitle } from "./BlurTitle-DQRygA23.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Download } from "lucide-react";
import { Image } from "@unpic/react";
//#region components/ui/DownloadBtn.jsx
function DownloadBtn() {
	return /* @__PURE__ */ jsxs("a", {
		href: "/doc/ahmed_khaled.pdf",
		download: "ahmed_khaled.pdf",
		className: "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-lg box-gen hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100",
		"aria-label": "Download Resume PDF",
		children: [
			/* @__PURE__ */ jsx(Download, { size: 16 }),
			/* @__PURE__ */ jsx("span", {
				className: "hidden sm:inline",
				children: "Download Resume"
			}),
			/* @__PURE__ */ jsx("span", {
				className: "sm:hidden",
				children: "Download"
			})
		]
	});
}
//#endregion
//#region app/resume.jsx?tsr-split=component
function Resume() {
	return /* @__PURE__ */ jsx(Container, {
		className: "mt-16",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-5xl mx-auto",
			children: [
				/* @__PURE__ */ jsx(BlurTitle, {
					delay: 50,
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col lg:flex-row justify-between items-start mb-16",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ jsx("h1", {
								className: "text-7xl lg:text-7xl xl:text-8xl font-InstrumentSerif title-primary",
								children: "Ahmed Khaled"
							}), /* @__PURE__ */ jsx("h2", {
								className: "text-sm md:text-base font-mono text-neutral-200 body-secondary",
								children: "Computer Science Student & Software Engineer"
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-4 lg:mt-12",
							children: /* @__PURE__ */ jsx(DownloadBtn, {})
						})]
					})
				}),
				/* @__PURE__ */ jsx(BlurTitle, {
					delay: 150,
					children: /* @__PURE__ */ jsxs("div", {
						className: "resumeSection",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "resumeSectionTitle",
								children: "Education"
							}),
							/* @__PURE__ */ jsx("hr", { className: "splitter" }),
							/* @__PURE__ */ jsx("div", {
								className: "resumeItem box-gen p-6 rounded-lg",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-6 ",
									children: [/* @__PURE__ */ jsx(Image, {
										src: "/images/companies/asu.png",
										alt: "Ain Shams University",
										width: 64,
										height: 64,
										className: "rounded-lg bg-white p-2 border border-zinc-200 dark:border-zinc-700 flex-shrink-0"
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex-1",
										children: [
											/* @__PURE__ */ jsxs("h3", {
												className: "text-xl md:text-2xl font-bold mb-2 text-zinc-800 dark:text-zinc-200 flex flex-col lg:flex-row lg:justify-between",
												children: [/* @__PURE__ */ jsx("span", { children: "Ain Shams University" }), /* @__PURE__ */ jsx("span", {
													className: "text-lg body-secondary lg:text-xl",
													children: "Cairo, Egypt"
												})]
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-base md:text-base text-zinc-700 dark:text-zinc-300",
												children: "Pursuing a Bachelor's Degree in Computer Science"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-base md:text-base text-zinc-700 dark:text-zinc-300",
												children: "Expected Graduation: 2026"
											})
										]
									})]
								})
							})
						]
					})
				}),
				/* @__PURE__ */ jsx(BlurTitle, {
					delay: 250,
					children: /* @__PURE__ */ jsxs("div", {
						className: "resumeSection",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "resumeSectionTitle",
								children: "Experience"
							}),
							/* @__PURE__ */ jsx("hr", { className: "splitter" }),
							/* @__PURE__ */ jsxs("div", {
								className: "resumeItem box-gen p-6 rounded-lg mb-6",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-6 mb-6",
										children: [/* @__PURE__ */ jsx(Image, {
											src: "/images/companies/bm.png",
											alt: "Banque Misr",
											width: 64,
											height: 64,
											className: "experienceImg"
										}), /* @__PURE__ */ jsx("div", {
											className: "flex-1",
											children: /* @__PURE__ */ jsxs("h3", {
												className: "text-xl md:text-2xl font-semibold mb-2 text-zinc-800 dark:text-zinc-200 flex flex-col lg:flex-row lg:justify-between lg:items-center",
												children: [/* @__PURE__ */ jsx("span", { children: "Banque Misr - Intern Software QA/QC Engineer" }), /* @__PURE__ */ jsx("span", {
													className: "text-lg body-secondary lg:text-xl mt-1 lg:mt-0",
													children: "Summer '24"
												})]
											})
										})]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed",
										children: "Developed strong skills in automated & manual testing, learned about Agile methodologies, and various testing techniques. Contributed to ensuring software quality and efficiency through hands-on experience with industry-standard tools and processes."
									}),
									/* @__PURE__ */ jsxs("ul", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ jsx("li", {
												className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
												children: "• Collaborated within an Agile framework to enhance software quality"
											}),
											/* @__PURE__ */ jsx("li", {
												className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
												children: "• Automated testing processes using Cypress"
											}),
											/* @__PURE__ */ jsx("li", {
												className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
												children: "• Managed testing workflows using Jira and Zephyr Scale"
											}),
											/* @__PURE__ */ jsx("li", {
												className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
												children: "• Learned about both manual testing & automation"
											})
										]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "resumeItem box-gen p-6 rounded-lg mb-6",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-6 mb-6",
									children: [/* @__PURE__ */ jsx(Image, {
										src: "/images/companies/cib.png",
										alt: "CIB",
										width: 64,
										height: 64,
										className: "experienceImg"
									}), /* @__PURE__ */ jsx("div", {
										className: "flex-1",
										children: /* @__PURE__ */ jsxs("h3", {
											className: "text-xl md:text-2xl font-semibold mb-2 text-zinc-800 dark:text-zinc-200 flex flex-col lg:flex-row lg:justify-between lg:items-center",
											children: [/* @__PURE__ */ jsx("span", { children: "Commercial International Bank - Internship Trainee" }), /* @__PURE__ */ jsx("span", {
												className: "text-lg body-secondary lg:text-xl mt-1 lg:mt-0",
												children: "Summer '24"
											})]
										})
									})]
								}), /* @__PURE__ */ jsxs("ul", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ jsx("li", {
											className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
											children: "• Explored Topics such as Data Literacy, Data Analytics & Cybersecurity"
										}),
										/* @__PURE__ */ jsx("li", {
											className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
											children: "• Learned About the Digital Transformation at CIB"
										}),
										/* @__PURE__ */ jsx("li", {
											className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
											children: "• Gained knowledge around fintech and banking sector operations"
										})
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "resumeItem box-gen p-6 rounded-lg mb-6",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-6 mb-6",
									children: [/* @__PURE__ */ jsx(Image, {
										src: "/images/companies/osc.png",
										alt: "Open Source Community",
										width: 64,
										height: 64,
										className: "experienceImg"
									}), /* @__PURE__ */ jsx("div", {
										className: "flex-1",
										children: /* @__PURE__ */ jsx("h3", {
											className: "text-xl md:text-2xl font-semibold mb-2 text-zinc-800 dark:text-zinc-200",
											children: "Open Source Community FCIS - Web Dev. Team Member"
										})
									})]
								}), /* @__PURE__ */ jsxs("ul", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ jsx("li", {
											className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
											children: "• Delivered multiple sessions and lectures on various web development topics"
										}),
										/* @__PURE__ */ jsx("li", {
											className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
											children: "• Contributed to the development of a community web app using the MERN Stack"
										}),
										/* @__PURE__ */ jsx("li", {
											className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
											children: "• Worked closely with developers from various teams to ensure project success"
										})
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "resumeItem box-gen p-6 rounded-lg",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-6 mb-6",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-16 h-16 rounded-lg bg-gradient-to-b from-blue-600 to-yellow-100 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0",
										children: "F"
									}), /* @__PURE__ */ jsx("div", {
										className: "flex-1",
										children: /* @__PURE__ */ jsx("h3", {
											className: "text-xl md:text-2xl font-semibold mb-2 text-zinc-800 dark:text-zinc-200",
											children: "Freelance Graphic Design"
										})
									})]
								}), /* @__PURE__ */ jsx("p", {
									className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
									children: "Worked on creating many designs for multiple clients (Mostly gaming community-related)"
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ jsx(BlurTitle, {
					delay: 350,
					children: /* @__PURE__ */ jsxs("div", {
						className: "resumeSection",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "resumeSectionTitle",
								children: "Projects"
							}),
							/* @__PURE__ */ jsx("hr", { className: "splitter" }),
							/* @__PURE__ */ jsxs("div", {
								className: "resumeItem box-gen p-6 rounded-lg mb-6",
								children: [
									/* @__PURE__ */ jsxs("h3", {
										className: "text-xl md:text-2xl font-semibold mb-3 text-zinc-800 dark:text-zinc-200 flex flex-col lg:flex-row lg:justify-between lg:items-center",
										children: [/* @__PURE__ */ jsx("span", { children: "Repai" }), /* @__PURE__ */ jsx("span", {
											className: "text-lg body-secondary lg:text-xl mt-1 lg:mt-0",
											children: "Finalist @ Google GDG Finance AI Hackathon"
										})]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed",
										children: "An AI-powered recycling platform that incentivizes eco-friendly behavior through cashback rewards on a digital wallet. The app uses real-time object detection to identify recyclables, calculate value, and facilitate convenient collection or redemption."
									}),
									/* @__PURE__ */ jsxs("ul", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ jsx("li", {
												className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
												children: "• Used Image Detection & Google Gemini for object detection of recyclable materials"
											}),
											/* @__PURE__ */ jsx("li", {
												className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
												children: "• Assigned real-time, market-based value to scanned items based on materials, size & more"
											}),
											/* @__PURE__ */ jsx("li", {
												className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
												children: "• Enabled cashback accumulation and redemption through eco-partner locations or collector pickups"
											}),
											/* @__PURE__ */ jsx("li", {
												className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
												children: "• Promoted sustainable habits through AI-driven automation and user rewards"
											})
										]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "resumeItem box-gen p-6 rounded-lg mb-6",
								children: [
									/* @__PURE__ */ jsxs("h3", {
										className: "text-xl md:text-2xl font-semibold mb-3 text-zinc-800 dark:text-zinc-200 flex flex-col lg:flex-row lg:justify-between lg:items-center",
										children: [/* @__PURE__ */ jsx("span", { children: "Orbit" }), /* @__PURE__ */ jsx("span", {
											className: "text-lg body-secondary lg:text-xl mt-1 lg:mt-0",
											children: "NASA SPACE APPS 2024"
										})]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed",
										children: "A NASA Space Apps 2024 3D Web App (Built using Next.js + The powerful Three.js library) which brings space exploration to the masses, made with the classroom in mind, Orbit provides a unique interactive experience for students and hobbyists to explore the solar system with its planets, moons and asteroids while also having quests, achievements and medals for users to unlock and an AI powered chat buddy to interact with and answer questions to boost and enhance the learning experience."
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-3 leading-relaxed",
										children: "Built an AI chatbot app using Gemini 2.0 Flash, Contributed to mapping the planets & their orbits using complex equations, rendering them using Three.JS, adding description screens and labels to the celestial bodies and scene controls."
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
										children: "Received a Galactic Problem Solver certificate as recognition for the effort."
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "resumeItem box-gen p-6 rounded-lg",
								children: [
									/* @__PURE__ */ jsxs("h3", {
										className: "text-xl md:text-2xl font-semibold mb-3 text-zinc-800 dark:text-zinc-200 flex flex-col lg:flex-row lg:justify-between lg:items-center",
										children: [/* @__PURE__ */ jsx("span", { children: "NAVERIS" }), /* @__PURE__ */ jsx("span", {
											className: "text-lg body-secondary lg:text-xl mt-1 lg:mt-0",
											children: "NASA SPACE APPS 2023"
										})]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-3 leading-relaxed",
										children: "A NASA Space Apps 2023 AI project that predicts natural disasters intensity and possible path using the latest satellite data and gives early warnings to potentially affected regions."
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-3 leading-relaxed",
										children: "Contributed to designing the interface, gathering and mapping data obtained from the model's output."
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
										children: "Received a Galactic Problem Solver certificate as recognition for the effort."
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ jsx(BlurTitle, {
					delay: 450,
					children: /* @__PURE__ */ jsxs("div", {
						className: "resumeSection",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "resumeSectionTitle",
								children: "Skills & Abilities"
							}),
							/* @__PURE__ */ jsx("hr", { className: "splitter" }),
							/* @__PURE__ */ jsx("div", {
								className: "resumeItem box-gen p-6 rounded-lg",
								children: /* @__PURE__ */ jsxs("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ jsxs("p", {
											className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "font-semibold text-zinc-800 dark:text-zinc-200",
													children: "Programming:"
												}),
												" ",
												"Proficient in JavaScript, TypeScript, React.js, Next.js, Angular, Tailwind CSS, Bootstrap, Node.js, MongoDB, SQL, Python, C, C++, PHP, Go, Java"
											]
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "font-semibold text-zinc-800 dark:text-zinc-200",
													children: "Software Testing:"
												}),
												" ",
												"Cypress, Selenium (basics), Manual (HLS, Test Cases..), Zephyr"
											]
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "font-semibold text-zinc-800 dark:text-zinc-200",
													children: "Version Control:"
												}),
												" ",
												"Git, GitHub, GitLab"
											]
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "font-semibold text-zinc-800 dark:text-zinc-200",
													children: "Agile Methodology:"
												}),
												" ",
												"Knowledgeable in Agile practices and work environments"
											]
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "font-semibold text-zinc-800 dark:text-zinc-200",
													children: "Graphic Design/UI:"
												}),
												" ",
												"Adobe Photoshop, Adobe Illustrator & Figma"
											]
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "font-semibold text-zinc-800 dark:text-zinc-200",
													children: "Soft Skills:"
												}),
												" ",
												"Quick learner with strong adaptability, problem-solving abilities, and effective communication skills"
											]
										})
									]
								})
							})
						]
					})
				}),
				/* @__PURE__ */ jsx(BlurTitle, {
					delay: 550,
					children: /* @__PURE__ */ jsxs("div", {
						className: "resumeSection",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "resumeSectionTitle",
								children: "Hobbies"
							}),
							/* @__PURE__ */ jsx("hr", { className: "splitter" }),
							/* @__PURE__ */ jsx("div", {
								className: "resumeItem box-gen p-6 rounded-lg",
								children: /* @__PURE__ */ jsxs("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ jsxs("p", {
											className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "font-semibold text-zinc-800 dark:text-zinc-200",
													children: "Programming:"
												}),
												" ",
												"I mostly do fun projects to challenge myself and learn."
											]
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "font-semibold text-zinc-800 dark:text-zinc-200",
													children: "Motorsport:"
												}),
												" ",
												"Passionate about everything motorsports, especially Formula 1."
											]
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "text-base md:text-lg text-zinc-700 dark:text-zinc-300",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "font-semibold text-zinc-800 dark:text-zinc-200",
													children: "Gaming:"
												}),
												" ",
												"A bit of competitive fun."
											]
										})
									]
								})
							})
						]
					})
				})
			]
		})
	});
}
//#endregion
export { Resume as component };
