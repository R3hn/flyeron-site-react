import fs from 'fs';

function addWFull(filePath: string) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/className="max-w-6xl mx-auto flex flex-col md:flex-row/g, 'className="w-full max-w-6xl mx-auto flex flex-col md:flex-row');
    content = content.replace(/className="max-w-6xl mx-auto flex items-center/g, 'className="w-full max-w-6xl mx-auto flex items-center');
    fs.writeFileSync(filePath, content);
}

addWFull('./components/Process.tsx');
addWFull('./components/Header.tsx');
console.log('Added w-full to Process and Header');
