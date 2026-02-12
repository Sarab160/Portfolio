"use client";

import { X, ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
    title: string;
    description: string;
    link?: string;
    github?: string;
}

interface SkillModalProps {
    isOpen: boolean;
    onClose: () => void;
    skillName: string;
    projects: Project[];
}

const SkillModal: React.FC<SkillModalProps> = ({
    isOpen,
    onClose,
    skillName,
    projects,
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-x-0 bottom-0 z-[70] md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[600px] h-[80vh] md:h-auto md:max-h-[85vh] bg-neutral-900 border border-brand-primary/30 rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        <div className="flex justify-between items-center p-6 border-b border-brand-primary/20 bg-neutral-900 sticky top-0 md:relative">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                {skillName} Projects
                            </h3>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-neutral-800 transition-colors text-gray-400 hover:text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto space-y-6 flex-1">
                            {projects.length > 0 ? (
                                projects.map((project, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="group bg-neutral-800/50 p-5 rounded-xl border border-neutral-700 hover:border-brand-primary/50 transition-all hover:shadow-[0_0_20px_rgba(74,4,4,0.1)]"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-xl font-semibold text-white group-hover:text-brand-primary-light transition-colors">
                                                {project.title}
                                            </h4>
                                            <div className="flex gap-3">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-white transition-colors"
                                                    >
                                                        <Github size={20} />
                                                    </a>
                                                )}
                                                {project.link && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-brand-primary-light transition-colors"
                                                    >
                                                        <ExternalLink size={20} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="text-center py-12 text-gray-500">
                                    <p>No projects listed for this skill yet.</p>
                                </div>
                            )}
                        </div>

                        <div className="p-4 bg-neutral-900 border-t border-brand-primary/20 md:hidden">
                            <button
                                onClick={onClose}
                                className="w-full py-3 bg-neutral-800 rounded-lg text-white font-medium hover:bg-neutral-700 transition"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SkillModal;
