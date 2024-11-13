import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'https://www.barosa.co',
    trace: 'on-first-retry',
    headless: process.env.CI ? true : false, 
  },
  projects: [
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
        browserName: 'webkit',
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
        browserName: 'chromium',
      },
    },
  ],
});


