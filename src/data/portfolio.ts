import { Code, Database, Brain, BarChart, Server, Globe, Workflow, FileCode, Code2, FileType, TypeIcon, Store, LucideIcon, Award } from "lucide-react";
import { fileURLToPath } from "node:url";

export interface Project {
    title: string;
    description: string;
    link?: string;
    github?: string;
    marketplace?: string;
    dashboardPdf?: string; // Path to dashboard PDF
    featured?: boolean;
    icon?: LucideIcon
}

export interface Skill {
    name: string;
    icon: any; // Lucide icon type
    projects: Project[];
}

export interface Certificate {
    title: string;
    issuer: string;
    date: string;
    pdfLink: string;
}

export const certificatesData: Certificate[] = [
    { title: "Machine Learning Internship", issuer: "CodSoft", date: "2024", pdfLink: "/certificates/ml_internship.pdf" },
    { title: "Data Analysis Certification", issuer: "Coursera", date: "2023", pdfLink: "/certificates/data_analysis.pdf" },
    // Add more certificates here
];

export const skillsData: Skill[] = [
    {
        name: "Python",
        icon: Code,
        projects: [
            { title: "NTU-NavBot", description: "NavBot is a NTU Smart Navigation desktop application with an AI chatbot, live weather, live location , QR code support for mobile location scanning, and many other smart navigation features to help users easily explore the NTU campus.", github: "https://github.com/Sarab160/NTU-NavBot", featured: true },
            { title: "NTU Smart Navigation System", description: "NTU Smart Navigation System is a desktop application with an  live weather, live location, QR code support for mobile location scanning, and many other smart navigation features to help users easily explore the NTU campus.", github: "https://github.com/Sarab160/NTU-Smart-Navigation" },
            { title: "TimelyAI", description: "TimelyAI is a desktop application that uses AI to generate smart timetables with an interactive GUI, optimized scheduling, PDF export, and many other useful features to help users easily create and manage academic schedules.", github: "https://github.com/Sarab160/TimelyAI" },

        ],
    },
    {
        name: "Machine Learning",
        icon: Brain,
        projects: [
            { title: "FLEDGE", description: "is a quiz-based platform that uses Machine Learning to predict student performance. An ML model integrated with a Flask backend analyzes student data and delivers instant performance predictions.", github: "https://github.com/Sarab160/Fledge", featured: true },
            { title: "Heart Disease Prediction App", description: "A Streamlit-based machine learning app that predicts heart disease risk from patient health data. It uses Logistic Regression to deliver quick and accurate predictions for early detection.", github: "https://github.com/Sarab160/Car-Price-Prediction" },
            { title: "Car Price Prediction App", description: "A machine learning app that predicts the selling price of used cars using features like year, kilometers driven, fuel type, and transmission. It uses Polynomial Regression for accurate price estimation.", github: "https://github.com/Sarab160/Heart-disease-prediction-app" },
            { title: "Delivery Time Prediction", description: "Predicts order delivery time using distance, rider speed, and weather. Built with **Linear Regression** for accurate estimates. ", github: "https://github.com/Sarab160/delivery_time/tree/master" },

            { title: "Loan Approval Prediction App", description: "A Streamlit web app that predicts loan approval based on applicant details using **K-Nearest Neighbors (KNN)**. The app provides accuracy, precision, recall, F1 score, and a confusion matrix for model evaluation.", github: "https://github.com/Sarab160/Loan-Prediction-App" },
            { title: "Customer Credit Card Segmentation", description: "A Streamlit app that segments credit card customers using **DBSCAN** for clustering and **Decision Tree** for classification. It provides cluster insights, model metrics, and real-time predictions.", github: "https://github.com/Sarab160/credit-card-segementation-app" },

            { title: "Network Traffic Classification", description: "A Streamlit app that classifies network traffic using multiple machine learning models and provides real-time predictions and model accuracies.", github: "https://github.com/Sarab160/Classification-models-Project/tree/master" },
            { title: "Crop Recommendation System", description: "A Streamlit app that recommends the best crop based on soil nutrients, weather, and district using **K-Nearest Neighbors (KNN)**. It shows model accuracy, metrics, and a confusion matrix for evaluation.", github: "https://github.com/Sarab160/Crop_prediction" },

            { title: "Game Sales Prediction App", description: "A Streamlit app that predicts global game sales using game attributes, regional sales, and release year. It connects to **PostgreSQL** for real data, uses a **Voting Regressor ensemble** for accurate predictions, and provides model metrics and interactive visualizations.", github: "https://github.com/Sarab160/Games-Sales-Prediction", featured: true },
            { title: "Price Index Predictor", description: "A Streamlit app that predicts product price spreads using a **Decision Tree Regressor**. Users can explore product data, tune model hyperparameters, visualize trends, and make interactive predictions.", github: "https://github.com/Sarab160/Price-index-predictor" },
            { title: "Spam Email Detector", description: "A Streamlit app that detects whether an email is **Spam** or **Not Spam** using **Multinomial Naive Bayes** and TF-IDF text features.", github: "https://github.com/Sarab160/spam-email-detection/tree/master" },

            { title: "Stroke Prediction App", description: "A Streamlit-based machine learning app that predicts stroke risk using a KNN model. It enables real-time prediction with data preprocessing and model evaluation.", github: "https://github.com/Sarab160/Stroke_prediction/tree/master" },
            { title: "Medical Insurance Cost Prediction", description: "A machine learning app that predicts medical insurance costs using Polynomial Regression and an interactive interface built with Streamlit. It uses real-world healthcare data from Kaggle to provide instant cost predictions.", github: "https://github.com/Sarab160/Medical-Insurance-Cost-Prediction" },
            { title: "Credit Card Delinquency Prediction App", description: "A machine learning app that predicts credit card delinquency using a KNN model and automated data preprocessing. It features an interactive dashboard built with Streamlit for real-time customer risk prediction.", github: "https://github.com/Sarab160/Credit-card/tree/master" },


        ],
    },
    {
        name: "Data Analysis",
        icon: BarChart,
        projects: [
            { title: "Netflix Data Analysis", description: "Analyze Netflix's catalog using Pandas and Matplotlib.", github: "https://github.com/Sarab160/netflix_analysis", dashboardPdf: "/dashboards/netflix_dashboard.pdf" },
            { title: "IPL Data", description: "A data analysis and visualization project on IPL match data using Pandas, Matplotlib, and Seaborn.", github: "http://github.com/Sarab160/ipl_matches_analysis", dashboardPdf: "/dashboards/ipl_dashboard.pdf" },
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
            { title: "FLEDGE", description: "is a smart quiz builder and learning platform where users create quizzes, share them via links or QR codes, and track instant results. It also includes an AI-based performance prediction system built with Machine Learning. Developed using Next.js, Supabase, and a Flask backend, FLEDGE enables secure authentication, real-time analytics, and intelligent student performance insights in one integrated platform.", github: "https://github.com/Sarab160/Fledge", featured: true },
        ],
    },
    {
        name: "C#",
        icon: Code2,
        projects: [
            { title: "Railway Management System", description: "A complete Railway Management System built using C# Windows Forms, designed to manage trains, passengers, travels, reservations, and cancellations through an intuitive user interface.", github: "https://github.com/Sarab160/Railway-System" },

        ],
    },
    {
        name: "n8n",
        icon: Workflow,
        projects: [
            { title: "CampusCare", description: "is an automated complaint management system that collects student issues via Google Forms and processes them using n8n and OpenAI GPT-4.0 mini. It automatically classifies complaints, stores them in Google Sheets, and sends email notifications through Gmail, ensuring fast and fully automated issue tracking.", github: "https://github.com/Sarab160/CampusCare" },

        ],
    },
    {
        name: "TypeScript",
        icon: TypeIcon,
        projects: [
            { title: "AutoPath – VS Code Extension", description: "AutoPath is a VS Code extension that automatically fixes file paths in your code when you rename or move files, preventing broken imports and errors. It keeps your project synced instantly with no setup required.", marketplace: "https://marketplace.visualstudio.com/items?itemName=sarabcheema.autopath", icon: Store },

        ],
    },
];

// Helper to get all projects in a flat list if needed
export const allProjects = skillsData.flatMap(skill => skill.projects);
