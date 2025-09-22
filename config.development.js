const { defineConfig } = require('cypress')
const otplib = require('otplib')
const cucumber = require('cypress-cucumber-preprocessor').default
const { Client } = require('pg')
const { SSMClient, GetParameterCommand } = require('@aws-sdk/client-ssm')

const creds = {
	accessKeyId: process.env.AWS_ACCESS_KEY,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
}
const ssmClient = new SSMClient({
	region: 'af-south-1',
	credentials: creds,
})

const dbHostParameterCommand = new GetParameterCommand({
	Name: '/dev/symmetricds/databases/brix/central/host',
	WithDecryption: false,
})

const dbPortParameterCommand = new GetParameterCommand({
	Name: '/dev/symmetricds/databases/brix/central/port',
	WithDecryption: false,
})

const dbUsernameParameterCommand = new GetParameterCommand({
	Name: '/dev/symmetricds/databases/brix/central/username',
	WithDecryption: true,
})

const dbPasswordParameterCommand = new GetParameterCommand({
	Name: '/dev/symmetricds/databases/brix/central/password',
	WithDecryption: true,
})

const dbNameParameterCommand = new GetParameterCommand({
	Name: '/dev/symmetricds/databases/brix/central/db_name',
	WithDecryption: false,
})

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		reportDirectory: 'report/html',
		charts: true,
		reportPageTitle: 'Development - Brix Health Front End Automation Report',
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
		baseUrl: 'https://brix.central.dev.brixhealth.co.za',
		env: {
			parseSpecialCharSequences: false,
			registeredUserId: -22715055,
			testPassword: 'Test@Pass123',
			registeredUserSecretKey: 'KRHSL4ZBXHOU2RVUM4T2OOV23KAVFTCV',
			enrolmentPhoneNumber: '0730000009',
		},
	},
})
