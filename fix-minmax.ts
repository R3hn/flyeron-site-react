import fs from 'fs';
import path from 'path';

function walk(dir) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (f === 'node_modules' || f === '.next') return;
        if (fs.statSync(dirPath).isDirectory()) walk(dirPath);
        else if (f.endsWith('.tsx')) {
            let content = fs.readFileSync(dirPath, 'utf8');
            if (content.includes('minmax(320px')) {
                content = content.replace(/minmax\(320px/g, 'minmax(280px');
                fs.writeFileSync(dirPath, content);
            }
            if (content.includes('flex: "1 1 320px"')) {
                content = content.replace(/flex: "1 1 320px"/g, 'flex: "1 1 280px"');
                fs.writeFileSync(dirPath, content);
            }
        }
    });
}
walk('./components');
console.log("Minmax and flex wrap values updated for small screens");
