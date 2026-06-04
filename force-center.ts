import fs from 'fs';

function forceCenter(filePath: string) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Convert className grids to style width/marginal rules
    content = content.replace(/className="w-full max-w-6xl mx-auto /g, 'style={{ width: "100%", maxWidth: "1152px", margin: "0 auto" }} className="');
    
    // Process and Header had `w-full max-w-6xl mx-auto ` (some with trailing properties)
    content = content.replace(/className="w-full max-w-6xl mx-auto"/g, 'style={{ width: "100%", maxWidth: "1152px", margin: "0 auto" }}');
    
    fs.writeFileSync(filePath, content);
}

const files = [
    './components/Method.tsx',
    './components/Differentials.tsx',
    './components/Testimonials.tsx',
    './components/Process.tsx',
    './components/Header.tsx',
    './components/Footer.tsx',
    './components/Hero.tsx',
    './components/About.tsx',
    './components/Cases.tsx',
    './components/FAQ.tsx',
    './components/CTA.tsx',
    './components/Services.tsx'
];

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    // For specific known patterns in Hero, Footer, Services:
    content = content.replace(/className="max-w-6xl mx-auto/g, 'style={{ width: "100%", maxWidth: "1152px", margin: "0 auto" }} className="');
    content = content.replace(/className="w-full max-w-6xl mx-auto/g, 'style={{ width: "100%", maxWidth: "1152px", margin: "0 auto" }} className="');
    content = content.replace(/className=" "/g, '');
    content = content.replace(/className=""/g, '');
    fs.writeFileSync(f, content);
});

console.log('Forced center blocks');
