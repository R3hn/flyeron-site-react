import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (f === 'node_modules' || f === '.next') return;
        if (fs.statSync(dirPath).isDirectory()) walk(dirPath, callback);
        else if (f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.css')) callback(dirPath);
    });
}

function processFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    
    // Remove variations of dark I created previously, and existing grays
    content = content.replace(/#222222/ig, 'rgba(193, 217, 224, 0.2)'); // subtle borders -> light blue 20%
    content = content.replace(/#222(?=[^0-9a-fA-F])/ig, 'rgba(193, 217, 224, 0.2)'); 
    content = content.replace(/#3b221d/ig, 'rgba(193, 217, 224, 0.2)'); 
    content = content.replace(/#121212/ig, '#0E296B'); // card backgrounds
    content = content.replace(/#1a1a1a/ig, 'rgba(193, 217, 224, 0.2)'); 
    content = content.replace(/#153689/ig, '#085CF0'); // borders I created
    content = content.replace(/#1A42A8/ig, 'rgba(193, 217, 224, 0.05)'); // subtle cards
    content = content.replace(/#12307A/ig, 'rgba(193, 217, 224, 0.05)'); // subtle cards I created

    // Grays -> Light Blue accent for texts/subtitles
    content = content.replace(/#888888/ig, '#C1D9E0'); 
    content = content.replace(/#888(?=[^0-9a-fA-F])/ig, '#C1D9E0'); 
    content = content.replace(/#555(?=[^0-9a-fA-F])/ig, '#C1D9E0');
    content = content.replace(/#666666/ig, '#C1D9E0');
    content = content.replace(/#7A7A7A/ig, '#C1D9E0');
    content = content.replace(/#AAAAAA/ig, '#C1D9E0');
    content = content.replace(/#E0E0E0/ig, '#F2F2F2');
    
    // Any remaining pure black should just be the main dark blue background
    content = content.replace(/#000000/ig, '#0E296B');
    content = content.replace(/#000(?=[^0-9a-fA-F])/ig, '#0E296B');

    fs.writeFileSync(filepath, content);
}

walk('./components', processFile);
walk('./app', processFile);
console.log("Done");
