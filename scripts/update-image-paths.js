#!/usr/bin/env node

/**
 * Script to update all project files with getImagePath helper
 * This fixes GitHub Pages base URL issues for images and assets
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECTS_DIR = path.join(__dirname, '..', 'src', 'content', 'projects');
const IMPORT_STATEMENT = "import { getImagePath } from '@/utils';";

function updateProjectFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Skip if already has the import
  if (content.includes("import { getImagePath }")) {
    console.log(`⏭️  Skipping ${path.basename(filePath)} - already updated`);
    return false;
  }

  // Add import after the first import statement
  const importRegex = /^(import .+ from .+;)$/m;
  const match = content.match(importRegex);
  
  if (match) {
    const firstImport = match[0];
    content = content.replace(firstImport, `${firstImport}\n${IMPORT_STATEMENT}`);
    modified = true;
  }

  // Update image paths
  content = content.replace(
    /image:\s*["'](\/.+?)["']/g,
    (match, pathStr) => {
      modified = true;
      return `image: getImagePath('${pathStr}')`;
    }
  );

  // Update demoUrl paths
  content = content.replace(
    /demoUrl:\s*["'](\/.+?)["']/g,
    (match, pathStr) => {
      modified = true;
      return `demoUrl: getImagePath('${pathStr}')`;
    }
  );

  // Update projectUrl paths
  content = content.replace(
    /projectUrl:\s*["'](\/.+?)["']/g,
    (match, pathStr) => {
      modified = true;
      return `projectUrl: getImagePath('${pathStr}')`;
    }
  );

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${path.basename(filePath)}`);
    return true;
  } else {
    console.log(`⏭️  No changes needed for ${path.basename(filePath)}`);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let updatedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      updatedCount += processDirectory(filePath);
    } else if (file.endsWith('.ts') && !file.includes('.test.') && !file.includes('.spec.')) {
      if (updateProjectFile(filePath)) {
        updatedCount++;
      }
    }
  }

  return updatedCount;
}

// Main execution
console.log('🚀 Starting project files update...\n');
const totalUpdated = processDirectory(PROJECTS_DIR);
console.log(`\n✨ Complete! Updated ${totalUpdated} file(s).`);
console.log('\n📝 Next steps:');
console.log('   1. Review the changes with git diff');
console.log('   2. Run: npm run build:staging');
console.log('   3. Run: npm run deploy:manual');
