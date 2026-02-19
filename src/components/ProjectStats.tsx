"use client";

import { allProjects } from "@/data/portfolio";
import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

const ProjectStats = () => {
    return (
        <section className="py-8 px-6 bg-neutral-900/30 border-y border-neutral-800/50">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto flex justify-center items-center gap-3"
            >
                <FolderGit2 className="text-brand-primary" size={24} />
                <span className="text-gray-300 text-lg font-medium">Total Projects Completed:</span>
                <span className="text-3xl font-bold text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] px-3 py-1 bg-neutral-800 rounded-md">
                    {allProjects.length}
                </span>
            </motion.div>
        </section>
    );
};

export default ProjectStats;
