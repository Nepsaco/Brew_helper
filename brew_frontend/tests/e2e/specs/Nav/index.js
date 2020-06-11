const {
  Given, Then, When, And,
} = require('cypress-cucumber-preprocessor/steps');

const { the, visit, clickThe } = cy;

Given('The Nav is closed', () => {
  visit('/');
});
Then('I should see the Nav button', () => {
  the('nav-button').should('exist');
});
When('I click on the Nav button', () => {
  clickThe('nav-button');
});
Then('I should see the nav menu', () => {
  the('nav-menu').should('exist');
});
And('There should be a list of links', () => {
  the('nav-list').should('have.descendants', 'a');
});
