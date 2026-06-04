import fs from 'fs';

let content = fs.readFileSync('./components/Header.tsx', 'utf8');
content = content.replace('style={{ padding: "16px 40px" }}', 'style={{ padding: "16px clamp(15px, 5vw, 40px)" }}');
content = content.replace('padding: "20px 40px"', 'padding: "20px clamp(15px, 5vw, 40px)"');
fs.writeFileSync('./components/Header.tsx', content);

content = fs.readFileSync('./components/Footer.tsx', 'utf8');
content = content.replace('padding: "clamp(30px, 5vw, 40px) max(20px, 8%)"', 'padding: "clamp(30px, 5vw, 40px) clamp(15px, 5vw, 8%)"'); 
fs.writeFileSync('./components/Footer.tsx', content);
