const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://app.cymulate.com",
    env: {
      username: "candidate_user@cymulate1.com",
      password: "ZzAa!@#$4321",
    },
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
