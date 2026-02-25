"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formsubmit.co/ajax/sarabcheema160@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(Object.fromEntries(formData)),
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }

        setTimeout(() => {
            if (status !== "idle") setStatus("idle");
        }, 3000);
    };

    return (
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-screen flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center w-full"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto px-2">
                    I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-12 text-left">
                    <div className="space-y-6 md:space-y-8 order-2 md:order-1">
                        <div className="flex items-start md:items-center gap-4">
                            <div className="p-3 md:p-4 bg-neutral-900 rounded-full border border-neutral-800 text-brand-primary-light shrink-0">
                                <Mail size={24} className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div className="overflow-hidden">
                                <h3 className="text-base md:text-lg font-semibold text-white">Email</h3>
                                <a href="mailto:sarabcheema160@gmail.com" className="text-sm md:text-base text-gray-400 hover:text-brand-primary-light transition-colors break-words">
                                    sarabcheema160@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="space-y-3 md:space-y-4">
                            <h3 className="text-base md:text-lg font-semibold text-white">Socials</h3>
                            <div className="flex gap-4">
                                <a href="https://github.com/Sarab160" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-gray-400 hover:text-white hover:border-brand-primary transition-all">
                                    <Github size={20} className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/sarab-cheema-20841928a" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-all">
                                    <Linkedin size={20} className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 order-1 md:order-2 w-full">
                        <div>
                            <label htmlFor="name" className="block text-sm md:text-base font-medium text-gray-300 mb-1.5">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-brand-maroon text-white transition-colors text-sm md:text-base"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm md:text-base font-medium text-gray-300 mb-1.5">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-brand-maroon text-white transition-colors text-sm md:text-base"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm md:text-base font-medium text-gray-300 mb-1.5">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-brand-maroon text-white transition-colors text-sm md:text-base resize-y"
                                placeholder="Hello, I'd like to discuss..."
                            ></textarea>
                            {/* Hidden field to avoid captcha redirection if possible, or provide a honeypot */}
                            <input type="hidden" name="_captcha" value="false" />
                        </div>
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full py-3 md:py-3.5 bg-brand-maroon text-white font-medium rounded-lg hover:bg-brand-maroon-light transition-all shadow-[0_0_15px_rgba(45,0,0,0.5)] disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base"
                        >
                            {status === "loading" ? "Sending..." : "Send Message"}
                        </button>

                        {status === "success" && (
                            <p className="text-green-400 text-sm text-center mt-2">Message sent successfully!</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-400 text-sm text-center mt-2">Failed to send message. Please try again.</p>
                        )}
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
