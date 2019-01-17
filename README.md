# Speedy Quizz Project

## Introduction

Speedy quizz is a course project made by 4 students of O'clock school during 1 month. It's a solo quiz game in 3 steps. The player can stop at any time and win its current gained points. Obviously, the more the player goes the more he gain points ! But ONE bad answer and the player loose everything !

This project is based on symfony and React/Redux stacks.

## Subscribe

![subscribe](subscribe.gif)

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
