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

A ce stade là si git vous annonce que votre repo est à jour et qu'il n'y a rien de nouveau, vous pouvez directement fermé votre feature. Dans le cas contraire lisez la suite (vous pouvez quand même la lire sans ça !).
Ensuite on rebascule sur notre feature et on merge la **develop** dedans.

```
git checkout featureOnAFaitLeTour
git merge develop
```

Il se peut (si votre binome a été plus rapide que vous) que vous rencontriez des conflits à ce moment là, c'est maintenant que votre IDE est votre ami :)
Une fois vos conflits résolus vous pouvez clôturer votre branche ! Encore une fois n'oubliez pas de prévenir votre binôme que vous allez le faire, on sait jamais il a peut-être, encore une fois (il vous en veut ^^), été plus rapide que vous !

```
git flow feature finish featureOnAFaitLeTour
```

Et en dernier lieu pour éviter les frayeurs, on pousse sur github depuis la **develop** (normalement git flow nous remet dessus après la fermeture de la feature)

```
git push
```

## Installer le serveur en local

**Etape 1** : Télécharger le repo et se rendre dans le sous-dossier "backoffice".

**Etape 2** : Installer composer si ce n'est pas déjà fait en tapant ce qui suit :

```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '93b54496392c062774670ac18b134c3b3a95e5a5e5c8f1a9f115f203b75bf9a129d5daa8ba6a13e2cc8a1da0806388a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

**Etape 3** : Faire un `composer install` pour installer les vendors propres à Symfo pour notre projet

**Etape 4** : Se rendre dans le fichier nommé .env, et à l'intérieur, rentrer les données de la connexion au serveur au niveau de la ligne "DATABASE_URL". Par défaut, l'utilisateur est "root" et il n'y a pas de mot de passe. Donner ensuite le nom que vous voulez à la base de données que vous aurez en local. Vous pouvez copier coller cette ligne par exemple : `DATABASE_URL=mysql://root:''@127.0.0.1:3306/speedyquizz`

**Etape 5** : Avec le terminal, rentrer la commande `php bin/console doctrine:database:create` pour créer de manière effective la base de donnée.

**Etape 6** : Avec le terminal, rentrer la commande `php bin/console doctrine:migrations:migrate`. Si ça ne marche pas, essayez d'abord de taper `php bin/console make:migration` puis retapez la 1ere commande. Tout ça permet de créer les bonnes tables qu'on a déjà configuré de notre côté.

**Etape 7** : Avec le terminal, rentrer la commande `php bin/console doctrine:fixtures:load` pour générer de fausses données.

**Etape 8** : Puis `php bin/console server:run` pour lancer le serveur.

Toutes les fausses données n'ont pas pu être crées à cause des relations entre les entités, du coup il faut en rentrer manuellement quelques unes, rien de méchant on pourra se check ça en vocal vous devriez avoir besoin de le faire juste 1 seule fois.
