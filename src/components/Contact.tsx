"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto min-h-screen flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="grid md:grid-cols-2 gap-12 text-left">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-neutral-900 rounded-full border border-neutral-800 text-brand-primary-light">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Email</h3>
                                <a href="mailto:contact@example.com" className="text-gray-400 hover:text-brand-primary-light transition-colors">
                                    contact@example.com
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Socials</h3>
                            <div className="flex gap-4">
                                <a href="#" className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-gray-400 hover:text-white hover:border-brand-primary transition-all">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-all">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-gray-400 hover:text-blue-300 hover:border-blue-300 transition-all">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-brand-maroon text-white transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-brand-maroon text-white transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-brand-maroon text-white transition-colors"
                                placeholder="Hello, I'd like to discuss..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-brand-maroon text-white font-medium rounded-lg hover:bg-brand-maroon-light transition-all shadow-[0_0_15px_rgba(45,0,0,0.5)]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
