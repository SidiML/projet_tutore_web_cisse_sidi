Feature: Test Web Open Cruise

  Background:
    Given I visit the application

  @smoke
  Scenario: Se Connecter Compte Valide
    When I connect with valid credentials
    Then I should see the welcome messagep
    And I take a screenshot

  Scenario: Se connecter Compte invalide
    When I connect with invalid credentials
    Then I should see an error message1

  Scenario: Inscription Compte Particulier
    When I have created a Particulier account
    And I connect as Admin
    And I activate the account
    And I logout
    And I login with the created account
    Then I should see the welcome message

  Scenario: Inscription Compte Professionnel
    When I have created a Professionnel account
    And I connect as Admin
    And I activate the accountP
    And I logout
    And I login with the created accountP
    Then I should see the welcome messageP

  Scenario: Inscription Compte Particulier Avec Compte Existant
    When I have created a Particulier account Existant
    Then I should see an error message3
