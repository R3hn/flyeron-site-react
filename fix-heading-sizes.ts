import fs from 'fs';
import path from 'path';

function walk(dir) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (f === 'node_modules' || f === '.next') return;
        if (fs.statSync(dirPath).isDirectory()) walk(dirPath);
        else if (f.endsWith('.tsx')) {
            let content = fs.readFileSync(dirPath, 'utf8');
            let initial = content;
            content = content.replace(/fontSize:\s*26,/g, 'fontSize: "clamp(20px, 3vw, 26px)",');
            content = content.replace(/fontSize:\s*22,/g, 'fontSize: "clamp(18px, 2vw, 22px)",');
            content = content.replace(/fontSize:\s*20,/g, 'fontSize: "clamp(16px, 2vw, 20px)",');
            content = content.replace(/fontSize:\s*18,/g, 'fontSize: "clamp(15px, 2vw, 18px)",');
            if(content !== initial) fs.writeFileSync(dirPath, content);
        }
    });
}
walk('./components');
console.log("Scaled heading sizes");
