
import {
    Code,
    Brain,
    Terminal
} from 'lucide-react';
import React from 'react';

export const PORTFOLIO_DATA = {
    name: "SIBOMANA MANZI Arnaud",
    role: "Software Engineer & Data Analyst",
    tagline: "Bridging the gap between Full-Stack Web Development and Advanced Data Analytics.",
    about: "Highly motivated and results-oriented aspiring Software Engineer and Data Analyst with a strong foundation in full-stack development and expertise in Advanced Data Science and Analytics. Currently engaged in substantial project-based learning initiatives, leveraging cloud technologies and Generative AI concepts to build modern, scalable web applications. I seek opportunities to leverage my technical proficiency and commitment to structured development in a challenging environment.",
    skills: [
        {
            category: "Web Development",
            tools: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
            icon: React.createElement(Code, { size: 20 })
        },
        {
            category: "Data Science & AI",
            tools: ["Python", "SQL", "Power BI", "DAX", "AWS", "Generative AI"], // "Pandas", "NumPy",
            icon: React.createElement(Brain, { size: 20 })
        },
        {
            category: "Tools & Cloud",
            tools: ["Git", "AWS Cloud", "Linux", "Figma"], //  "Oracle Cloud"
            icon: React.createElement(Terminal, { size: 20 })
        }
    ],
    experience: [
        {
            company: "Posinnove",
            role: "Portfolio Generator Web App Developer",
            period: "Jul 2025 - Present",
            description: "Developing a full-stack Web App using React, Node.js, TypeScript, Express, PostgreSQL, and Tailwind CSS. Implemented a RESTful API backend, designed responsive UI components, and applied Git best practices."
        },
        {
            company: "Project-Based Learning",
            role: "Full-Stack & Data Analyst Trainee",
            period: "2024 - 2025",
            description: "Intensive focus on cloud technologies (AWS, Oracle Cloud) and Generative AI concepts to build modern, scalable web applications."
        }
    ],
    education: [
        {
            school: "University of Rwanda",
            degree: "Bachelor of Science in Computer Science",
            period: "Oct 2025 - Sep 2029 (Expected)"
        },
        {
            school: "Lycée de Kigali",
            degree: "High School Diploma (Mathematics, Physics and Computer Science)",
            period: "Sep 2021 - Sep 2024"
        }
    ],
    projects: [
        {
            id: 1,
            title: "Portfolio Generator",
            subtitle: "Full-Stack Web Application",
            category: "Web Development",
            summary: "A platform for generating professional portfolios, featuring a RESTful API backend and a responsive React client.",
            content: `
        <h3 class="text-xl font-bold mb-2">Project Overview</h3>
        <p class="mb-4">Developed a full-stack Web App using React, Node.js, TypeScript, Express, PostgreSQL, and Tailwind CSS.</p>
        <h3 class="text-xl font-bold mb-2">Key Achievements</h3>
        <ul class="list-disc pl-5 mb-4">
          <li>Implemented and containerized a RESTful API backend, managing database connections and complex data retrieval.</li>
          <li>Designed and built responsive UI components for the client-side application.</li>
          <li>Applied Git best practices for version control and collaborative development.</li>
          <li>Actively troubleshooting and resolving structural issues to ensure project integrity and scalability.</li>
        </ul>
      `
        },
        {
            id: 2,
            title: "Imigongo Vision",
            subtitle: "AI Pattern Recognition",
            category: "Computer Vision",
            summary: "A machine learning model trained to identify and classify traditional Rwandan geometric art patterns.",
            content: `
        <h3 class="text-xl font-bold mb-2">The Challenge</h3>
        <p class="mb-4">Traditional art patterns are complex and often vary by region. The goal was to preserve cultural heritage by creating a digital cataloging system that could automatically tag uploaded images.</p>
        <h3 class="text-xl font-bold mb-2">The Stack</h3>
        <ul class="list-disc pl-5 mb-4">
          <li>Python & OpenCV for preprocessing</li>
          <li>TensorFlow/Keras for the CNN model</li>
          <li>React front-end for the upload interface</li>
        </ul>
        <h3 class="text-xl font-bold mb-2">Outcome</h3>
        <p>Achieved 92% accuracy in distinguishing between 'Itangaza' and 'Umurenge' patterns. The project is open-source and available on GitHub.</p>
      `
        },
        {
            id: 3,
            title: "Data Analytics Projects",
            subtitle: "Python & Power BI",
            category: "Data Science",
            summary: "Various data analysis projects utilizing Python (Pandas, NumPy) and Power BI for visualization.",
            content: `
        <h3 class="text-xl font-bold mb-2">Overview</h3>
        <p class="mb-4">Leveraging Python data stack and Advanced Business Intelligence tools to derive insights.</p>
        <h3 class="text-xl font-bold mb-2">Tools Used</h3>
        <ul class="list-disc pl-5 mb-4">
          <li>Python (Pandas, NumPy, EDA)</li>
          <li>SQL for data querying</li>
          <li>Power BI & DAX for dashboards</li>
        </ul>
      `
        }
    ],
    contact: {
        email: "manzcb4@outlook.com",
        phone: "+250 728 351 055",
        location: "Kigali, Rwanda",
        linkedin: "https://www.linkedin.com/in/arnaud-sibomana-b14a262a5",
        github: "https://github.com/Cyber4036",
        portfolio: "https://yourportfolio.com"
    }
};
