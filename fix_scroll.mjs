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

    const targetBlock = `start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true`;
    
    const targetBlock2 = `start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,`;

    const replacement = `start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
        pin: false`;
        
    const replacement2 = `start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
        pin: false,`;

    if (content.includes(targetBlock2)) {
      content = content.replace(targetBlock2, replacement2);
      changed = true;
    } else if (content.includes(targetBlock)) {
      content = content.replace(targetBlock, replacement);
      changed = true;
    }

    // For OrbitScrollSection and others
    if (content.includes('pin: true')) {
        content = content.replace(/pin:\s*true/g, 'pin: false');
        changed = true;
    }

    if (content.includes('scrub: 0.5')) {
      // It's already smooth but let's just make sure pin is off
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  }
};

dirs.forEach(processDir);
console.log('Done.');
