import fs from 'fs';

function replaceLinks(filePath: string) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace all wa.me links
    content = content.replace(/https:\/\/wa\.me\/message\/FLOCK2MGFGFCO1/g, 'https://api.whatsapp.com/send?phone=558193257368');
    
    // Replace testimonials external URL
    content = content.replace(/https:\/\/flyeron-site\.vercel\.app\/depoimentos\//g, 'https://api.whatsapp.com/send?phone=558193257368');

    // For Hero contact
    if (filePath.includes('Hero.tsx')) {
        content = content.replace(/href="#contato"/g, 'href="https://api.whatsapp.com/send?phone=558193257368" target="_blank" rel="noopener noreferrer"');
    }

    fs.writeFileSync(filePath, content);
}

replaceLinks('./components/Testimonials.tsx');
replaceLinks('./components/Services.tsx');
replaceLinks('./components/FAQ.tsx');
replaceLinks('./components/CTA.tsx');
replaceLinks('./components/Header.tsx');
replaceLinks('./components/Hero.tsx');

console.log('Links replaced');
