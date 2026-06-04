import fs from 'fs';

const files = [
  './components/FAQ.tsx',
  './components/Services.tsx',
  './components/Differentials.tsx',
  './components/About.tsx',
  './components/Footer.tsx',
  './components/Process.tsx',
  './components/Testimonials.tsx',
  './components/Method.tsx',
  './components/CTA.tsx'
];

for(const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  // Replaces color: "#C1D9E0" -> "#FFFFFF" only within <h1, <h2, <h3, <h4 blocks up to >
  content = content.replace(/(<h[1-6][^>]*)(color:\s*"#C1D9E0")([^>]*>)/gi, '$1color: "#FFFFFF"$3');
  fs.writeFileSync(file, content);
}
console.log("Done");
