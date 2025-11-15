// AdSense Implementation Validation Script
const fs = require('fs');
const path = require('path');

// Check if all AdSense components have been replaced with placeholders
const componentsDir = path.join(__dirname, 'src', 'components');
const pagesDir = path.join(__dirname, 'src', 'pages');

console.log('🔍 Validating AdSense Implementation...\n');

// Check AdSense components
const adComponents = ['AdSenseAd.tsx', 'GoogleAdSense.tsx'];
let allValid = true;

adComponents.forEach(component => {
  const componentPath = path.join(componentsDir, component);
  if (fs.existsSync(componentPath)) {
    const content = fs.readFileSync(componentPath, 'utf8');
    if (content.includes('window.adsbygoogle') || content.includes('push(')) {
      console.log(`❌ ${component} still contains active AdSense code`);
      allValid = false;
    } else if (content.includes('Advertisement') && content.includes('placeholder')) {
      console.log(`✅ ${component} correctly replaced with placeholder`);
    } else {
      console.log(`⚠️  ${component} - unable to verify implementation`);
      allValid = false;
    }
  } else {
    console.log(`⚠️  ${component} not found`);
    allValid = false;
  }
});

// Check pages for removed imports
const pages = ['Home.tsx', 'Articles.tsx'];
pages.forEach(page => {
  const pagePath = path.join(pagesDir, page);
  if (fs.existsSync(pagePath)) {
    const content = fs.readFileSync(pagePath, 'utf8');
    if (content.includes('import GoogleAdSense')) {
      console.log(`❌ ${page} still imports GoogleAdSense`);
      allValid = false;
    } else {
      console.log(`✅ ${page} correctly removed AdSense imports`);
    }
  }
});

// Check policy documents
const policyDocs = ['Privacy.tsx', 'Terms.tsx', 'Disclaimer.tsx'];
policyDocs.forEach(doc => {
  const docPath = path.join(pagesDir, doc);
  if (fs.existsSync(docPath)) {
    const content = fs.readFileSync(docPath, 'utf8');
    if (content.includes('Google AdSense') && !content.includes('advertising partners')) {
      console.log(`❌ ${doc} still mentions Google AdSense specifically`);
      allValid = false;
    } else if (content.includes('advertising partners') || content.includes('third-party advertisers')) {
      console.log(`✅ ${doc} correctly updated to generic advertising`);
    } else {
      console.log(`⚠️  ${doc} - unable to verify policy updates`);
      allValid = false;
    }
  }
});

// Check for ads.txt
const adsTxtPath = path.join(__dirname, 'public', 'ads.txt');
if (fs.existsSync(adsTxtPath)) {
  console.log('✅ ads.txt file created');
} else {
  console.log('❌ ads.txt file missing');
  allValid = false;
}

// Check for robots.txt updates
const robotsTxtPath = path.join(__dirname, 'public', 'robots.txt');
if (fs.existsSync(robotsTxtPath)) {
  const content = fs.readFileSync(robotsTxtPath, 'utf8');
  if (content.includes('Mediapartners-Google')) {
    console.log('✅ robots.txt updated for AdSense crawlers');
  } else {
    console.log('❌ robots.txt not updated for AdSense crawlers');
    allValid = false;
  }
} else {
  console.log('❌ robots.txt file missing');
  allValid = false;
}

console.log('\n--- Validation Summary ---');
if (allValid) {
  console.log('✅ All checks passed! Your site is ready for AdSense application.');
  console.log('\nNext steps:');
  console.log('1. Publish your site to a live domain');
  console.log('2. Apply for Google AdSense');
  console.log('3. Once approved, replace placeholder components with actual AdSense code');
  console.log('4. Update ads.txt with your real publisher ID');
} else {
  console.log('❌ Some issues found. Please review the validation results above.');
}