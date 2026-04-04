
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowUpRight, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setIsSubmitting(false);
      toast.error(error.message || "Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-5xl lg:text-6xl font-InstrumentSerif text-black dark:text-white mb-4">
            Let's work together
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            I'm currently available for freelance projects and open to new
            opportunities. If you have a project in mind or just want to say hi,
            feel free to reach out.
          </p>

          <div className="mt-10 mx-auto max-w-lg">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-InstrumentSerif text-black dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 px-5 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-full text-xs font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)} 
                  className="text-left relative flex flex-col gap-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-all text-neutral-900 dark:text-white text-sm"
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                    </div>
                    <div>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-all text-neutral-900 dark:text-white text-sm"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div>
                    <textarea
                      {...register("message")}
                      rows={3}
                      placeholder="Message"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-all text-neutral-900 dark:text-white resize-none text-sm"
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <Link to="/contact" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1">
                      <span>Full form</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-zinc-900 px-6 py-2.5 text-white transition-all hover:scale-[1.02] active:scale-[0.98] dark:bg-zinc-100 dark:text-zinc-900 disabled:opacity-70 disabled:hover:scale-100 text-sm font-medium"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
