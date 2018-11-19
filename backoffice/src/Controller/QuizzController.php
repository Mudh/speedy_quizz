<?php

namespace App\Controller;

use App\Utils\AccentEncoder;
use App\Repository\CoeffRepository;
use App\Repository\ThemeRepository;
use JMS\Serializer\SerializerBuilder;
use App\Repository\QuestionRepository;
use Symfony\Component\HttpFoundation\Response;
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
    
        return $this->json($themeList);
    }

    /**
     * @Route("/quizz/test/", name="quizz_test_list")
     */
    public function getQuestions(QuestionRepository $questionRepo, CoeffRepository $coeffRepo, AccentEncoder $accent)
    {
        $level = 'Difficile';
        $theme = 'Espace';

        $coeff = $coeffRepo->findByLevelName($level); // We search the good points coeff
        
        $questionsStepOne = $questionRepo->FindFiveQuestionsStepOne($theme); // 5 questions for step 1
        $questionsStepTwo = $questionRepo->FindFiveQuestionsStepTwo($theme); // 5 questions for step 2
        $questionsStepThree = $questionRepo->FindFiveQuestionsStepThree($theme); // 5 questions for step 3

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
}
