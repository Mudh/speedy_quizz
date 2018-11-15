<?php

namespace App\Controller;

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
     * @Route("/quizz/test", name="quizz_test_list")
     */
    public function test(QuestionRepository $questionRepo)
    {
        $questions = $questionRepo->findAll(); 

        foreach ($questions as $question) {
            $question->setTitle(htmlentities($question->getTitle()));
            
            foreach($question->getResponse() as $response) {
                $response->setResponse(htmlentities($response->getResponse()));
            }
        }

        $serializer = SerializerBuilder::create()->build();
        $jsonContent = $serializer->serialize($questions, 'json');
    
        return new Response($jsonContent);
    }
}
