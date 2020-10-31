<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$postData = json_decode(file_get_contents('php://input'), true);
$name = $postData['name'];
$tel = $postData['tel'];


$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'zayavka_sayt@mail.ru';
$mail->Password = '1786107tyu';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('zayavka_sayt@mail.ru');
$mail->addAddress('digital@studio-elements.ru');
$mail->isHTML(false);

$mail->Subject = 'Заявка с сайта';

$mail->Body = $htmlBody;
$mail->AltBody = $name. 'оставил заявку. Номер телефона - ' .$tel;

if (!$mail->send()) {
    echo 'Возникла ошибка, попробуйте еще раз';
} else {
    echo 'Спасибо, '. $name . '! Мы скоро свяжемся с Вами!';
}
