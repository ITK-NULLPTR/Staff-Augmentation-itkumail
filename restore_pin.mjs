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

    const replacement = `start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
        pin: false`;
        
    const replacement2 = `start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
        pin: false,`;

    const targetBlock = `start: "top top",
        end: "+=200%",
        scrub: 1.5,
        pin: true`;
    
    const targetBlock2 = `start: "top top",
        end: "+=200%",
        scrub: 1.5,
        pin: true,`;

    if (content.includes(replacement2)) {
      content = content.replace(replacement2, targetBlock2);
      changed = true;
    } else if (content.includes(replacement)) {
      content = content.replace(replacement, targetBlock);
      changed = true;
    }

    if (content.includes('pin: false')) {
        content = content.replace(/pin:\s*false/g, 'pin: true');
        changed = true;
    }
    
    // Also, if end is "bottom top" with pin: true, let's make it "+=200%" so it has enough scroll distance for the animation.
    // In some components, a simple "bottom top" means 100vh, which is often a bit short. "+=200%" gives 2 viewports.
    // Actually, let's keep it safe. The user's original issue was it wasn't pinning.
    
    // Some lines could still have pin: false
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  }
};

dirs.forEach(processDir);
console.log('Restoration Done.');
