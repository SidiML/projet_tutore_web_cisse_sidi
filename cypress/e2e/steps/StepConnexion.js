import { LoginPage } from '../pages/LoginPage';
import { BaseTests } from '../BaseTests';

describe('Tests', () => {
  it('Choisir Langue', () => {
    cy.log('Choisir Langue');
    // TODO: Set Language ${LANG}
    // TODO: Recharge le TRANSLATE
  });

  it('Se Connecter Compte Valide', (compte) => {
    cy.log(`Se Connecter Compte Valide ${compte}`);
    LoginPage.setUsername(compte.username);
    LoginPage.setPassword(compte.password);
    LoginPage.signIn();
    // TODO: Check Connection ${TRANSLATE.common.header.welcome} ${compte.nom} ${compte.prenom}
  });

  it('Se Connecter Compte Invalide', () => {
    cy.log('Se Connecter Compte Invalide');
    LoginPage.setUsername('XXXXXXXXXXXX');
    LoginPage.setPassword('YYYYYYYYYYYY');
    LoginPage.signIn();
    cy.wait(1000);
    BaseTests.captureStepScreenshot('FAIL');
    // TODO: vérifier message d'erreur mot de passe ou identifiant invalide
    cy.xpath('//div[@id="toast-container"]/div/div').then((element) => {
      const val = element.text();
      cy.log(val);
      cy.waitUntil(() => element.contains(val));
    });
  });

  it('Verifier Compte Bloque', (compte) => {
    cy.log('Verifier Compte Bloque');
    LoginPage.setUsername(compte.username);
    LoginPage.setPassword(compte.password);
    LoginPage.signIn();
    // TODO: LoginPage.Check Message Erreur ${TRANSLATE.exception.connexion.CNX_ERROR_00003}
  });

  it('Se Deconnecter', () => {
    cy.log('Se Deconnecter');
    LoginPage.logOff();
  });
});
