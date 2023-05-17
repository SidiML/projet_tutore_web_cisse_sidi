import { PageGestionCompte } from '../page-objects/PageGestionCompte';

describe('Tests', () => {
  it('Activer Compte', (compte) => {
    cy.log(`Activer Compte ${compte}`);
    PageGestionCompte.accessConfig();
    PageGestionCompte.accessUsers();
    PageGestionCompte.accessUsersList();
    PageGestionCompte.activateAccount(compte.username);
  });
});
