<?php

namespace App\Controller;

use App\Entity\User;
use App\Utils\AccentEncoder;
use App\Repository\RoleRepository;
use App\Repository\UserRepository;
use JMS\Serializer\SerializerBuilder;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Validator\Validator\ValidatorInterface;
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
    public function login(UserRepository $userRepo, Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        $content = $request->getContent();

        $loginData = json_decode($content, true);
        
        $password = $loginData['auth']['password'];
        $email = $loginData['auth']['email'];

        $user = $userRepo->findOneByEmail($email);

        if(!$user) {
            return new Response ('false');
        }

        $userPassword = $user->getPassword();
        $encryptedPass = $passwordEncoder->isPasswordValid($user, $password);

        if ($encryptedPass == false) {
            return new Response ('false');
        }

        //$token = base64_encode(random_bytes(64));
    
        return new Response ('true');
    }

    /**
     * @Route("/register", name="register")
     */
    public function register(EntityManagerInterface $em, UserRepository $userRepo,  RoleRepository $roleRepo, Request $request, UserPasswordEncoderInterface $passwordEncoder, ValidatorInterface $validator)
    {
        $content = $request->getContent(); // We get json file

        
        $userData = json_decode($content, true); // We decode json file and transforms it into array
    
        $roleUserByDefaut = $roleRepo->findOneByCoderole('ROLE_USER'); // We get ROLE_USER
    
        $username = $userData['username']; 
        $password = $userData['password'];
        $firstname = $userData['firstname'];
        $lastname = $userData['lastname'];
        $email = $userData['email'];
        
        $user = new User(); 

        $encryptedPass = $passwordEncoder->encodePassword($user, $password);
        $user->setUsername($username)
            ->setPassword($encryptedPass)
            ->setFirstname($firstname)
            ->setLastname($lastname)
            ->setEmail($email)
            ->setNbGames(2)
            ->setNbPoints(0)
            ->setIsActive(1)
            ->setRole($roleUserByDefaut)
            ->setCreatedAt(new \Datetime())
            ->setUpdatedTime(new \Datetime());

        $usernameError = $validator->validateProperty($user, 'username'); // We match data with our asserts in User entity
        $passwordError = $validator->validateProperty($user, 'password');
        $firstnameError = $validator->validateProperty($user, 'firstname');
        $lastnameError = $validator->validateProperty($user, 'lastname');
        $emailError = $validator->validateProperty($user, 'email');

        $formErrors = []; 

        if(count($usernameError) > 0) { // We stock errors in an array
            $formErrors['usernameError'] = htmlentities($usernameError[0]->getMessage());
        }
        if(count($passwordError) > 0) {
            $formErrors['passwordError'] = htmlentities($passwordError[0]->getMessage());
        }
        if(count($firstnameError) > 0) {
            $formErrors['passwordError'] = htmlentities($firstnameError[0]->getMessage());
        }       
        if(count($lastnameError) > 0) {
            $formErrors['lastnameError'] = htmlentities($lastnameError[0]->getMessage());
        }
        if(count($emailError) > 0) {
            $formErrors['emailError'] = htmlentities($emailError[0]->getMessage());
        }

        if($formErrors) { // If errors, we send its in a json file

            $serializer = SerializerBuilder::create()->build();

            $jsonContent = $serializer->serialize($formErrors, 'json');
        
            return new Response($jsonContent);
        }
         
        //else, we push datas in databse for the new registration

        $em->persist($user);
        $em->flush();

        return new JsonResponse([
            'success_message' => 'Thank you for registering'
        ]);
    }

    /**
     * @Route("/registertest", name="register_test")
     */
    public function registerTest() {
        return $this->render('home/index.html.twig');
    }
}
