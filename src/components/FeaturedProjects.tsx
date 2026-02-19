"use client";

import { motion } from "framer-motion";
import { allProjects } from "@/data/portfolio";
import { ArrowRight, ExternalLink } from "lucide-react";

const FeaturedProjects = () => {
    const featuredProjects = allProjects.filter(p => p.featured);

    return (
        <section className="py-16 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="flex justify-center mb-12">
                    <a href="#projects" className="group cursor-pointer">
                        <h2 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:text-brand-primary transition-all duration-300">
                            Featured Works
                        </h2>
                    </a>
                </div>

                <div className="flex overflow-x-auto gap-5 pb-8 scrollbar-hide snap-x px-1">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="min-w-[320px] md:min-w-[400px] bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/60 p-5 rounded-2xl hover:border-brand-primary/30 hover:bg-neutral-900/60 transition-all duration-300 snap-center group"
                        >
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <div>
                                    <h3 className="text-base font-semibold text-white group-hover:text-brand-primary-light transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                <a
                                    href={project.dashboardPdf || project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-neutral-800 rounded-lg text-gray-400 group-hover:text-white group-hover:bg-brand-primary/20 transition-all shrink-0"
                                >
                                    <ExternalLink size={16} />
                                </a>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                                {project.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section >
    );
};

export default FeaturedProjects;
