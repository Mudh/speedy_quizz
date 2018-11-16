<?php

namespace App\Controller;

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
    public function getQuestions(QuestionRepository $questionRepo, CoeffRepository $coeffRepo)
    {
        $level = 'Difficile';
        $theme = 'Espace';

        $coeff = $coeffRepo->findByLevelName($level);
        
        $questionsStepOne = $questionRepo->FindFiveQuestionsStepOne($theme);
        $questionsStepTwo = $questionRepo->FindFiveQuestionsStepTwo($theme);
        $questionsStepThree = $questionRepo->FindFiveQuestionsStepThree($theme);

        foreach ($questionsStepOne as $question) {
            $question->setTitle(htmlentities($question->getTitle()));
        
            foreach($question->getResponse() as $response) {
                $response->setResponse(htmlentities($response->getResponse()));
            }
        }

        foreach ($questionsStepTwo as $question) {
            $question->setTitle(htmlentities($question->getTitle()));

            foreach($question->getResponse() as $response) {

                $response->setResponse(htmlentities($response->getResponse()));
            }
        }

        foreach ($questionsStepThree as $question) {
            $question->setTitle(htmlentities($question->getTitle()));

            foreach($question->getResponse() as $response) {
                $response->setResponse(htmlentities($response->getResponse()));
            }
        }
        
       
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
