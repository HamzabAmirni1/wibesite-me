import React, { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface AdData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  type: 'banner' | 'sidebar' | 'inline';
  isActive: boolean;
  clickCount?: number;
  impressions?: number;
}

interface AdBannerProps {
  ad: AdData;
  size?: 'small' | 'medium' | 'large';
  closeable?: boolean;
  onClose?: () => void;
  onClick?: (adId: string) => void;
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({
  ad,
  size = 'medium',
  closeable = false,
  onClose,
  onClick,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Track impression
    if (ad.isActive) {
      // Here you would typically send impression data to your analytics
      console.log(`Ad impression: ${ad.id}`);
    }
  }, [ad.id, ad.isActive]);

  const handleClick = () => {
    if (onClick) {
      onClick(ad.id);
    }
    // Track click
    console.log(`Ad clicked: ${ad.id}`);
    // Open link in new tab
    window.open(ad.linkUrl, '_blank', 'noopener,noreferrer');
  };

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'h-20 text-xs';
      case 'large':
        return 'h-32 text-base';
      default:
        return 'h-24 text-sm';
    }
  };

  if (!ad.isActive || !isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`relative bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${getSizeClasses()} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Close button */}
        {closeable && (
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white rounded-full p-1 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={14} />
          </button>
        )}

        {/* Ad content */}
        <div
          onClick={handleClick}
          className="flex items-center h-full p-3 cursor-pointer"
        >
          {/* Ad image */}
          <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-lg overflow-hidden mr-3">
            <img
              src={ad.imageUrl}
              alt={ad.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNCAyNEg0MFY0MEgyNFYyNFoiIGZpbGw9IiNEMUQ1REIiLz4KPC9zdmc+';
              }}
            />
          </div>

          {/* Ad text */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-800 truncate mb-1">
              {ad.title}
            </h3>
            <p className="text-gray-600 text-xs line-clamp-2">
              {ad.description}
            </p>
          </div>

          {/* External link icon */}
          <div className="flex-shrink-0 ml-2">
            <ExternalLink 
              size={16} 
              className={`text-gray-400 transition-colors ${isHovered ? 'text-blue-500' : ''}`} 
            />
          </div>
        </div>

        {/* Ad label */}
        <div className="absolute bottom-1 left-1 bg-gray-500/80 text-white text-xs px-1 py-0.5 rounded text-[10px]">
          إعلان
        </div>

        {/* Hover effect */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-blue-500/5 pointer-events-none"
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default AdBanner;
