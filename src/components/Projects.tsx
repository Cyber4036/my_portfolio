
import React from 'react';
import { ChevronRight, Cpu } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    subtitle: string;
    category: string;
    summary: string;
    content: string;
}

interface ProjectsProps {
    projects: Project[];
    setSelectedProject: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, setSelectedProject }) => {
    return (
        <section id="projects" className="py-24 px-6 md:px-20 relative">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="w-full">
                        <span className="text-[#D4A017] font-bold tracking-widest text-sm uppercase">My Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2">Selected Works</h2>
                    </div>
                    <div className="hidden md:block w-32 h-2 bg-[#8B2E2E] shrink-0"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group relative h-96 cursor-pointer overflow-hidden border border-[#2D2D2D] bg-[#1a1a1a] shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 z-20 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                                <span className="text-[#D4A017] font-bold text-sm tracking-widest mb-2">CLICK TO EXPLORE</span>
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm line-clamp-3">{project.summary}</p>
                                <div className="mt-6 p-3 rounded-full border border-[#F4F4F0] text-white transform hover:scale-110 transition-transform">
                                    <ChevronRight size={24} />
                                </div>
                            </div>

                            {/* Base Card Content */}
                            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-gradient-to-t from-black via-black/50 to-transparent">
                                <div className="w-12 h-1 bg-[#D4A017] mb-4 transform origin-left group-hover:scale-x-150 transition-transform"></div>
                                <span className="text-xs text-gray-400 uppercase tracking-widest mb-1">{project.category}</span>
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                            </div>

                            {/* Background Image (Placeholder) */}
                            <div className="absolute inset-0 z-0 bg-[#2D2D2D]">
                                {/* Pattern Overlay to simulate image */}
                                <div className="w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-gray-900 to-black group-hover:scale-110 transition-transform duration-700"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Cpu size={64} className="text-[#333]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* "Blog" Link Suggestion */}
                <div className="mt-16 text-center">
                    <p className="text-gray-500 mb-4">Want to read more about my engineering journey?</p>
                    <a href="#" className="inline-block border-b border-[#D4A017] text-[#D4A017] hover:text-white pb-1 transition-colors">
                        Visit my Technical Blog
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
