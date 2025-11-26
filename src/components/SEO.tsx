import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title = 'حمزة اعمرني | مبرمج وصانع محتوى تقني',
  description = 'منصة حمزة اعمرني لمشاركة الخبرة والشغف في عالم البرمجة والتقنية وتطوير الذات.',
  image = 'https://hamzaamirni.netlify.app/og-image.jpg',
  url = 'https://hamzaamirni.netlify.app',
  type = 'website',
  author = 'حمزة اعمرني',
  publishedTime,
  keywords = ['برمجة', 'ويب', 'JavaScript', 'Python', 'تقنية', 'تعليم', 'مقالات برمجية']
}) => {
  const siteTitle = title.includes('حمزة اعمرني') ? title : `${title} | حمزة اعمرني`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="حمزة اعمرني" />
      <meta property="og:locale" content="ar_AR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@hamzaamirni" />

      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:author" content={author} />
          <meta property="article:section" content="Technology" />
          {keywords.map((keyword, index) => (
            <meta key={index} property="article:tag" content={keyword} />
          ))}
        </>
      )}

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="ar" />
      <html lang="ar" dir="rtl" />
    </Helmet>
  );
};

export default SEO;
