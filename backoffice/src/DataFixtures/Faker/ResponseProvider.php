<?php

namespace App\DataFixtures\Faker;

class ResponseProvider extends \Faker\Provider\Base {

    protected static $responses = [
        "Mercure", // id 1 
        "Venus", // id 1 
        "Saturne", // id 1 
        "Uranus", // id 1 
        "Jupiter", // id 2
        "Terre", // id 2
        "Mars", // id 2
        "Neptune", // id 2
        "9", // id 3
        "8", // id 3
        "voielactee", // id 4 
        "Galaxie du Tournesol", // id 5 
        "Galaxie du Moulinet", // id 5 
        "Galaxie du Lézard", // id 5 
        "Galaxie du Têtard", // id 5 
        "120,3 millions de KM ", // id 6
        "149,6 millions de KM", // id 6
        "lune", // id 7
        "62", // id 8
        "3", // id 8
        "1", // id 8
        "280", // id8
        "Tellurique", // id 9
        "Gazeuse", // id 9
        "jupiter", // id 10
        "Vrai", // id 11
        "Faux", // id 11
        "Oui", // id 12
        "Non", // id 12
        "299 792 458 m/s", // id 13
        "1552 m/s", // id 13
        "333 524 m/s", // id 13
        "4 255 125 223 m/s", // id 13
        "1969", // id 14 
        "einstein", // id 15
    ];

    public static function responseList()
  {
    return static::randomElement(static::$responses);
  }


}