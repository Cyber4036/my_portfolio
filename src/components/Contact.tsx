
import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { ImigongoDivider } from './ImigongoPatterns';

interface ContactInfo {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
}

interface ContactProps {
    contactInfo: ContactInfo;
}

const Contact: React.FC<ContactProps> = ({ contactInfo }) => {
    return (
        <section id="contact" className="py-24 px-6 md:px-20 bg-[#161616] relative overflow-hidden">
            {/* Decorative Zig Zag */}
            <div className="absolute top-0 left-0 w-full">
                <ImigongoDivider className="opacity-10" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Something Unique?</h2>
                <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Whether it's a web platform with traditional aesthetics or an AI model solving complex data problems, I'm ready to collaborate.
                </p>

                <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center justify-center space-x-3 bg-[#8B2E2E] hover:bg-[#a03535] text-white px-10 py-4 font-bold tracking-wider transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-red-900/20 w-full md:w-auto"
                >
                    <Mail size={20} />
                    <span>Start a Conversation</span>
                </a>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-[#2D2D2D] pt-12">
                    <div>
                        <h4 className="text-[#D4A017] font-bold uppercase text-sm mb-2">Location</h4>
                        <p className="text-gray-400">{contactInfo.location}</p>
                    </div>
                    <div>
                        <h4 className="text-[#D4A017] font-bold uppercase text-sm mb-2">Email</h4>
                        <p className="text-gray-400 break-all">{contactInfo.email}</p>
                    </div>
                    <div>
                        <h4 className="text-[#D4A017] font-bold uppercase text-sm mb-2">Socials</h4>
                        <div className="flex justify-center space-x-6">
                            {contactInfo.github && (
                                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                                    <Github size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                                </a>
                            )}
                            {contactInfo.linkedin && (
                                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                    <Linkedin size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                                </a>
                            )}
                            {contactInfo.portfolio && (
                                <a href={contactInfo.portfolio} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
