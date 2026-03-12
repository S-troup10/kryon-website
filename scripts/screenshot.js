const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
(async ()=>{
  const browser = await puppeteer.launch({args:['--no-sandbox','--disable-setuid-sandbox']});
  const page = await browser.newPage();
  const url = 'https://s-troup10.github.io/kryon-website/';
  await page.setViewport({width:1280,height:800});
  await page.goto(url,{waitUntil:'networkidle2',timeout:30000});
  const dir = path.join(__dirname,'..','screenshots'); if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  const name = new Date().toISOString().replace(/[:.]/g,'-') + '.png';
  const out = path.join(dir,name);
  await page.screenshot({path:out, fullPage:true});
  console.log('Saved', out);
  await browser.close();
})();