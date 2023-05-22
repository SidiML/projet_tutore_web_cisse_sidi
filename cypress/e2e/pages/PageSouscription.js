import { faker } from "@faker-js/faker"; // Importe le module faker pour générer des données aléatoires
import 'cypress-wait-until'; // Importe le module cypress-wait-until pour attendre certaines conditions

const locatorLinkRegister = '//a[@href="/register"]'; // XPath locator pour le lien d'inscription
const locatorInputPrenom = '//input[@formcontrolname="nom"]'; // XPath locator pour le champ "Prénom"
const locatorInputNom = '//input[@formcontrolname="prenom"]'; // XPath locator pour le champ "Nom"
const locatorInputDateNaissance = '//input[@formcontrolname="dateNaissance"]'; // XPath locator pour le champ "Date de naissance"
const locatorInputAdresse = '//input[@formcontrolname="adresse"]'; // XPath locator pour le champ "Adresse"
const locatorSelectPays = '//select[@formcontrolname="currentPays"]'; // XPath locator pour la liste déroulante "Pays"
const locatorSelectVille = '//select[@formcontrolname="ville"]'; // XPath locator pour la liste déroulante "Ville"
const locatorInputCP = '//input[@formcontrolname="codePostal"]'; // XPath locator pour le champ "Code postal"
const locatorInputPassport = '//input[@formcontrolname="passport"]'; // XPath locator pour le champ "Passport"
const locatorInputCIN = '//input[@formcontrolname="cin"]'; // XPath locator pour le champ "CIN"
const locatorInputUsername = '//input[@formcontrolname="username"]'; // XPath locator pour le champ "Nom d'utilisateur"
const locatorInputTel = '//input[@formcontrolname="tel"]'; // XPath locator pour le champ "Téléphone"
const locatorInputPassword = '//input[@formcontrolname="password"]'; // XPath locator pour le champ "Mot de passe"
const locatorInputConfirmPassword = '//input[@formcontrolname="confirmPassword"]'; // XPath locator pour le champ "Confirmer le mot de passe"
const locatorInputNomConjoint = '//input[@formcontrolname="nomConjoint"]'; // XPath locator pour le champ "Nom du conjoint"
const locatorInputPrenomConjoint = '//input[@formcontrolname="prenomConjoint"]'; // XPath locator pour le champ "Prénom du conjoint"
const locatorInputDateNaissanceConjoint = '//input[@formcontrolname="dateNaissanceConjoint"]'; // XPath locator pour le champ "Date de naissance du conjoint"
const locatorSelectRaisonSociale = '//select[@formcontrolname="raisonSociale"]'; // XPath locator pour la liste déroulante "Raison sociale"
const locatorInputSiret = '//input[@formcontrolname="siret"]'; // XPath locator pour le champ "Siret"
const locatorSelectNombreSalarie = '//select[@formcontrolname="nombreSalarie"]'; // XPath locator pour la liste déroulante "Nombre de salariés"
const locatorButtonValider = '//button[@class="btn btn-primary"]'; // XPath locator pour le bouton "Valider"

class PageSouscription {
  clickRegister() {
     // Clique sur le lien d'inscription
    return cy.xpath(locatorLinkRegister).click();
  }

  setType(index) {
    // Sélectionne un type en fonction de l'index fourni
    cy.get('input[name="type"]').eq(index).check(); 
  }

  setPrenom(texte) {
    // Saisit le prénom dans le champ correspondant
    return cy.xpath(locatorInputPrenom).first().type(texte); 
  }

  setNom(texte) {
    // Saisit le nom dans le champ correspondant
    return cy.xpath(locatorInputNom).first().type(texte); 
  }

  setDateNaissance(texte) {
    // Saisit la date de naissance dans le champ correspondant
    return cy.xpath(locatorInputDateNaissance).first().type(texte); 
  }

  setAdresse(texte) {
    // Saisit l'adresse dans le champ correspondant
    return cy.xpath(locatorInputAdresse).first().type(texte); 
  }

  setPays(texte) {
    // Sélectionne un pays dans la liste déroulante correspondante
    return cy.xpath(locatorSelectPays).first().select(texte); 
  }

  setVille(texte) {
    // Sélectionne une ville dans la liste déroulante correspondante
    return cy.xpath(locatorSelectVille).first().select(texte); 
  }

  setCodePostal(texte) {
    // Saisit le code postal dans le champ correspondant
    return cy.xpath(locatorInputCP).first().type(texte); 
  }

  setPassport(texte) {
    // Saisit le numéro de passeport dans le champ correspondant
    return cy.xpath(locatorInputPassport).first().type(texte); 
  }

  setCIN(texte) {
    // Saisit le numéro de CIN dans le champ correspondant
    return cy.xpath(locatorInputCIN).first().type(texte); 
  }

  setEmail(texte) {
    // Saisit l'email dans le champ correspondant
    return cy.xpath(locatorInputUsername).first().type(texte); 
  }

  generateEmail(firstName, lastName) {
    // Génère un nom de domaine aléatoire
    const domain = faker.internet.domainName(); 
    // Retourne l'email généré en concaténant le prénom, le nom et le domaine
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`; 
  }

  setTel(texte) {
    // Saisit le numéro de téléphone dans le champ correspondant
    return cy.xpath(locatorInputTel).first().type(texte); 
  }

  setPassword(texte) {
    // Saisit le mot de passe dans le champ correspondant
    return cy.xpath(locatorInputPassword).first().type(texte); 
  }

  setPasswordConfirm(texte) {
    // Saisit la confirmation du mot de passe dans le champ correspondant
    return cy.xpath(locatorInputConfirmPassword).first().type(texte); 
  }

  setNomConjoint(texte) {
    // Saisit le nom du conjoint dans le champ correspondant
    return cy.xpath(locatorInputNomConjoint).type(texte); 
  }

  setPrenomConjoint(texte) {
    // Saisit le prénom du conjoint dans le champ correspondant
    return cy.xpath(locatorInputPrenomConjoint).type(texte); 
  }

  setDateNaissanceConjoint(texte) {
    // Saisit la date de naissance du conjoint dans le champ correspondant
    return cy.xpath(locatorInputDateNaissanceConjoint).type(texte); 
  }

  setRaisonSociale(texte) {
    // Sélectionne une raison sociale dans la liste déroulante correspondante
    return cy.xpath(locatorSelectRaisonSociale).first().select(texte); 
  }

  setSiret(texte) {
    // Saisit le numéro de Siret dans le champ correspondant
    return cy.xpath(locatorInputSiret).first().type(texte); 
  }

  setNumberOfEmployees(texte) {
    // Sélectionne le nombre de salariés dans la liste déroulante correspondante
    return cy.xpath(locatorSelectNombreSalarie).first().select(texte); 
  }

  validate() {
    // Clique sur le bouton "Valider"
    return cy.xpath(locatorButtonValider).first().click(); 
  }
}

export default PageSouscription;
