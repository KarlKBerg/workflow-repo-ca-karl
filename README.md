# Workflow repo for the CA

This is my submission for the Workflow course assignment, a forked repo with PR for testing setup.

## Description

This version adds testing for the venues website. The tests cover both unit testing and end to end testing. The unit tests cover the isActivePath function and getUsername function. End-to-end testing covers login functionality and navigation functionality.

## Scripts

For this project I have added some scripts to make testing easier.

- start - a script that auto-start and auto-close a dedicated server port when testing.
- test:unit - A test script for running unit tests.
- test:e2e - A test script for running end-to-end tests, including the --ui.
- prepare - husky install is automatically run after `npm install` which sets up git hooks

## Dev tools

- ESLint is set up to lint all js files
- Prettier is set up to format all html and js files
- Husky is set up to format HTML and js files on commit and lint js files on commit

## How to run

1. Clone the repo:

- `git clone https://github.com/KarlKBerg/workflow-repo-ca-karl`

2. Install dependencies:

- `npm install`

3. Install playwright browsers:

- `npx playwright install`

4. Setup .env:

- Create .env file
- Add variables as shown in .env.example file
  - TEST_USER_EMAIL
  - TEST_USER_PASSWORD

5. Run tests:

- To run unit tests
  - `npm run test:unit`
- To run end-to-end tests
  - `npm run test:e2e`
    If you do not want the UI on playwright tests, run `npx playwright test`
