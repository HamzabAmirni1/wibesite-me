import React from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap items-center gap-3 justify-center"
    >
      <div className="flex items-center gap-2 text-gray-600">
        <Filter className="w-5 h-5" />
        <span className="font-semibold">التصنيف:</span>
      </div>

      <button
        onClick={() => onSelectCategory('الكل')}
        className={`
          px-5 py-2 rounded-full font-medium transition-all duration-300
          ${selectedCategory === 'الكل'
            ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }
        `}
      >
        الكل
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`
            px-5 py-2 rounded-full font-medium transition-all duration-300
            ${selectedCategory === category
              ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }
          `}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
};

export default CategoryFilter;
