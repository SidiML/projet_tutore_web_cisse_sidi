# Rapport des Tests Automatisés - Environnement OK vs Environnement KO

Après l'exécution des tests automatisés sur les environnements OK et KO, les résultats suivants ont été observés :

## Environnement OK

Les tests automatisés suivants ont été exécutés avec succès sur l'environnement OK :

1. **Se Connecter Compte Valide** : Ce test a réussi à se connecter avec des identifiants valides et a affiché le message de bienvenue attendu.
2. **Se Connecter Compte Invalide** : Ce test a détecté les identifiants invalides et a affiché le message d'erreur approprié.
3. **Inscription Compte Particulier** : Ce test a réussi à créer un compte particulier, à l'activer en tant qu'administrateur et à afficher le message de bienvenue attendu lors de la connexion avec le nouveau compte.
4. **Inscription Compte Professionnel** : Ce test a réussi à créer un compte professionnel, à l'activer en tant qu'administrateur et à afficher le message de bienvenue attendu lors de la connexion avec le nouveau compte.
5. **Inscription Compte Particulier Avec Compte Existant** : Ce test a détecté qu'un compte particulier avec des informations existantes avait été tenté de s'inscrire et a affiché le message d'erreur approprié.

## Environnement KO

Les résultats des tests automatisés sur l'environnement KO sont les suivants :

1. **Se Connecter Compte Valide** : Ce test a réussi à se connecter avec des identifiants valides et a affiché le message de bienvenue attendu.
2. **Se Connecter Compte Invalide** : Ce test a détecté les identifiants invalides et a affiché le message d'erreur approprié.

Cependant, les tests suivants n'ont pas pu être exécutés avec succès sur l'environnement KO :

1. **Inscription Compte Particulier** : Ce test n'a pas pu être exécuté correctement sur l'environnement KO. Des problèmes ont été rencontrés lors de la création du compte particulier.
2. **Inscription Compte Professionnel** : Ce test n'a pas pu être exécuté correctement sur l'environnement KO. Des problèmes ont été rencontrés lors de la création du compte professionnel.
3. **Inscription Compte Particulier Avec Compte Existant** : Ce test n'a pas pu être exécuté correctement sur l'environnement KO. Des problèmes ont été rencontrés lors de la détection d'un compte particulier existant lors de l'inscription.

## Conclusion

Les tests automatisés ont montré que l'application Web Open Cruise fonctionne correctement sur l'environnement OK, avec tous les tests passant avec succès. Cependant, des problèmes ont été identifiés sur l'environnement KO, affectant les fonctionnalités d'inscription des comptes particuliers et professionnels.
