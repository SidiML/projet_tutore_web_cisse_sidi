import LoginPage from "../pages/LoginPage";
import LoginStep from "../steps/LoginStep";
import StepSouscription from "../steps/StepSouscription";
import StepGestionCompte from "../steps/StepGestionCompte";

// Test suite
describe("TEST WEB OPEN CRUISE", () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url')); // Visit the application URL before each test case
  });

  // Test Case 1: Se Connecter Compte Valide
  it("TEST01 ** Se Connecter avec un Compte Admin Valide **", { tags: '@smoke' }, () => {
    const loginStep = new LoginStep();
    cy.log(`Se Connecter Compte Valide`);
    loginStep.setLogin(Cypress.env("USERNAME"),Cypress.env("PASSWORD")); // Log in with valid credentials
    loginStep.checkMessage("Bienvenue ADMIN TEST"); // Check the welcome message
    cy.xpath('//button[@id="dropdownMenu2"]').screenshot(); // Take a screenshot
  });

  // Test Case 2: Se connecter Compte invalide
  it("TEST02 ** Se Connecter avec un Compte Invalide **", () => {
    const loginStep = new LoginStep();
    cy.log(`Se connecter Compte invalide`);
    loginStep.setLogin("XXXXXXX", "YYYYYY"); // Log in with invalid credentials
    cy.wait(1000);
    loginStep.CheckFailMessage("mot de passe ou identifiant invalide"); // Check the error message
    cy.xpath('//div[@role="alertdialog"]').screenshot(); // Take a screenshot
  });

  // Test Case 3: Inscription Compte Particulier
  it("TEST03 ** Création et Activation d'un Compte Particulier **", () => {
    const stepSouscription = new StepSouscription();
    cy.log("**********   Inscription Compte Particulier    ************");
    cy.fixture("data-part.json", "utf8").as("users"); // Load user data from "data-part.json"
    cy.get("@users").then((data) => {
      data = stepSouscription.CreatePart(data); // Create a particular account
      cy.writeFile("cypress/fixtures/userPart.json", JSON.stringify(data, null, 2), "utf8"); // Write user data to "userPart.json"
      cy.wait(1000);
      const loginStep = new LoginStep();
      cy.log(`Se Connecter en tant que Admin`);
      loginStep.setLogin(Cypress.env("USERNAME"),Cypress.env("PASSWORD"));  // Log in as admin
      const stepGestionCompte = new StepGestionCompte();
      stepGestionCompte.ActiveCompte(data); // Activate the account
      cy.xpath(`//tr[contains(.,'${data.username}')]`).screenshot(); // Take a screenshot
      loginStep.Logout(); // Log out as admin
      cy.log("Se connecter avec le commpte créer");
      loginStep.setLogin(data.username, data.password); // Log in with the created account
      cy.wait(1000);
      cy.xpath('//button[@id="dropdownMenu2"]').screenshot(); // Take a screenshot
      loginStep.checkMessage(` Bienvenue ${data.nom} ${data.prenom} `); // Check the welcome message
      loginStep.Logout(); // Log out
    });
  });

  // Test Case 4: Inscription Compte Professionnel
  it("TEST04 ** Création et Activation d'un Compte Professionnel **", () => {
    const stepSouscription = new StepSouscription();
    cy.log("**********   Inscription Compte Professionnel    ************");
    cy.fixture("data-pro.json", "utf8").as("users"); // Load user data from "data-pro.json"
    cy.get("@users").then((data) => {
      data = stepSouscription.CreatePro(data); // Create a professional account
      cy.writeFile("cypress/fixtures/userPro.json", JSON.stringify(data, null, 2), "utf8"); // Write user data to "userPro.json"
      cy.wait(1000);
      const loginStep = new LoginStep();
      cy.log(`Se Connecter en tant que Admin`);
      loginStep.setLogin(Cypress.env("USERNAME"),Cypress.env("PASSWORD"));  // Log in as admin
      const stepGestionCompte = new StepGestionCompte();
      stepGestionCompte.ActiveCompte(data); // Activate the account
      cy.xpath(`//tr[contains(.,'${data.username}')]`).screenshot(); // Take a screenshot
      loginStep.Logout(); // Log out as admin
      cy.log("Se connecter avec le commpte créer");
      loginStep.setLogin(data.username, data.password); // Log in with the created account
      cy.wait(1000);
      cy.xpath('//button[@id="dropdownMenu2"]').screenshot(); // Take a screenshot
      loginStep.checkMessage(` Bienvenue ${data.nom} ${data.prenom} `); // Check the welcome message
      loginStep.Logout(); // Log out
    });
  });

  // Test Case 5: Inscription Compte Particulier Avec Compte Existant
  it("TEST05 ** Création d'un Compte Particulier avec un Compte Active **", () => {
    const stepSouscription = new StepSouscription();
    cy.log("**********   Inscription Compte Particulier Avec Compte Existant    ************");
    cy.fixture("userPart.json", "utf8").as("users"); // Load existing user data from "userPart.json"
    cy.get("@users").then((data) => {
      stepSouscription.CreatePartExistant(data); // Create a particular account with existing user data
      cy.wait(2000);
      const loginStep = new LoginStep();
      loginStep.CheckFailMessage(" l’email est déjà utilisé. Essayez un autre email "); // Check the error message
      cy.xpath('//div[@role="alertdialog"]').screenshot(); // Take a screenshot
    });
  });
});
