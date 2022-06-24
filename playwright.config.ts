// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
import path from 'path';
import { PlaywrightTestConfig, devices } from '@playwright/test';

// ref: https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  timeout: 30 * 1000, // timeout per test
  testDir: path.join(__dirname, 'e2e'), // test directory
  retries: 2, // if a test fails, retry it additional 2 times
  outputDir: 'test-results/', // artifacts folder where screenshots, videos, and traces are stored.

  // ref: https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests
  webServer: {
    command: 'yarn dev',
    url: `http://localhost`,
    timeout: 30 * 1000,
    reuseExistingServer: !!process.env.CI,
  },

  use: {
    baseURL: `http://localhost`,
    headless: true,

    // ref: https://playwright.dev/docs/trace-viewer
    trace: 'retry-with-trace',

    // ref: https://playwright.dev/docs/api/class-browser#browser-new-context
    contextOptions: {
      ignoreHTTPSErrors: true,
    },
  },

  projects: [
    {
      name: 'Desktop Chrome',
      use: devices['Desktop Chrome'],
    },
    {
      name: 'Mobile Chrome',
      use: devices['Pixel 5'],
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 12'],
    },
  ],
};

export default config;
