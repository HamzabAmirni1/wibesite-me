import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import articles data
const articlesDataPath = path.join(__dirname, '../src/data/articles.ts');
const articlesContent = fs.readFileSync(articlesDataPath, 'utf-8');

// Extract article IDs and dates (simple parsing)
const articleMatches = articlesContent.matchAll(/id:\s*(\d+).*?date:\s*'([^']+)'/gs);
const articles = Array.from(articleMatches).map(match => ({
  id: match[1],
  date: match[2]
}));

const baseUrl = 'https://hamzaamirni.netlify.app';
const currentDate = new Date().toISOString().split('T')[0];

// Static pages
const staticPages = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/projects', changefreq: 'weekly', priority: '0.9' },
  { url: '/videos', changefreq: 'weekly', priority: '0.8' },
  { url: '/programming', changefreq: 'weekly', priority: '0.8' },
  { url: '/apps', changefreq: 'weekly', priority: '0.8' },
  { url: '/services', changefreq: 'monthly', priority: '0.7' },
  { url: '/articles', changefreq: 'daily', priority: '0.9' },
  { url: '/contact', changefreq: 'monthly', priority: '0.6' },
  { url: '/privacy', changefreq: 'monthly', priority: '0.5' },
  { url: '/terms', changefreq: 'monthly', priority: '0.5' },
  { url: '/disclaimer', changefreq: 'monthly', priority: '0.5' },
];

// Generate sitemap XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;

// Add static pages
staticPages.forEach(page => {
  sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
});

// Add article pages
articles.forEach(article => {
  sitemap += `
  <url>
    <loc>${baseUrl}/articles/${article.id}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
});

sitemap += '\n</urlset>';

// Write sitemap to public folder
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log('✅ Sitemap generated successfully at public/sitemap.xml');
console.log(`📊 Total URLs: ${staticPages.length + articles.length}`);
