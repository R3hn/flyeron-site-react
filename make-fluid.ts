import fs from 'fs';

function makeFluid(filePath: string) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the style wrapper injected previously
    content = content.replace(/style={{ width: "100%", maxWidth: "1152px", margin: "0 auto" }} className="/g, 'className="w-full ');
    content = content.replace(/style={{ width: "100%", maxWidth: "1152px", margin: "0 auto" }}/g, 'className="w-full"');
    
    // Also strip generic references to max-w-6xl
    content = content.replace(/max-w-6xl mx-auto/g, 'w-full');
    content = content.replace(/className="w-full w-full/g, 'className="w-full');
    
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

files.forEach(f => makeFluid(f));

// For Cases and FAQ specific internal constraint
function fluidCasesFaq(filePath: string) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/maxWidth: "1200px"/g, 'maxWidth: "100%"');
    fs.writeFileSync(filePath, content);
}
fluidCasesFaq('./components/Cases.tsx');
fluidCasesFaq('./components/FAQ.tsx');

console.log('Fully replaced max-width constraints');
