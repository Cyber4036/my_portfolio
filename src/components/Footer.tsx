
import React from 'react';

const Footer: React.FC<{ name: string }> = ({ name }) => {
    return (
        <footer className="py-8 bg-black text-center text-gray-600 text-sm px-4">
            <p>© {new Date().getFullYear()} {name}. Built with React & Tailwind.</p>
            <p className="mt-2 text-xs">Inspired by the timeless Imigongo tradition.</p>
        </footer>
    );
};

export default Footer;
