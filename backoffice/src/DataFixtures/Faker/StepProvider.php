<?php

namespace App\DataFixtures\Faker;

class StepProvider extends \Faker\Provider\Base {

    protected static $step = [
        'step1',
        'step2',
        'step3'

    ];

    public static function stepList()
  {
    return static::randomElement(static::$step);
  }

}