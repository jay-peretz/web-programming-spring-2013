<?php
$to = 'jperetz@santarosa.edu';
$subject = "I need a gardener";
$message = $_POST['customername'] . 'needs a gardener';
$headers = 'From: jperetz@santarosa.edu' . "\r\n" .
    'Reply-To: jperetz@santarosa.edu' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);
?>