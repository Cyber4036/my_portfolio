
import React from 'react';
import { X, Github, ExternalLink } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    subtitle: string;
    category: string;
    image?: string;
    summary: string;
    content: string;
}

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-[#1a1a1a] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-none border border-[#D4A017] relative flex flex-col md:flex-row shadow-2xl animate-fade-in-up">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-[#8B2E2E] text-white transition-colors rounded-full"
                >
                    <X size={24} />
                </button>

                {/* Left Side: Visuals */}
                <div className="w-full md:w-1/3 bg-[#2D2D2D] relative overflow-hidden h-48 md:h-auto shrink-0">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121212]"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                        <span className="text-[#D4A017] text-xs font-bold tracking-widest uppercase mb-2 block">{project.category}</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">{project.title}</h2>
                        <p className="text-gray-400 text-sm">{project.subtitle}</p>
                    </div>
                </div>

                {/* Right Side: Blog Content */}
                <div className="w-full md:w-2/3 p-6 md:p-8 bg-[#121212] text-gray-300 overflow-y-auto">
                    <div className="prose prose-invert prose-orange max-w-none text-sm md:text-base">
                        <div dangerouslySetInnerHTML={{ __html: project.content }} />
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between items-center">
                        <button className="flex items-center space-x-2 text-[#D4A017] hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">
                            <Github size={16} /> <span>View Code</span>
                        </button>
                        <button className="flex items-center space-x-2 text-[#D4A017] hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">
                            <ExternalLink size={16} /> <span>Live Demo</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
