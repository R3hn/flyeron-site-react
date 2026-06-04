import fs from 'fs';

const files = [
  './components/About.tsx',
  './components/CTA.tsx',
  './components/Cases.tsx',
  './components/Differentials.tsx',
  './components/FAQ.tsx',
  './components/Footer.tsx',
  './components/Header.tsx',
  './components/Hero.tsx',
  './components/Method.tsx',
  './components/Partners.tsx',
  './components/Process.tsx',
  './components/Services.tsx',
  './components/Testimonials.tsx',
];

for(const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Let's replace fixed large paddings in style strings to be smaller padding via classNames or just change the style values to use CSS variables/clamp.
  // Actually, replacing `padding: "50px 100px 70px 100px"` with `padding: "clamp(40px, 8vw, 70px) clamp(20px, 5vw, 100px)"` could solve all responsive issues.

  content = content.replace(/padding:\s*"50px 100px 70px 100px"/g, 'padding: "clamp(40px, 8vw, 70px) clamp(20px, 5vw, 100px)"');
  content = content.replace(/padding:\s*"50px 100px 0 100px"/g, 'padding: "clamp(40px, 8vw, 50px) clamp(20px, 5vw, 100px) 0 clamp(20px, 5vw, 100px)"');
  content = content.replace(/padding:\s*"100px 20px"/g, 'padding: "clamp(60px, 10vw, 100px) 20px"');
  content = content.replace(/padding:\s*"80px 100px"/g, 'padding: "clamp(50px, 10vw, 80px) clamp(20px, 5vw, 100px)"');
  content = content.replace(/padding:\s*"80px 5%"/g, 'padding: "clamp(50px, 10vw, 80px) 5%"');
  content = content.replace(/padding:\s*"40px 100px"/g, 'padding: "clamp(30px, 5vw, 40px) clamp(20px, 5vw, 100px)"');
  content = content.replace(/padding:\s*"0 40px"/g, 'padding: "0 clamp(20px, 5vw, 40px)"');
  content = content.replace(/padding:\s*"40px 8%"/g, 'padding: "clamp(30px, 5vw, 40px) max(20px, 8%)"');
  content = content.replace(/padding:\s*"40px 80px"/g, 'padding: "clamp(30px, 5vw, 40px) clamp(20px, 5vw, 80px)"');
  content = content.replace(/padding:\s*"3% 10% 8% 10%"/g, 'padding: "clamp(40px, 5vw, 60px) clamp(20px, 8vw, 10%)"');
  content = content.replace(/padding:\s*"0 40px 30px 40px"/g, 'padding: "0 clamp(20px, 5vw, 40px) 30px clamp(20px, 5vw, 40px)"');

  // Also adjust sizes like width: 480 -> width: "100%", maxWidth: 480 for mobile responsiveness.
  // We can do this file by file or with broader regex.
  fs.writeFileSync(file, content);
}
console.log("Padding replacements done.");
