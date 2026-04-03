import { t as BackButton } from "./BackButton-DIiUVoJs.js";
import { t as Container } from "./Container-CQroIhkq.js";
import { t as BlurTitle } from "./BlurTitle-DQRygA23.js";
import { useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
//#region app/contact.jsx?tsr-split=component
var formSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Please enter a valid email address"),
	message: z.string().min(10, "Message must be at least 10 characters")
});
function ContactPage() {
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
	return /* @__PURE__ */ jsx(Container, {
		className: "mt-16 sm:mt-32",
		children: /* @__PURE__ */ jsx("div", {
			className: "xl:relative",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-2xl mx-auto",
				children: [
					/* @__PURE__ */ jsx(BackButton, {}),
					/* @__PURE__ */ jsx(BlurTitle, {
						delay: 50,
						children: /* @__PURE__ */ jsxs("div", {
							className: "mb-12",
							children: [/* @__PURE__ */ jsx("h1", {
								className: "text-5xl lg:text-7xl font-InstrumentSerif text-black dark:text-white mb-6",
								children: "Get in Touch"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-lg text-neutral-600 dark:text-neutral-400 font-mono",
								children: "Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible."
							})]
						})
					}),
					/* @__PURE__ */ jsx(BlurTitle, {
						delay: 150,
						children: /* @__PURE__ */ jsx("div", {
							className: "relative",
							children: isSuccess ? /* @__PURE__ */ jsxs(motion.div, {
								initial: {
									opacity: 0,
									scale: .95
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								className: "flex flex-col items-center justify-center py-12 text-center",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6",
										children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-8 h-8 text-green-500" })
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-2xl font-InstrumentSerif text-black dark:text-white mb-2",
										children: "Message Sent!"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-neutral-600 dark:text-neutral-400",
										children: "Thanks for reaching out! I'll get back to you soon."
									}),
									/* @__PURE__ */ jsx("button", {
										onClick: () => setIsSuccess(false),
										className: "mt-8 px-6 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-full text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors",
										children: "Send another message"
									})
								]
							}) : /* @__PURE__ */ jsxs("form", {
								onSubmit: handleSubmit(onSubmit),
								className: "space-y-6",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("label", {
												htmlFor: "name",
												className: "block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2",
												children: "Name"
											}),
											/* @__PURE__ */ jsx("input", {
												...register("name"),
												type: "text",
												id: "name",
												className: "w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-all text-neutral-900 dark:text-white",
												placeholder: "John Doe"
											}),
											errors.name && /* @__PURE__ */ jsx("p", {
												className: "mt-2 text-sm text-red-500",
												children: errors.name.message
											})
										] }),
										/* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("label", {
												htmlFor: "email",
												className: "block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2",
												children: "Email"
											}),
											/* @__PURE__ */ jsx("input", {
												...register("email"),
												type: "email",
												id: "email",
												className: "w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-all text-neutral-900 dark:text-white",
												placeholder: "john@example.com"
											}),
											errors.email && /* @__PURE__ */ jsx("p", {
												className: "mt-2 text-sm text-red-500",
												children: errors.email.message
											})
										] }),
										/* @__PURE__ */ jsxs("div", { children: [
											/* @__PURE__ */ jsx("label", {
												htmlFor: "message",
												className: "block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2",
												children: "Message"
											}),
											/* @__PURE__ */ jsx("textarea", {
												...register("message"),
												id: "message",
												rows: 5,
												className: "w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-all text-neutral-900 dark:text-white resize-none",
												placeholder: "How can I help you?"
											}),
											errors.message && /* @__PURE__ */ jsx("p", {
												className: "mt-2 text-sm text-red-500",
												children: errors.message.message
											})
										] })
									]
								}), /* @__PURE__ */ jsx("button", {
									type: "submit",
									disabled: isSubmitting,
									className: "w-full group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-zinc-900 px-8 py-4 text-white transition-all hover:scale-[1.02] active:scale-[0.98] dark:bg-zinc-100 dark:text-zinc-900 disabled:opacity-70 disabled:hover:scale-100",
									children: isSubmitting ? /* @__PURE__ */ jsx(Loader2, { className: "w-5 h-5 animate-spin" }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Send, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", {
										className: "font-medium",
										children: "Send Message"
									})] })
								})]
							})
						})
					}),
					/* @__PURE__ */ jsx(BlurTitle, {
						delay: 250,
						children: /* @__PURE__ */ jsxs("div", {
							className: "mt-12 flex flex-col items-center justify-center text-center",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-neutral-500 dark:text-neutral-400 text-sm mb-4",
								children: "Or reach out directly"
							}), /* @__PURE__ */ jsxs("button", {
								onClick: () => {
									navigator.clipboard.writeText("contact@ahmedk.dev");
									toast.success("Email copied to clipboard");
								},
								className: "inline-flex items-center gap-2 text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors font-mono cursor-pointer",
								children: [/* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "Copy Email" })]
							})]
						})
					})
				]
			})
		})
	});
}
//#endregion
export { ContactPage as component };
