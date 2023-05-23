## Conception des Tests - Projet Web Open Cruise

Le projet Web Open Cruise vise à automatiser les tests du site Web Open Cruise en utilisant le framework de test Cypress. Les tests sont conçus pour valider les principales fonctionnalités de l'application, telles que la connexion, l'inscription et la gestion des comptes.

### Cas de Test

#### Cas de Test 1: Se Connecter Compte Valide

Objectif: Vérifier la possibilité de se connecter avec des identifiants valides.

Scénario:

1. L'utilisateur visite la page de connexion.
2. L'utilisateur saisit les identifiants valides.
3. L'utilisateur soumet le formulaire de connexion.
4. L'utilisateur devrait voir le message de bienvenue.
5. Une capture d'écran est prise pour référence.

#### Cas de Test 2: Se Connecter Compte Invalide

Objectif: Vérifier la gestion des identifiants invalides lors de la connexion.

Scénario:

1. L'utilisateur visite la page de connexion.
2. L'utilisateur saisit des identifiants invalides.
3. L'utilisateur soumet le formulaire de connexion.
4. L'utilisateur devrait voir un message d'erreur indiquant que les identifiants sont invalides.
5. Une capture d'écran est prise pour référence.

#### Cas de Test 3: Inscription Compte Particulier

Objectif: Vérifier la création et l'activation d'un compte particulier.

Scénario:

1. L'utilisateur visite la page d'inscription.
2. L'utilisateur saisit les informations nécessaires pour créer un compte particulier.
3. L'utilisateur soumet le formulaire d'inscription.
4. L'administrateur se connecte.
5. L'administrateur active le compte particulier créé.
6. L'utilisateur se déconnecte.
7. L'utilisateur se connecte avec les identifiants du compte particulier créé.
8. L'utilisateur devrait voir le message de bienvenue.
9. Une capture d'écran est prise pour référence.

#### Cas de Test 4: Inscription Compte Professionnel

Objectif: Vérifier la création et l'activation d'un compte professionnel.

Scénario:

1. L'utilisateur visite la page d'inscription.
2. L'utilisateur saisit les informations nécessaires pour créer un compte professionnel.
3. L'utilisateur soumet le formulaire d'inscription.
4. L'administrateur se connecte.
5. L'administrateur active le compte professionnel créé.
6. L'utilisateur se déconnecte.
7. L'utilisateur se connecte avec les identifiants du compte professionnel créé.
8. L'utilisateur devrait voir le message de bienvenue.
9. Une capture d'écran est prise pour référence.

#### Cas de Test 5: Inscription Compte Particulier Avec Compte Existant

Objectif: Vérifier la gestion de l'inscription avec des informations déjà existantes.

Scénario:

1. L'utilisateur visite la page d'inscription.
2. L'utilisateur saisit les informations nécessaires pour créer un compte particulier avec des informations déjà existantes.
3. L'utilisateur soumet le formulaire d'inscription.
4. L'utilisateur devrait voir un message d'erreur indiquant que l'adresse e-mail est déjà utilisée.
5. Une capture d'écran est prise pour référence.

### Structure des Tests

Les tests sont organisés en utilisant le framework de test Cypress avec

 des fichiers de test et des étapes (steps) pour les scénarios Cucumber.

#### Structure des Fichiers

```
cypress
├── e2e
│   ├── tests
│   │   └── OpenCruise.cy.js
│   └── cyp_cucumber
│       └── OpenCruise.feature
└── ...
```

- Le dossier `tests` contient les fichiers de test Cypress pour les scénarios non-Cucumber.
- Le dossier `cyp_cucumber` contient les fichiers de définition des étapes Cucumber pour les scénarios Cucumber.

#### Structure des Étapes Cucumber

Les étapes Cucumber sont définies dans le fichier `OpenCruise.feature` et mappées aux fichiers de test Cypress correspondants dans le fichier `OpenCruise.cy.js`.

Exemple:

```gherkin
# OpenCruise.feature

Feature: Test Web Open Cruise

  Background:
    Given I visit the application

  @smoke
  Scenario: Se Connecter Compte Valide
    When I connect with valid credentials
    Then I should see the welcome message
    And I take a screenshot

  # Autres scénarios...

```

```javascript
// OpenCruise.cy.js

// Tests pour le scénario "Se Connecter Compte Valide"
it('Se Connecter Compte Valide', () => {
  // Implémentation du test
});

// Autres tests pour les autres scénarios...
```

### Configuration des Tests

La configuration des tests est définie dans le fichier `cypress.config.js`. Les options de configuration incluent:

- Utilisation du reporter `cypress-mochawesome-reporter` pour générer des rapports détaillés.
- Désactivation de l'enregistrement des vidéos (`video: false`).
- Configuration des options spécifiques au reporter, comme l'affichage des graphiques, des captures d'écran intégrées, etc.
- Utilisation de `cypress-cucumber-preprocessor` pour traiter les fichiers Cucumber.
- Configuration de l'environnement de test avec l'URL de l'application.

### Conclusion

Ce document de conception des tests décrit les cas de test clés du projet Web Open Cruise, ainsi que la structure des fichiers de test et des étapes Cucumber. La configuration des tests est également présentée pour assurer l'exécution réussie des tests.

N'hésitez pas à me faire part de vos commentaires ou de toute autre exigence spécifique que vous pourriez avoir concernant la conception des tests.

Voici quelques cas de test que je vais essayer d'automatiser dans le cadre de se TP:

---

### Tableaux des tests:

| ID TEST  | NOM TEST                         | DESCRIPTION / BUT                                                          | TYPE TEST    | TEST TAG   | PREREQUIS          | ASSERTIONS                                                                                                     |
| -------- | -------------------------------- | -------------------------------------------------------------------------- | ------------ | ---------- | ------------------ | -------------------------------------------------------------------------------------------------------------- |
| Test-001 | Connexion Admin                  | Se connecter avec un compte admin valide                                  | Test positif | conn-test  | Identifiant valide | Page-d'acceuil avec le message:<br />"Bienvenue Admin Test"                                                   |
| Test-002 | Compte invalide                  | Se connecter avec un compte invalide et<br />verifier le message d'erreur. | Test positif | conn-test  | Aller sur l'url    | Message d'erreur en rouge<br />avec la phrase:<br />"Mot de passe ou compte invalide"""                        |
| Test-003 | Inscription Compte Particulier   | Création d'un compte Particulier                                          | Test positif | inscr-test | Aller sur l'url    | Page-d'acceuil avec le message:<br />"Bienvenue Nom Prenom"                                                   |
| Test-004 | Inscription Compte Professionnel | Création d'un compte Professionnel                                        | Test positif | inscr-test | Aller sur l'url    | Page-d'acceuil avec le message:<br />"Bienvenue Nom Prenom"                                                   |
| Test-005 | Inscription Compte Particulier   | Création d'un compte Particulier/Email existant                           | Test Negatif | inscr_test | Aller sur l'url    | Message d'erreur en rouge<br />avec la phrase:<br />"l'email est déjà utilisé. Essayez<br />un autre email" |
| Test-006 | Inscription Compte Professionnel | Création d'un compte Professionnel avec un<br />Assistant                 | Test positif | inscr-test | Aller sur l'url    |                                                                                                                |
