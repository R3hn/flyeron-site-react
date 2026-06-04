import fs from 'fs';
import path from 'path';

const targetStyle = `style={{
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          fontSize: 14,
          fontWeight: 400,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "#C1D9E0",
          marginBottom: "10px",
        }}`;

function processFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');

    // Matches <p style={{ ... }}> \n text \n </p>
    const regex = /<p\s+style=\{\{[^}]+\}\}\s*>\s*([^<]+)\s*<\/p>\s*<h[2-6]/g;
    
    content = content.replace(regex, (match, text) => {
        // Only replace if it's acting like an eyebrow (titles usually short)
        if (text.length > 60) return match; // skip long paragraphs
        if (text.trim() === "Soluções completas de marketing digital testadas e validadas para") return match;
        
        return `<p\n        ${targetStyle}\n      >\n        ${text.trim()}\n      </p>\n      <h2`;
    });

    // Handle Cases.tsx if it doesn't have an h2 right after or maybe something else?
    // Let's do another regex just for `<p style={{...}}>\s*Text\s*</p>` if Text matches known eyebrows
    const knownEyebrows = [
        "Sobre a Flyer On",
        "Por que a Flyer On",
        "Casos de sucesso",
        "Pronto para começar?",
        "Perguntas frequentes",
        "Marcas que confiam na Flyer On",
        "Como trabalhamos",
        "Depoimentos",
        "Método Flyer On"
    ];

    knownEyebrows.forEach(eyebrow => {
        const titleRegex = new RegExp(`<p\\s+style=\\{\\{[^\\}]+\\}\\}\\s*>\\s*${eyebrow}\\s*<\\/p>`, 'g');
        content = content.replace(titleRegex, `<p\n        ${targetStyle}\n      >\n        ${eyebrow}\n      </p>`);
    });

    fs.writeFileSync(filepath, content);
}

function walk(dir) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (f === 'node_modules' || f === '.next') return;
        if (fs.statSync(dirPath).isDirectory()) walk(dirPath);
        else if (f.endsWith('.tsx')) processFile(dirPath);
    });
}

walk('./components');
console.log("Updated all eyebrow titles to the target style");
