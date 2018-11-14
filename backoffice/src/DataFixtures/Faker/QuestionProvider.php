<?php

namespace App\DataFixtures\Faker;

class QuestionProvider extends \Faker\Provider\Base {

    protected static $questions = [
        "Quelle est la planète la plus proche du soleil ?", // Mercure 2eme etape
        "Quelle est la plus éloignée du soleil ?", // Neptune 2eme etape
        "Combien il y a de planètes dans le système solaire ?", // 8 1ere etape
        "Dans quelle galaxie se trouve la Terre ?", // Voie Lactée 3eme etape voielactee
        "Parmis les propositions suivantes, laquelle n'est PAS une galaxie ?", // Truc pourri à inventer 2eme etape
        "A quelle distance de la Terre se situe le Soleil ? ", //149,6 millions de KM 1ere etape
        "Quel est le satellite de la terre ?", // Lune 3eme etape
        "De combien de satellites est entourée Saturne ?", //Au moins 62 2eme etape
        "Quelle est la nature de la planète Vénus ?", // Tellurique 1ere étape
        "Quelle est la plus grosse planète du système solaire ?", //Jupiter //3eme etape
        "La constellation du Bouvier existe-t-elle ?", // Oui 1ere étape
        "Krypton est-elle une planète de notre système solaire ?", //Non 1ere etape
        "A quoi correspond la vitesse de la lumière en m/s ?", //299 792 458 m / s 2eme etape
        "En quelle année Neil Amstrong a-t-il marché sur la Lune ?", //1969 3eme etape
        "Quelle grand scientifique a introduit la théorie de la relativité ?", //Einstein 3eme étape
    ];

    public static function questionList()
  {
    return static::randomElement(static::$questions);
  }

}