import React from 'react';
import { motion } from 'framer-motion';
import { whatsappChannels } from '../constants';

const WhatsappChannelLinks: React.FC = () => {
    return (
        <div className="flex justify-center gap-6 my-8 flex-wrap">
            {whatsappChannels.map((channel, index) => (
                <motion.a
                    key={index}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-3 whitespace-nowrap"
                    whileHover={{ y: -3, scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <channel.IconComponent className="w-5 h-5" />
                    {channel.name}
                </motion.a>
            ))}
        </div>
    );
};

export default WhatsappChannelLinks;
