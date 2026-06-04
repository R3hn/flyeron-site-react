import fs from 'fs';

const files = [
  './components/FAQ.tsx',
  './components/Services.tsx',
  './components/Differentials.tsx',
  './components/About.tsx'
];

for(const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/color:\s*"#C1D9E0"/g, 'color: "#FFFFFF"');
  fs.writeFileSync(file, content);
}
console.log("Done");
