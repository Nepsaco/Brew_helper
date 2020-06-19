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
And('Each recipe card should display the recipe info:', (dataTable) => {
  const info = dataTable.hashes();
  info.forEach((beer) => {
    const { id } = beer;
    const beerId = `=${id}`;
    const beerName = beer['Beer Name'];
    const beerType = beer['Beer Type'];

    the(beerId).should('contain', beerName);
    the(beerId).should('contain', beerType);
  });
});
