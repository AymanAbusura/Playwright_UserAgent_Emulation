# Playwright User-Agent Emulation

This project demonstrates how to use Playwright to emulate different user agents for a given URL. It allows you to set a custom user-agent or use the default one for scraping, testing, or automation purposes.

## Features
- Emulate different browsers or devices using custom user agents.
- Headless browsing for automated tasks (can be set to visible for debugging).
- Simple setup using Node.js and Playwright.

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/playwright-user-agent-emulation.git

2. Navigate to the project directory:
    ```bash
    cd playwright-user-agent-emulation

3. Install the necessary dependencies:
    ```bash
    npm install

4. Ensure that you have Playwright installed:
    ```bash
    npm install playwright

## Usage
Run the script with the required parameters (url and optional user-agent):
    node script.js --url <target-url> --ua <user-agent>

## Example:
    node script.js --url https://example.com --ua "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"

If no user-agent is provided, the script will default to:
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36

## License
This project is licensed under the MIT License.