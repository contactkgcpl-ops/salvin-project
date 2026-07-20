const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            content = content.replace(/<img([\s\S]*?)>/g, (match, p1) => {
                if (!p1.includes('alt=')) {
                    modified = true;
                    let altText = "Salvin Projects - Industrial Engineering";
                    const srcMatch = p1.match(/src=\{?['"]([^'"}]+)/);
                    if (srcMatch) {
                        let filename = path.basename(srcMatch[1]).split('.')[0];
                        // clean up random hashes if any
                        filename = filename.split('-')[0];
                        if (filename && filename.length > 2) {
                            altText = filename.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                            altText += " Equipment by Salvin Projects";
                        }
                    }
                    
                    // Add alt= before the closing slash or bracket
                    if (p1.endsWith('/')) {
                        return `<img${p1.slice(0, -1)} alt="${altText}" />`;
                    }
                    return `<img${p1} alt="${altText}">`;
                }
                return match;
            });
            
            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Added alt tags to: ${fullPath}`);
            }
        }
    }
}

processDir(path.join(__dirname, 'src'));
