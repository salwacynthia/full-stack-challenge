# features/v1/getRecipe.feature
Feature: Create User 

  Scenario Outline: As a client I want to create a new user.
    Given Nothing
    When I call the createUser endpoint with name "<name>" and email "<email>"
    Then  I should get a response with status code "<statusCode>"
    
    Examples:
    | name      | email               | statusCode |
    | John Doe  | john.doe@gmail.com  | 201        |