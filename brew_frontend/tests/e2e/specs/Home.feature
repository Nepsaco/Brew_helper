Feature: Home

    Scenario: Open home page
        Given I am on the home page
        Then I should see app name 
        And I should see nav button
        When I click the nav button 
        Then I should see the nav menu
