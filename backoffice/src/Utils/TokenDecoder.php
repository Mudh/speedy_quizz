<?php

namespace App\Utils;

class TokenDecoder {

    public function getEmail($token) {

        $tokenParts = explode(".", $token);
        $tokenPayload = base64_decode($tokenParts[1]);
        $jsonPayload = json_decode($tokenPayload, true);
        $userEmail = $jsonPayload['email'];

        return $userEmail;
    }
}