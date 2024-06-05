# eyeo_test
# Prerequisites

CodeceptJS version 3.5.14

Playwright version 1.42.1

# Getting started
npm run codeceptjs - Runs all the tests.

npm run codeceptjs:blocking - Runs all the tests with the @blocking tag.

npm run codeceptjs:ui - Starts the web interface for running the tests and tracking test steps.

npm run codeceptjs:headless - Runs all the tests in headless mode.

# Notes

The test scenario "Test that subscription list works correctly" does not pass if you just refresh the page after adding the subsription.
Though, according to the test case steps, it should pass. So the failure here is a normal behaviour.

