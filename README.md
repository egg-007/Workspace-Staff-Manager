🏢 Employee Management Interface — README
📌 Contexte du projet

Ce projet consiste à créer une interface graphique permettant de gérer les employés d'une entreprise directement sur un plan d’étage. L’objectif est de proposer une application ergonomique, dynamique et adaptée aux besoins réels d’organisation des ressources humaines.

L’utilisateur peut ajouter, déplacer et supprimer des employés tout en respectant les règles métier associées aux rôles.

🎯 Objectifs généraux

Ajouter, déplacer et supprimer des employés depuis une interface graphique.

Respecter les règles métier : restrictions selon le rôle et la zone.

Proposer une interface fluide, moderne, intuitive et responsive.

Centraliser la gestion des données du personnel et leur positionnement spatial.

📚 User Stories
👨‍🎨 Concepteur (UI/UX Designer)

Je conçois une interface intuitive et fluide.

Je définis une palette de couleurs cohérente et des icônes compréhensibles.

Je réalise les versions Desktop et Mobile du design, modernes et travaillées (Flexbox, Grid, style arrondi, boutons colorés : vert, orange, rouge).

👨‍💻 Développeur Front-End

Je crée la structure HTML avec une sidebar affichant:

la liste des employés non assignés ("Unassigned Staff")

un bouton "Add New Worker".

Je développe une modale d’ajout d’employé avec les champs :

Nom

Rôle

Photo (URL)

Email

Téléphone

Expériences professionnelles (ajout dynamique)

Je mets en place une prévisualisation de la photo.

J’affiche dans la zone principale le plan d’étage contenant 6 zones :

Salle de conférence

Réception

Salle des serveurs

Salle de sécurité

Salle du personnel

Salle d’archives

Je respecte les restrictions :

Réception → Réceptionnistes seulement

Salle des serveurs → Techniciens IT seulement

Salle de sécurité → Agents de sécurité seulement

Managers → accès partout

Nettoyage → partout sauf Salle d’archives

Autres rôles → accès libre sauf zones restreintes

J'ajoute un bouton ❌ sur chaque employé pour le retirer d'une zone.

Je permets d’ouvrir un profil détaillé : photo, nom, rôle, contacts, expériences, localisation.

J’ajoute un bouton + dans chaque zone pour sélectionner un employé admissible.

J'affiche en rouge pâle les zones obligatoires mais vides (sauf conférence + personnel).

J’ajoute des limites sur le nombre d’employés par zone.

Je rends l’interface responsive avec animations CSS.

Je valide HTML/CSS avec W3C.

Je publie le projet (GitHub Pages / Vercel).

🧭 Scrum Master

J'organise les User Stories via Trello, Jira ou GitHub Projects.

Je gère les branches Git (optionnel).

Je présente la démo finale.

📱 Tailles d’écrans à gérer
Portrait

> 1280px : Grand écran

1024px – 1279px : Petit écran

768px – 1023px : Tablette

< 767px : Mobile

Paysage

768px – 1023px : Mobile paysage

1024px – 1279px : Tablette paysage

⭐ Bonus (optionnels mais valorisés)

Drag & Drop pour déplacer les employés.

Bouton "Edit" pour modifier un employé non assigné.

Recherche + filtrage (nom / rôle).

Sauvegarde automatique dans le localStorage.

Mode "Réorganisation automatique" (distribution aléatoire avec règles).

Photo par défaut si aucune image n’est fournie.

🚀 Technologies recommandées

HTML5, CSS3, JavaScript

CSS : Flexbox, Grid, animations

Stockage : LocalStorage

Hébergement : GitHub Pages / Vercel
