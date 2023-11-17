<?php
    // Recipient Email
    $recipientEmail = "asenjialvin@gmail.com";

    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $emailBody = "From: $name ($email)\n\nSubject: $subject\n\nMessage:\n$message";

    if (mail($recipientEmail, $subject, $emailBody)) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Unable to send email."]);
    }
