export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost:5175',
      show: true
    }
  },
  plugins: {
    pauseOnFail: {},
  },
  include: {
    I: './steps_file'
  },
  name: 'codecept'
}