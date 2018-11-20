<<<<<<< Updated upstream
<?php

namespace App\Utils;

class AccentEncoder {

    public function getHomeAccent($themes, $text='') {

        if (!empty($text)) {
            $text->setPresentation(htmlentities($text->getPresentation()));
        }

        foreach ($themes as $theme) {
            $theme->setTitle(htmlentities($theme->getTitle()));
            $theme->setDescription(htmlentities($theme->getDescription()));
        }

        return true;
    }

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

    public function getUserAccents($user) {

        $user->setUsername(htmlentities($user->getUsername()));
        $user->setFirstname(htmlentities($user->getFirstname()));
        $user->setLastname(htmlentities($user->getLastname()));
        $user->setDescription(htmlentities($user->getDescription()));

        foreach ($user->getQuestion() as $question) {
            $question->setTitle(htmlentities($question->getTitle()));
        }

        return true;
    }
=======
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
>>>>>>> Stashed changes
}