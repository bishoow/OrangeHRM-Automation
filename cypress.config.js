const { defineConfig } = require('cypress');
require('dotenv').config(); // load .env file

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    env: {
      username: process.env.CYPRESS_USERNAME,
      password: process.env.CYPRESS_PASSWORD,
    },
    setupNodeEvents(on, config) {
      // You can log for debugging
      console.log('Loaded ENV:', config.env);
      return config;
    },
  },
});
