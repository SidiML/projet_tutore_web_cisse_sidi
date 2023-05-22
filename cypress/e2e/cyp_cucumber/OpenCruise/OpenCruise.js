import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import LoginStep from '../../steps/LoginStep';
import StepSouscription from  '../../steps/StepSouscription';
import StepGestionCompte from   '../../steps/StepGestionCompte';

Given('I visit the application', () => {
  cy.visit(Cypress.env('url'));
});

When('I connect with valid credentials', () => {
  const loginStep = new LoginStep();
  loginStep.setLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
});

Then('I should see the welcome messagep', () => {
  const loginStep = new LoginStep();
  loginStep.checkMessage('Bienvenue ADMIN TEST');
});

And('I take a screenshot', () => {
  cy.xpath('//button[@id="dropdownMenu2"]').screenshot();
});

When('I connect with invalid credentials', () => {
  const loginStep = new LoginStep();
  loginStep.setLogin('XXXXXXX', 'YYYYYY');
  cy.wait(1000);
});

// Then('I should see an error message', () => {
//   const loginStep = new LoginStep();
//   loginStep.CheckFailMessage('mot de passe ou identifiant invalide');
// });

When('I have created a Particulier account', () => {
  const stepSouscription = new StepSouscription();
  cy.fixture('data-part.json', 'utf8').as('users');
  cy.get('@users').then((data) => {
    data = stepSouscription.CreatePart(data);
    cy.writeFile('cypress/fixtures/userPart.json', JSON.stringify(data, null, 2), 'utf8');
    cy.wait(2000);
  });
});


When('I have created a Particulier account Existant', () => {
  const stepSouscription = new StepSouscription();
  cy.fixture('userPart.json', 'utf8').as('users');
  cy.get('@users').then((data) => {
    data = stepSouscription.CreatePart(data);
    cy.wait(2000);
  });
});

When('I connect as Admin', () => {
  const loginStep = new LoginStep();
  loginStep.setLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
});

And('I activate the account', () => {
  const stepGestionCompte = new StepGestionCompte();
  cy.fixture('userPart.json', 'utf8').as('users');
  cy.get('@users').then((data) => {
    stepGestionCompte.ActiveCompte(data);
  });
});

And('I activate the accountP', () => {
  const stepGestionCompte = new StepGestionCompte();
  cy.fixture('userPro.json', 'utf8').as('users');
  cy.get('@users').then((data) => {
    stepGestionCompte.ActiveCompte(data);
  });
});

And('I logout', () => {
  const loginStep = new LoginStep();
  loginStep.Logout();
});

And('I login with the created account', () => {
  const loginStep = new LoginStep();
  cy.fixture('userPart.json', 'utf8').as('users');
  cy.get('@users').then((data) => {
    loginStep.setLogin(data.username, data.password);
    cy.wait(2000);
  });
});

And('I login with the created accountP', () => {
  const loginStep = new LoginStep();
  cy.fixture('userPro.json', 'utf8').as('users');
  cy.get('@users').then((data) => {
    loginStep.setLogin(data.username, data.password);
    cy.wait(2000);
  });
});

Then('I should see the welcome message', () => {
  const loginStep = new LoginStep();
  cy.fixture('userPart.json', 'utf8').as('users');
  cy.get('@users').then((data) => {
    loginStep.checkMessage(` Bienvenue ${data.nom} ${data.prenom} `);
  });
});

Then('I should see the welcome messageP', () => {
  const loginStep = new LoginStep();
  cy.fixture('userPro.json', 'utf8').as('users');
  cy.get('@users').then((data) => {
    loginStep.checkMessage(` Bienvenue ${data.nom} ${data.prenom} `);
  });
});

When('I have created a Professionnel account', () => {
  const stepSouscription = new StepSouscription();
  cy.fixture('data-pro.json', 'utf8').as('users');
  cy.get('@users').then((data) => {
    data = stepSouscription.CreatePro(data);
    cy.writeFile('cypress/fixtures/userPro.json', JSON.stringify(data, null, 2), 'utf8');
    cy.wait(2000);
  });
});

Then('I should see an error message3', () => {
  const loginStep = new LoginStep();
  cy.wait(2000);
  loginStep.CheckFailMessage(" l’email est déjà utilisé. Essayez un autre email ");
});

Then('I should see an error message1', () => {
  const loginStep = new LoginStep();
  loginStep.CheckFailMessage("mot de passe ou identifiant invalide");
});