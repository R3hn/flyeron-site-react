import fs from 'fs';
import path from 'path';

const files = [
    './app/globals.css',
    './app/page.tsx',
    './app/layout.tsx'
];

for (let filepath of files) {
    if (!fs.existsSync(filepath)) continue;
    let content = fs.readFileSync(filepath, 'utf8');
    
    // Backgrounds
    content = content.replace(/#0D0D0D/ig, '#0E296B');
    content = content.replace(/#131313/ig, '#12307A'); 
    content = content.replace(/#111111/ig, '#12307A'); 
    content = content.replace(/#111/g, '#12307A'); 
    content = content.replace(/#1a1a1a/ig, '#153689'); 
    content = content.replace(/#1f1f1f/ig, '#1A42A8'); 
    
    // Accents
    content = content.replace(/#D95032/ig, '#C1D9E0'); 
    content = content.replace(/rgba\(217,\s*80,\s*50/ig, 'rgba(193, 217, 224'); // Light blue RGB
    
    fs.writeFileSync(filepath, content);
}
console.log("Replaced colors in app files");

