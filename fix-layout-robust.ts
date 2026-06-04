import fs from 'fs';

function fixGridAndCards(filePath: string) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix container
    content = content.replace(/className="w-full grid grid-cols-1 md:grid-cols-3 gap-6"/g, 'style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", width: "100%", maxWidth: "1152px", margin: "0 auto", justifyContent: "center" }}');
    
    fs.writeFileSync(filePath, content);
}

fixGridAndCards('./components/Method.tsx');
fixGridAndCards('./components/Differentials.tsx');
fixGridAndCards('./components/Testimonials.tsx');

console.log('Fixed grids using auto-fit minmax styles safely');
