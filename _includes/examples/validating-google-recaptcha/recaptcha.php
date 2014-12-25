<?php
// recaptcha.php

// Register the public and private keys at https://www.google.com/recaptcha/admin
define('PUBLIC_KEY',  '...');
define('PRIVATE_KEY', '...');

// Download the PHP library
// https://developers.google.com/recaptcha/docs/php
require_once('recaptchalib.php');

// Verify the captcha
// https://developers.google.com/recaptcha/docs/verify
$resp = recaptcha_check_answer(PRIVATE_KEY,
                                $_SERVER['REMOTE_ADDR'],
                                $_POST['recaptcha_challenge_field'],
                                $_POST['recaptcha_response_field']
                            );

echo json_encode(array(
    'valid' => $resp->is_valid,
));