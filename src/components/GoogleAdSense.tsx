import React, { useEffect } from 'react';

interface GoogleAdSenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const GoogleAdSense: React.FC<GoogleAdSenseProps> = ({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  className = '',
  style = { display: 'block' }
}) => {
  useEffect(() => {
    // Placeholder for AdSense initialization
    // Will be implemented when AdSense is approved
    try {
      // This is where AdSense code would go
      console.log('AdSense placeholder for slot:', adSlot);
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [adSlot]);

  return (
    <div className={`adsense-wrapper ${className}`}>
      <div 
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-xxxxxxxxxx" // Placeholder for AdSense client ID
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      >
        {/* Ad placeholder - will be filled by AdSense when approved */}
        <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg w-full h-32 flex items-center justify-center">
          <span className="text-gray-500">Advertisement</span>
        </div>
      </div>
    </div>
  );
};

export default GoogleAdSense;