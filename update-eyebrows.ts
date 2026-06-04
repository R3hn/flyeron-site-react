import fs from 'fs';

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

const targetStyleCTA = `style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#C1D9E0",
            textAlign: "center",
            marginBottom: "10px",
          }}`;

const files = [
  './components/FAQ.tsx',
  './components/Services.tsx',
  './components/Differentials.tsx',
  './components/About.tsx',
  './components/Method.tsx',
  './components/Cases.tsx',
  './components/CTA.tsx'
];

for(const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  if(file.includes('FAQ.tsx')) {
    content = content.replace(/<p\s+style={{[^}]+}}\s*>\s*Perguntas frequentes\s*<\/p>/m, `<p\n        ${targetStyle}\n      >\n        Perguntas frequentes\n      </p>`);
  }
  if(file.includes('Services.tsx')) {
    content = content.replace(/<p\s+style={{[^}]+}}\s*>\s*Nosso negócio é fazer o seu decolar\s*<\/p>/m, `<p\n        ${targetStyle}\n      >\n        Nosso negócio é fazer o seu decolar\n      </p>`);
  }
  if(file.includes('Differentials.tsx')) {
    content = content.replace(/<p\s+style={{[^}]+}}\s*>\s*Por que a Flyer On\?\s*<\/p>/m, `<p\n        ${targetStyle}\n      >\n        Por que a Flyer On?\n      </p>`);
  }
  if(file.includes('About.tsx')) {
    content = content.replace(/<p\s+style={{[^}]+}}\s*>\s*O que nos inspira a decolar ideias brilhantes\.\s*<\/p>/m, `<p\n        ${targetStyle}\n      >\n        O que nos inspira a decolar ideias brilhantes.\n      </p>`);
  }
  if(file.includes('Method.tsx')) {
    content = content.replace(/<p\s+style={{[^}]+}}\s*>\s*Método Flyer On\s*<\/p>/m, `<p\n        ${targetStyle}\n      >\n        Método Flyer On\n      </p>`);
  }
  if(file.includes('Cases.tsx')) {
    content = content.replace(/<p\s+style={{[^}]+}}\s*>\s*Casos de sucesso\s*<\/p>/m, `<p\n        ${targetStyle}\n      >\n        Casos de sucesso\n      </p>`);
  }
  if(file.includes('CTA.tsx')) {
    content = content.replace(/<p\s+style={{[^}]+}}\s*>\s*Pronto para começar\?\s*<\/p>/m, `<p\n        ${targetStyleCTA}\n      >\n        Pronto para começar?\n      </p>`);
  }

  fs.writeFileSync(file, content);
}
console.log("Updated eyebrows");
