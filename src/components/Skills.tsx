"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { skillsData } from "@/data/portfolio";

const Skills = () => {
    const router = useRouter();

    const handleSkillClick = (skillName: string) => {
        router.push(`/projects?category=${encodeURIComponent(skillName)}`);
    };

    return (
        <section className="py-20 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">
                    Technical Skills
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skillsData.map((skill, index) => (
                        <motion.button
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => handleSkillClick(skill.name)}
                            className="flex flex-col items-center justify-center p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-brand-primary hover:shadow-[0_0_15px_rgba(74,4,4,0.4)] transition-all group"
                        >
                            <skill.icon size={40} className="mb-4 text-gray-400 group-hover:text-brand-primary-light transition-colors" />
                            <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                        </motion.button>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
