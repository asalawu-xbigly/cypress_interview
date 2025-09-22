import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import SauceDemo from '../page_objects/sauce-demo'


Given('I visit the sauce demo web app', () =>{
	cy.visit('/')
})

When('I enter a valid username', () => {
	SauceDemo.typeUserName()
})

And('I enter a valid password', () => {
	SauceDemo.typePassword()
})

Then('I press the login button', () => {
	SauceDemo.pressLoginButton()
})
