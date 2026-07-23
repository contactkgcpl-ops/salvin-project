const fs = require('fs');

const files = [
  'src/pages/TurnkeyProject/components/ProteinBarManufacturingDetailPage.jsx',
  'src/pages/TurnkeyProject/components/InstantMixFrozenFoodDetailPage.jsx',
  'src/pages/TurnkeyProject/components/MayonnaiseProcessingDetailPage.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('import SEO from')) {
    const lines = content.split('\n');
    lines.splice(4, 0, "import SEO from '../../../components/SEO';");
    fs.writeFileSync(file, lines.join('\n'));
    console.log('Added to', file);
  } else {
    console.log('Already exists in', file);
  }
});
