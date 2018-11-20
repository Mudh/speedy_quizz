<?php

namespace App\Controller;

use App\Utils\AccentEncoder;
use App\Repository\HomeRepository;
use App\Repository\ThemeRepository;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function home(HomeRepository $homeRepo, ThemeRepository $themeRepo, AccentEncoder $accent)
    {
        $themes = $themeRepo->findLastThree ();
        $homeResult = $homeRepo->findAll();
        
        $homeText = $homeResult[0];

        $accent->getHomeAccent($themes, $homeText);

        $data = [
            'presentation' => $homeText,
            'themes' => $themes
        ];

        $serializer = SerializerBuilder::create()->build();

        $jsonContent = $serializer->serialize($data, 'json');
        
        return new Response ($jsonContent);
    }

    /**
     * @Route("/home", name="home_logued")
     */
    public function homeLogued(ThemeRepository $themeRepo, AccentEncoder $accent)
    {
        $themes = $themeRepo->findLastNine();
        
        $accent->getHomeAccent($themes,'');


        $serializer = SerializerBuilder::create()->build();

        $jsonContent = $serializer->serialize($themes, 'json');
        
        return new Response ($jsonContent);
    }
}
