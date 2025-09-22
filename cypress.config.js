const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		reportDirectory: 'report/html',
		charts: true,
		reportPageTitle: 'Brix Health Front End Automation Report',
		embeddedScreenshots: true,
		inlineAssets: true,
		saveAllAttempts: true,
		videoOnFailOnly: false,
	},
	video: true,
	e2e: {
		setupNodeEvents(on, config) {
			on('file:preprocessor', cucumber())
		},
		specPattern: 'cypress/e2e/features/**/*.feature',
		baseUrl: 'https://www.saucedemo.com/',
		env: {
			username: 'standard_user',
			password: 'secret_sauce'
		},
	},
})
