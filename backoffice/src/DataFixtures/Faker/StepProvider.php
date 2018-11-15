<?php

namespace App\DataFixtures\Faker;

class StepProvider extends \Faker\Provider\Base {

    protected static $step = [
        'step1Easy',
        'step2Easy',
        'step3Easy',
        'step1Medium',
        'step2Medium',
        'step3Medium',
        'step1Hard',
        'step2Hard',
        'step3Hard'

    ];

    public static function stepList()
  {
    return static::randomElement(static::$step);
  }

}