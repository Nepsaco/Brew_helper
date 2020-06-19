Feature: Recipes

    Scenario: I am on the home page recipe cards.
        Given I am on the home page
        Then I should see list of recipe cards
        And Each recipe card should display the recipe info:
          | id | Beer Name       | Beer Type  |
          | 1  | Tobie's IPA     | IPA        |
          | 2  | Lyndsi's Lager  | Lager      |
