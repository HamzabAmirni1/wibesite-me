import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ArticleSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const ArticleSearch: React.FC<ArticleSearchProps> = ({ 
  onSearch, 
  placeholder = 'ابحث في المقالات...' 
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <motion.div 
      className="relative w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`
        relative flex items-center bg-white rounded-2xl shadow-md
        transition-all duration-300 overflow-hidden
        ${isFocused ? 'ring-2 ring-primary/50 shadow-lg' : ''}
      `}>
        <Search className="absolute right-4 w-5 h-5 text-gray-400 pointer-events-none" />
        
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full pr-12 pl-12 py-4 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
        />

        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleClear}
              className="absolute left-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Search hint */}
      <AnimatePresence>
        {isFocused && !query && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg p-3 text-sm text-gray-500 z-10"
          >
            💡 ابحث بالعنوان، الفئة، أو الكلمات المفتاحية
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ArticleSearch;
