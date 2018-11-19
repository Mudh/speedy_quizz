<?php

namespace App\Controller;

use App\Repository\HomeRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(HomeRepository $homeRepo)
    {
        $homeText = $homeRepo->findAll();
        return $this->json($homeText);
    }
}
