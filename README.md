# Playwright Base

E2E test framework built with [Playwright](https://playwright.dev/) using Page Object Model (POM) pattern.

## Project Structure

```
playwright_base/
├── pages/
│   ├── BaseElements.js       # locator helpers (getByRole, getByTestId, ...)
│   ├── BasePage.js           # navigation + common assertions
│   └── PlaywrightDocsPage.js # example page object
├── fixtures/
│   └── index.js              # custom test fixtures
├── tests/
│   └── example.spec.js       # example tests
└── playwright.config.js
```

## Setup

```bash
npm install
npx playwright install
```

## Running Tests

```bash
# run all tests
npx playwright test

# run a specific file
npx playwright test tests/example.spec.js

# run a specific test by name
npx playwright test -g "has title"

# run in headed mode (see the browser)
npx playwright test --headed

# run in debug mode
npx playwright test --debug
```

## Reports

```bash
# run tests and open HTML report automatically
npx playwright test --reporter=html

# open last generated report
npx playwright show-report

# run with list reporter (inline output)
npx playwright test --reporter=list
```

## UI Mode

Interactive mode with time-travel debugging:

```bash
npx playwright test --ui
```

## Codegen

Auto-generate tests by recording browser actions:

```bash
npx playwright codegen https://playwright.dev
```

## Formatting

```bash
npx prettier --write .
```

Or use `Ctrl+L` → `Shift+O` in VS Code.
