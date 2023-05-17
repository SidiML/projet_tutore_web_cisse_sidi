class SubscriptionForm {
  locatorLinkRegister;
  locatorInputPrenom;
  locatorInputNom;
  locatorInputDateNaissance;
  locatorInputAdresse;
  locatorSelectPays;
  locatorSelectVille;
  locatorInputCP;
  locatorInputPassport;
  locatorInputCIN;
  locatorInputUsername;
  locatorInputTel;
  locatorInputPassword;
  locatorInputConfirmPassword;
  locatorInputNomConjoint;
  locatorInputPrenomConjoint;
  locatorInputDateNaissanceConjoint;
  locatorSelectRaisonSociale;
  locatorInputSiret;
  locatorSelectNombreSalarie;
  locatorButtonValider;

  constructor() {
    this.locatorLinkRegister = '//a[@href="/register"]';
    this.locatorInputPrenom = '//input[@formcontrolname="nom"]';
    this.locatorInputNom = '//input[@formcontrolname="prenom"]';
    this.locatorInputDateNaissance = '//input[@formcontrolname="dateNaissance"]';
    this.locatorInputAdresse = '//input[@formcontrolname="adresse"]';
    this.locatorSelectPays = '//select[@formcontrolname="currentPays"]';
    this.locatorSelectVille = '//select[@formcontrolname="ville"]';
    this.locatorInputCP = '//input[@formcontrolname="codePostal"]';
    this.locatorInputPassport = '//input[@formcontrolname="passport"]';
    this.locatorInputCIN = '//input[@formcontrolname="cin"]';
    this.locatorInputUsername = '//input[@formcontrolname="username"]';
    this.locatorInputTel = '//input[@formcontrolname="tel"]';
    this.locatorInputPassword = '//input[@formcontrolname="password"]';
    this.locatorInputConfirmPassword = '//input[@formcontrolname="confirmPassword"]';
    this.locatorInputNomConjoint = '//input[@formcontrolname="nomConjoint"]';
    this.locatorInputPrenomConjoint = '//input[@formcontrolname="prenomConjoint"]';
    this.locatorInputDateNaissanceConjoint = '//input[@formcontrolname="dateNaissanceConjoint"]';
    this.locatorSelectRaisonSociale = '//select[@formcontrolname="raisonSociale"]';
    this.locatorInputSiret = '//input[@formcontrolname="siret"]';
    this.locatorSelectNombreSalarie = '//select[@formcontrolname="nombreSalarie"]';
    this.locatorButtonValider = '//button[@class="btn btn-primary"]';
  }

  clickRegister() {
    cy.xpath(this.locatorLinkRegister).click();
  }

  setPrenom(texte) {
    cy.xpath(this.locatorInputPrenom).type(texte);
  }

  setNom(texte) {
    cy.xpath(this.locatorInputNom).type(texte);
  }

  setDateNaissance(texte) {
    cy.xpath(this.locatorInputDateNaissance).type(texte);
  }

  setAdresse(texte) {
    cy.xpath(this.locatorInputAdresse).type(texte);
  }

  setPays(texte) {
    cy.xpath(this.locatorSelectPays).select(texte);
  }

  setVille(texte) {
    cy.xpath(this.locatorSelectVille).select(texte);
  }

  setCodePostal(texte) {
    cy.xpath(this.locatorInputCP).type(texte);
  }

  setPassport(texte) {
    cy.xpath(this.locatorInputPassport).type(texte);
  }

  setCIN(texte) {
    cy.xpath(this.locatorInputCIN).type(texte);
  }

  setEmail(texte) {
    cy.xpath(this.locatorInputUsername).type(texte);
  }

  setTel(texte) {
    cy.xpath(this.locatorInputTel).type(texte);
  }

  setPassword(texte) {
    cy.xpath(this.locatorInputPassword).type(texte);
    cy.xpath(this.locatorInputConfirmPassword).type(texte);
  }

  setNomConjoint(texte) {
    cy.xpath(this.locatorInputNomConjoint).type(texte);
  }

  setPrenomConjoint(texte) {
    cy.xpath(this.locatorInputPrenomConjoint).type(texte);
  }

  setDateNaissanceConjoint(texte) {
    cy.xpath(this.locatorInputDateNaissanceConjoint).type(texte);
  }

  setRaisonSociale(texte) {
    cy.xpath(this.locatorSelectRaisonSociale).select(texte);
  }

  setSiret(texte) {
    cy.xpath(this.locatorInputSiret).type(texte);
  }

  setNumberOfEmployees(texte) {
    cy.xpath(this.locatorSelectNombreSalarie).select(texte);
  }

  validate() {
    cy.xpath(this.locatorButtonValider).click();
    cy.waitUntil(() => cy.location().should(loc => loc.pathname.includes('/login')));
  }
}

export default SubscriptionForm;
