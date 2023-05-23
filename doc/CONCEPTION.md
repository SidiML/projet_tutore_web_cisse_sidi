# Projet de fin de Formation POEI


## Conception des Tests Web Automatisés avec Cypress sur le site Open Cruise

### Besions:

* Un site de eCommerce pour permettre à des particuliers agences de voyages de réaliser  une réservation de croisières, le site met à disposition des croisières de differents affrêteurs.

---

### Exigences:

* Authentification
* Choisir une croisière
* Effectuer et gerer une reservation
* Tunnel de Paiement

---

### Fonctionnalités:

1. Connexion
2. Réinitialiser un MDP
3. Inscription
4. Page d'accueil
5. Recherche
6. Trier
7. Filtrer
8. Afficher Croisière
9. Saisir infos réservation
10. Promotions
11. Panier
12. Payer

Voici quelques cas de test que je vais essayer d'automatiser dans le cadre de se TP:

---

### Tableaux des tests:

| ID TEST  | NOM TEST                         | DESCRIPTION / BUT                                                          | TYPE TEST    | TEST TAG   | PREREQUIS          | ASSERTIONS                                                                                                     |
| -------- | -------------------------------- | -------------------------------------------------------------------------- | ------------ | ---------- | ------------------ | -------------------------------------------------------------------------------------------------------------- |
| Test-001 | Connexion Admin                  | Se connecter avec un compte admin valide                                  | Test positif | conn-test  | Identifiant valide | Page-d'acceuil avec le message:<br />"Bienvenue Admin Test"                                                   |
| Test-002 | Compte invalide                  | Se connecter avec un compte invalide et<br />verifier le message d'erreur. | Test positif | conn-test  | Aller sur l'url    | Message d'erreur en rouge<br />avec la phrase:<br />"Mot de passe ou compte invalide"""                        |
| Test-003 | Inscription Compte Particulier   | Création d'un compte Particulier                                          | Test positif | inscr-test | Aller sur l'url    | Page-d'acceuil avec le message:<br />"Bienvenue Nom Prenom"                                                   |
| Test-004 | Inscription Compte Professionnel | Création d'un compte Professionnel                                        | Test positif | inscr-test | Aller sur l'url    | Page-d'acceuil avec le message:<br />"Bienvenue Nom Prenom"                                                   |
| Test-005 | Inscription Compte Particulier   | Création d'un compte Particulier/Email existant                           | Test Negatif | inscr_test | Aller sur l'url    | Message d'erreur en rouge<br />avec la phrase:<br />"l'email est déjà utilisé. Essayez<br />un autre email" |
| Test-006 | Inscription Compte Professionnel | Création d'un compte Professionnel avec un<br />Assistant                 | Test positif | inscr-test | Aller sur l'url    |                                                                                                                |
