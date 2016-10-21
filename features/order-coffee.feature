Feature: Begin a coffee order from homepage
  As a user,
  I want to enter the name of my coffee into the coffee input field
  So I can add my first coffee to my order

@watch
  Scenario: I want to add a coffee to my order
    Given I am viewing the page at "/"
    When I enter "flat white" into the "input" with the id "searchbar"
    Then I can see the "li" with the id "flat-white"
