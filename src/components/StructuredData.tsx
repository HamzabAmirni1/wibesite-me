import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Article' | 'Person' | 'WebSite' | 'BreadcrumbList' | 'Organization';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    let structuredData: any = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    // Add specific fields based on type
    if (type === 'Article') {
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        image: data.image,
        author: {
          '@type': 'Person',
          name: data.author || 'حمزة اعمرني',
          url: 'https://hamzaamirni.netlify.app'
        },
        publisher: {
          '@type': 'Organization',
          name: 'حمزة اعمرني',
          logo: {
            '@type': 'ImageObject',
            url: 'https://hamzaamirni.netlify.app/hamza-logo.svg'
          }
        },
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        description: data.description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url
        }
      };
    }

    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [type, data]);

  return null;
};

export default StructuredData;

// Helper function to generate article structured data
export const generateArticleData = (article: any) => ({
  title: article.title,
  description: article.excerpt,
  image: article.image,
  author: article.author,
  datePublished: article.date,
  url: `https://hamzaamirni.netlify.app/articles/${article.id}`
});

// Helper function to generate person structured data
export const generatePersonData = () => ({
  name: 'حمزة اعمرني',
  url: 'https://hamzaamirni.netlify.app',
  image: 'https://hamzaamirni.netlify.app/hamza-logo.svg',
  jobTitle: 'مبرمج وصانع محتوى تقني',
  description: 'مبرمج وصانع محتوى تقني متخصص في تطوير الويب والتطبيقات',
  sameAs: [
    'https://github.com/hamzaamirni',
    'https://linkedin.com/in/hamzaamirni',
    'https://twitter.com/hamzaamirni'
  ]
});

// Helper function to generate website structured data
export const generateWebSiteData = () => ({
  name: 'حمزة اعمرني',
  url: 'https://hamzaamirni.netlify.app',
  description: 'منصة حمزة اعمرني لمشاركة الخبرة والشغف في عالم البرمجة والتقنية وتطوير الذات',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://hamzaamirni.netlify.app/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
});
