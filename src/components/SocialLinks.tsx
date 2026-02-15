import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../constants';

const SocialLinks: React.FC = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-8">
            {socialLinks.map((link, index) => (
                <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                        relative overflow-hidden group 
                        flex flex-col items-center justify-center 
                        p-4 rounded-2xl shadow-md 
                        transition-all duration-300
                        ${link.color ? 'text-white' : 'bg-white text-gray-800'}
                    `}
                    style={{ background: link.color || undefined }}
                    whileHover={{ y: -5, scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    {/* Background overlay for hover effect */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                    <link.IconComponent className="w-8 h-8 mb-2" />
                    <span className="font-bold text-sm text-center">{link.name}</span>
                </motion.a>
            ))}
        </div>
    );
};

export default SocialLinks;
