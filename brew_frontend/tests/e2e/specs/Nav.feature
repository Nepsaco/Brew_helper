Feature: Nav
    Scenario: Nav closed 
        Given The Nav is closed
        Then I should see the Nav button

    Scenario: Nav open 
        When I click on the Nav button
        Then I should see the nav menu
        And There should be a list of links
