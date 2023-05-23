**Rapport d'Automatisation des Tests - Projet projet_tutore_web_cisse_sidi**

**Informations générales**

- Nom du projet : projet_tutore_web_cisse_sidi
- Version : 1.0.0
- Description : TP Automatisation des tests avec Cypress sur le site Web OPENCRUISE

**Introduction**
Ce rapport présente l'automatisation des tests réalisée dans le cadre du projet "projet_tutore_web_cisse_sidi" utilisant Cypress. L'objectif principal de l'automatisation des tests est d'améliorer l'efficacité, la fiabilité et la qualité des tests effectués sur le site Web OPENCRUISE. Les tests sont exécutés à l'aide de scénarios écrits en langage naturel avec l'utilisation de Cucumber et Javascript.

**Scénarios de test**
Le projet comprend plusieurs scénarios de test qui couvrent différentes fonctionnalités du site OPENCRUISE OK. Les scénarios sont organisés en fonctionnalités spécifiques et sont écrits en utilisant la syntaxe Gherkin de Cucumber. Les scénarios de test incluent :

1. Se Connecter Compte Valide (TEST01) :

   - Ce scénario teste la fonctionnalité de connexion en utilisant un compte valide.
   - Il vérifie si l'utilisateur peut se connecter avec succès en fournissant les informations de connexion correctes.
   - Le scénario utilise la page de connexion (LoginPage) et les étapes de connexion (LoginStep).
2. Se connecter Compte invalide (TEST02) :

   - Ce scénario teste la fonctionnalité de connexion en utilisant un compte invalide.
   - Il vérifie si l'utilisateur reçoit un message d'erreur approprié lorsqu'il fournit des informations de connexion incorrectes.
   - Le scénario utilise la page de connexion (LoginPage) et les étapes de connexion (LoginStep).
3. Inscription Compte Particulier (TEST03) :

   - Ce scénario teste le processus d'inscription d'un compte particulier.
   - Il vérifie si un utilisateur peut s'inscrire avec succès en fournissant les informations requises.
   - Le scénario utilise les étapes de souscription (StepSouscription), les étapes de gestion de compte (StepGestionCompte) et les étapes de connexion (LoginStep).
4. Inscription Compte Professionnel (TEST04) :

   - Ce scénario teste le processus d'inscription d'un compte professionnel.
   - Il vérifie si un utilisateur peut s'inscrire avec succès en fournissant les informations requises.
   - Le scénario utilise les étapes de souscription (StepSouscription), les étapes de gestion de compte (StepGestionCompte) et les étapes de connexion (LoginStep).
5. Inscription Compte Particulier Avec Compte Existant (TEST05) :

   - Ce scénario teste le processus d'inscription d'un compte particulier avec un compte existant.
   - Il vérifie si l'utilisateur reçoit un message d'erreur approprié lorsqu'il essaie de s'inscrire avec un compte déjà existant.
   - Le scénario utilise les étapes de souscription (StepSouscription) et les étapes de connexion (LoginStep).

**Conclusion**
L'automatisation des tests réalisée dans le cadre du projet "projet_tutore_web_cisse_sidi" avec Cypress permet d'exécuter efficacement les tests sur le site Web OPENCRUISE. Les scénarios de test couvrent diverses fonctionnalités du site et sont écrits en langage naturel avec l'utilisation de Cucumber. Les commandes, plugins et configurations utilisés offrent une flexibilité et une personnalisation pour exécuter les tests, générer des rapports détaillés et configurer l'environnement de test. L'automatisation des tests contribue à améliorer l'efficacité, la fiabilité et la qualité des tests effectués sur le site Web OPENCRUISE.
