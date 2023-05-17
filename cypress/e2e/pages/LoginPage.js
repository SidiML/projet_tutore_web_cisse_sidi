class LoginPage {
  constructor() {
    this.locatorInputUsername = '//input[@formcontrolname="username"]';
    this.locatorInputPassword = '//input[@formcontrolname="password"]';
    this.locatorButtonLogin = '//button[@class="btn btn-primary"]';
    this.locatorSelectLang = '//div[@class="login-form"]/select';
    this.locatorButtonMenu = '//button[@id="dropdownMenu2"]';
    this.locatorButtonLogoff = '//button[text()="Se déconnecter"]';
    this.locatorAlertDialog = '//div[@role="alertdialog"]';
  }

  setLanguage(text) {
    cy.get(this.locatorSelectLang).select(text);
  }

  setUsername(text) {
    cy.get(this.locatorInputUsername).type(text);
  }

  setPassword(text) {
    cy.get(this.locatorInputPassword).type(text);
  }

  signIn() {
    cy.get(this.locatorButtonLogin).click();
  }

  checkConnection(text) {
    cy.get(this.locatorButtonMenu).should("contain", text);
  }

  checkErrorMessage(text) {
    cy.get(this.locatorAlertDialog).should("contain", text).click();
    cy.get(this.locatorAlertDialog).should("not.exist");
  }

  logOff() {
    cy.get(this.locatorButtonMenu).click();
    cy.get(this.locatorButtonLogoff).click();
    cy.get(this.locatorSelectLang).should("exist");
  }
}
export default LoginPage;
