import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');
const fontsDir = path.resolve('public/fonts');

if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

async function processImages() {
  console.log('Processing images with sharp...');
  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    if (!file.match(/\.(png|jpg|jpeg)$/i) || file.includes('-optimized')) continue;
    const filePath = path.join(imagesDir, file);
    const baseName = path.parse(file).name;

    console.log(`Optimizing ${file}...`);
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // 1. Generate standard WebP
    await sharp(filePath)
      .webp({ quality: 85 })
      .toFile(path.join(imagesDir, `${baseName}.webp`));

    // 2. Generate AVIF
    await sharp(filePath)
      .avif({ quality: 80 })
      .toFile(path.join(imagesDir, `${baseName}.avif`));

    // 3. For hero and cards, generate responsive sizes if wide
    if (metadata.width && metadata.width > 800) {
      await sharp(filePath)
        .resize({ width: 800 })
        .webp({ quality: 85 })
        .toFile(path.join(imagesDir, `${baseName}-800.webp`));

      await sharp(filePath)
        .resize({ width: 1200 })
        .webp({ quality: 85 })
        .toFile(path.join(imagesDir, `${baseName}-1200.webp`));
    }
  }
  console.log('Image processing complete!');
}

async function fetchFont() {
  console.log('Fetching Lexend font...');
  // We can fetch from Google Fonts API for Lexend woff2
  try {
    const cssRes = await fetch('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&display=swap', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (cssRes.ok) {
      const cssText = await cssRes.text();
      // Extract woff2 urls
      const urls = [...cssText.matchAll(/url\((https:\/\/[^)]+\.woff2)\)/g)].map(m => m[1]);
      console.log(`Found ${urls.length} font files.`);
      
      let index = 0;
      for (const url of urls) {
        const fontRes = await fetch(url);
        if (fontRes.ok) {
          const buffer = await fontRes.arrayBuffer();
          const fileName = `lexend-latin-${index++}.woff2`;
          fs.writeFileSync(path.join(fontsDir, fileName), Buffer.from(buffer));
        }
      }
      console.log('Fonts downloaded successfully!');
    }
  } catch (err) {
    console.error('Error fetching font, will use local fallback:', err);
  }
}

async function main() {
  await processImages();
  await fetchFont();
}

main();
