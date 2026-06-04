import fs from 'fs';

function fix(filePath: string) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Method & Differentials & Testimonials
    content = content.replace(/className="w-full grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto"/g, 'className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"');
    content = content.replace(/style={{\s*display:\s*"grid",\s*gap:\s*24,?\s*}}/g, '');
    
    fs.writeFileSync(filePath, content);
}

fix('./components/Method.tsx');
fix('./components/Differentials.tsx');
fix('./components/Testimonials.tsx');

console.log('Fixed grid classes');
