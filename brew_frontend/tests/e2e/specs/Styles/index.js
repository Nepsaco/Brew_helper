const { Given, Then, And } = require('cypress-cucumber-preprocessor/steps');

const { theFirst } = cy;

Given('There is one style', () => {
  theFirst('style');
});
Then('The style has name', () => {
  theFirst('style').children().contains('Name');
});
And('The style has description', () => {
  theFirst('style').children().contains('Description');
});
