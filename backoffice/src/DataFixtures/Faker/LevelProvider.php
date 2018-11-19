<?php

namespace App\DataFixtures\Faker;

class LevelProvider extends \Faker\Provider\Base {

  protected static $level = [
      'Facile',
      'Moyen',
      'Difficile',
  ];
  
    public static function levelList()
  {
    return static::randomElement(static::$level);
  }

}