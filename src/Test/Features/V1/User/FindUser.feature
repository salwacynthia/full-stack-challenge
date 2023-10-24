# features/v1/getRecipe.feature
Feature: Find User 

  Scenario Outline: As a client I want to find users paginated.
    Given An existing User with name "John Doe" and email "john.doe@gmail.com"
    And   An existing User with name "Albert Einstein" and email "albert.einstein@gmail.com"
    And   An existing User with name "Jeff Bezos" and email "jeff.bezos@gmail.com"
    And   An existing User with name "Donald Duck" and email "donald.duck@gmail.com"
    And   An existing User with name "Lemmy Kilmister" and email "lemmy.kilmister@gmail.com"
    And   An existing User with name "Nina Hagen" and email "nina.hagen@gmail.com"
    And   An existing User with name "Khalil Gibran" and email "khalil.gibran@gmail.com"
    And   An existing User with name "Che Guevara" and email "che.guevara@gmail.com"
    And   An existing User with name "Jenny Doe" and email "jenny.doe@gmail.com"
    When I call the findUser endpoint with page "<page>" and take "<take>"
    Then  The response contains "<amount>" users
    
    Examples:
    | page | take |amount |
    | 1    | 5    | 5     |
    | 2    | 5    | 4     |
