const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, 'dist');
const BASE_URL = 'https://kamiyeoladipo.com/';
const SITEMAP_PATH = path.join(DIST_DIR, 'sitemap.xml');
const today = new Date().toISOString().split('T')[0];

// Get all .html files in dist/
const files = fs.readdirSync(DIST_DIR).filter(f => f.endsWith('.html'));

// Always include the root URL
const urls = [
  {
    loc: BASE_URL,
    lastmod: today,
    priority: '1.0',
  },
  ...files.filter(f => f !== 'index.html').map(f => ({
    loc: BASE_URL + f,
    lastmod: today,
    priority: '0.8',
  }))
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url>\n    <loc>${url.loc}</loc>\n    <lastmod>${url.lastmod}</lastmod>\n    <priority>${url.priority}</priority>\n  </url>`).join('\n')}\n</urlset>\n`;

fs.writeFileSync(SITEMAP_PATH, sitemap);

console.log('sitemap.xml generated successfully!'); 