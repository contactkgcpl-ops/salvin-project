const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'src/pages/TurnkeyProject/components');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract title and description from document.title and metaDesc
  const titleMatch = content.match(/document\.title\s*=\s*['"](.*?)['"]/);
  const descMatch = content.match(/metaDesc\.setAttribute\('content',\s*['"](.*?)['"]\)/);
  
  if (!titleMatch && !descMatch && !content.includes('TurnkeyDetailPage')) {
    console.log(`Skipping (no title/desc found): ${path.basename(filePath)}`);
    return;
  }

  const title = titleMatch ? titleMatch[1] : '';
  const desc = descMatch ? descMatch[1] : '';

  // Remove the manual document.title and metaDesc logic
  content = content.replace(/document\.title\s*=\s*['"].*?['"]\s*;?\s*/g, '');
  content = content.replace(/const metaDesc = document\.querySelector\('meta\[name="description"\]'\)\s*;?\s*/g, '');
  content = content.replace(/if \(metaDesc\) metaDesc\.setAttribute\('content',\s*['"].*?['"]\)\s*;?\s*/g, '');

  // If there's an empty SEO meta comment, remove it
  content = content.replace(/\/\/ SEO meta \(separate from scroll to avoid coupling with re-renders\)\s*useEffect\(\(\) => \{\s*\}\, \[\]\)\s*/g, '');

  // Add SEO import if not present
  if (!content.includes('import SEO from')) {
    content = content.replace(/(import React.*?)\n/, `$1\nimport SEO from '../../../components/SEO';\n`);
  }

  // Insert <SEO> right after the first return (
  // We'll look for `return (` followed by `<div className="...-page">`
  const returnRegex = /(return\s*\(\s*<div className=".*?-page">)/;
  
  if (!content.match(returnRegex)) {
    console.log(`Could not find return block for: ${path.basename(filePath)}`);
    return;
  }
  
  if (!content.includes('<SEO title=')) {
      content = content.replace(returnRegex, `$1\n      <SEO \n        title="${title}"\n        description="${desc}"\n      />`);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Processed: ${path.basename(filePath)}`);
  } else {
      console.log(`Already has SEO: ${path.basename(filePath)}`);
  }
}

const files = fs.readdirSync(dirPath).filter(f => f.endsWith('DetailPage.jsx') && f !== 'TurnkeyDetailPage.jsx');

files.forEach(file => {
  processFile(path.join(dirPath, file));
});

console.log("Done processing specific detail pages.");

// For TurnkeyDetailPage.jsx (which is dynamic)
const turnkeyPath = path.join(dirPath, 'TurnkeyDetailPage.jsx');
let turnkeyContent = fs.readFileSync(turnkeyPath, 'utf8');
if (!turnkeyContent.includes('import SEO from')) {
    turnkeyContent = turnkeyContent.replace(/(import React.*?)\n/, `$1\nimport SEO from '../../../components/SEO';\n`);
}
if (!turnkeyContent.includes('<SEO title=')) {
    const returnRegex = /(return\s*\(\s*<div className="rcp-page">)/;
    turnkeyContent = turnkeyContent.replace(returnRegex, `$1\n      <SEO \n        title={\`\${details.title} | Salvin Projects\`} \n        description={details.seoDescription || details.overview?.description[0]} \n      />`);
    
    // Also remove the manual title logic
    turnkeyContent = turnkeyContent.replace(/useEffect\(\(\) => \{\s*if \(details\) \{\s*document\.title = `\$\{details\.title\} .*?`;\s*\}\s*\}, \[details\]\);\s*/, '');
    
    fs.writeFileSync(turnkeyPath, turnkeyContent, 'utf8');
    console.log(`Processed: TurnkeyDetailPage.jsx`);
}
