Feature: View coffeeApp homepage
  As a user,
  I want to see the coffee input field
  So that I can easily begin a coffee order

@watch
  Scenario: I want to see the coffeeApp homepage
    Given I am viewing the page at "/"
    Then I can see the "input" with the id "user-name"
