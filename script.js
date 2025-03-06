const { chromium } = require('playwright');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv;

(async () => {
    let browser;
    try {
        const url = argv.url;
        const userAgent = argv.ua;

        if (!url) {
        console.error('Error: The "url" parameter is required.');
        process.exit(1);
        }

        console.log(`Used by User-Agent: ${userAgent || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'}`);

        const browser = await chromium.launch({ headless: false }); // Change it to false if you want to run on chroumium
        const context = await browser.newContext({
        userAgent: userAgent || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        });
        const page = await context.newPage();

        console.log(`URL: ${url}`);
        // await page.goto(url, { waitUntil: 'domcontentloaded' }); // HTML is fully downloaded and parsed it doesn't wait for Images, JS & CSS
        await page.goto(url, { waitUntil: 'load' }); // Wait until the page is fully loaded

        await page.waitForTimeout(3000); //10000 for 10 second

        await browser.close();
    } catch (error) {
        console.error(`An error has occurred: ${error.message}`);
        process.exit(1);
    } finally {
        if (browser) {
        await browser.close();
        }
        console.log('Emulation complete.');
    }
})();