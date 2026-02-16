import { Code, Database, Brain, BarChart, Server, Globe,Workflow,FileCode,Code2 } from "lucide-react";
import { fileURLToPath } from "node:url";

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
            { title: "NTU-NavBot", description: "NavBot is a NTU Smart Navigation desktop application with an AI chatbot, live weather, live location , QR code support for mobile location scanning, and many other smart navigation features to help users easily explore the NTU campus.", github: "https://github.com/Sarab160/NTU-NavBot" },
            { title: "NTU Smart Navigation System", description: "NTU Smart Navigation System is a desktop application with an  live weather, live location, QR code support for mobile location scanning, and many other smart navigation features to help users easily explore the NTU campus.", github: "https://github.com/Sarab160/NTU-Smart-Navigation" },
            { title: "TimelyAI", description: "TimelyAI is a desktop application that uses AI to generate smart timetables with an interactive GUI, optimized scheduling, PDF export, and many other useful features to help users easily create and manage academic schedules.", github: "https://github.com/Sarab160/TimelyAI" },

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
            { title: "Snake game", description: "A simple, addictive console-based Snake game written in C++ using Windows libraries. Navigate the snake, eat fruit, and grow — but avoid hitting yourself!", github: "https://github.com/Sarab160/Snake-Game" },
            { title: "Phone Book Management system", description: "A simple C++ console app to manage contacts with add, display, search, delete, and clear features, using linked lists and a text file for storage", github: "https://github.com/Sarab160/Phone-Book-Management-system" },
        ],
    },
    {
        name: "SQL",
        icon: Database,
        projects: [
            { title: "Railway Management System", description: "A Railway Management System in C# Windows Forms with a MySQL database, enabling easy CRUD operations for trains, passengers, reservations, and cancellations through an intuitive interface.", github: "https://github.com/Sarab160/Railway-System" },
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
    {
        name: "C#",
        icon: Code2,
        projects: [
            { title: "Railway Management System", description: "A complete Railway Management System built using C# Windows Forms, designed to manage trains, passengers, travels, reservations, and cancellations through an intuitive user interface.", github: "https://github.com/Sarab160/Railway-System" },
            
        ],
    },
];

// Helper to get all projects in a flat list if needed
export const allProjects = skillsData.flatMap(skill => skill.projects);
