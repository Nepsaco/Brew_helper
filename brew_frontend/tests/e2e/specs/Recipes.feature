Feature: Recipes

    Scenario: I am on the home page
        Given I am on the home page
        Then I should see list of recipe cards
        And Each recipe card should display the recipe "Beer Name" and "Beer Type"
