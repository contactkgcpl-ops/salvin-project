const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
const domain = 'https://kmgprojects.in';

const content = fs.readFileSync(appPath, 'utf8');
const routes = [];

// Extract routes from <Route path="..."
const regex = /<Route\s+path="([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const route = match[1];
  if (!route.includes(':')) { // Exclude dynamic routes like :projectSlug
    routes.push(route.startsWith('/') ? route : `/${route}`);
  }
}

// Add index route
if (content.includes('<Route index element=')) {
  routes.unshift('/');
}

// Remove duplicates
const uniqueRoutes = [...new Set(routes)];

const date = new Date().toISOString().split('T')[0];

let sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemapXML += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

uniqueRoutes.forEach(route => {
  let priority = "0.8";
  let changefreq = "weekly";

  if (route === '/') {
    priority = "1.0";
  } else if (route === '/contact' || route === '/about') {
    priority = "0.5";
    changefreq = "monthly";
  } else if (route.startsWith('/turnkey-project/')) {
    priority = "0.9";
  }

  sitemapXML += `  <url>\n`;
  sitemapXML += `    <loc>${domain}${route === '/' ? '' : route}</loc>\n`;
  sitemapXML += `    <lastmod>${date}</lastmod>\n`;
  sitemapXML += `    <changefreq>${changefreq}</changefreq>\n`;
  sitemapXML += `    <priority>${priority}</priority>\n`;
  sitemapXML += `  </url>\n`;
});

sitemapXML += `</urlset>\n`;

fs.writeFileSync(sitemapPath, sitemapXML, 'utf8');
console.log(`Generated sitemap with ${uniqueRoutes.length} routes.`);
