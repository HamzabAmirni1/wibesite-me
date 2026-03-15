import React, { useEffect } from 'react';

interface AdsterraAdProps {
  adId: string;
  adUrl: string;
}

const AdsterraAd: React.FC<AdsterraAdProps> = ({ adId, adUrl }) => {
  useEffect(() => {
    const container = document.getElementById(`container-${adId}`);
    if (container && !container.hasChildNodes()) {
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = adUrl;
      container.appendChild(script);
    }
  }, [adId, adUrl]);

  return (
    <div className="my-8 flex justify-center w-full overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900/50 p-4 border border-gray-100 dark:border-white/5 shadow-sm">
      <div id={`container-${adId}`} className="w-full h-full min-h-[100px]"></div>
    </div>
  );
};

export default AdsterraAd;
