import React from 'react';
import { useAds } from '../../contexts/AdContext';
import AdBanner from './AdBanner';
import SidebarAd from './SidebarAd';
import InlineAd from './InlineAd';

interface AdContainerProps {
  type: 'banner' | 'sidebar' | 'inline';
  position?: 'top' | 'middle' | 'bottom';
  variant?: 'horizontal' | 'vertical' | 'card';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  maxAds?: number;
}

const AdContainer: React.FC<AdContainerProps> = ({
  type,
  position = 'middle',
  variant = 'horizontal',
  size = 'medium',
  className = '',
  maxAds = 1
}) => {
  const { getAdsByType, trackClick, trackImpression } = useAds();
  
  const ads = getAdsByType(type).slice(0, maxAds);

  if (ads.length === 0) {
    return null;
  }

  const handleAdClick = (adId: string) => {
    trackClick(adId);
  };

  const handleAdImpression = (adId: string) => {
    trackImpression(adId);
  };

  return (
    <div className={`ad-container ${className}`}>
      {ads.map((ad) => {
        switch (type) {
          case 'banner':
            return (
              <AdBanner
                key={ad.id}
                ad={ad}
                size={size}
                closeable={true}
                onClick={handleAdClick}
                className="mb-4"
              />
            );
          case 'sidebar':
            return (
              <SidebarAd
                key={ad.id}
                ad={ad}
                position={position}
                closeable={true}
                onClick={handleAdClick}
                className="mb-4"
              />
            );
          case 'inline':
            return (
              <InlineAd
                key={ad.id}
                ad={ad}
                variant={variant}
                closeable={true}
                onClick={handleAdClick}
                className="my-6"
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default AdContainer;
