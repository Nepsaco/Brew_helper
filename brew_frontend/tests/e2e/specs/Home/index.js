const { Given, When, Then, } = require('cypress-cucumber-preprocessor/steps')
const { the, visit } = cy

Given('I am on the home page', () => {
    visit('/')
})

Then('I should see app name', (name) => {
    the('main-heading').contains('Brew Helper')
})
