
import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { BackButton } from "@/components/ui/BackButton";

import { Container } from "@/components/ui/Container";
import BlurTitle from "@/components/ui/BlurTitle";
import config from "@/config/config";

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

function ContactPage() {
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
    <Container className="mt-16 sm:mt-32">
      <div className="xl:relative">
        <div className="max-w-2xl mx-auto">
          <BackButton />
          <BlurTitle delay={50}>
          <div className="mb-12">
            <h1 className="text-5xl lg:text-7xl font-InstrumentSerif text-white mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-sm md:text-base text-zinc-300 font-pixel leading-relaxed tracking-wide">
              Have a question or want to work together? Fill out the form below
              and I'll get back to you as soon as possible.
            </p>
          </div>
        </BlurTitle>

        <BlurTitle delay={150}>
          <div className="relative">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 bg-green-500/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-InstrumentSerif text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-zinc-400">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                 <div className="space-y-4">
                  <div>
                     <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                       Name
                     </label>
                     <input
                       {...register("name")}
                       type="text"
                       id="name"
                       className="w-full px-4 py-3 rounded-xl box-gen focus:outline-none focus:ring-1 focus:ring-white/30 transition-all text-white placeholder-zinc-400"
                       placeholder="John Doe"
                     />
                     {errors.name && (
                       <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
                     )}
                   </div>

                   <div>
                     <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                       Email
                     </label>
                     <input
                       {...register("email")}
                       type="email"
                       id="email"
                       className="w-full px-4 py-3 rounded-xl box-gen focus:outline-none focus:ring-1 focus:ring-white/30 transition-all text-white placeholder-zinc-400"
                       placeholder="john@example.com"
                     />
                     {errors.email && (
                       <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                     )}
                   </div>

                   <div>
                     <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                       Message
                     </label>
                     <textarea
                       {...register("message")}
                       id="message"
                       rows={5}
                       className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-white/30 transition-all text-white placeholder-zinc-500 resize-none"
                       placeholder="How can I help you?"
                     />
                     {errors.message && (
                       <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
                     )}
                   </div>
                 </div>

                 <button
                   type="submit"
                   disabled={isSubmitting}
                    className="w-full group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl box-gen px-8 py-4 text-white transition-all hover:bg-white/20 active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
                 >
                   {isSubmitting ? (
                     <Loader2 className="w-5 h-5 animate-spin" />
                   ) : (
                     <>
                       <Send className="w-4 h-4" />
                       <span className="font-medium">Send Message</span>
                     </>
                   )}
                 </button>
               </form>
             )}
           </div>
         </BlurTitle>
 
         <BlurTitle delay={250}>
           <div className="mt-12 flex flex-col items-center justify-center text-center">
              <p className="text-zinc-500 text-sm mb-4">
                Or reach out directly
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("contact@ahmedk.dev");
                  toast.success("Email copied to clipboard");
                }}
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors font-fustat cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Copy Email</span>
              </button>
            </div>
         </BlurTitle>
       </div>
      </div>
     </Container>
   );
}
