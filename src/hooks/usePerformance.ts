import { useEffect, useCallback } from 'react';

export const usePerformance = () => {
  // Preload critical resources
  const preloadResource = useCallback((href: string, as: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  }, []);

  // Prefetch next page resources
  const prefetchResource = useCallback((href: string) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  // Remove unused CSS
  const removeUnusedCSS = useCallback(() => {
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach(stylesheet => {
      if (stylesheet instanceof HTMLLinkElement && !stylesheet.disabled) {
        // Mark as non-critical for better performance
        stylesheet.media = 'print';
        stylesheet.onload = () => {
          stylesheet.media = 'all';
        };
      }
    });
  }, []);

  useEffect(() => {
    // Initialize performance optimizations
    optimizeImages();
    
    // Preload critical fonts
    preloadResource('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap', 'style');
    
    return () => {
      // Cleanup if needed
    };
  }, [optimizeImages, preloadResource]);

  return {
    preloadResource,
    prefetchResource,
    optimizeImages
  };
};
