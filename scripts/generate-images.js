const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Create the images directory if it doesn't exist
async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

// Generate a Gothic-themed image for the story
async function generateStoryImage(outputPath, width, height, text = '') {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="crimsonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2c1810;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#8b1538;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
        </linearGradient>
        <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#d4af37;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#8b1538;stop-opacity:0.8" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#crimsonGrad)"/>
      <circle cx="${width/2}" cy="${height/2}" r="${Math.min(width, height)/3}" fill="url(#shadowGrad)" opacity="0.7"/>
      <path d="M${width/2-50},${height/2-30} L${width/2},${height/2-60} L${width/2+50},${height/2-30} L${width/2+30},${height/2} L${width/2+50},${height/2+30} L${width/2},${height/2+60} L${width/2-50},${height/2+30} L${width/2-30},${height/2} Z" 
            fill="#d4af37" opacity="0.8" stroke="#8b1538" stroke-width="2"/>
      ${text ? `<text x="${width/2}" y="${height/2+10}" text-anchor="middle" fill="#d4af37" font-family="serif" font-size="24" font-weight="bold">${text}</text>` : ''}
    </svg>
  `;
  
  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);
}

// Generate favicon variants
async function generateFavicons() {
  await ensureDir('./static/img');
  
  // Generate the main logo/social card
  await generateStoryImage('./static/img/crimson-shadows-social.png', 1200, 630, 'CS');
  console.log('✓ Generated social card');
  
  // Generate various favicon sizes
  const faviconSvg = `
    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#8b1538;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#d4af37;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" fill="url(#grad)" rx="6"/>
      <path d="M8,12 L16,6 L24,12 L20,16 L24,20 L16,26 L8,20 L12,16 Z" 
            fill="#ffffff" opacity="0.9"/>
    </svg>
  `;
  
  // Generate different favicon sizes
  const sizes = [16, 32, 192, 512];
  for (const size of sizes) {
    await sharp(Buffer.from(faviconSvg.replace(/width="32" height="32"/g, `width="${size}" height="${size}"`)))
      .png()
      .toFile(`./static/img/favicon-${size}.png`);
  }
  
  // Generate ICO favicon
  await sharp(Buffer.from(faviconSvg))
    .resize(32, 32)
    .png()
    .toFile('./static/img/favicon.png');
  
  console.log('✓ Generated favicons');
}

// Generate hero images for different story parts
async function generateHeroImages() {
  await ensureDir('./static/img');
  
  const parts = [
    { name: 'awakening', colors: ['#2c1810', '#8b1538'], title: 'The Awakening' },
    { name: 'temptation', colors: ['#8b1538', '#d4af37'], title: 'Temptation' },
    { name: 'shadows', colors: ['#1a1a1a', '#4a4a4a'], title: 'Shadows Unveiled' },
    { name: 'reckoning', colors: ['#8b1538', '#2c1810'], title: 'The Reckoning' }
  ];
  
  for (const part of parts) {
    const svg = `
      <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${part.name}Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${part.colors[0]};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${part.colors[1]};stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#${part.name}Grad)"/>
        <circle cx="200" cy="200" r="80" fill="#d4af37" opacity="0.3"/>
        <circle cx="600" cy="200" r="60" fill="#ffffff" opacity="0.2"/>
        <text x="400" y="220" text-anchor="middle" fill="#d4af37" font-family="serif" font-size="36" font-weight="bold">${part.title}</text>
      </svg>
    `;
    
    await sharp(Buffer.from(svg))
      .png()
      .toFile(`./static/img/hero-${part.name}.png`);
  }
  
  console.log('✓ Generated hero images');
}

async function main() {
  try {
    console.log('🎨 Generating Crimson Shadows images...');
    await generateFavicons();
    await generateHeroImages();
    console.log('✨ All images generated successfully!');
  } catch (error) {
    console.error('❌ Error generating images:', error);
  }
}

main();
