const {
  Given, Then, And, When,
} = require('cypress-cucumber-preprocessor/steps');

const { the, visit, clickThe } = cy;

Given('I am on the home page', () => {
  visit('/');
});
Then('I should see app name', () => {
  the('main-heading').contains('Brew Helper');
});
And('I should see nav button', () => {
  the('nav-button').should('exist');
});
When('I click the nav button', () => {
  clickThe('nav-button');
});
Then('I should see the nav menu', () => {
  the('nav-menu').should('exist');
});
