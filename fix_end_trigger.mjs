import fs from 'fs';
import path from 'path';

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

    if (content.includes('end: "bottom top"')) {
        content = content.replace(/end:\s*"bottom top",/g, 'end: "+=200%",');
        changed = true;
    }
    if (content.includes('pin: false')) {
        content = content.replace(/pin:\s*false/g, 'pin: true');
        changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  }
};

dirs.forEach(processDir);
console.log('Finished updating end trigger.');
