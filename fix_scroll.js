const fs = require('fs');
const path = require('path');

const dirs = [
  'src/components/containers/home',
  'src/components/layout/banner'
];

const processDir = (dir) => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) return;
  
  const files = fs.readdirSync(fullPath);
  for (const file of files) {
    if (!file.endsWith('.tsx')) continue;
    const filePath = path.join(fullPath, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // We'll just replace 'pin: true' with 'pin: false'
    // And 'end: "+=200%"' with 'end: "bottom top"'
    if (content.includes('pin: true')) {
      content = content.replace(/pin:\s*true/g, 'pin: false');
      changed = true;
    }
    if (content.includes('end: "+=200%"')) {
      content = content.replace(/end:\s*"\+=200%"/g, 'end: "bottom top"');
      changed = true;
    }
    if (content.includes('scrub: true')) {
      content = content.replace(/scrub:\s*true/g, 'scrub: 1.5');
      changed = true;
    }
    
    // special cases like OrbitScrollSection
    if (content.includes('end: "bottom+=200% top"')) {
      content = content.replace(/end:\s*"bottom\+=200%\stop"/g, 'end: "bottom top"');
      changed = true;
    }
    
    // Hand.tsx sometimes has scrub: true, pinned etc.
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated: ' + filePath);
    }
  }
};

dirs.forEach(processDir);
console.log('Done.');
