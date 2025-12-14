
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

                {/* Photo Container - Diamond-shaped Mask with Animations */}
                <div className={`order-1 lg:order-2 flex justify-center relative ${mounted ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
                    <div className="w-64 h-64 md:w-96 md:h-96 relative">
                        {/* Decorative Frames - Spinning */}
                        <div className="absolute inset-0 border-2 border-[#8B2E2E] transform rotate-3 animate-spin-slow"></div>
                        <div className="absolute inset-0 border-2 border-[#D4A017] transform -rotate-3 animate-spin-reverse-slow"></div>

                        {/* Image Mask - Diamond Shape */}
                        <div className="absolute inset-8 bg-[#121212] overflow-hidden shadow-2xl z-10 
                             transform rotate-45 border-4 border-[#2D2D2D]">

                            {/* Placeholder for user image - Rotate back and scale up */}
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 
                            transform -rotate-45 scale-150 mix-blend-darken filter contrast-125"
                            />
                        </div>

                        {/* Geometric Accent */}
                        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#121212] border border-[#F4F4F0] flex items-center justify-center z-20">
                            <div className="w-12 h-12 bg-[#8B2E2E] rotate-45 animate-pulse"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
