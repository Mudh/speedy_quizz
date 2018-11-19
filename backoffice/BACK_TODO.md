# Process d'un jeu

## Lancement du jeu

Au moment où le joueur clique sur le choix de son niveau

Une fonction ira :
- décrémenter le nombre de partie du joueur
- chercher les questions en lien avec le thème choisi (via le thème ID)
- les mélanger
- en selectionner 15 (avec les réponses associées) ** limite avec queryBuilder 
- les renvoyer en JSON

*** DEROULEMLENT DU JEU EN JS ***

une fonction qui recoit le nom du joker utilisé et décrémenter en BDD

*** FIN DU JEU ***

Renvoi des données de partie en JSON

Une fonction ira :
- Receptionner les données du jeu
- Mettre à jour la BDD

# Ce qui sera fait côté BACK :

- Envoi des données joueur (nb partie, nb jokers etc..)
- Envoi des données d'affichage (classement, profil )
- Envoi des questions/réponses au lancement du jeu
- Reception des données du jeu à la fin de la partie et mis à jour BDD
- Incrémentation nombre de partie chaque 24h (cron)
- Insertiion en BDD des inscriptions de nouveau joueur
- Sécurisation du site via les rôles

