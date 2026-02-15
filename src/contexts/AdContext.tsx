import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdData } from '../components/ads/AdBanner';

interface AdContextType {
  ads: AdData[];
  activeAds: AdData[];
  addAd: (ad: Omit<AdData, 'id' | 'clickCount' | 'impressions'>) => void;
  updateAd: (id: string, updates: Partial<AdData>) => void;
  removeAd: (id: string) => void;
  trackClick: (adId: string) => void;
  trackImpression: (adId: string) => void;
  getAdsByType: (type: 'banner' | 'sidebar' | 'inline') => AdData[];
}

const AdContext = createContext<AdContextType | undefined>(undefined);

// Sample ads data
const sampleAds: AdData[] = [
  {
    id: 'ad-1',
    title: 'تعلم البرمجة مع أفضل الكورسات',
    description: 'احصل على أفضل الكورسات في البرمجة والتطوير. خصم 50% لفترة محدودة!',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
    linkUrl: 'https://example.com/programming-courses',
    type: 'banner',
    isActive: true,
    clickCount: 0,
    impressions: 0
  },
  {
    id: 'ad-3',
    title: 'أدوات التطوير المتقدمة',
    description: 'اكتشف أحدث أدوات التطوير والبرمجة التي ستساعدك في إنجاز مشاريعك بسرعة وكفاءة عالية.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop',
    linkUrl: 'https://example.com/dev-tools',
    type: 'inline',
    isActive: true,
    clickCount: 0,
    impressions: 0
  },
  {
    id: 'ad-4',
    title: 'استضافة المواقع الموثوقة',
    description: 'احصل على استضافة سريعة وآمنة لموقعك مع دعم فني على مدار الساعة.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop',
    linkUrl: 'https://example.com/hosting',
    type: 'banner',
    isActive: true,
    clickCount: 0,
    impressions: 0
  },
  {
    id: 'ad-5',
    title: 'كورسات الذكاء الاصطناعي',
    description: 'تعلم الذكاء الاصطناعي وتعلم الآلة من الصفر حتى الاحتراف.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop',
    linkUrl: 'https://example.com/ai-courses',
    type: 'sidebar',
    isActive: true,
    clickCount: 0,
    impressions: 0
  }
];

export const AdProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ads, setAds] = useState<AdData[]>(sampleAds);

  // Load ads from localStorage on mount
  useEffect(() => {
    const savedAds = localStorage.getItem('website-ads');
    if (savedAds) {
      try {
        const parsedAds = JSON.parse(savedAds);
        setAds(parsedAds);
      } catch (error) {
        console.error('Error loading ads from localStorage:', error);
      }
    }
  }, []);

  // Save ads to localStorage whenever ads change
  useEffect(() => {
    localStorage.setItem('website-ads', JSON.stringify(ads));
  }, [ads]);

  const activeAds = ads.filter(ad => ad.isActive);

  const addAd = (newAd: Omit<AdData, 'id' | 'clickCount' | 'impressions'>) => {
    const ad: AdData = {
      ...newAd,
      id: `ad-${Date.now()}`,
      clickCount: 0,
      impressions: 0
    };
    setAds(prev => [...prev, ad]);
  };

  const updateAd = (id: string, updates: Partial<AdData>) => {
    setAds(prev => prev.map(ad => 
      ad.id === id ? { ...ad, ...updates } : ad
    ));
  };

  const removeAd = (id: string) => {
    setAds(prev => prev.filter(ad => ad.id !== id));
  };

  const trackClick = (adId: string) => {
    setAds(prev => prev.map(ad => 
      ad.id === adId 
        ? { ...ad, clickCount: (ad.clickCount || 0) + 1 }
        : ad
    ));
  };

  const trackImpression = (adId: string) => {
    setAds(prev => prev.map(ad => 
      ad.id === adId 
        ? { ...ad, impressions: (ad.impressions || 0) + 1 }
        : ad
    ));
  };

  const getAdsByType = (type: 'banner' | 'sidebar' | 'inline') => {
    return activeAds.filter(ad => ad.type === type);
  };

  const value: AdContextType = {
    ads,
    activeAds,
    addAd,
    updateAd,
    removeAd,
    trackClick,
    trackImpression,
    getAdsByType
  };

  return (
    <AdContext.Provider value={value}>
      {children}
    </AdContext.Provider>
  );
};

export const useAds = () => {
  const context = useContext(AdContext);
  if (context === undefined) {
    throw new Error('useAds must be used within an AdProvider');
  }
  return context;
};
