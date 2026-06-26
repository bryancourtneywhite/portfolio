/**
 * check-projects.mjs
 * Run before deploying to validate all project content files are consistent.
 * Usage: node scripts/check-projects.mjs
 */

import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

const PROJECTS_DIR = './src/content/projects';

async function checkProjects() {
  const files = await readdir(PROJECTS_DIR);
  const mdFiles = files.filter((f) => f.endsWith('.md'));

  console.log(`\nChecking ${mdFiles.length} project files...\n`);

  let warnings = 0;
  let errors = 0;

  for (const file of mdFiles) {
    const content = await readFile(join(PROJECTS_DIR, file), 'utf-8');
    const name = file.replace('.md', '');

    // Extract frontmatter
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) {
      console.error(`❌  ${file}: No frontmatter found`);
      errors++;
      continue;
    }

    const fm = fmMatch[1];
    const status = fm.match(/status:\s*"?([^"\n]+)"?/)?.[1]?.trim();
    const github = fm.match(/github:\s*"([^"]+)"/)?.[1];
    const title = fm.match(/title:\s*"([^"]+)"/)?.[1];

    const isPlaceholderGithub = github?.includes('yourusername');

    console.log(`📄  ${name}`);
    console.log(`    title:  ${title}`);
    console.log(`    status: ${status}`);
    console.log(`    github: ${github}`);

    // Warn if status is complete but github still has placeholder
    if (status === 'complete' && isPlaceholderGithub) {
      console.warn(`    ⚠️  Status is "complete" but GitHub URL is still a placeholder!`);
      warnings++;
    }

    // Warn if in-progress and no real github repo yet
    if (status === 'in-progress' && isPlaceholderGithub) {
      console.warn(`    ⚠️  Status is "in-progress" — remember to create the GitHub repo and update the URL.`);
      warnings++;
    }

    if (status === 'complete' && !isPlaceholderGithub) {
      console.log(`    ✅  Complete and linked to GitHub`);
    }

    console.log('');
  }

  console.log('─'.repeat(50));
  if (errors > 0) {
    console.error(`\n❌  ${errors} error(s) found — fix before deploying.`);
    process.exit(1);
  }
  if (warnings > 0) {
    console.warn(`\n⚠️   ${warnings} warning(s) — review before deploying.`);
  } else {
    console.log('\n✅  All projects look good!');
  }
}

checkProjects().catch(console.error);
