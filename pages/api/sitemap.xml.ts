// pages/api/sitemap.xml.ts

import { NextApiRequest, NextApiResponse } from 'next';

const SITEMAP_URL = 'https://hiita.vn';
type Path = {
    url: string;
    changeFrequency: string;
    priority: number;
   };
   
// Định nghĩa các route cố định
const staticPaths = [
  { url: '/', changeFrequency: 'daily', priority: 1.0 },
  { url: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { url: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { url: '/san-pham', changeFrequency: 'weekly', priority: 0.8 },
  { url: '/news', changeFrequency: 'weekly', priority: 0.6 },
  { url: '/account', changeFrequency: 'weekly', priority: 0.6},
  { url: '/faq', changeFrequency: 'weekly', priority: 0.6},
];

// Hàm tạo sitemap XML
const createSitemap = (paths: Path[]) => {
    const sitemapEntries = paths.map((path) => `
      <url>
        <loc>${SITEMAP_URL}${path.url}</loc>
        <changefreq>${path.changeFrequency}</changefreq>
        <priority>${path.priority}</priority>
      </url>
    `).join('');
   
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapEntries}
    </urlset>`;
   };

export default async function sitemapHandler(req: NextApiRequest, res: NextApiResponse) {
  const sitemap = createSitemap(staticPaths);
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(sitemap);
}