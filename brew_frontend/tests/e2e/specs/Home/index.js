const { Given, Then, And } = require('cypress-cucumber-preprocessor/steps');

const { the, visit } = cy;

Given('I am on the home page', () => {
  visit('/');
});

Then('I should see app name', () => {
  the('main-heading').contains('Brew Helper');
});

And('I should see styles', () => {
  the('styles').contains('Styles');
});
