# Projet Speedy Quiz

## Git Flow + manipulation de branche

Créer une nouvelle feature:

En premier lieu depuis la **develop**, on vérifie si il n'y a rien de nouveau.

```
git pull
```

Puis on crée une nouvelle branche de feature

```
git flow feature start nouvelleFeature
```

Clôturer une feature:

Avant de clôturer une branche de feature, on vérifie (comme à sa création) si il n'y a rien de nouveau sur la **develop**. Donc on bascule sur la **develop** et on pull pour mettre à jour notre **develop** par rapport à celle du repo github.

```
git checkout develop
git pull
```

git checkout master #
git pull # update local master from remote master
git checkout <your_branch>
git merge master # solve merge conflicts if you have`
