import fs from 'fs';
import path from 'path';

function processFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    
    // Use regex to find h2 and h3 elements with color: "#C1D9E0" and replace with "#FFFFFF"
    // Also matching <h1, <h2, <h3, <h4, <h5, <h6, <p and so on only if they are obviously titles? 
    // Let's just find `color: "#C1D9E0"` inside `<h2...` and `<h3...` and `<h4...` blocks.
    
    // Instead of complex parsing, let's just do a string replacement on lines containing <h2, <h3, <h4 and color: "#C1D9E0"
    let lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        if ((lines[i].includes('<h2') || lines[i].includes('<h3') || lines[i].includes('<h4') || lines[i].includes('<h1')) && lines[i].includes('#C1D9E0')) {
            lines[i] = lines[i].replace(/#C1D9E0/g, '#FFFFFF');
        }
    }
    content = lines.join('\n');
    
    fs.writeFileSync(filepath, content);
}

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (f === 'node_modules' || f === '.next') return;
        if (fs.statSync(dirPath).isDirectory()) walk(dirPath, callback);
        else if (f.endsWith('.tsx')) callback(dirPath);
    });
}

walk('./components', processFile);
walk('./app', processFile);

// For globals.css, just replace it in .section-title
let cssContent = fs.readFileSync('./app/globals.css', 'utf8');
cssContent = cssContent.replace(/\.section-title\s*{[^}]*color:\s*#C1D9E0;[^}]*}/, match => match.replace('#C1D9E0', '#FFFFFF'));
fs.writeFileSync('./app/globals.css', cssContent);

console.log("Done replacing title colors");
