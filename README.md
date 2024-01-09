# Tic-Tac-Toe (React + TypeScript + Clean Architecture)

Ce projet est une implémentation du célèbre jeu Tic-Tac-Toe, développée en utilisant React, TypeScript et en suivant les principes de l'architecture propre (Clean Architecture).

## Objectif

L'objectif principal de ce projet est d'explorer la mise en œuvre de l'architecture propre au niveau des applications frontend. En suivant les principes de la Clean Architecture, le code est structuré de manière à séparer les différentes préoccupations, facilitant ainsi la maintenance, l'évolutivité et la compréhension du code.

## Inspiration

Ce projet est inspiré du tutoriel officiel sur Tic-Tac-Toe de la documentation React, disponible ici [lien](https://react.dev/learn/tutorial-tic-tac-toe). De plus, l'article Clean Architecture with React [lien](https://betterprogramming.pub/clean-architecture-with-react-cc097a08b105) a été une ressource précieuse pour guider le processus de mise en œuvre de l'architecture propre dans ce projet.

## Comment démarrer

1. Assurez-vous d'avoir Node.js installé sur votre machine.
2. Installez `pnpm` globalement avec la commande : `npm install -g pnpm`
3. Clonez ce dépôt avec la commande : `git clone https://github.com/azdYM/clean-architecture-tic-tac-toe.git`
4. Naviguez vers le répertoire du projet : `cd votre-projet`
5. Installez les dépendances avec : `pnpm install`
6. Démarrez l'application avec : `pnpm run -r --parallel dev`

## Structure du Projet

Le projet suit une structure basée sur l'architecture propre pour séparer clairement les responsabilités. Les différents répertoires comprennent :

1. **domain**: Contient les règles métiers et applicatives.
2. **infrastructure**:
   - **data**: Couche de persistance des données.
   - **ui**:
      - **react**: Contient les composants et éléments spécifiques à React.
3. **presenter**: Contient le view model.