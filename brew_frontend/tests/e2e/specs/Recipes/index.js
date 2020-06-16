const {
  Given, Then, And,
} = require('cypress-cucumber-preprocessor/steps');

const { the, visit } = cy;

Given('I am on the home page', () => {
  visit('/');
});
Then('I should see list of recipe cards', () => {
  the('recipe-list').should('have.descendants', 'li');
});
And('Each recipe card should display the recipe {string} and {string}', (beerName, beerType) => {
  the('recipe-card').should('contain', beerName);
});
