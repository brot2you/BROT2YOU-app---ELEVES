# BROT2YOU Game Collection — Arcade

Site statique prêt pour GitHub Pages. Déposez **tous les fichiers et dossiers** à la racine du dépôt. Ouvrez le site depuis GitHub Pages ou un serveur HTTP local (le chargement de `apps.json` par fetch ne fonctionne pas en ouvrant `index.html` directement depuis le disque).

- **18 jaquettes d’origine + 2 nouvelles illustrations** : découpées proprement, une par une, à partir de la planche fournie par l’utilisateur (`Collection animée des héros éducatifs(1).png`). La résolution native de chaque vignette est limitée par la planche source (elles ne sont pas faussement présentées comme des illustrations indépendantes HD).
- **Bannière** : découpée depuis la maquette de plateforme fournie (`Collection de jeux éducatifs colorés à Londres(1).png`).
- **Audio** : `floraphonic-arcade-ui-6-229503.mp3`, déclenché après interaction utilisateur. Interrupteur Son ON/OFF.
- **Grille** : 9 colonnes sur très grand écran, 7 puis 5 puis 4 et 2 sur téléphone. Les jaquettes entières sont affichées avec `object-fit: contain`.
- **Reflets** : animation CSS légère sur la surface de chaque jaquette (désactivée si `prefers-reduced-motion`).
- **Noms / URL** : préservés depuis le fichier fourni du portail BROT2YOU.

Pour désactiver les effets sonores, utiliser le bouton « Son OFF ».


## Correction jaquettes uniformes
Les 18 images d’origine ont été recomposées sur un canevas identique de 720 × 960 pixels (format 3:4), sans recadrer les dessins originaux. Les espaces sont remplis par une extension floutée et assombrie de chaque image.

## Version 20 applications

Ajout de **WordUp Arcade** et **Dino Buddy Park** en fin de collection, en catégorie Jeux. Chaque nouvelle jaquette est stockée séparément en WebP 720 × 960 px dans `assets/covers/`. Les filtres et compteurs se mettent à jour automatiquement via `apps.json`.

## Mise à jour — 21 applications
Mind the Sound! a été ajoutée à la catégorie Oral, avec sa jaquette dédiée et son URL complète (ancre #P04 incluse).

Correctif accueil Mind the Sound! : URL racine sans #P04.


## Mise à jour : 22 applications
Ajout de **Ev@lang Quest** dans la catégorie Méthode avec une nouvelle jaquette haute définition 720×960. URL : https://brot2you.github.io/Evalang-Quest/
