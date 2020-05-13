const { Given, When, Then, } = require('cypress-cucumber-preprocessor/steps')
const { the, visit } = cy

Given('I am on the home page', () => {
    visit('/')
})

Then('I should see app name', (name) => {
    the('main-heading').contains('Brew Helper')
})

And('I should see my recipes', () => {
    the('recipes').contains('Recipes')
})        

And('I should see footer', () => {
    the('current-beer').contains('Current Beer')
})