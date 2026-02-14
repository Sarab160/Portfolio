"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-12 md:flex-row md:justify-between md:gap-12 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-center md:text-left space-y-6"
            >
                <h2 className="text-xl font-medium text-brand-primary-light">Hello, I'm</h2>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Muhammad Sarab Rafique
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                    A passionate <span className="text-white font-semibold">Machine Learning Engineer</span> and <span className="text-white font-semibold">Data Analyst</span>.
                    I specialize in building data-driven applications that solve real-world problems.
                    Translating complex data into actionable insights and robust software solutions.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        className="px-8 py-3 rounded-full bg-brand-primary text-white font-medium hover:bg-brand-primary-light transition-all shadow-[0_0_15px_rgba(45,0,0,0.5)] hover:shadow-[0_0_25px_rgba(91,33,182,0.6)]"
                    >
                        View CV
                    </a>
                    <a
                        href="/cv.pdf"
                        download
                        className="px-8 py-3 rounded-full border border-gray-700 text-gray-300 font-medium hover:border-brand-primary-light hover:text-white transition-all"
                    >
                        Download CV
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 flex justify-center mt-10 md:mt-0 relative"
            >
                <div className="relative w-64 h-64 md:w-100 md:h-110">
                    <div className="absolute inset-0 rounded-full bg-brand-primary opacity-20 blur-3xl animate-pulse"></div>
                    <Image
                        src="/images/sarab.jpg" /* Use your profile image path here */
                        alt="Profile Picture"
                        fill
                        className="rounded-full object-cover border-4 border-brand-primary/20 shadow-2xl relative z-10"
                        priority
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
