import fs from 'fs';

function fixGrids(filePath: string) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/className="grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto"/g, 'className="w-full grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto"');
    fs.writeFileSync(filePath, content);
}

fixGrids('./components/Method.tsx');
fixGrids('./components/Differentials.tsx');
fixGrids('./components/Testimonials.tsx');
fixGrids('./components/Cases.tsx');
fixGrids('./components/FAQ.tsx');
fixGrids('./components/Services.tsx');
console.log('Grids updated with w-full');
