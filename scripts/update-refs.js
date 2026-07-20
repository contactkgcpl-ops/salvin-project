import fs from 'fs';
import path from 'path';

const dirs = [
  path.join(process.cwd(), 'src'),
  path.join(process.cwd(), 'index.html'),
  path.join(process.cwd(), 'public/manifest.json'),
  path.join(process.cwd(), 'public/sitemap.xml')
];

function processPath(p) {
  const stat = fs.statSync(p);
  if (stat.isDirectory()) {
    const files = fs.readdirSync(p);
    for (const f of files) {
      processPath(path.join(p, f));
    }
  } else if (/\.(jsx?|html|json|xml|js)$/i.test(p)) {
    let content = fs.readFileSync(p, 'utf8');
    const newContent = content.replace(/\.png/g, '.webp').replace(/\.jpe?g/g, '.webp').replace(/\.jpg/g, '.webp');
    if (content !== newContent) {
      fs.writeFileSync(p, newContent, 'utf8');
      console.log('Updated:', p);
    }
  }
}

for (const dir of dirs) {
  if (fs.existsSync(dir)) {
    processPath(dir);
  }
}
console.log('Reference update complete.');
