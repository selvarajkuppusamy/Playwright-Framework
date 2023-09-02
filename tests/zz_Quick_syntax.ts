// Playwright CLI here == > https://playwright.dev/docs/test-cli

// Mandatory for test, expect to be used
import { test, expect } from '@playwright/test';


// Describe block
test.describe('Describe Test Details', () => {
    
    // Test Block
    // Asyn Functions if needed, as we would be awaiting most of the time.
    test('Test Name', async ({ page }) => {
        
        // GOTO goes to URL
        await page.goto("https://practice.sdetunicorns.com/");

        // LOCATOR locates DOM elements
        const findLocator = page.locator('DOM ELEMENT')
        
        // Play with Locator
        // Locatrs >> https://playwright.dev/docs/locators
        findLocator.click()
        findLocator.fill("Selva");



        // EXPECT for ASSERTIONS - Only an extension of Jest Assertions
        // In built Assertions help to wait until the DOM element is found
        await expect(page.locator("DOM element")).toHaveText("Assertion Text");
        await  expect(page.locator("DOM element")).toBeVisible();

        // NEGATIVE ASSERTION - INVERSE OF ABOVE
        
        // eslint-disable-next-line playwright/no-useless-not
        await expect(page.locator("DOM element")).not.toBeVisible();
        expect(page.locator("DOM element")).not.toBeGreaterThan(15);

        // SOFT ASSERTION - DOES NOT STOP TEST, BUT WILL FAIL AFTER FINISHING ALL STEPS
        expect.soft(page.locator("DOM element")).toEqual("Assert Details")
        
        await page.pause;

        // WAIT
        // HARDCODED WAIT - Not the preferred WAY
        // eslint-disable-next-line playwright/no-wait-for-timeout
        await page.waitForTimeout(3000);

        // CONDITIONAL WAIT - Better than Hardcoded wait (Visible state is default)
        // Waits until the element is found or 10s, which ever is quicker, then goes to next step
        // https://playwright.dev/docs/api/class-locator#locator-wait-for
        await page.locator('DOM ELEMENT').waitFor({state:'visible', timeout:1000}) 

        // ASSERTION WAIT -
        // By Default, Assertion wait is mentioned in config
        // But if needed specific more/ specific time for a certain assertion,
        // it can be passed in the assertion itself
        await expect(page.locator("DOM element")).toContainText("Assert Details", { timeout:10000 })



        // UPLOAD FILE
        const filePath = "<file path>";
        await page.setInputFiles('DOM ELEMENT from input type=file', filePath);

        // DO SOMETHING DURING THE EXECUTON
        await page.evaluate(() => {
            // Ask JS to perform something that can help us running tests
            // For example, try to amend the DOM element before accessing it
            const selector = document.querySelector('input#upfile_1');
            // Type Narrowing to avoid SELECTOR as NULL
            if (selector) {
                selector.className = '';
            }
        });
    });
});


/**
 * DEBUGGING
 * 
 * 1. DEBUG CONSOLE
 * >>>>> DEBUG=pw:api npx playwright test ./<test file>
 * 
 * 
 * 2. TRACE VIEWER
 * This can give an interactive tool with interactive tool with traces of all actions, 
 * screen shots at every second of the test.
 * Can be utilised for CICI
 * >>>>> Update the below section in the config file >> trace: 'on-first-retry', 
    * See https://playwright.dev/docs/trace-viewer 
    * Available options to record a trace:
        * 'on-first-retry' - Record a trace only when retrying a test for the first time.
        * 'on-all-retries' - Record traces for all test retries.
        * 'off' - Do not record a trace.
        * 'on' - Record a trace for each test. (not recommended as it's performance heavy)
        * 'retain-on-failure' - Record a trace for each test, but remove it from successful test runs.
    * 
 * 
 * 
 * 3. PLAYWRIGHT INSPECTOR
 * >>>>> PWDEBUG=1 npx playwright test ./<test file>
 * or >>>>> await page.pause();
 * This is like normal GUI debugger, we have in VS code
 * Will wait for user to go to next step after each step
 * 
 * // Opens Playwright Inspector
 *  // Console has full access to Playwright in browser, tests are running
 *  // await page.pause();
 * 
 * 
 * 4. RECORD/ CODEGEN
 * We can record and see the code that playwright does for us
 * if we are not able to play with DOM easily, 
 * playwright can give the code for us when we record some action
 * More of a Helper tool, when we are stuck with DOM, rather than relying on it, as it will randomly choose elements.
 */ 
