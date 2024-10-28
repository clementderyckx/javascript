# Projet de Gestion de Films

## Description

Ce projet a pour but de créer une application de gestion de films en utilisant Node.js. Les principales fonctionnalités incluent la création de scripts exécutables, un outil de ligne de commande, une entité Movie, un service Movie, un système de mise en cache pour les requêtes HTTP, et le renvoi des requêtes au format JSON.

## Fonctionnalités

1. **Script Exécutable**
   - Créer le script `executables/init.exec.js`
   - Créer les dossiers suivants :
     - `.cache`
     - `public`
     - `public/images`
     - `public/images/flags`
     - `src`
     - `src/entities`
     - `src/services`
     - `cli`
   - Créer les fichiers suivants :
     - `src/services/Cli.js`
     - `src/services/MovieService.js`
     - `src/entities/Movie.js`
     - `.cache/tmdb-requests.json`
   - `languages.json`
   - Remplacer les éléments du fichier languages.json pour les simplifier avec seulement `{ "code", "name", "flag" }` en propriété.
   - Télécharger tous les drapeaux dans le scripts de démarrage
   - Ajouter les drapeaux 

2. **Outil de Ligne de Commande avec `Inquirer.js`**
   - Utiliser Inquirer.js pour créer un outil de ligne de commande pour l'application.
   - Lancer le script de ligne de commande.
   - Le script doit afficher un message d'accueil et suggérer les langues de films disponibles.
   - Les langues de films sont disponibles dans le fichier `datas/languages.json`

3. **Entity Movie**
   - Créer une entité `Movie`.

4. **Movie Service**
   - Créer le `Movie Service` en instanciant l'interface (classe abstraite en JS) `Service`.
   - La classe abstraite vérifie l'existence et le type de la clé API.
   - Le `Movie Service` prend en constructeur une clé d'API TMDB.
   - Méthode 1 : Récupérer les genres dans la bonne langue
   - Méthode 2 : Récupérer les films populaires de la langue passée en paramètres.
   - Méthode 3 : Sauvegarder les films populaires dans un fichier JSON.
   - Méthode 4 : Vérifier si la requête a été mise en cache

5. **Système de Mise en Cache**
Créer un système de mise en cache pour les requêtes HTTP sortante vers `tmdb`.
   - Créer le `CacheService`
   - Toute requête passée il y a moins d'1h est retournée depuis ce fichier
   - Autrement, on met à jour le cache avec une nouvelle requête vers `tmdb`
   - Passer le `CacheService` en Dépendance du `MovieService`

6. **API**
   - GET/ Languages
   - GET/ Genres
   - GET/ Movies
   - Renvoyer les requêtes via un format JSON.

7. **Frontend**
   - Créer un frontend en Vanilla JS ou EJS (au choix)
   - Entrer la langue de l'utilisateur via un select
     - La langue par défaut doit-être celle du navigateur
     - Le select doit contenir le drapeau de chaque langue
   - Afficher les films populaires dans une section
   - Afficher les genres dans une autre section
   - Créer la page des genres pour chaque genre