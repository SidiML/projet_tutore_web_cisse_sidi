import { faker } from "@faker-js/faker";
import PageSouscription from "../pages/PageSouscription";

const pageSouscription = new PageSouscription();

class StepSouscription {
  CreatePart(data) {
    pageSouscription.clickRegister(); // Clique sur le lien d'inscription
    pageSouscription.setType(data.type); // Sélectionne le type de compte
    const prenom = faker.person.firstName();
    data.prenom = prenom;
    pageSouscription.setPrenom(prenom); // Saisit le prénom dans le champ correspondant
    const nom = faker.person.lastName();
    data.nom = nom;
    pageSouscription.setNom(nom); // Saisit le nom dans le champ correspondant
    pageSouscription.setDateNaissance(data.dateNaissance); // Saisit la date de naissance dans le champ correspondant
    pageSouscription.setAdresse(data.adresse); // Saisit l'adresse dans le champ correspondant
    pageSouscription.setPays(data.pays); // Sélectionne le pays dans la liste déroulante correspondante
    pageSouscription.setVille(data.ville); // Sélectionne la ville dans la liste déroulante correspondante
    pageSouscription.setCodePostal(data.codePostal); // Saisit le code postal dans le champ correspondant
    pageSouscription.setPassport(data.passport); // Saisit le numéro de passeport dans le champ correspondant
    pageSouscription.setCIN(data.cin); // Saisit le numéro de CIN dans le champ correspondant
    const username = pageSouscription.generateEmail(prenom, nom);
    data.username = username;
    pageSouscription.setEmail(username); // Saisit l'adresse e-mail dans le champ correspondant
    pageSouscription.setTel(data.tel); // Saisit le numéro de téléphone dans le champ correspondant
    pageSouscription.setPassword(data.password); // Saisit le mot de passe dans le champ correspondant
    pageSouscription.setPasswordConfirm(data.confirmPassword); // Saisit à nouveau le mot de passe dans le champ correspondant
    const nomconj = faker.person.lastName();
    data.nomConjoint = nomconj;
    pageSouscription.setNomConjoint(nomconj); // Saisit le nom du conjoint dans le champ correspondant
    const prenomconj = faker.person.lastName();
    data.prenomConjoint = prenomconj;
    pageSouscription.setPrenomConjoint(prenomconj); // Saisit le prénom du conjoint dans le champ correspondant
    pageSouscription.setDateNaissanceConjoint(data.dateNaissanceConjoint); // Saisit la date de naissance du conjoint dans le champ correspondant
    pageSouscription.validate(); // Clique sur le bouton de validation
    return data;
  }

  CreatePro(data) {
    pageSouscription.clickRegister(); // Clique sur le lien d'inscription
    pageSouscription.setType(data.type); // Sélectionne le type de compte
    const prenom = faker.person.firstName();
    data.prenom = prenom;
    pageSouscription.setPrenom(prenom); // Saisit le prénom dans le champ correspondant
    const nom = faker.person.lastName();
    data.nom = nom;
    pageSouscription.setNom(nom); // Saisit le nom dans le champ correspondant
    pageSouscription.setDateNaissance(data.dateNaissance); // Saisit la date de naissance dans le champ correspondant
    pageSouscription.setAdresse(data.adresse); // Saisit l'adresse dans le champ correspondant
    pageSouscription.setPays(data.pays); // Sélectionne le pays dans la liste déroulante correspondante
    pageSouscription.setVille(data.ville); // Sélectionne la ville dans la liste déroulante correspondante
    pageSouscription.setCodePostal(data.codePostal); // Saisit le code postal dans le champ correspondant
    pageSouscription.setPassport(data.passport); // Saisit le numéro de passeport dans le champ correspondant
    pageSouscription.setCIN(data.cin); // Saisit le numéro de CIN dans le champ correspondant
    const username = pageSouscription.generateEmail(prenom, nom);
    data.username = username;
    pageSouscription.setEmail(username); // Saisit l'adresse e-mail dans le champ correspondant
    pageSouscription.setTel(data.tel); // Saisit le numéro de téléphone dans le champ correspondant
    pageSouscription.setPassword(data.password); // Saisit le mot de passe dans le champ correspondant
    pageSouscription.setPasswordConfirm(data.confirmPassword); // Saisit à nouveau le mot de passe dans le champ correspondant
    pageSouscription.setRaisonSociale(data.raisonSociale); // Sélectionne la raison sociale dans la liste déroulante correspondante
    pageSouscription.setSiret(data.siret); // Saisit le numéro de SIRET dans le champ correspondant
    pageSouscription.setNumberOfEmployees(data.nombreSalarie); // Sélectionne le nombre de salariés dans la liste déroulante correspondante
    pageSouscription.validate(); // Clique sur le bouton de validation
    return data;
  }

  CreatePartExistant(data) {
    pageSouscription.clickRegister(); // Clique sur le lien d'inscription
    pageSouscription.setType(data.type); // Sélectionne le type de compte
    pageSouscription.setPrenom(data.prenom); // Saisit le prénom dans le champ correspondant
    pageSouscription.setNom(data.nom); // Saisit le nom dans le champ correspondant
    pageSouscription.setDateNaissance(data.dateNaissance); // Saisit la date de naissance dans le champ correspondant
    pageSouscription.setAdresse(data.adresse); // Saisit l'adresse dans le champ correspondant
    pageSouscription.setPays(data.pays); // Sélectionne le pays dans la liste déroulante correspondante
    pageSouscription.setVille(data.ville); // Sélectionne la ville dans la liste déroulante correspondante
    pageSouscription.setCodePostal(data.codePostal); // Saisit le code postal dans le champ correspondant
    pageSouscription.setPassport(data.passport); // Saisit le numéro de passeport dans le champ correspondant
    pageSouscription.setCIN(data.cin); // Saisit le numéro de CIN dans le champ correspondant
    pageSouscription.setEmail(data.username); // Saisit l'adresse e-mail dans le champ correspondant
    pageSouscription.setTel(data.tel); // Saisit le numéro de téléphone dans le champ correspondant
    pageSouscription.setPassword(data.password); // Saisit le mot de passe dans le champ correspondant
    pageSouscription.setPasswordConfirm(data.confirmPassword); // Saisit à nouveau le mot de passe dans le champ correspondant
    pageSouscription.setNomConjoint(data.nomConjoint); // Saisit le nom du conjoint dans le champ correspondant
    pageSouscription.setPrenomConjoint(data.prenomConjoint); // Saisit le prénom du conjoint dans le champ correspondant
    pageSouscription.setDateNaissanceConjoint(data.dateNaissanceConjoint); // Saisit la date de naissance du conjoint dans le champ correspondant
    pageSouscription.validate(); // Clique sur le bouton de validation
    return data;
  }
}

export default StepSouscription;