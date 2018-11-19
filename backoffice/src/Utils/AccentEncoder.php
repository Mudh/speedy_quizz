<?php

namespace App\Utils;

class AccentEncoder {

    public function getQuestionsAccents($questionsStepOne, $questionsStepTwo, $questionsStepThree) {

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

        return true;
    }
}