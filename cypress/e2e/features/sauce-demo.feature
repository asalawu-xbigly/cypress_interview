@regression
Feature: Sauce Demo

  Background:
    * I visit the sauce demo web app

  Scenario: Login to sauce demo
    Given I enter a valid username
    When I enter a valid password
    Then I press the login button
        