# Projet CRUD avec Docker et Kubernetes

Ce projet consiste en une application CRUD (Create, Read, Update, Delete) développée avec Node.js, Express pour le backend, MongoDB pour la base de données, et React pour le frontend. L'accent principal de ce projet est la gestion des conteneurs Docker, Kubernetes, et l'orchestration de conteneurs Docker Compose.

## Technologies Utilisées

- **Backend** :
  - Langage de programmation : Node.js
  - Framework : Express
  - Base de données : MongoDB

- **Frontend** :
  - Bibliothèque JavaScript : React

- **Gestion de Conteneurs** :
  - Docker : Utilisé pour l'empaquetage des applications et la gestion des conteneurs.
  - Docker Compose : Pour orchestrer les conteneurs et simplifier le déploiement de l'application.

- **Orchestration avec Kubernetes** :
  - Fichiers YAML : Des fichiers YAML tels que `back-deployment.yaml`, `back-services.yaml`, `front-deployment.yaml`, et `front-services.yaml` sont utilisés pour déployer et exposer les services dans un cluster Kubernetes.

## Objectif Principal

L'objectif principal de ce projet est de mettre en place une infrastructure basée sur des conteneurs pour permettre un déploiement efficace de l'application. Docker est utilisé pour isoler l'application et ses dépendances, ce qui facilite la portabilité et la gestion.

## Docker Compose

Docker Compose est utilisé pour orchestrer l'exécution de plusieurs conteneurs en même temps. Le fichier `docker-compose.yml` définit la configuration de l'application, notamment les services backend et frontend, ainsi que leurs dépendances comme la base de données MongoDB.

## Kubernetes

Kubernetes est utilisé pour gérer l'orchestration des conteneurs en production. Les fichiers YAML `back-deployment.yaml`, `back-services.yaml`, `front-deployment.yaml`, et `front-services.yaml` spécifient comment les services backend et frontend sont déployés dans un cluster Kubernetes. Cela permet une gestion évolutive et automatisée de l'application.

## Flux de Travail (Workflows)

Des flux de travail (Workflows) sont mis en place pour automatiser le processus de construction, de test et de déploiement de l'application. Cela garantit que l'application est constamment mise à jour et fonctionnelle.

## Conclusion

Ce projet met l'accent sur la gestion des conteneurs Docker, Kubernetes, et Docker Compose pour garantir une mise en production efficace de l'application CRUD. Bien que l'accent ne soit pas principalement mis sur le développement, cette approche d'orchestration des conteneurs est essentielle pour la scalabilité et la gestion en production. Elle permet de déployer, de mettre à jour et de gérer l'application de manière transparente dans un environnement de production.
