
import React from 'react';
import { User, Layers, Code, Mail, Github, Linkedin, Menu, X } from 'lucide-react';

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    active: boolean;
    onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center space-x-2 px-4 py-2 transition-all duration-300 group
      ${active ? 'text-[#D4A017] border-l-2 border-[#D4A017]' : 'text-gray-400 hover:text-white'}
    `}
    >
        <span className="transform group-hover:scale-110 transition-transform">{icon}</span>
        <span className="font-medium tracking-wide text-sm hidden md:block">{label}</span>
    </button>
);

interface NavigationProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    scrollTo: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollTo, isMenuOpen, setIsMenuOpen }) => {
    return (
        <>
            {/* Desktop Navigation */}
            <nav className="fixed top-0 left-0 h-screen w-20 hidden lg:flex flex-col justify-between items-center py-8 z-40 bg-[#121212] border-r border-[#2D2D2D]">
                <div className="w-10 h-10 bg-[#F4F4F0] rotate-45 flex items-center justify-center mb-8 transition-transform duration-500 hover:rotate-90">
                    <div className="w-6 h-6 bg-[#121212]" />
                </div>

                <div className="flex flex-col space-y-8 w-full">
                    <NavItem icon={<User size={24} />} label="Home" active={activeSection === 'home'} onClick={() => scrollTo('home')} />
                    <NavItem icon={<Layers size={24} />} label="About" active={activeSection === 'about'} onClick={() => scrollTo('about')} />
                    <NavItem icon={<Code size={24} />} label="Work" active={activeSection === 'projects'} onClick={() => scrollTo('projects')} />
                    <NavItem icon={<Mail size={24} />} label="Contact" active={activeSection === 'contact'} onClick={() => scrollTo('contact')} />
                </div>

                <div className="flex flex-col space-y-4 text-gray-500">
                    <Github size={20} className="hover:text-white cursor-pointer transition-colors" />
                    <Linkedin size={20} className="hover:text-white cursor-pointer transition-colors" />
                </div>
            </nav>

            {/* Mobile Nav Header */}
            <div className="lg:hidden fixed top-0 w-full z-50 bg-[#121212]/95 backdrop-blur-md border-b border-[#2D2D2D] px-6 py-4 flex justify-between items-center shadow-lg">
                <span className="font-bold text-xl tracking-widest text-[#F4F4F0]">IGIKARI</span>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#D4A017] p-1">
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-[#121212] flex flex-col items-center justify-center space-y-8 lg:hidden animate-fade-in-up">
                    <button onClick={() => scrollTo('home')} className="text-3xl font-bold text-[#F4F4F0] hover:text-[#D4A017]">Home</button>
                    <button onClick={() => scrollTo('about')} className="text-3xl font-bold text-[#F4F4F0] hover:text-[#D4A017]">About</button>
                    <button onClick={() => scrollTo('projects')} className="text-3xl font-bold text-[#F4F4F0] hover:text-[#D4A017]">Projects</button>
                    <button onClick={() => scrollTo('contact')} className="text-3xl font-bold text-[#F4F4F0] hover:text-[#D4A017]">Contact</button>
                    <div className="flex space-x-8 pt-8 border-t border-[#2D2D2D]">
                        <Github size={28} className="text-[#D4A017]" />
                        <Linkedin size={28} className="text-[#D4A017]" />
                    </div>
                </div>
            )}
        </>
    );
};

export default Navigation;
