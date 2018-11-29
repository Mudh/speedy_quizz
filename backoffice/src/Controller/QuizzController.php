<?php

namespace App\Controller;

use App\Utils\TokenDecoder;
use App\Utils\AccentEncoder;
use App\Repository\UserRepository;
use App\Repository\CoeffRepository;
use App\Repository\ThemeRepository;
use JMS\Serializer\SerializerBuilder;
use App\Repository\QuestionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\Session;
use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTDecodedEvent;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;

class QuizzController extends AbstractController
{
    /**
     * @Route("/quizz/themes", name="quizz_themes_list")
     */
    public function index(ThemeRepository $themeRepo)
    {
        $themeList = $themeRepo->findAll();
    
        return $this->json($themeList);
    }

    /**
     * @Route("/quizz", name="quizz")
     */
    public function getQuestions(EntityManagerInterface $em, QuestionRepository $questionRepo, CoeffRepository $coeffRepo, AccentEncoder $accent, Request $request, TokenDecoder $tokenDecoder, UserRepository $userRepo)
    {
    
        $token = $request->headers->get('Authorization'); // We get the token from the header
        $content = $request->getContent(); // We get post data
        
        $quizzData = json_decode($content, true); 
        $level = $quizzData['level'];
        $theme = $quizzData['theme'];

        $userEmail = $tokenDecoder->getEmail($token); // We use our custom service to get the user email (extracted from the token)
        $user = $userRepo->findOneByEmail($userEmail);  //  We fetch datas from the current User
        $nbGames = $user->getNbGames();

        if($nbGames <= 0) { // We check if the user has enought credits to play
            return new Response('Plus de partie');
        }

        $nbGames--; // We update number of games
        $user->setNbGames($nbGames);
        $em->flush();

        $coeff = $coeffRepo->findByLevelName($level); // We search the good points coeff    
        $questionsStepOne = $questionRepo->findFiveQuestionsStepOne($theme); // 5 questions for step 1
        $questionsStepTwo = $questionRepo->findFiveQuestionsStepTwo($theme); // 5 questions for step 2
        $questionsStepThree = $questionRepo->findFiveQuestionsStepThree($theme); // 5 questions for step 3

        $accent->getQuestionsAccents($questionsStepOne, $questionsStepTwo, $questionsStepThree); // We use our service to encode correctly specials characters 
        
        $serializer = SerializerBuilder::create()->build();
        $data = [
            'questionsList' => [
                'step1' => $questionsStepOne,
                'step2' => $questionsStepTwo,
                'step3' => $questionsStepThree
            ],
            'coefficient' => $coeff,
        ];

        $jsonContent = $serializer->serialize($data, 'json');
       
        return new Response($jsonContent);
    }

    /**
     * @Route("/quizz/joker/update", name="quizz_joker_update")
     */
    public function jokerUpdate() {
        
    }
}
