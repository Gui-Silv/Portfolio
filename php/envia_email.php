<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require $_SERVER['DOCUMENT_ROOT'] . '/mail/Exception.php';
require $_SERVER['DOCUMENT_ROOT'] . '/mail/PHPMailer.php';
require $_SERVER['DOCUMENT_ROOT'] . '/mail/SMTP.php';


$user = $_POST['Nome'];
$email_user = $_POST['Email'];
$mensagem_user = $_POST['Message'];


$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.office365.com';                   // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'guilhermesilva.1427@outlook.com';                 // SMTP username
    $mail->Password   = '26967748Lg';                    // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;          // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 587;                                   // TCP port to connect to

    // Recipients
    $mail->setFrom('guilhermesilva.1427@outlook.com', 'Guilherme Silva');
    $mail->addAddress('guilhermesilva.1427@outlook.com', 'Guilherme Silva');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contato - Portfolio';
    $mail->Body = $mensagem_user . "<br>" . $user . "<br>" . $email_user;

    $mail->send();

    echo '<script>alert("Mensagem enviada com sucesso!")</script>;';
    echo '<script>window.location.replace("https://guilhermesilv-portfolio.000webhostapp.com/");</script>;';

} catch (Exception $e) {
    echo "Mensagem não pôde ser enviada. Erro: {$mail->ErrorInfo}";
}

?>

