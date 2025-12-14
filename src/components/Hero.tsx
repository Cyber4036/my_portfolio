
import React from 'react';
import { ChevronRight, Download } from 'lucide-react';
import profilePic from '../assets/profile.jpeg';

interface HeroProps {
    scrollTo: (id: string) => void;
    mounted: boolean;
    tagline: string;
}

const Hero: React.FC<HeroProps> = ({ scrollTo, mounted, tagline }) => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative px-6 md:px-20 py-10 md:py-20 overflow-hidden">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className={`order-2 lg:order-1 space-y-6 relative z-10 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <div className="inline-block border border-[#D4A017] px-4 py-1 text-[#D4A017] text-xs md:text-sm tracking-widest uppercase font-semibold">
                        Portfolio
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                        Designing <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F4F0] to-[#999]">Intelligence</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed border-l-4 border-[#8B2E2E] pl-6 animate-delay-100">
                        {tagline}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-delay-200">
                        <button
                            onClick={() => scrollTo('projects')}
                            className="bg-[#D4A017] text-[#121212] hover:bg-[#F4F4F0] px-8 py-3 font-bold flex items-center justify-center space-x-2 transition-colors duration-300 w-full sm:w-auto"
                        >
                            <span>View My Work</span>
                            <ChevronRight size={18} />
                        </button>
                        <button className="border border-[#F4F4F0] text-[#F4F4F0] hover:bg-[#F4F4F0] hover:text-[#121212] px-8 py-3 font-bold flex items-center justify-center space-x-2 transition-colors duration-300 w-full sm:w-auto">
                            <Download size={18} />
                            <span>Download CV</span>
                        </button>
                    </div>
                </div>

                {/* Photo Container - Square Frame */}
                <div className={`order-1 lg:order-2 flex justify-center relative ${mounted ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
                    <div className="w-64 h-64 md:w-80 md:h-80 relative group">
                        {/* Decorative Frames */}
                        <div className="absolute inset-0 border-2 border-[#8B2E2E] translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <div className="absolute inset-0 border-2 border-[#D4A017] -translate-x-4 -translate-y-4 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>

                        {/* Main Image Container */}
                        <div className="absolute inset-0 bg-[#121212] overflow-hidden border border-[#2D2D2D] shadow-2xl relative z-10">
                            <div className="absolute inset-0 bg-gray-900/20 z-20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="w-full h-90 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                            />
                            {/* Bottom Fade Gradient */}
                            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none z-30"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
