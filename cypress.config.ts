import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '7176m5',
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
