const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://3.8.242.61/',
    chromeWebSecurity: false,
    watchForFileChanges: false,
    //testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on ('task', {
        logToTerminal(message) {
          console.log(message);
          return null;
        }
      })
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    testIsolation: true 
  },
  pageLoadTimeout: 120000,
  defaultCommandTimeout: 10000,
  video: false,
  screenshotOnRunFailure: false,
});

