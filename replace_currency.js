const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) { 
      results.push(file);
    }
  });
  return results;
}
const files = walk('./src');
let changedCount = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let newContent = content
    // Replace \$ followed by numbers: $50.00 -> ₹50.00
    .replace(/\$([0-9])/g, '₹$1')
    // Replace \$ followed by \$\{ (template literal currency): \$\$\{ -> ₹\$\{
    .replace(/\$\$\{/g, '₹${')
    // Replace Amount ($) or Earnings ($) -> (₹)
    .replace(/\(\$\)/g, '(₹)')
    // Replace \$\{ (Payout: \$ -> (Payout: ₹
    .replace(/Payout: \$/g, 'Payout: ₹');
  
  if (content !== newContent) {
    fs.writeFileSync(f, newContent);
    console.log('Updated: ' + f);
    changedCount++;
  }
});
console.log('Total files changed: ' + changedCount);
