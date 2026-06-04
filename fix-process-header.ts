import fs from 'fs';

function forceCenterItems(filePath: string) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Specifically handle Process
    content = content.replace(/className="w-full flex flex-col md:flex-row gap-16 md:gap-24 items-start"/g, 'className="flex flex-col md:flex-row gap-16 md:gap-24 items-start" style={{ width: "100%", maxWidth: "1152px", margin: "0 auto" }}');
    
    // Specifically handle Header inside the sticky block
    content = content.replace(/className="w-full flex items-center justify-between"\s*style={{ padding: "16px clamp\(15px, 5vw, 40px\)" }}/g, 'className="w-full flex items-center justify-between" style={{ width: "100%", maxWidth: "1152px", margin: "0 auto", padding: "16px clamp(15px, 5vw, 40px)" }}');
    
    fs.writeFileSync(filePath, content);
}

forceCenterItems('./components/Process.tsx');
forceCenterItems('./components/Header.tsx');

console.log('Restored max width correctly');
