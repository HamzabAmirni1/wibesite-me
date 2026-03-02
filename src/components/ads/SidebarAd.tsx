import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AdData } from './AdBanner';

interface SidebarAdProps {
  ad: AdData;
  position?: 'top' | 'middle' | 'bottom';
  closeable?: boolean;
  onClose?: () => void;
  onClick?: (adId: string) => void;
  className?: string;
}

const SidebarAd: React.FC<SidebarAdProps> = ({
  ad,
  position = 'middle',
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
    console.log(`Sidebar ad clicked: ${ad.id}`);
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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className={`relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 mb-4 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Close button */}
        {closeable && (
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 z-10 bg-white/90 hover:bg-white rounded-full p-1 text-gray-400 hover:text-gray-600 transition-colors shadow-sm"
          >
            <X size={12} />
          </button>
        )}

        {/* Ad content */}
        <div
          onClick={handleClick}
          className="cursor-pointer p-3"
        >
          {/* Ad image */}
          <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
            <img
              src={ad.imageUrl}
              alt={ad.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDIwMCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04MCA1NkgxMjBWNzJIODBWNTZaIiBmaWxsPSIjRDFENURCIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+2KXYudmE2KfZhiDYqtis2LHZitio2YogPC90ZXh0Pgo8L3N2Zz4=';
              }}
            />
            
            {/* External link icon overlay */}
            <div className="absolute top-2 left-2">
              <ExternalLink 
                size={14} 
                className={`text-white/80 transition-colors ${isHovered ? 'text-white' : ''}`} 
              />
            </div>
          </div>

          {/* Ad text */}
          <div>
            <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2">
              {ad.title}
            </h3>
            <p className="text-gray-600 text-xs line-clamp-3 leading-relaxed">
              {ad.description}
            </p>
          </div>
        </div>

        {/* Ad label */}
        <div className="absolute bottom-2 left-2 bg-gray-500/80 text-white text-xs px-2 py-1 rounded text-[10px]">
          إعلان مدفوع
        </div>

        {/* Hover effect */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"
          />
        )}

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

export default SidebarAd;
