<?php

namespace App\Controller;

use App\Repository\ThemeRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class QuizzController extends AbstractController
{
    /**
     * @Route("/quizz/themes", name="quizz_themes_list")
     */
    public function index(ThemeRepository $themeRepo)
    {
        $themeList = $themeRepo->findAll();
        dump($themeList);
        dd($this->json($themeList));
        
        return $this->json();
    }
}
