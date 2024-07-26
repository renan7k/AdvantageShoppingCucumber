const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    baseUrl:'https://advantageonlineshopping.com/',
    specPattern: "cypress/e2e/step_definitions/*.feature"
  },
  viewportWidth: 1366,
  viewportHeight: 768
});
