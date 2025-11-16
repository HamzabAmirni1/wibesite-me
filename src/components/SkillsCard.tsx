import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { aboutContent } from '../constants';
import { LucideProps } from 'lucide-react';

type Skill = {
    name: string;
    level: number;
    icon: React.FC<LucideProps>;
};

interface SkillsCardProps {
    skills: Skill[];
}

const SkillItem: React.FC<{ skill: Skill, index: number }> = ({ skill, index }) => (
    <motion.div 
        className="space-y-2"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
    >
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <skill.icon className="w-5 h-5 text-primary" />
                <span className="font-bold text-dark-color">{skill.name}</span>
            </div>
            <span className="text-sm font-semibold text-primary">{skill.level}%</span>
        </div>
        <div className="w-full bg-border-color rounded-full h-2.5">
            <motion.div 
                className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeInOut" }}
                viewport={{ once: true }}
            />
        </div>
    </motion.div>
);

const SkillsCard: React.FC<SkillsCardProps> = ({ skills }) => {
    return (
        <Card>
            <h3 className="text-2xl font-bold text-primary text-center mb-8">مهاراتي</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {skills.map((skill, index) => (
                    <SkillItem key={skill.name} skill={skill} index={index} />
                ))}
            </div>
        </Card>
    );
};

export default SkillsCard;
