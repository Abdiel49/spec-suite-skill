#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

async function main() {
  const targetDir = path.join(process.cwd(), '.agents', 'skills', 'spec-suite');
  const sourceDir = path.resolve(__dirname, '..');

  try {
    console.log('📦 Installing Spec Suite Skill...');
    
    // Create target directory if it does not exist
    await fs.ensureDir(targetDir);

    // Copy SKILL.md
    await fs.copy(path.join(sourceDir, 'SKILL.md'), path.join(targetDir, 'SKILL.md'));
    
    // Copy references folder if it exists
    const refSource = path.join(sourceDir, 'references');
    if (await fs.pathExists(refSource)) {
      await fs.copy(refSource, path.join(targetDir, 'references'));
    }

    console.log(`✅ Successfully installed in: .agents/skills/spec-suite/!`);
  } catch (error) {
    console.error('❌ Error installing the skill:', error.message);
    process.exit(1);
  }
}

main();
