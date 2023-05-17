import {
    openBrowser,
    closeBrowser,
    capturePageScreenshot,
    captureElementScreenshot,
  } from 'some-cypress-library';
  import { getJsonFromFile } from 'some-json-library';
  
  before(() => {
    cy.log('================================================================== SUITE SETUP');
    cy.log(`CURDIR____________\t${Cypress.env('CURDIR')}`);
    cy.log(`EXECDIR___________\t${Cypress.env('EXECDIR')}`);
    cy.log(`OUTPUT DIR________\t${Cypress.env('OUTPUT DIR')}`);
    cy.log(`ENV_______________\t${Cypress.env('ENV')}`);
    cy.log(`BROWSER___________\t${Cypress.env('BROWSER')}`);
    cy.log(`LANG______________\t${Cypress.env('LANG')}`);
  
    cy.request(`${Cypress.env('URL_OPENCRUISE_OK')}/api/helper/villes`).its('status').should('equal', 200);
  
    const compte_admin = {
      username: Cypress.env('OPENCRUISE_ADMIN_USER'),
      password: Cypress.env('OPENCRUISE_ADMIN_PWD'),
      nom: 'ADMIN',
      prenom: 'TEST',
    };
    Cypress.env('COMPTE_ADMIN', compte_admin);
  
    const translate = getJsonFromFile(`${Cypress.env('PROJECT_FOLDER')}/tests/data-env/lang-fr.json`);
    Cypress.env('TRANSLATE', translate);
  });
  
  beforeEach(() => {
    cy.log('================================================================== TEST SETUP');
    // Register any necessary Cypress configurations or hooks here
    openBrowser();
    Cypress.automation('task', 'SetBrowserImplicitWait', 5);
    cy.viewport(1920, 1080); // Adjust the viewport dimensions as needed
  });
  
  afterEach(() => {
    // Capture screenshots for failed steps
    if (this.currentTest.state === 'failed') {
      capturePageScreenshot(`${this.currentTest.title}_FAIL.png`);
      capturePageScreenshot(`${this.currentTest.title}_FAIL.html`);
    }
  
    // Clean up any necessary Cypress configurations or hooks here
  });
  
  after(() => {
    cy.log('');
  });
  