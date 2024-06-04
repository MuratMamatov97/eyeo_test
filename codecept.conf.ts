import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: 'tests/*/*_test.ts',
  output: './output',
  plugins: {
    tryTo: {
      enabled: true,
      setTimeout: 5000
    },
  },
  helpers: {
    Playwright: {
      show: true,
      browser: 'chromium',
      waitForNavigation: 'load',
      waitForTimeout: 15000,
      timeout: 15000,
      chromium: {
        downloadsPath: './output',
        executablePath: '/Users/murat/Downloads/Chromium.app/Contents/MacOS/Chromium',
        args: [`--no-sandbox`]
      }
    },
    FileSystem: {},
    AssertWrapper: {
      require: 'codeceptjs-assert'
    }
  },
  allure: {
    enabled: true
  },
  include: {
    I: './steps_file.ts'
  },
  mocha: {
    bail: false // continue test run even if something is failed
  },
  name: 'Autotests'
};
