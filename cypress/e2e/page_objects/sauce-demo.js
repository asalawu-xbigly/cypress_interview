const USERNAME = '#user-name'
const PASSWORD = '#password'
const LOGIN_BTN = '#login-button'

class SauceDemo {
	static typeUserName() {
		cy.get(USERNAME).type(Cypress.env('username'))
	}

	static typePassword() {
		cy.get(PASSWORD).type(Cypress.env('password'))
	}

	static pressLoginButton() {
		cy.get(LOGIN_BTN).click()
	}
}

export default SauceDemo
