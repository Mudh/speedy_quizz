<?php

namespace App\Controller;

use App\Utils\AccentEncoder;
use App\Repository\UserRepository;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class UserController extends AbstractController
{
    /**
     * @Route("/user/{id}/profil", name="user")
     */
    public function showProfil($id, UserRepository $userRepo, AccentEncoder $accent)
    {
        $user = $userRepo->findOneById($id);

        $accent->getUserAccents($user);

        $serializer = SerializerBuilder::create()->build();

        $jsonContent = $serializer->serialize($user, 'json');

        return new Response ($jsonContent);
    }
}
