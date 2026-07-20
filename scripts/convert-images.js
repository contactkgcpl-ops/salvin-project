import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'src/assets');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(png|jpe?g)$/i.test(file)) {
      // Don't convert favicon.ico if it exists, but pngs are fine.
      // If it's logo.png or similar, we'll convert it and update the codebase.
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      const webpPath = path.join(dir, `${baseName}.webp`);
      
      try {
        await sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(webpPath);
        
        console.log(`Converted ${file} to ${baseName}.webp`);
        fs.unlinkSync(fullPath); // Delete original
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
}

processDirectory(publicDir).then(() => {
  console.log('Image conversion complete.');
});
