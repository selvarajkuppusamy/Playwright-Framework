import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  // SELVA adding this manually watching video
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
  /* Maximum time one test can run for */
  timeout: 30 * 1000,
  expect: {
    /** 
     * Maximum time expect() should wait for the condition to be met 
     * For example in `await expect(locator).toHaveText();`
    */
    timeout: 5000
  },
  /* Run tests in files in parallel */
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  // reporter: [['list'], ['allure-playwright'], [line], [html]],
  reporter: [['allure-playwright', {outputFolder: 'test-results'}], ['line']],

  // For Global Setup (Signed in State Login)
  globalSetup: require.resolve('./utils/global-setup'),

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    // SELVA adding this manually watching video
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
    actionTimeout: 0,
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    baseURL: 'https://practice.automationbro.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: 'on-first-retry',  
    trace: 'retain-on-failure',  

    // For Global State Login Json.
    storageState: 'loggedInState.json'

  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     headless: true
    //   },
    // },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     headless: false
    //   },
      
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     headless: false  },

    // },
 

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //     headless: true  },
    // },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 13 Pro'],
        headless: true  },
    },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Folder for test artifacts - screenshots, videos, traces, etc */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

