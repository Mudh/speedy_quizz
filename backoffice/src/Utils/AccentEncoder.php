<?php

namespace App\Utils;

class AccentEncoder {

    public function getHomeAccent($themes, $text='') {

        if (!empty($text)) {
            $text->setPresentation(htmlspecialchars($text->getPresentation()));
        }

        foreach ($themes as $theme) {
            $theme->setTitle(htmlspecialchars($theme->getTitle()));
            $theme->setDescription(htmlspecialchars($theme->getDescription()));
        }

        return true;
    }

    public function getQuestionsAccents($questionsStepOne, $questionsStepTwo, $questionsStepThree) {

        foreach ($questionsStepOne as $question) {
            $question->setTitle(htmlspecialchars($question->getTitle()));
        
            foreach($question->getResponse() as $response) {
                $response->setResponse(htmlspecialchars($response->getResponse()));
            }
        }

        foreach ($questionsStepTwo as $question) {
            $question->setTitle(htmlspecialchars($question->getTitle()));

            foreach($question->getResponse() as $response) {

                $response->setResponse(htmlspecialchars($response->getResponse()));
            }
        }

        foreach ($questionsStepThree as $question) {
            $question->setTitle(htmlspecialchars($question->getTitle()));

            foreach($question->getResponse() as $response) {
                $response->setResponse(htmlspecialchars($response->getResponse()));
            }
        }

        return true;
    }

    public function getUserAccents($user) {

        $user->setUsername(htmlspecialchars($user->getUsername()));
        $user->setFirstname(htmlspecialchars($user->getFirstname()));
        $user->setLastname(htmlspecialchars($user->getLastname()));
        $user->setDescription(htmlspecialchars($user->getDescription()));

        foreach ($user->getQuestion() as $question) {
            $question->setTitle(htmlspecialchars($question->getTitle()));
        }

        return true;
    }

}