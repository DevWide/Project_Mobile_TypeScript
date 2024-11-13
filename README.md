# Playwright Mobile Testing Project

This project automates mobile web testing for [Barosa](https://www.barosa.co/) using Playwright, TypeScript, and pnpm. The tests simulate interactions in mobile view, such as scrolling to the footer and clicking on the "About Us" button, with screenshots taken at the end of the test.

## Project Structure

- **pages/**: Contains Page Object classes for the HomePage and AboutUsPage.
- **selectors/**: Stores JSON files with selectors for different elements in the application.
- **tests/**: Contains test files written in TypeScript.
- **screenshots/**: Directory for storing screenshots, created automatically during test execution.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [pnpm](https://pnpm.io/)

## Setup

1. Clone this repository.
2. Install dependencies:
   ```bash
   pnpm install

3. Install Playwright browsers:
    ```bash
  pnpm playwright install

## Running Tests

To run the tests in mobile view interactively with screenshots, use the following command:
    ```bash
    pnpm playwright test --headed --project="Mobile Safari"

## Project Configuration
* **playwright.config.ts:** Configuration file for Playwright, with device emulation and project settings.
* **tsconfig.json:** TypeScript configuration for the project.
* **GitHub Actions:** Continuous Integration (CI) pipeline to run tests on GitHub.

## CI Pipeline

This project includes a GitHub Actions pipeline located in ```.github/workflows/ci.yml```. The pipeline runs tests in the "Mobile Safari" project.

## Screenshots

Screenshots are saved in the ```screenshots/``` directory, which is created automatically if it doesn't exits.