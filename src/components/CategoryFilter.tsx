import React from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  allLabel?: string;
  categoryLabel?: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  allLabel,
  categoryLabel,
}) => {
  const { language } = useLanguage();
  const defaultAllLabel = t('articlesPageFull.search.all', language) || 'الكل';
  const defaultCategoryLabel = t('articlesPageFull.search.category', language) || 'التصنيف:';

  const filterAllLabel = allLabel || defaultAllLabel;
  const filterCatLabel = categoryLabel || defaultCategoryLabel;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap items-center gap-3 justify-center"
    >
      <div className="flex items-center gap-2 text-gray-600">
        <Filter className="w-5 h-5" />
        <span className="font-semibold">{filterCatLabel}</span>
      </div>

      <button
        onClick={() => onSelectCategory(filterAllLabel)}
        className={`
          px-5 py-2 rounded-full font-medium transition-all duration-300
          ${selectedCategory === filterAllLabel
            ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }
        `}
      >
        {filterAllLabel}
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
