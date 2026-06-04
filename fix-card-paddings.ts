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
            content = content.replace(/padding:\s*"40px"/g, 'padding: "clamp(20px, 5vw, 40px)"');
            content = content.replace(/padding:\s*"40px 30px 40px 30px"/g, 'padding: "clamp(20px, 5vw, 40px) clamp(15px, 5vw, 30px)"');
            content = content.replace(/padding:\s*"32px"/g, 'padding: "clamp(20px, 5vw, 32px)"');
            if(content !== initial) fs.writeFileSync(dirPath, content);
        }
    });
}
walk('./components');
console.log("Card inner paddings adjusted");
