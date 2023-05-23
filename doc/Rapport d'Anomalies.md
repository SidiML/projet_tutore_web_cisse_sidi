**Rapport d'anomalie - Environnement KO**

**Contexte**
L'environnement de test "KO" (opencruise-ko.sogeti-center.cloud) a été utilisé pour exécuter les tests automatisés du projet "projet_tutore_web_cisse_sidi". Les cas de test 1 et 2 ont réussi, mais les autres cas de test ont échoué.

**Anomalie**

1. Test 3 - "Inscription Compte Particulier" :

   - Description : Ce cas de test vise à vérifier le processus d'inscription d'un compte particulier.
   - Anomalie : Le test a échoué lors de la création du compte. Une erreur est survenue lors de l'enregistrement des informations du compte particulier. Cela a entraîné une impossibilité de se connecter ultérieurement avec les informations fournies.
2. Test 4 - "Inscription Compte Professionnel" :

   - Description : Ce cas de test vise à vérifier le processus d'inscription d'un compte professionnel.
   - Anomalie : Le test a échoué lors de la création du compte. Une erreur est survenue lors de l'enregistrement des informations du compte professionnel. Cela a entraîné une impossibilité de se connecter ultérieurement avec les informations fournies.
3. Test 5 - "Inscription Compte Particulier Avec Compte Existant" :

   - Description : Ce cas de test vise à vérifier le comportement du système lorsqu'un compte particulier est créé avec des informations déjà utilisées.
   - Anomalie : Le test a échoué car le système n'a pas détecté l'existence du compte précédemment créé. Il a permis la création d'un nouveau compte particulier avec les mêmes informations, ce qui est une violation des règles de gestion.

**Impact**
Les anomalies identifiées dans l'environnement KO ont les impacts suivants :

- Les utilisateurs ne peuvent pas créer de comptes particuliers ou professionnels avec succès, ce qui limite leur accès aux fonctionnalités du site.
- La détection des doublons d'informations lors de l'inscription n'est pas correctement implémentée, ce qui peut entraîner des incohérences dans la base de données des utilisateurs.

**Recommandations**
Pour corriger les anomalies et améliorer la fiabilité de l'environnement KO, les recommandations suivantes sont proposées :

1. Test 3 - "Inscription Compte Particulier" :

   - Vérifier et résoudre l'erreur survenue lors de l'enregistrement des informations du compte particulier.
   - Effectuer des tests supplémentaires pour valider que le compte particulier peut être créé avec succès et utilisé pour se connecter ultérieurement.
2. Test 4 - "Inscription Compte Professionnel" :

   - Vérifier et résoudre l'erreur survenue lors de l'enregistrement des informations du compte professionnel.
   - Effectuer des tests supplémentaires pour valider que le compte professionnel peut être créé avec succès et utilisé pour se connecter ultérieurement.
3. Test 5 - "Inscription Compte Particulier Avec Compte Existant" :

   - Mettre en place une vérification appropriée pour détecter les comptes existants lors de la création de nouveaux comptes particuliers.
   - Empêcher la création de comptes avec

 des informations déjà utilisées, conformément aux règles de gestion.

**Conclusion**
L'environnement KO présente des anomalies dans les cas de test liés à l'inscription des comptes particuliers et professionnels, ainsi qu'à la détection des doublons lors de la création de nouveaux comptes. La résolution de ces anomalies est essentielle pour garantir la fiabilité et la conformité du système. Il est recommandé de mettre en œuvre les recommandations ci-dessus afin de corriger les problèmes identifiés et d'améliorer la qualité des tests automatisés dans cet environnement.
