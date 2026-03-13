const fs = require('fs');
const path = require('path');
// Aggression levels: early runs = bold changes; later runs = fine tuning
const cssPath = path.join(__dirname, '..', 'styles.v1.css');
const logPath = path.join(__dirname, '..', 'AUTO_IMPROVE_LOG.md');

function readRunCount() {
  try {
    const txt = fs.existsSync(logPath) ? fs.readFileSync(logPath, 'utf8') : '';
    return txt.split('\n').filter(Boolean).length;
  } catch (e) { return 0; }
}

const runs = readRunCount();
const aggression = runs < 8 ? 'high' : (runs < 24 ? 'medium' : 'low');
let css = fs.readFileSync(cssPath, 'utf8');

if (aggression === 'high') {
  css = css.replace(/--accent:#ff6b6b/, '--accent:#ff3b30');
  css = css.replace(/padding:100px 0/, 'padding:140px 0');
  css = css.replace(/font-weight:700/g, 'font-weight:800');
  css = css.replace(/box-shadow:0 6px 18px rgba\(11,18,32,0.06\)/g, 'box-shadow:0 12px 36px rgba(11,18,32,0.12)');
}
else if (aggression === 'medium') {
  css = css.replace(/--accent:#ff6b6b/, '--accent:#ff5050');
  css = css.replace(/padding:100px 0/, 'padding:110px 0');
  css = css.replace(/font-weight:700/g, 'font-weight:700');
}
else {
  // low: subtle polish
  css = css.replace(/padding:100px 0/, 'padding:104px 0');
}

fs.writeFileSync(cssPath, css, 'utf8');

const now = new Date().toISOString();
const summary = `${now} — ${aggression} tweak applied on run #${runs + 1}\n`;
fs.appendFileSync(logPath, summary);
console.log(summary);
