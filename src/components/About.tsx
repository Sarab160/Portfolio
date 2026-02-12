"use client";

import { motion } from "framer-motion";
import { User, Code, Database, Brain } from "lucide-react";

const About = () => {
    return (
        <section className="py-20 px-6 max-w-6xl mx-auto" id="about">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center gap-12"
            >
                {/* Text Content */}
                <div className="w-full space-y-6">
                    <div className="flex items-center gap-2 mb-4 justify-center">
                        <User className="text-brand-primary-light" size={24} />
                        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            About Me
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I am a passionate <span className="text-brand-primary-light font-bold">Machine Learning Engineer</span> and <span className="text-brand-primary-light font-bold">Data Analyst</span> dedicated to building intelligent systems that solve real-world problems.
                            With a strong foundation in Python, deep learning, and data visualization, I transform complex datasets into actionable insights.
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                            My journey involves working on diverse projects ranging from predictive modeling and natural language processing to full-stack web applications. I thrive in environments that challenge me to learn new technologies and innovate.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4 justify-center">
                            <div className="bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full flex items-center gap-2 text-sm text-gray-300">
                                <Brain size={16} className="text-brand-primary-light" />
                                <span>Machine Learning</span>
                            </div>
                            <div className="bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full flex items-center gap-2 text-sm text-gray-300">
                                <Database size={16} className="text-brand-primary-light" />
                                <span>Data Analysis</span>
                            </div>
                            <div className="bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full flex items-center gap-2 text-sm text-gray-300">
                                <Code size={16} className="text-brand-primary-light" />
                                <span>Full Stack Dev</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
