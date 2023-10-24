Feature: checking the staging env 

  Scenario: Verifying staging url Endpoint
    Given the staging environment URL is "https://staging.example.com"
    When I send a GET request to the staging env endpoint
    Then the response status code should be 200
