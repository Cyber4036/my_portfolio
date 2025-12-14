
import React from 'react';

interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
}

interface Education {
    school: string;
    degree: string;
    period: string;
}

interface SkillGroup {
    category: string;
    tools: string[];
    icon: React.ReactNode;
}

interface AboutProps {
    aboutText: string;
    experience: Experience[];
    education: Education[];
    skills: SkillGroup[];
}

const About: React.FC<AboutProps> = ({ aboutText, experience, education, skills }) => {
    return (
        <section id="about" className="py-24 px-6 md:px-20 bg-[#161616]">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* About Text */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold flex items-center space-x-4">
                            <span className="w-12 h-1 bg-[#8B2E2E]"></span>
                            <span>About Me</span>
                        </h2>
                        <p className="text-gray-300 leading-loose text-lg">
                            {aboutText}
                        </p>

                        {/* Experience Timeline */}
                        <div className="space-y-6 pt-4">
                            <h3 className="text-xl font-bold text-[#F4F4F0]">Experience</h3>
                            {experience.map((exp, idx) => (
                                <div key={idx} className="border-l-2 border-[#D4A017] pl-6 relative hover:border-[#F4F4F0] transition-colors duration-300">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#121212] border-2 border-[#D4A017] rounded-full"></div>
                                    <h4 className="font-bold text-white">{exp.role}</h4>
                                    <div className="flex justify-between items-center text-sm text-[#D4A017] mb-2">
                                        <span>{exp.company}</span>
                                        <span>{exp.period}</span>
                                    </div>
                                    <p className="text-sm text-gray-500">{exp.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Education Timeline */}
                        <div className="space-y-6 pt-4">
                            <h3 className="text-xl font-bold text-[#F4F4F0]">Education</h3>
                            {education.map((edu, idx) => (
                                <div key={idx} className="border-l-2 border-[#8B2E2E] pl-6 relative hover:border-[#F4F4F0] transition-colors duration-300">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#121212] border-2 border-[#8B2E2E] rounded-full"></div>
                                    <h4 className="font-bold text-white">{edu.degree}</h4>
                                    <div className="flex justify-between items-center text-sm text-[#8B2E2E] mb-2">
                                        <span>{edu.school}</span>
                                        <span>{edu.period}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="bg-[#1a1a1a] p-8 border border-[#2D2D2D] relative transform hover:translate-y-1 transition-transform duration-300 shadow-lg">
                        <div className="absolute top-0 right-0 w-0 h-0 border-t-[50px] border-t-[#D4A017] border-l-[50px] border-l-transparent"></div>
                        <h2 className="text-2xl font-bold mb-8 text-[#F4F4F0]">Technical Arsenal</h2>

                        <div className="space-y-8">
                            {skills.map((skillGroup, idx) => (
                                <div key={idx}>
                                    <div className="flex items-center space-x-3 mb-4 text-[#D4A017]">
                                        {skillGroup.icon}
                                        <h3 className="font-semibold uppercase tracking-wider text-sm">{skillGroup.category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.tools.map((tool, tIdx) => (
                                            <span key={tIdx} className="px-3 py-1 bg-[#2D2D2D] text-gray-300 text-sm border border-[#444] hover:border-[#F4F4F0] hover:text-white transition-colors cursor-default">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
