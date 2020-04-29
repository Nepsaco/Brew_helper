const {
    Given,
    When,
    Then,
} = require('cypress-cucumber-preprocessor/steps')

const { the, visit } = cy


Given('I am on the home page', () => {
    visit('/')
})

Then('The page displays {string} ', name => {
    the('main-heading').should('have.text', name)
})
