import { Code, Database, Brain, BarChart, Server, Globe } from "lucide-react";

export interface Project {
    title: string;
    description: string;
    link?: string;
    github?: string;
}

export interface Skill {
    name: string;
    icon: any; // Lucide icon type
    projects: Project[];
}

export const skillsData: Skill[] = [
    {
        name: "Python",
        icon: Code,
        projects: [
            { title: "AI Stock Predictor", description: "Using LSTM models to forecast stock market trends.", github: "https://github.com/example/stock-predictor" },
            { title: "Data Scraper", description: "Automated web scraping tool for extracting real estate data.", github: "https://github.com/example/scraper" },
        ],
    },
    {
        name: "Machine Learning",
        icon: Brain,
        projects: [
            { title: "Image Classifier", description: "CNN-based model for medical image diagnosis.", github: "https://github.com/example/image-classifier" },
            { title: "Sentiment Analysis", description: "NLP model to analyze customer feedback sentiment.", link: "https://example.com/sentiment" },
        ],
    },
    {
        name: "Data Analysis",
        icon: BarChart,
        projects: [
            { title: "Sales Dashboard", description: "Interactive PowerBI dashboard for regional sales performance.", link: "https://example.com/dashboard" },
            { title: "EDA on Titanic Dataset", description: "Comprehensive exploratory data analysis and visualization.", github: "https://github.com/example/titanic-eda" },
        ],
    },
    {
        name: "C++",
        icon: Server,
        projects: [
            { title: "High-Performance server", description: "Multi-threaded server implementation in C++.", github: "https://github.com/example/cpp-server" },
            { title: "Game Engine Core", description: "Basic 2D game engine physics system.", github: "https://github.com/example/game-engine" },
        ],
    },
    {
        name: "SQL",
        icon: Database,
        projects: [
            { title: "Inventory Management System", description: "normalized database schema and stored procedures.", github: "https://github.com/example/inventory-sql" },
        ],
    },
    {
        name: "Web Development",
        icon: Globe,
        projects: [
            { title: "Portfolio Website", description: "Personal portfolio built with Next.js and Tailwind.", github: "https://github.com/example/portfolio" },
            { title: "E-commerce Platform", description: "Full-stack e-commerce site with payment integration.", link: "https://example.com/shop" },
        ],
    },
];

// Helper to get all projects in a flat list if needed
export const allProjects = skillsData.flatMap(skill => skill.projects);
