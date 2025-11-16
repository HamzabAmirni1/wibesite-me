import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../constants';

const SocialLinks: React.FC = () => {
    return (
        <div className="flex justify-center gap-4 my-8 flex-wrap">
            {socialLinks.map((link, index) => (
                <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-light-color text-primary font-bold px-6 py-3 rounded-full shadow-md flex items-center gap-3 whitespace-nowrap border-2 border-transparent hover:bg-primary hover:text-white transition-colors duration-300"
                    whileHover={{ y: -3, scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <link.IconComponent className="w-5 h-5" />
                    {link.name}
                </motion.a>
            ))}
        </div>
    );
};

export default SocialLinks;
