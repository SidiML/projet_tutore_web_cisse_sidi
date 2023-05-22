const LOCATOR_BUTTON_CONFIG = '//*[@id="adminConfig"]'; // XPath locator pour le bouton de configuration admin
const LOCATOR_BUTTON_USER = '//a[@routerlink="/admin/utilisateur"]'; // XPath locator pour le bouton d'accès aux utilisateurs admin
const LOCATOR_BUTTON_USER_LIST = '//a[@routerlink="/admin/userList"]'; // XPath locator pour le bouton d'accès à la liste des utilisateurs admin


class PageGestionCompte {
  accesConfig() {
    // Clique sur le bouton de configuration admin
    return cy.xpath(LOCATOR_BUTTON_CONFIG).click(); 
  }

  accesUsers() {
    // Clique sur le bouton d'accès aux utilisateurs admin
    return cy.xpath(LOCATOR_BUTTON_USER).click(); 
  }

  accesUsersList() {
    // Clique sur le bouton d'accès à la liste des utilisateurs admin
    return cy.xpath(LOCATOR_BUTTON_USER_LIST).click(); 
  }

  activationAccount(data) {
    // Clique sur le bouton "Approuver" pour l'utilisateur spécifié
    cy.xpath(`//tr[contains(.,'${data.username}')]//*[contains(text(), "Approuver")]`).click(); 
    // Vérifie que le bouton "Bloquer" est visible pour l'utilisateur spécifié
    cy.xpath(`//tr[contains(.,'${data.username}')]//*[contains(text(), "Bloquer")]`).should('be.visible'); 
  }
}

export default PageGestionCompte;
