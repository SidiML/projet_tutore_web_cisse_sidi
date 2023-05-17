import { AdminPage } from '../pages/AdminPage';

describe('Tests', () => {
  it('Activer Compte', (compte) => {
    cy.log(`Activer Compte ${compte}`);
    AdminPage.accessConfig();
    AdminPage.accessUsers();
    AdminPage.accessUsersList();
    AdminPage.activateAccount(compte.username);
  });
});
