<?php

namespace App\DataFixtures\Faker;

class ThemeProvider extends \Faker\Provider\Base {

    protected static $themes = [
        'Espace',
        'Maroc',
        'Grammaire anglaise',
        'Films d\'horreur',
        'Programmation',
        'Les fleurs',
        'Les animaux bizzares',
        'Photoshop',
        'Ecosse'
    ];

    public static function themeList()
  {
    return static::randomElement(static::$themes);
  }

}