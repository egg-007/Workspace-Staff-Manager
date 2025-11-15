🏢 Employee Management Interface — README
📌 Contexte du projet

Ce projet propose une interface graphique permettant de gérer les employés d'une entreprise directement sur un plan d’étage. L’application offre une gestion visuelle, intuitive et dynamique, tout en appliquant des règles métier liées aux rôles et aux zones.

🎯 Objectifs généraux

Ajouter, déplacer et supprimer des employés depuis une interface graphique.

Respecter les restrictions métiers selon le rôle et la zone.

Offrir une interface moderne, fluide, responsive et ergonomique.

Centraliser la gestion et la visualisation des employés.

📚 User Stories
👨‍🎨 Concepteur (UI/UX Designer)

Interface intuitive et fluide.

Palette de couleurs cohérente et icônes compréhensibles.

Versions Desktop & Mobile modernes utilisant Flexbox, Grid, formes arrondies, boutons colorés.

👨‍💻 Développeur Front-End

Création de la structure HTML avec :

une section « Unassigned Staff »

un bouton Add New Worker

Création d’une modale d’ajout avec champs :

Nom, Rôle, Photo (URL), Email, Téléphone

Expériences professionnelles (formulaire dynamique)

Prévisualisation de la photo dans la modale.

Affichage du plan comprenant 6 zones :

Salle de conférence

Réception

Salle des serveurs

Salle de sécurité

Salle du personnel

Salle d’archives

Mise en place des règles d’accès :

Réception → Réceptionnistes uniquement

Salle des serveurs → Techniciens IT uniquement

Salle de sécurité → Agents de sécurité uniquement

Managers → accès partout

Nettoyage → partout sauf Salle d’archives

Autres rôles → accès libre hors zones restreintes

Ajout d’un bouton ❌ pour retirer un employé d'une zone.

Ouverture d’un profil détaillé (photo, rôle, email, téléphone, expériences, localisation).

Bouton + dans chaque zone pour ajouter un employé admissible.

Affichage en rouge pâle des zones obligatoires mais vides (sauf conférence + personnel).

Limitation du nombre d’employés par zone.

Responsive complet + animations CSS fluides.

Validation HTML & CSS via W3C Validator.

Publication (GitHub Pages ou Vercel).

🧭 Scrum Master

Organisation des User Stories sur Trello / Jira / GitHub Projects.

Gestion des branches Git (optionnel).

Présentation finale du projet.

📱 Tailles d’écrans à gérer
Portrait

>1280px : grand écran

1024–1279px : petit écran

768–1023px : tablette

<767px : mobile

Paysage

768–1023px : mobile paysage

1024–1279px : tablette paysage

⭐ Bonus (optionnels)

Drag & Drop entre zones.

Bouton Edit pour modifier un employé non assigné.

Recherche + filtrage par nom ou rôle.

Sauvegarde automatique dans le localStorage.

Mode “Réorganisation automatique”.

Photo par défaut si aucune image n’est fournie.

🚀 Technologies recommandées

HTML5, CSS3, JavaScript

Flexbox, Grid, Animations CSS

LocalStorage

Hébergement : GitHub Pages / Vercel
