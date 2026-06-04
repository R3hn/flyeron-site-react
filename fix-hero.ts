import fs from 'fs';

let heroContent = fs.readFileSync('./components/Hero.tsx', 'utf8');

heroContent = heroContent.replace('backgroundSize: "100% auto",', 'backgroundSize: "cover",');
heroContent = heroContent.replace('backgroundPosition: "top center",', 'backgroundPosition: "center",');
heroContent = heroContent.replace('margin: "10px 0 20px -25px"', 'margin: "10px 0 20px 0px"');

fs.writeFileSync('./components/Hero.tsx', heroContent);

console.log("Hero layout improved.");
