Cypress.Commands.add('validateElementText', (elementLocator, textToValidate) => {
	cy.get(elementLocator).then(($element) => {
		const text = $element.text()
		expect(text).eq(textToValidate)
	})
})

Cypress.Commands.add('validateInputTextValue', (elementLocator, textToValidate) => {
	cy.get(elementLocator).then(($element) => {
		const text = $element.val().trim()
		expect(text).eq(textToValidate)
	})
})

Cypress.Commands.add('validateElementHasClass', (elementLocator, classNameToValidate) => {
	cy.get(elementLocator).should('have.class', classNameToValidate)
})

Cypress.Commands.add('validateElementHasValue', (elementLocator, valueToValidate) => {
	cy.get(elementLocator).should('have.value', valueToValidate)
})

Cypress.Commands.add('validateInputTextValueLength', (elementLocator, expectedLength) => {
	cy.get(elementLocator).then(($element) => {
		const text = $element.val()
		expect(text.length).eq(expectedLength)
	})
})

Cypress.Commands.add('getElementTextValue', (elementLocator) => {
	let text
	cy.get(elementLocator).then(($element) => {
		text = $element.text().trim()
		return text
	})
})

Cypress.Commands.add('validateElementIsVisible', (elementLocator) => {
	cy.get(elementLocator).should('be.visible')
})

Cypress.Commands.add('validateElementHasId', (elementLocator, idNameToValidate) => {
	cy.get(elementLocator).should('have.id', idNameToValidate)
})

Cypress.Commands.add('validateElementHasAttribute', (elementLocator, attributeNameToValidate) => {
	cy.get(elementLocator).should('have.attr', attributeNameToValidate)
})

Cypress.Commands.add('validateElementIsNotVisible', (elementLocator) => {
	cy.get(elementLocator).should('not.exist')
})

Cypress.Commands.add('validateDropdownSelectedText', (elementLocator, textToValidate) => {
	cy.get(elementLocator).then(($element) => {
		const text = $element.text().trim()
		expect(text).eq(textToValidate)
	})
})

Cypress.Commands.add('clearInputTextValue', (elementLocator) => {
	cy.get(elementLocator).then(($element) => {
		const text = $element.val()
		text.length > 0 ? cy.get(elementLocator).clear() : cy.log("Field is already empty")
	})
})

Cypress.Commands.add('clearLastElementInputTextValue', (elementLocator) => {
	cy.get(elementLocator).then(($element) => {
		const text = $element.val()
		text.length > 0 ? cy.get(elementLocator).last().clear() : cy.log("Field is already empty")
	})
})


Cypress.Commands.add('confirmSearchPatientListTableHasValue', (rowIndex, colIndex, expectedValue) => {
	cy.log("EXPECTED VALUE:" + expectedValue)

	cy.get('tbody').find('tr').eq(rowIndex).find('td').eq(colIndex)
		.contains(expectedValue)
})

Cypress.Commands.add('confirmSearchPatientTableHeaderHasValue', (colIndex, expectedValue) => {
	cy.get('thead').find('th').eq(colIndex)
		.contains(expectedValue)
})

Cypress.Commands.add('validateDropdownSelectedTextIsNotEmpty', (elementLocator) => {
	cy.get(elementLocator).then(($element) => {
		const text = $element.text().trim()
		expect(text).not.eq('')
	})
})