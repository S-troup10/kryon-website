const fs = require('fs');
const path = require('path');
// Simple heuristic improvements: increase hero padding, bump font-weight, improve button radius
const cssPath = path.join(__dirname, '..', 'styles.v1.css');
let css = fs.readFileSync(cssPath, 'utf8');
css = css.replace(/--accent:#ff6b6b/, '--accent:#ff5a5f');
css = css.replace(/padding:80px 0/, 'padding:100px 0');
css = css.replace(/border-radius:10px/g, 'border-radius:12px');
css = css.replace(/font-weight:600/g, 'font-weight:700');
fs.writeFileSync(cssPath, css, 'utf8');

// Append short changelog summary
const logPath = path.join(__dirname, '..', 'AUTO_IMPROVE_LOG.md');
const now = new Date().toISOString();
const summary = `${now} — tweak: increased hero padding, stronger CTA colour, bumped weights\n`;
fs.appendFileSync(logPath, summary);
console.log(summary);
