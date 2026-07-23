const fs = require('fs');

const files = [
  'src/pages/TurnkeyProject/components/PastaNoodlesDetailPage.jsx',
  'src/pages/TurnkeyProject/components/PeanutButterDetailPage.jsx',
  'src/pages/TurnkeyProject/components/LiquidGlucoseDetailPage.jsx',
  'src/pages/TurnkeyProject/components/PizzaSauceProcessingDetailPage.jsx',
  'src/pages/TurnkeyProject/components/TomatoKetchupManufacturingDetailPage.jsx',
  'src/pages/TurnkeyProject/components/IndustrialFlourMillingDetailPage.jsx',
  'src/pages/TurnkeyProject/components/EdibleOilProcessingDetailPage.jsx',
  'src/pages/TurnkeyProject/components/WheatFlourProcessingDetailPage.jsx',
  'src/pages/TurnkeyProject/components/CorianderPowderDetailPage.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('import SEO from')) {
    const lines = content.split('\n');
    lines.splice(4, 0, "import SEO from '../../../components/SEO'");
    fs.writeFileSync(file, lines.join('\n'));
    console.log('Added to', file);
  }
});
