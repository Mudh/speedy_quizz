<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\Home;
use Faker\ORM\Doctrine\Populator;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $em)
    {
        $generator = Factory::create('fr_FR');

        $populator = new Populator($generator, $em);

        $homeText = $generator->paragraph(305);

        $home = new Home();
        $home->setPresentation($homeText);
        $em->persist($home);

        $populator->addEntity('App\Entity\Theme', 6, array(
            'title' => function() use ($generator) { 
                return $generator->unique()->jobTitle(); 
            },

            'description' => function() use ($generator) { 
                return $generator->paragraph(); 
            }
        ));

        $populator->execute();

        $em->flush();
    }
}
