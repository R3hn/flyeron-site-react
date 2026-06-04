import fs from 'fs';

function addWFull(filePath: string) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/maxWidth: "1200px", margin: "0 auto"/g, 'width: "100%", maxWidth: "1200px", margin: "0 auto"');
    fs.writeFileSync(filePath, content);
}

addWFull('./components/Cases.tsx');
addWFull('./components/FAQ.tsx');
console.log('Added width: 100% to Cases and FAQ wraps');
