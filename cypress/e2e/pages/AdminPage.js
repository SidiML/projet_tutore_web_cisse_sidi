class AdminPage {
  locatorButtonConfig = '#adminConfig';
  locatorButtonUser = '//a[@routerlink="/admin/utilisateur"]';
  locatorButtonUserList = '//a[@routerlink="/admin/userList"]';

  accessConfig() {
    cy.get(this.locatorButtonConfig).click();
  }

  accessUsers() {
    cy.xpath(this.locatorButtonUser).click();
  }

  accessUserList() {
    cy.xpath(this.locatorButtonUserList).click();
  }

  activateAccount(username) {
    cy.xpath(`//tr[contains(.,'${username}')]//*[contains(text(), 'Approuver')]`).click();
    cy.xpath(`//tr[contains(.,'${username}')]//*[contains(text(), 'Bloquer')]`).should('be.visible');
    cy.xpath(`//tr[contains(.,'${username}')]`).screenshot('ACTIVATION');
  }
}

export default AdminPage;
