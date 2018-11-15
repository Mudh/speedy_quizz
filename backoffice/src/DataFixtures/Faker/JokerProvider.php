<?php

namespace App\DataFixtures\Faker;

class JokerProvider extends \Faker\Provider\Base {

    protected static $jokers = [
        'Skip',
        'Revive',
        'Timer+',
        '50/50'
    ];

    public static function jokerList()
  {
    return static::randomElement(static::$jokers);
  }

}