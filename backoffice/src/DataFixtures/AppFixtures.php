<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\Home;
use Faker\ORM\Doctrine\Populator;
use App\DataFixtures\Faker\StepProvider;
use App\DataFixtures\Faker\JokerProvider;
use App\DataFixtures\Faker\ThemeProvider;
use Doctrine\Bundle\FixturesBundle\Fixture;
use App\DataFixtures\Faker\QuestionProvider;
use App\DataFixtures\Faker\ResponseProvider;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $em)
    {
        $generator = Factory::create('fr_FR');
        $generator->addProvider(new ThemeProvider($generator));
        $generator->addProvider(new QuestionProvider($generator));
        $generator->addProvider(new ResponseProvider($generator));
        $generator->addProvider(new JokerProvider($generator));
        $generator->addProvider(new StepProvider($generator));
        

        $populator = new Populator($generator, $em);

        $homeText = $generator->paragraph(305);

        $home = new Home();
        $home->setPresentation($homeText);
        $em->persist($home);

        $populator->addEntity('App\Entity\Theme', 9, array(
            'title' => function() use ($generator) { 
                return $generator->themeList(); 
            },

            'description' => function() use ($generator) { 
                return $generator->paragraph(); 
            }
        ));

        $populator->addEntity('App\Entity\Question', 15, array(
            'title' => function() use ($generator) { 
                return $generator->questionList(); 
            },

            'points' => 2,
            'likes' => 0,
            'isValidated' => true
        ));

        $populator->addEntity('App\Entity\Response', 35, array(
            'response' => function() use ($generator) { 
                return $generator->responseList(); 
            },

            'isCorrect' => false,
        ));

        $populator->addEntity('App\Entity\Joker', 4, array(
            'name' => function() use ($generator) { 
                return $generator->jokerList(); 
            }
        ));

        $populator->addEntity('App\Entity\Step', 9, array(
            'name' => function() use ($generator) { 
                return $generator->unique()->stepList(); 
            }
        ));


        $populator->execute();

        $em->flush();
    }
}
