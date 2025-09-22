const { defineConfig } = require('cypress')
const otplib = require('otplib')
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		reportDirectory: 'report/html',
		charts: true,
		reportPageTitle: 'Staging - Brix Health Front End Automation Report',
		embeddedScreenshots: true,
		inlineAssets: true,
		saveAllAttempts: true,
		videoOnFailOnly: false,
	},
	video: true,
	e2e: {
		setupNodeEvents(on, config) {
			require('cypress-mochawesome-reporter/plugin')(on)
			on('file:preprocessor', cucumber())
			on('task', {
				generateOTP(secret) {
					return otplib.authenticator.generate(secret)
				},
			})
		},
		specPattern: 'cypress/e2e/features/**/*.feature',
		baseUrl: 'https://brix.central.stg.brixhealth.co.za',
		env: {
			parseSpecialCharSequences: false,
			registeredUserId: -33715055,
			testPassword: 'Test@Pass123',
			registeredUserSecretKey: 'CBF53CMTX227HATUCTCFCXCUQET24BV3',
			enrolmentPhoneNumber: '0730000009',
		},
	},
})
