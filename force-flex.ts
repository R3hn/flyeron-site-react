import fs from 'fs';

function forceFlex(filePath: string) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Completely rewrite the container for Method, Differentials, Testimonials
    content = content.replace(/className="w-full grid grid-cols-1 md:grid-cols-3 gap-6"/g, 'style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px", width: "100%", maxWidth: "1200px", margin: "0 auto" }}');
    
    // Also cover the case where we might have just w-full or other variations from previous script
    content = content.replace(/className="w-full"/g, 'style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px", width: "100%", maxWidth: "1200px", margin: "0 auto" }}');
    
    fs.writeFileSync(filePath, content);
}

forceFlex('./components/Method.tsx');
forceFlex('./components/Differentials.tsx');
forceFlex('./components/Testimonials.tsx');

console.log('Forced flex center on grids');
