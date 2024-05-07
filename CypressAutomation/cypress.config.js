const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'prmd8a',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
