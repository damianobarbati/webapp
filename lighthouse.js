import fsp from 'fs/promises';
import puppeteer from 'puppeteer';
import yargs from 'yargs';
import lighthouse from 'lighthouse';

// This port will be used by Lighthouse later. The specific port is arbitrary.
const PORT = 8080;

const main = async (url, argv) => {
  // open tab in browser
  const browser = await puppeteer.launch({
    args: [`--remote-debugging-port=${PORT}`],
    headless: true,
    slowMo: 0,
  });

  // login
  if (argv.login) {
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('input[name="email"]', { visible: true });

    const emailInput = await page.$('input[name="email"]');
    await emailInput.type('bruce.wayne@gmail.com');
    const passwordInput = await page.$('input[type="password"]');
    await passwordInput.type('bruce');
    const submitButton = await page.$('button');
    await submitButton.click();

    await page.waitForNavigation();
    await page.close();
  }

  // run lighthouse on the same tab and same debugging port
  const result = await lighthouse(url, {
    port: PORT,
    disableStorageReset: true,
    ...argv,
  });

  // close the browser
  await browser.close();

  const reportHtml = result.report;
  await fsp.writeFile('./lh-report.html', reportHtml);

  // `.lhr` is the Lighthouse Result as object
  console.log(`${result.lhr.finalUrl} scored ${result.lhr.categories.performance.score * 100}`);

  // we should exit(1) if budgets were failed, ref: https://dev.to/jamescryer/programmatically-audit-with-lighthouse-and-performance-budgets-9kb
};

const { argv } = yargs(process.argv.slice(2));
await main(argv._[0], argv);
