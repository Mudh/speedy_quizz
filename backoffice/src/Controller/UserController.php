<?php

namespace App\Controller;

use App\Utils\AccentEncoder;
use App\Repository\UserRepository;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

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

    /**
     * @Route("/login", name="login")
     */
    public function login(AuthenticationUtils $authenticationUtils, UserRepository $userRepo, Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $content = $request->getContent();

        $loginData = json_decode($content);
        
        $password = $passwordEncoder->encodePassword($loginData['password']);
        $email = $loginData['email'];

        $user = $userRepo->checkUser($email, $password);

        if (empty($user)) {
            return false;
        }

        return true;
    }
}
