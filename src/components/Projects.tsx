"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { skillsData } from "@/data/portfolio";

const Projects = () => {
    // Get unique categories from skillsData
    const categories = ["All", ...skillsData.map(skill => skill.name)];

    // Initialize state from URL param or default to "All"
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");
    const [selectedCategory, setSelectedCategory] = useState(categoryParam || "All");

    // Update state if URL param changes
    useEffect(() => {
        if (categoryParam) {
            setSelectedCategory(categoryParam);
        }
    }, [categoryParam]);

    // Filter projects based on selected category
    const filteredProjects = selectedCategory === "All"
        ? skillsData.flatMap(skill => skill.projects)
        : skillsData.find(skill => skill.name === selectedCategory)?.projects || [];

    return (
        <section className="py-20 px-6 max-w-6xl mx-auto min-h-screen" id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Featured Projects
                </h2>

                {/* Category Selection Bar */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                ? "bg-brand-primary text-white shadow-[0_0_15px_rgba(74,4,4,0.5)]"
                                : "bg-neutral-900 text-gray-400 hover:text-white hover:bg-neutral-800 border border-neutral-800"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-brand-primary hover:shadow-[0_0_15px_rgba(74,4,4,0.3)] transition-all flex flex-col h-full"
                        >
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary-light transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex gap-4 mt-auto pt-4 border-t border-neutral-800">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Github size={16} />
                                        Code
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
