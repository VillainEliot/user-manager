🧑‍💼 User Manager — Gestion d’utilisateurs (Angular + Express)

🌐 Description

User Manager est une mini application fullstack permettant de gérer des utilisateurs simplement et efficacement.
Elle combine un frontend Angular moderne avec Tailwind CSS pour le design, et un backend Express léger fonctionnant entièrement en mémoire (sans base de données).

L’objectif est de démontrer une structure de projet claire, maintenable et fonctionnelle, tout en offrant une expérience utilisateur fluide et esthétique.

⚙️ Stack technique

Frontend :

⚡ Angular 20 (standalone components)

🎨 Tailwind CSS v4 pour le style responsive et moderne

🔁 RxJS / Observables pour les appels à l’API

🧩 TypeScript 5.9+

Backend :

🧠 Express.js

🚫 Aucune base de données : stockage en mémoire

🔄 API REST minimaliste (GET /users, POST /users)

✨ Fonctionnalités principales

✅ Affichage d’une liste d’utilisateurs sous forme de tableau

🔍 Recherche en temps réel par nom

➕ Formulaire d’ajout d’utilisateur (nom, email, rôle)

🎨 Interface responsive

⚙️ Communication HTTP via un service Angular dédié


🚀 Installation et exécution

1️⃣ Cloner le projet

Backend :
https://github.com/VillainEliot/user-manager-api.git

Frontend :
https://github.com/VillainEliot/user-manager.git

2️⃣ Démarrer le backend

cd user-manager-api

npm install

npm start

Serveur lancé sur http://localhost:3000

3️⃣ Démarrer le frontend

cd user-manager

npm install

ng serve

Frontend accessible sur http://localhost:4200
