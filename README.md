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

A ce stade là si git vous annonce que votre repo est à jour et qu'il n'y a rien de nouveau, vous pouvez directement fermé votre feature dans le cas contraire lisez la suite (vous pouvez quand même la lire sans ça !).
Ensuite on rebascule sur notre feature et on merge la **develop** dedans.

```
git checkout featureOnAFaitLeTour
git merge develop
```

Il se peut (si votre binome a été plus rapide que vous) que vous rencontriez des conflits à ce moment là, c'est maintenant que votre IDE est votre ami :)
Une fois vos conflit résolu vous pouvez clôturer votre branche ! Encore une fois n'oubliez pas de prévenir votre binôme que vous allez le faire, on sait jamais il peut-être encore une fois (il vous en veut ^^) été plus rapide que vous !

```
git flow feature finish featureOnAFaitLeTour
```
