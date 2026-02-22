"use client";

import { motion } from "framer-motion";
import { User, Code, Database, Brain, Award, FileText } from "lucide-react";
import { certificatesData } from "@/data/portfolio";

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
        I am a passionate <span className="text-brand-primary-light font-bold">Data Scientist</span> with strong expertise in 
        <span className="text-brand-primary-light font-bold"> Machine Learning</span> and 
        <span className="text-brand-primary-light font-bold"> Data Analysis</span>, dedicated to building data-driven solutions that solve real-world problems. 
        I create various machine learning models for prediction, which you can explore in my projects section. 
        I enjoy transforming complex datasets into meaningful insights and practical applications.
    </p>

    <p className="text-gray-400 leading-relaxed">
        My journey includes working on diverse projects focused on predictive modeling, data analysis, and intelligent systems. 
        I continuously strive to improve my skills, experiment with new techniques, and build impactful solutions that turn data into value.
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
            <span>Data Science</span>
        </div>
    </div>
</div>
                    <div className="w-full max-w-4xl mx-auto border-t border-neutral-800 pt-12 mt-8">
                        <div className="flex items-center gap-2 mb-8 justify-center">
                            <Award className="text-brand-primary-light" size={24} />
                            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                Certificates
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {certificatesData.map((cert, index) => (
                                <motion.a
                                    key={index}
                                    href={cert.pdfLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-4 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-brand-primary hover:bg-neutral-800 transition-all group"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                        <span className="font-bold text-white group-hover:text-brand-primary-light transition-colors">
                                            {cert.title}
                                        </span>
                                        <span className="text-sm text-gray-500 hidden sm:block">•</span>
                                        <span className="text-sm text-gray-400">{cert.issuer}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors">
                                        <span>{cert.date}</span>
                                        <FileText size={16} />
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
