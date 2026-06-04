import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const OUT_DIR = '/tmp/shots';
const CURRENT_URL = process.env.CURRENT_URL || 'http://localhost:4321';
const DESIGNER_URL = process.env.DESIGNER_URL || 'http://127.0.0.1:5188';

// Single-page site: designer Home.tsx ↔ current index.astro
const PAGES = [{ name: 'home', current: '/', designer: '/' }];
const WIDTHS = [1440, 390];

async function shoot(browser, baseUrl, pagePath, width, outName) {
  const context = await browser.newContext({
    viewport: { width, height: width === 1440 ? 900 : 844 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  try {
    await page.goto(baseUrl + pagePath, { waitUntil: 'load', timeout: 30_000 });
    await page.waitForTimeout(1200);
    await page.screenshot({ path: join(OUT_DIR, outName), fullPage: true });
    console.log(`  ✓ ${outName}`);
  } catch (err) {
    console.error(`  ✗ ${outName} — ${err.message}`);
  } finally {
    await context.close();
  }
}

(async () => {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  console.log(`current=${CURRENT_URL}  designer=${DESIGNER_URL}`);
  for (const p of PAGES) {
    for (const w of WIDTHS) {
      await shoot(browser, CURRENT_URL, p.current, w, `current-${p.name}-${w}.png`);
      await shoot(browser, DESIGNER_URL, p.designer, w, `designer-${p.name}-${w}.png`);
    }
  }
  await browser.close();
  console.log('Done.');
})();
