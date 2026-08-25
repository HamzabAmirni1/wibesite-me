import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AdData } from './AdBanner';

interface InlineAdProps {
  ad: AdData;
  variant?: 'horizontal' | 'vertical' | 'card';
  closeable?: boolean;
  onClose?: () => void;
  onClick?: (adId: string) => void;
  className?: string;
}

const InlineAd: React.FC<InlineAdProps> = ({
  ad,
  variant = 'horizontal',
  closeable = true,
  onClose,
  onClick,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick(ad.id);
    }
    console.log(`Inline ad clicked: ${ad.id}`);
    window.open(ad.linkUrl, '_blank', 'noopener,noreferrer');
  };

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  if (!ad.isActive || !isVisible) {
    return null;
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'vertical':
        return 'flex-col items-center text-center p-6';
      case 'card':
        return 'flex-col bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg';
      default:
        return 'flex-row items-center p-4';
    }
  };

  const getImageClasses = () => {
    switch (variant) {
      case 'vertical':
        return 'w-full h-48 mb-4';
      case 'card':
        return 'w-full h-40 mb-4';
      default:
        return 'w-32 h-20 mr-4 flex-shrink-0';
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className={`relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 my-6 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Close button */}
        {closeable && (
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white rounded-full p-1.5 text-gray-400 hover:text-gray-600 transition-colors shadow-sm"
          >
            <X size={16} />
          </button>
        )}

        {/* Ad content */}
        <div
          onClick={handleClick}
          className={`cursor-pointer flex ${getVariantClasses()}`}
        >
          {/* Ad image */}
          <div className={`bg-gray-100 rounded-lg overflow-hidden relative ${getImageClasses()}`}>
            <img
              src={ad.imageUrl}
              alt={ad.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDMyMCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTYwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMzAgNzBIMTkwVjkwSDEzMFY3MFoiIGZpbGw9IiNEMUQ1REIiLz4KPHRleHQgeD0iMTYwIiB5PSI4NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOUNBM0FGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7YpdmI2YTYp9mGINiq2KzYsdmK2KjZiiA8L3RleHQ+Cjwvc3ZnPg==';
              }}
            />
            
            {/* Play button for video ads (if applicable) */}
            {ad.type === 'inline' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/90 rounded-full p-2 shadow-lg"
                >
                  <ExternalLink size={20} className="text-blue-600" />
                </motion.div>
              </div>
            )}
          </div>

          {/* Ad text */}
          <div className={`flex-1 ${variant === 'horizontal' ? 'min-w-0' : ''}`}>
            <h3 className={`font-bold text-gray-800 mb-2 ${variant === 'card' ? 'text-lg' : 'text-base'} ${variant === 'horizontal' ? 'line-clamp-2' : 'line-clamp-3'}`}>
              {ad.title}
            </h3>
            <p className={`text-gray-600 mb-3 leading-relaxed ${variant === 'card' ? 'text-sm' : 'text-sm'} ${variant === 'horizontal' ? 'line-clamp-2' : 'line-clamp-4'}`}>
              {ad.description}
            </p>
            
            {/* Call to action button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-200 flex items-center gap-2"
            >
              <span>اعرف المزيد</span>
              <ExternalLink size={14} />
            </motion.button>
          </div>
        </div>

        {/* Ad label */}
        <div className="absolute bottom-3 left-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-xs px-2 py-1 rounded-full">
          إعلان مدعوم
        </div>

        {/* Hover effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Animated border on hover */}
        <motion.div
          className="absolute inset-0 border-2 border-transparent rounded-lg pointer-events-none"
          animate={{
            borderColor: isHovered ? '#3B82F6' : 'transparent'
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default InlineAd;
